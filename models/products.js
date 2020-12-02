const mongoose = require("mongoose");
var productSchema=mongoose.Schema({
    name:String,
    adress:String,
    class:String,
});
const product=mongoose.model("product",productSchema);
module.exports=product;