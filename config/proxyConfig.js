/**
 * Created by Administrator on 2018/10/31.
 */
module.exports = {
  proxyList: {
        '/': {
            target: 'localhost:8080/',
            // target: 'http://luoshanhu.glyurong.com:8080',
            // target: 'http://iiigodzilla.free.idcfengye.com',
            secure: true,  
            changeOrigin: true,//需要rewrite重写的,
            pathRewrite: {
                '^/': '' //这个不能加 一加就出错
            }
        }
    }
}