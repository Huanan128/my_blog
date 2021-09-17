let express = require("express");

let router = express.Router();
let Tag = require("../models/front/tag");
router.get("/front/home/tag/list", function(req, res) {
  Tag.find(function(err, ret) {
    if (err) {
      res.end("查询失败");
    } else {
      res.end(JSON.stringify(ret));
    }
  });
});
router.post("/front/home/tag/list", function(req, res) {
  // 1.获取表单提交的数据 req.body
  // 2.操作数据库
  //    判断改用户是否存在（用户名或者是邮箱相同都代表已存在）
  //    如果已存在，不允许使用
  //    如果不存在，注册新建用户
  // 3.发送响应
  let body = req.body;
  var data = new Tag({
    // name: body.name,
    name: "心情记录",
  });
  data.save(function(err, ret) {
    if (err) {
      console.log("保存失败");
    } else {
      console.log("保存成功");
      console.log(ret);
    }
  });
});
module.exports = router;
