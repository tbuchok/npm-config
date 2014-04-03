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