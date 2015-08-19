var _ = require('lodash');
var spawn = require('child_process').spawn;

// Wrapper around spawn() to enable echoing output to console in real time
function spawnChild(command, args, callback) {
  var spawnOpts = {
    cwd: process.cwd,
    env: process.env,
    stdio: 'inherit'
  };

  var child = spawn(command, args, spawnOpts);

  child.on('exit', function(code) {
    callback(code);
  });

  return child;
}

function _spawn(command, args, callback) {
  if (!command)
    callback('A command must be specified');

  // Callback is defined instead of options.
  if (_.isFunction(args)) {
    callback = args;
    args = [];
  }

  return spawnChild(command, args, callback);
}
module.exports = _spawn;
