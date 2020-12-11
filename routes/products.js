var express = require('express');
var router = express.Router();
var courses=require("../models/products");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let products= await courses.find();
  console.log(products);
  res.render('products/productslist',{tit:"Courses offers in Academy of Excellence",products});
});
router.get('/add', async function(req, res, next) {
  res.render('products/add');
});
//store data is db
router.post("/add", async function (req, res, next) {
  let product1 = new courses(req.body);
  await product1.save();
  res.redirect("/products");
});
router.get("/delete/:id", async function (req, res, next) {
  let Product = await courses.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});
router.get("/edit/:id", async function (req, res, next) {
  let course = await courses.findById(req.params.id);
  res.render("products/edit",{course})
});
router.post("/edit/:id", async function (req, res, next) {
  let course = await courses.findById(req.params.id);
  course.cname=req.body.cname;
  course.cid=req.body.cid;
  course.cd=req.body.cd;
  course.cf=req.body.cf;
  await course.save();
  res.redirect("/products");
});

module.exports = router;
