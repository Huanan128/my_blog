let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
// import axios from 'axios'//引入axios
//引入
let frontRouter = require("./routes/front");
let backRouter = require("./routes/back");

// Vue.prototype.$axios = axios;//把axios挂载到vue上

let app = express();

// 配置静态资源文件
app.use("/src/", express.static(path.join(__dirname, "./src/")));
app.use(
  "/node_modules",
  express.static(path.join(__dirname, "./node_modules/"))
);

// 拦截所有请求,设置允许跨域请求访问
app.use((req, res, next) => {
  // Content-Type就是用来告知对方我给你发送的数据内容是什么类型
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  // 允许哪些客户端访问我;
  // *代表允许所有的客户端访问我
  res.header("Access-Control-Allow-Origin", "*");
  // 2.允许客户端使用哪些请求方法来访问我
  res.header("Access-Control-Allow-Methods", "get,post");
  next();
});
// 配置body-parser(post请求体插件)，注意一定要在app.use(router)之前
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("ok");
});
// app.get("/", function (req, res) {
//   res.send("hello");
// });
// 把路由挂在到app中
app.use(frontRouter);
app.use(backRouter);
app.listen(8888, function() {
  console.log("running......");
});
