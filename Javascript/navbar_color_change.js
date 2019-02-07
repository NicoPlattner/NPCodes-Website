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
});