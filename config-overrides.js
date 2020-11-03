const http = require('http');
// const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = {
  // webpack: function (config, env) {
  //   config = rewireReactHotLoader(config, env);
  //   return config;
  // },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      proxy = {
        '/api': {
          target: 'http://plro-api2.jacc.co',
          agent: new http.Agent({ keepAlive: true }),
          changeOrigin: true,
        },
      };
      return configFunction(proxy, allowedHost);
    };
  },
};
