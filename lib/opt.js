module.exports = function opt(opts, name, defaultValue){
  return opts && opts[name]!==undefined ? opts[name] : defaultValue;
};
