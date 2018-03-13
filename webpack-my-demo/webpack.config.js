
// 1.将这个配置文件公开出去

module.exports = {
    // 2.入口文件，也就是说当你使用webpack运行config的时候，
    // 3.它会找到webpack.config.js，然后找到入口文件app.js
    entry:{index:"./src/js/app.js"}, 
    // 4.出口文件
    output:{
        path:__dirname,
        filename:"./dist/[name].js"
    },
    // 需要依赖的插件或者是装载器。
    module:{ 
        rules:[
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/.js$/,loader:"babel-loader",exclude:/node_modules/,query:{presets:["es2015"]}}
        ]
    }
}