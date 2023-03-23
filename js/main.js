/*global $*/

$(function () {

    'use strict';

    var navbar =  $('.navbar');


    $(window).scroll(function () {

        if ($(window).scrollTop() >= navbar.height()) {

            navbar.addClass('opcity-navbar');

        }else {

            navbar.removeClass('opcity-navbar');
        }
    });
// deal with tabs

    $('.tab-section ul li').click(function () {

        // add class selected

        $(this).addClass('selected').siblings().removeClass('selected');

        // hide all div

        $('.tab-section .tab-content > div').hide(300);

        $('.' + $(this).data('class')).show(300);

    });
    
});