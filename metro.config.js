const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

// This forces Metro to use the CommonJS version of tslib which doesn't have the __extends error
config.resolver.extraNodeModules = {
  tslib: require.resolve('tslib'),
};

module.exports = config;