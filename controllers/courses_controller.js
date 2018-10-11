var mongoose= require('mongoose');
var bodyParser= require('body-parser');
const Institute =require("../models/institute");
const multer= require('multer');
const methodOverride=require('method-override');
const morgan=require('morgan');
const path=require('path');


//connect to the database

var urlencodedParser=bodyParser.urlencoded({extended:false});
mongoose.connect('mongodb://username1:username1@ds131932.mlab.com:31932/highedu',{useNewUrlParser: true});
/*var ins=new Institute({
   name:'Sakya',
   iid:"ins1sakya",
   description:'here is the description',
   courses:[{
     cname:"Advanced Level Chemistry",
     cid:"c1",
     teacher:"Prasanna Baddewithana",
     context:"AdvancedLevel",
     stream:"Science",
     type:"Mass",
     featuredPhoto:'assets/icons/photo.svg'
   }]
});
ins.save();
  /*
 ins.save().then(function(){
   Institute.findOne({name:'Sakya'}).then(function(record){
      assert(record.courses.length===1);
   });
 });
*/
module.exports=function(app){

    app.get('/institute',function(req,res){
        //get data from mongodb and pass it to view
        Institute.findOne({name:'Sakya'}).then(function(record){
           res.render('institute',{courses:record.courses});
        });

    });
    app.get('/courseView',function(req,res){
         Institute.findOne({name:'Sakya'}).then(function(record){
             res.render('courseView',{courses:record.courses});
         });

    });
    app.get('/institute_account',function(req,res){
      Institute.findOne({name:'Sakya'}).then(function(record){
         res.render('institute_account',{courses:record.courses});
      });
    });
    app.get('/addCourse',function(req,res){
      Institute.findOne({name:'Sakya'}).then(function(record){
         res.render('addCourse',{courses:record.courses});
      });
    });
    app.post('/addcourse_implement',urlencodedParser,function(req,res){
      Institute.findOneAndUpdate({name:'Sakya'},{$push:{courses:req.body}},function(err,data){
            if(err) throw err;
            res.json(data);
      });
    });
    app.post('/photoUpload',urlencodedParser,function(req,res){
        console.log(req.data);
        if(!file){
          return res.status(400).send("No file was uploaded");
        }
        else{
          Institute.findOne({name:'sakya' ,'courses.cid':'c1', 'courses.featuredPhoto':file.name},function(err,record){
            if(err){
              console.log(err);
            }
            if(record==null){
              var dir="assets/images/uploads"+file.name;
              Institute.findOne({name:'sakya' ,'courses.cid':'c1'},function(err,doc){
                  doc.courses.featuredPhoto=dir;
                  doc.visits.$inc();
                  doc.save(function(err){
                     if(err){
                       console.log(err);
                     }
                     else{
                       file.mv("./public/assets/images/uploads",function(err){
                         if(err){
                           console.log(err);
                         }
                         else{
                            res.send("success");
                         }
                       });
                     }
                  });
              });
            }
        });
    }
  });

};
