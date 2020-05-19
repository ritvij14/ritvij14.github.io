$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').css('background', 'black');
    } else {
        $('.navbar').css('background', 'transparent');
    }
    $('.navbar .navbar-nav a').on('click', function() { 
        $('.navbar .navbar-nav').find('li.active').removeClass('active'); 
        $(this).parent().addClass('active');
        console.log("Hello");
    });
});