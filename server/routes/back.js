let express = require('express')

let router = express.Router()

router.get('/back/home/tag',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
  // 2.允许客户端使用哪些请求方法来访问我
  res.header("Access-Control-Allow-Methods", "get,post");
    res.render("ok")
})

module.exports = router