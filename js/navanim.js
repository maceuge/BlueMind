
// $(document).ready(function () {
//   $(window).scroll(function(){
//     if (window.pageYOffset >= 100) {
//         $('.navbar').addClass("bluelight-grad");
//         $('.navbar').css("box-shadow","0px 1px 8px #555555");
//     } else {
//         $('.navbar').removeClass("bluelight-grad");
//         $('.navbar').css("box-shadow","0px 0px 0px");
//     }
//   });
// });


$(document).ready(function () {
    $(window).scroll(function(){
        if (window.pageYOffset >= 100) {
            $('.navbar').css("background", "linear-gradient(to right, #0fb8ad 0%, #1fc8db 51%, #039be5 75%)");
            $('.navbar').css("transition", "all 1s ease-in-out");
            $('.navbar').css("box-shadow", "0px 1px 8px #555555");
        } else {
            $('.navbar').css("background", "transparent");
            $('.navbar').css("transition", "all 1s ease-in-out");
            $('.navbar').css("box-shadow", "0px 0px 0px");
        }
    });
});
    
