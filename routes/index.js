const { render } = require('ejs');
var express = require('express');
var router = express.Router();
const userModel=require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render("index");
});

router.get("/create", async function (req,res){
  const createduser = await userModel.create({
    username: "Mohit",
    age: 22,
    name: "Mohit"
  });
  res.send(createduser);
});

router.get("/allusers", async function(req,res){
  let allusers= await userModel.find();
  res.send(allusers);
});

router.get("/delete", async function(req,res){
  let userdeleted= await userModel.findOneAndDelete({
    username:"Mohit"
  });
  res.send(userdeleted);
});

module.exports = router;
