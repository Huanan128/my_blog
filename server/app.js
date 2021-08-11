// 引包
var express = require('express')

// 2.创建你的服务器应用程序
// 也就是原来的http.createServer
var app = express()

// 3.当服务器收到get请求/的时候，执行回调处理函数
// 得到路径，一个一个判断，以前的代码很丑
app.get('/', function (re1, res) {
    res.send('hello express')
})

// 在Express中开放资源就是一个API的事
// 公开指定目录
// 只要这样做了，你就可以直接通过/public/xx的方式访问public目录中的所有资源了
app.use('/public/',express.static('./public/'))
// 之前使用的模板引擎在Express中也只是一个API的事

// 4.相当于server.listen
app.listen(3011, function () {
    console.log('app is running at port 3000.')
})