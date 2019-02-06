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