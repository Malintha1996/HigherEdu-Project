const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create Schema and model

const CourseSchema=new Schema({
    name:String,
    teacher:String,
    type:String
});
const InstituteSchema=new Schema({
    name:String,
    description:String,
    courses:[CourseSchema]

});

const Institute=mongoose.model('institute',InstituteSchema);

module.exports=Institute;
