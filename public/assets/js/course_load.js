
$(document).ready(function(){
  $('#feaimg').on('input',function(){
      var preview = document.getElementById('tempimage') ;//selects the query named img
      var file    = document.querySelector('input[type=file]').files[0]; //sames as here
      var reader  = new FileReader();

      reader.onloadend = function () {
          preview.src = reader.result;
      }

      if (file) {
          reader.readAsDataURL(file); //reads the data as a URL
      } else {
          preview.src = "";
      }
 });
 $('#submit').on('click',function(event){
   event.preventDefault();
   var fileElement= $('#feaimg')[0];
   var file=fileElement.files[0];//sames as here
   const formData= new FormData();
   formData.set('pho',file);
   console.log(file);
   $.ajax({
     method:"POST",
     url:"/photoUpload",
     cache: false,
     contentType: false,
     processData: false,
     data:formData,
     success:function(data){
       location.reload(true);
     },
     error:function(err){
          alert(err);
     }
   });
 });
});
