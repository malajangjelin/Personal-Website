$(window).on("scroll touchmove", function() {

    // Change .home navbar css styles
    if ($(document).scrollTop() >= $("#home").position().top) {
        $('body').css('background-color','#222');
        $('#mainNav').css('background-color','rgba(255,255,255,0.5');
        $('#mainNav li a').css('color','black');
        $('#nav-1 a').css('color','black');
        $('#mainNav li a').css('font-weight','400');
        $('#mainNav li a').css('text-transform','none');
        $('#nav-1 a').css('font-weight','700');
        $('#nav-1 a').css('text-transform','uppercase');
        $('a.navbar-brand.page-scroll').css('color','black');
    }
    // Change .education background/navbar css styles
    if ($(document).scrollTop() >= $("#education").position().top) {
        console.log("Education escapes me!");
        $('body').css('background-color','#cbdfeb');
        $('#mainNav').css('background-color','#cbdfeb');
        $('#mainNav li a').css('color','#46808e');
        $('#nav-2 a').css('color','#46808e');
        $('#mainNav li a').css('font-weight','400');
        $('#mainNav li a').css('text-transform','none');
        $('#nav-2 a').css('font-weight','700');
        $('#nav-2 a').css('text-transform','uppercase');
        $('a.navbar-brand.page-scroll').css('color','#46808e');
    }
    // Change .experience background/navbar css styles
    if($(document).scrollTop() >= $("#experience").position().top) {
        console.log("Experience escapes me!");
        $('body').css('background-color','#525564');
        $('#mainNav').css('background-color','#525564');
        $('#mainNav li a').css('color','#d4d5d9');
        $('#nav-3 a').css('color','#d4d5d9');
        $('#mainNav li a').css('font-weight','400');
        $('#mainNav li a').css('text-transform','none');
        $('#nav-3 a').css('font-weight','700');
        $('#nav-3 a').css('text-transform','uppercase');
        $('a.navbar-brand.page-scroll').css('color','#d4d5d9');
    }
    // Change .skillset background/navbar css styles
    if($(document).scrollTop() >= $("#skillset").position().top) {
        console.log("Skillset escapes me!");
        $('body').css('background-color','#beb9b5');
        $('#mainNav').css('background-color','#beb9b5');
        $('#mainNav li a').css('color','#4a4740');
        $('#nav-4 a').css('color','#4a4740');
        $('#mainNav li a').css('font-weight','400');
        $('#mainNav li a').css('text-transform','none');
        $('#nav-4 a').css('font-weight','700');
        $('#nav-4 a').css('text-transform','uppercase');
        $('a.navbar-brand.page-scroll').css('color','#4a4740');
    }
    // Change .location background/navbar css styles
    if($(document).scrollTop() >= $("#location").position().top) {
        console.log("Location escapes me!");
        $('body').css('background-color','#40a040');
        $('#mainNav').css('background-color','#40a040');
        $('#mainNav li a').css('color','#f8cfc3');
        $('#nav-5 a').css('color','#f8cfc3');
        $('#mainNav li a').css('font-weight','400');
        $('#mainNav li a').css('text-transform','none');
        $('#nav-5 a').css('font-weight','700');
        $('#nav-5 a').css('text-transform','uppercase');
        $('a.navbar-brand.page-scroll').css('color','#f8cfc3');
    }
    // Change .contact background/navbar css styles
    if($(document).scrollTop() >= $("#contact").position().top) {
        console.log("Contact escapes me!");
        $('body').css('background-color','#758390');
        $('#mainNav').css('background-color','#758390');
        $('#mainNav li a').css('color','white');
        $('#nav-6 a').css('color','white');
        $('#mainNav li a').css('font-weight','400');
        $('#mainNav li a').css('text-transform','none');
        $('#nav-6 a').css('font-weight','700');
        $('#nav-6 a').css('text-transform','uppercase');
        $('a.navbar-brand.page-scroll').css('color','white');
    }

});

$(document).ready(function () {

    window.sr = ScrollReveal();
    sr.reveal('#iconOne', {reset:true, duration: 500, delay: 300, scale: 1.5, mobile: true});
    sr.reveal('#iconTwo', {reset:true, duration: 500, delay: 450, scale: 1.5, mobile: true});
    sr.reveal('#iconThree', {reset:true, duration: 500, delay: 600, scale: 1.5, mobile: true});
    sr.reveal('#iconFour', {reset:true, duration: 500, delay: 750, scale: 1.5, mobile: true});
    sr.reveal('#iconFive', {reset:true, duration: 500, delay: 900, scale: 1.5, mobile: true});
    sr.reveal('#iconSix', {reset:true, duration: 500, delay: 1050, scale: 1.5, mobile: true});
    sr.reveal('.newyork', {reset:true, duration: 500, delay: 700, scale: 0.9, mobile: true});
    sr.reveal('.school', {reset:true, duration: 500, delay: 400, scale: 0.9, mobile: true});
    sr.reveal('.work', {reset:true, duration: 500, delay: 400, scale: 0.9, mobile: true});
    sr.reveal('.btn-circle', {reset:true, duration: 500, delay: 400, scale: 2, mobile: true});

})


$(document).ready(function () {

    $('.navbar-collapse a').on('click',function(){
        $('.navbar-collapse').collapse('hide');
    });

})




