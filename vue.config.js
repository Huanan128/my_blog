const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        // 配置路径别名
        config.resolve.alias
            .set('@assets', resolve('src/assets'))
            .set('@api', resolve('src/api'))
            .set('@components', resolve('src/components'))
            .set('@utils',resolve('src/utils'))
            .set('@views', resolve('src/views'))
        //配置webpack解析模块时应该搜索的目录，将优先于node_modules搜索
        config.resolve.modules.add(resolve('src')).add(resolve('src/components'))
    }
}