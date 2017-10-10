const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig/* , configType */) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  const config = storybookBaseConfig;
  config.resolve.alias = {
    react$: path.resolve(__dirname, '../', 'node_modules', 'react')
  };
  // Return the altered config
  return config;
};
