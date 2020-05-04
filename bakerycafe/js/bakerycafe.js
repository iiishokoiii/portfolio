$(function () {
  // toggle-menu
  $("#menu-btn").click(function () {
    $("#nav").slideToggle();
    $(this).toggleClass("active");
  });
  // menu layout, header layout
  $(Window).scroll(function () {
    var h = window.innerHeight ? window.innerHeight : $(window).height();
    var scroll = $(this).scrollTop();
    if (scroll > h) {
      $(header).addClass("mini");
      $("#nav").addClass("mini");
      $("#menu-btn").addClass("mini");
    } else {
      $(header).removeClass("mini");
      $("#nav").removeClass("mini");
      $("#menu-btn").removeClass("mini");
    }
  });
  $(".menu-tab").click(function () {
    var i = $(".menu-tab").index(this);
    var col = new Array("bg-col1", "bg-col2", "bg-col3");
    var scrl = $(this).children(".menu-tab__txt").offset().top;
    var scrlofst = $("header").height();
    $("#menu-content .inner").removeClass("active");
    $("#menu-content .inner").eq(i).addClass("active");
    $(".menu-tab").removeClass("active");
    $(".menu-tab").eq(i).addClass("active");
    $("#menu-content").removeClass("bg-col1 bg-col2 bg-col3");
    $("#menu-content").addClass(col[i]);
    $("html, body").animate({ scrollTop: scrl - scrlofst }, 400);
  });
});
