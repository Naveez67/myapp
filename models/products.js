const mongoose = require("mongoose");
var coursetSchema=mongoose.Schema({
    cname:String,
    cid:String,
    cd:String,
    cf:String,
});
const courses=mongoose.model("product",coursetSchema);
module.exports=courses;