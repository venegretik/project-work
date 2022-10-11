$(document).ready(function () {
    $("a.topLink").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
     });
    
    $('.menu').click(function () {
        $('.menu-show').fadeIn(300);
    });

    $('.close-menu').click(function () {
        $('.menu-show').fadeOut(300);
    });
});