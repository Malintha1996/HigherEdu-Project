const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create Schema and model

const CourseSchema=new Schema({
    cname:String,
    cid:String,
    teacher:String,
    context:String,
    stream:String,
    type:String,
    featuredPhoto:String
});
const InstituteSchema=new Schema({
    name:String,
    iid:String,
    description:String,
    courses:[CourseSchema]

});

const Institute=mongoose.model('institute',InstituteSchema);

module.exports=Institute;
