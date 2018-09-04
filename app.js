var  express=require('express');
var  coursesController=require('./controllers/courses_controller');
var app= express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//listen to port
app.listen(3000);

//fire controllers
coursesController(app);
