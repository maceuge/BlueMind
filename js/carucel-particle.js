/**
 * Created by havyRoad on 09/01/2017.
 */

$(document).ready(function () {
     // $('.carucel-mind')[0].display('block');
    // var firstimage = $('.carucel-mind')[0];
    // console.log(firstimage);
    $('.carucel-mind1').show();

    function changeTitle() {

        if ($('.carucel-mind1')) {

            $('.carucel-mind1').hide();
            $('.carucel-mind2').show();
        }
        else if ($('.carucel-mind2')) {

            $('.carucel-mind2').hide();
            $('.carucel-mind3').show();
        }
        else if ($('.carucel-mind3')){

            $('.carucel-mind3').hide();
            $('.carucel-mind1').show();
        }
    }

    setInterval(changeTitle, 3000);
});