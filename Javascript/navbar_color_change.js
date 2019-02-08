$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#navbar').removeClass('transparent')
            $('#navbar').addClass("nontransparent")
            $('#navbar img').addClass('transparent')
        }
        if ($(this).scrollTop() < 400) {
            $('#navbar').removeClass('nontransparent')
            $('#navbar').addClass("transparent")
            $('#navbar img').removeClass('transparent')
        }
    });
});

$(document).ready(function () {
    $(".box").hover(function () {
        $(this).children("video")[0].play();
    }, function () {
        var el = $(this).children("video")[0];
        el.pause();
        el.currentTime = 0;
    });

    // when a <a> tag that starts with a # sign is clicked
    $('a[href^="#"]').on('click',function(e) {
        //disable default jump
        e.preventDefault();

        // make the anker tag a jquery object
        var target = this.hash;
        var $target = $(target);

        // scroll and dont show hash
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 800,'swing');
    });


});