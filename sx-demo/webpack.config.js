const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // ソースマップの有効化
  if (env.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
