$(document).ready(function(){
   $('#type').on('input',function(){
       var type=$('#type').val();
       if(type=="AdvancedLevel"){
           if($('#aastream').hasClass('showstream')){
             $('#aastream').removeClass('showstream');
             $('#aastream').addClass('stream');
           }
           $('#astream').removeClass('stream');
           $('#astream').addClass('showstream');
       }
       else if(type=="AfterAdvancedLevel"){
         if($('#astream').hasClass('showstream')){
           $('#astream').removeClass('showstream');
           $('#astream').addClass('stream');
         }
         $('#aastream').removeClass('stream');
         $('#aastream').addClass('showstream');
       }
       else{
         //
       }
   });
   $('#addcourseform').on('submit',function(event){
        event.preventDefault();
        var elements=document.getElementById('addcourseform').elements;
        var values=[];
        for(var i=0;i<elements.length;i++){
           values.push(elements[i].value);
        }
        $.ajax({
           type:"POST",
           url:'/addcourse_implement',
           data:{
             cname:values[2],
             teacher:values[3],
             context:values[4],
             stream:values[5],
             type:values[6]
           },
           success: function(data){
             window.load('/courseView');
           }

        });
   });
});
