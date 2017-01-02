/**
 * Created by havyRoad on 02/01/2017.
 */

$(document).ready(function () {

    $('#sobremi').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: 600}, 500);
    })

    $('#cursos').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: 1200}, 500);
    })

    $('#conocim').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: 1850}, 500);
    })

    $('#desarrollo').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: 2500}, 500);
    })

    $('#portfolio').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: 3110}, 500);
    })

    $('#contacto, #libros, #links').click(function (e) {
        e.preventDefault();
        $('body').animate({scrollTop: 3600}, 500);
    })

});