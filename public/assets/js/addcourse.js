$(document).ready(function(){
 $("#addcourse").click(function(event){
   alert('yay');
   event.preventDefault();
   $("#form").toggleClass("Displayed");
 });
 $("#addcourseform").on('submit',function(event){
   event.preventDefault();
    var item=$('form input');
    var courses={course:item.val()};
    alert(courses);
    $.ajax({
      type:'POST',
      url:'/addcourse_implement',
      data:courses,
      success: function(data){
        location.reload();
      }
    });
 });
});
