const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    }
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'development' ? 'baidu.com' : 'baidu.com',
        pathRewrite: {
          '^/api': ''
        },
        secure: false,
        changeOrigin: true
      }
    }
  }
};
