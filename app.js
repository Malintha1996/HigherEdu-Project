const express=require('express');
const  coursesController=require('./controllers/courses_controller');
const fileupload=require('./controllers/fileupload');
const  methodOverride=require('method-override');
const bodyParser= require('body-parser');
const morgan=require('morgan');
const multer= require('multer');
const path=require('path');
const app= express();

//set up template engine
app.set('view engine','ejs');

//static files

app.use(express.static('./public'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//set Storage engine


//listen to port
app.listen(3000);

//fire controllers
coursesController(app);
//fileupload(app);
