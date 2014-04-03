if (process.env.npm_config_argv == undefined)
  throw new Error('npm-config must be run inside of an `npm run` node process');

module.exports = function() {
  var key = Array.prototype.join.call(arguments, '_')
    , config = 'npm_config_' + key
    , packageConfig = 'npm_package_config_' + key
    , value = process.env[config] || process.env[packageConfig] 
  ;
  if (value === undefined)
    console.error('no default value present for', key);
  return value;
}