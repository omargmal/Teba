/*global $, jQuery, alert, console*/

$(function () {
    
    "use strict";
    
        //Scroll Up
    
    var scrollBottom = $(".scroll-up i");
    
        // On Window Scroling
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 600) {
            
            scrollBottom.fadeIn();
            
        } else {
            
            scrollBottom.fadeOut();
        }
        
    });
        
        // Scroll Top
    
    scrollBottom.click(function () {
        
        $("html, body").animate({scrollTop: 0 }, 1000);
    
    });
                       
                       
        // Add Class Active
    
    $(".navbar ul li").click(function () {
    
        $(this).addClass("active").siblings().removeClass("active");
        
    });
    
        //  Navbar Scroll Top
    
    $(".navbar ul li a").click(function () {
       
        $("html, body").animate({
            
            scrollTop: $("#" + $(this).data("value")).offset().top
        
        }, 1000);
    
    });
    
    
        // Trigger Nice Scroll Plugin
    
    $("html").niceScroll({cursorcolor: "#038A01"});
    
        // Scroll To Services 
    
    $("header .arrow i").click(function () {
    
        $("html, body").animate({
            
            scrollTop: $(".serivces").offset().top
        
        }, 1000);
    
    });

});
