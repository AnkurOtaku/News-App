// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Modify the webpack configuration as needed
      webpackConfig.module.rules.push({
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50,
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
};
