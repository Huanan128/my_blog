let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/blog',{useNewUrlParser:true,useUnifiedTopology: true})
let Schema = mongoose.Schema;

let tagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_time: {
    type: Date,
    // 注意：这里不要写Date.now(),因为会即可调用
    // 这里直接给了一个方法：Date.now
    // 当你去new Model 的时候，如果你没有传递created_time，则mongoose就会调用defalut指定的Date.now方法，使用其返回值作为默认值
    default: Date.now,
  },
  last_modified_time:{
      type:Date,
      default:Date.now
  },
  avatar:{
      type:String,
      default:'/public/img/avatar-default.png'
  },
  bio:{
      type:String,
      default:''
  },
  gender:{
      type:Number,
      //-1：保密；0：女；1：男
      enum:[-1,0,1],
      default:-1
  },
  birthday:{
      type:Date
  },
  status:{
      type:String,
      enum:[0,1,2],
      default:0
  }

});

module.exports = mongoose.model("Tag", tagSchema);