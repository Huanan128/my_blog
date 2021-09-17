let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/blog',{useNewUrlParser:true,useUnifiedTopology: true})
let Schema = mongoose.Schema;

let tagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tag", tagSchema);