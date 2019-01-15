
const DELETE_OLD_FILES = false;

exports.execute = async (args) => {
  // args => https://egodigital.github.io/vscode-powertools/api/interfaces/_contracts_.workspacecommandscriptarguments.html
  // https://code.visualstudio.com/api/references/vscode-api
  const vscode = args.require('vscode');
  const fs = require('fs');
  const path = require('path');
  const archiver = require('archiver');
  const glob = require('glob');

  let mypath = path.dirname(vscode.window.activeTextEditor.document.fileName);
  let zpath = path.resolve(mypath, '../../zip');

  fs.readdir(mypath, function(err, items) {
    if (!err) {
      let pkg = `${mypath}/package.json`
      delete require.cache[require.resolve(pkg)]
      let json = require(pkg)
      let zname = `${json.name}.${json.version}`

      let files = glob.sync(`${zpath}/${json.name}.*.zip`)
      if (files && DELETE_OLD_FILES) {
        vscode.window.showInformationMessage('overtureZip: Deleting old zip files...')
        files.forEach(file => {
          fs.unlinkSync(file)
        });
      }

      // create a file to stream archive data to.
      let output = fs.createWriteStream(`${zpath}/${zname}.zip`);
      let archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
      });

      // listen for all archive data to be written
      // 'close' event is fired only when a file descriptor is involved
      output.on('close', function() {
        vscode.window.showInformationMessage(`overtureZip: Driver files archived to ${zpath}\\${zname}.zip (${archive.pointer()} bytes)`);
      });

      // This event is fired when the data source is drained no matter what was the data source.
      // It is not part of this library but rather from the NodeJS Stream API.
      // @see: https://nodejs.org/api/stream.html#stream_event_end
      output.on('end', function() {
        vscode.window.showWarningMessage('Data has been drained');
      });

      // good practice to catch warnings (ie stat failures and other non-blocking errors)
      archive.on('warning', function(err) {
        if (err.code === 'ENOENT') {
          // log warning
          vscode.window.showErrorMessage(err.message);
        } else {
          // throw error
          throw err;
        }
      });

      // good practice to catch this error explicitly
      archive.on('error', function(err) {
        throw err;
      });

      // pipe archive data to the file
      archive.pipe(output);

      // append files from a glob pattern
      // archive.glob('*.js', {cwd: mypath});
      // archive.glob('*.json', {cwd: mypath});
      // archive.glob('*.md', {cwd: mypath});
      archive.glob('**/*.*', {cwd: mypath});  // Get everything inside the drivers folder
      // archive.directory(`${mypath}/node_modules`);

      // finalize the archive (ie we are done appending files but streams have to finish yet)
      // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
      archive.finalize();
    }
    else throw err;
  });
};
