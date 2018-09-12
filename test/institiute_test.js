 const mocha=require('mocha');
 const assert=require('assert');
 const Institute =require("../models/institute");


 //describe tests
 describe('saving records',function(){
    //craeate tests
    it('Creates a record',function(){
     var ins=new Institute({
        name:'Sakya',
        description:'here is the description',
        courses:[{name:'Advanced Level Chemistry',teacher:'Prasanna Baddewithana',type:'mass'}]
      });
      ins.save().then(function(){
        Institute.findOne({name:'Sakya'}).then(function(record){
           assert(record.courses.length===1);
        });
      });
    });
});
