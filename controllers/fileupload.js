const bodyParser= require('body-parser');
const Institute =require("../models/institute");
const multer= require('multer');
const methodOverride=require('method-override');
const morgan=require('morgan');
const path=require('path');
var mongoose= require('mongoose');


//set storage engine
var urlencodedParser=bodyParser.urlencoded({extended:false});
mongoose.connect('mongodb://username1:username1@ds131932.mlab.com:31932/highedu',{useNewUrlParser: true});
const storage= multer.diskStorage({
  destination:'./public/assets/images/uploads/',
  filename:function(req,file,cb){
    cb(null,file.fieldname+'-'+ Date.now()+path.extname(file.originalname));
  }
});
const upload=multer({
  storage:storage
}).single('feaimg');

module.exports=function(app){
  app.post('/photoUpload',function(req,res){
      upload(req,res,function(err){
         if(err){
           res.render('courseView',{mssg:err});
         }
         else{
           console.log(req.file);
           res.send('test');
         }
      });

  });

};
