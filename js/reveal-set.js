/**
 * Created by Web Developer on 12/8/2017.
 */

sr.reveal('.img-photo');
sr.reveal('#allbymi');
sr.reveal('.study');
sr.reveal('.box', {duration: 300}, 20);
sr.reveal('.invest', {duration: 500}, 50);
sr.reveal('.footer-items', {duration: 800}, 50);



    $('.study').on('mouseover', function () {
         $(this).addClass('animated rubberBand');
    }).on('mouseout', function () {
         $(this).removeClass('animated rubberBand');
    });

    $('.invest').on('mouseover', function () {
        $(this).addClass('animated tada');
    }).on('mouseout', function () {
        $(this).removeClass('animated tada');
    });

    $('.social').on('mouseover', function () {
        $(this).addClass('animated jello');
    }).on('mouseout', function () {
        $(this).removeClass('animated jello');
    });