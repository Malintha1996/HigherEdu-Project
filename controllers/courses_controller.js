var mongoose= require('mongoose');
var bodyParser= require('body-parser');



//connect to the database
var urlencodedParser=bodyParser.urlencoded({extended:false});
mongoose.connect('mongodb://username1:username1@ds131932.mlab.com:31932/highedu',{useNewUrlParser: true});

var courseSchema= new mongoose.Schema({
   item: String
});
var Courses= mongoose.model('Courses',courseSchema);


module.exports=function(app){
    app.get('/institute',function(req,res){
        //get data from mongodb and pass it to view
        Courses.find({},function(err,data){
          if(err) throw err;
          res.render('institute',{courses:data});
        });

    });
    app.get('/courseView',function(req,res){
         res.render('courseView');
    });
    app.get('/institute_account',function(req,res){
      Courses.find({},function(err,data){
        if(err) throw err;
        res.render('institute_account',{courses:data});
      });
    });
    app.get('/addCourse',function(req,res){
      Courses.find({},function(err,data){
        if(err) throw err;
        res.render('addCourse',{courses:data});
      });
    });
    app.post('/addcourse_implement',urlencodedParser,function(req,res){
         
    });
};
