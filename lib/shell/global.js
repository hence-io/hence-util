var shell = require('./index');
for (var cmd in shell)
  global[cmd] = shell[cmd];
