$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').css('background', 'black');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});