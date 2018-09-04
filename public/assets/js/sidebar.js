
<!--Menu toggle script-->
$(document).ready(function(){
 $("#menu-toggle").click(function(event){
   event.preventDefault();
   $("#wrapper").toggleClass("menuDisplayed");
 });
 $("#menu-toggle2").click(function(event){
   event.preventDefault();
   $("#wrapper").toggleClass("menuDisplayed");
 });
});
