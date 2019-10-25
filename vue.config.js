module.exports = {
    publicPath: './',
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                ws: true,
                changeOrigin: true,
            },

        }
    },
    // 打包时不生成.map文件 避免看到源码
    productionSourceMap: false
};