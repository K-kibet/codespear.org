$(document).ready(function() {
  //Initial function if on mobile
  if($(window).width() < 768) {
    $("#nav-title").text("Java Documentation: Variables & Data Types");
  }
  //Function when resizing desktop windows
  $(window).resize(function(){ 
    var winW = $(window).width();
    if(winW < 768) {
    $("#nav-title").text("Java Documentation: Variables & Data Types");
    }
    else {
      $("#nav-title").text("Index");
    }
  });
});