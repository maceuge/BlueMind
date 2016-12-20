
$(document).ready(function () {
  $(window).scroll(function(){
    if (window.pageYOffset >= 100) {
        $('.navbar').addClass("bluelight");
        $('.navbar').css("box-shadow","0px 1px 8px #555555");
    } else {
        $('.navbar').removeClass("bluelight");
        $('.navbar').css("box-shadow","0px 0px 0px");
    }
  });
});
    
