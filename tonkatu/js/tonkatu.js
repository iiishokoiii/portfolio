<!--toggle-menu-->
$(function(){
    $("#toggle1").click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass("active");	
    })
});
<!--scroll-btn-->
$(function() {
    var topBtn = $('.pagetop');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});