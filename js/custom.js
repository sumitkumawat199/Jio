$(document).ready(function () {
  // Modal Open
  $(".account").click(function () {
    $(".login-popup").fadeIn();
    $(".login-popup-overlay").fadeIn();
  });
  $(".popup-close").click(function () {
    $(".login-popup").fadeOut();
    $(".login-popup-overlay").fadeOut();
  });
  // Menu
  $(".menu-icon").click(function () {
    $(".mobile-menu").toggle("slide");
    $("body").css("overflow", "hidden");
    $("body").addClass();
  });
  $(".scroll-menu").click(function () {
    $(".mobile-drop-menu").toggle("slide");
  });
  $(".scroll-menu").click(function () {
    $(".scroll-drop-menu").toggle("slide, down");
  });
  $(".jiofiber-menu").click(function () {
    $(".jiofiber-drop-menu").toggle("slide, down");
  });
  $(".shop-menu").click(function () {
    $(".shop-drop-menu").toggle("slide, down");
  });
  $(".business-menu").click(function () {
    $(".business-drop-menu").toggle("slide, down");
  });
  $(".support-menu").click(function () {
    $(".support-drop-menu").toggle("slide, down");
  });

  $(".search").click(function () {
    $(".search-hover").fadeIn(500);
    $("body").addClass("hidden");
    $(".overlay").fadeIn(500);
    $(".quick-links").slideDown(1000);
  });

  $(".search-hover .close, .overlay").click(function () {
    $(".search-hover, .overlay").fadeOut(300);
    $("body").removeClass("hidden");
  });
  $(".input-two input")
    .parent()
    .click(function () {
      var submenu = $(this).children(".quick-links");
      if ($(submenu).is(":hidden")) {
      } else {
        $(submenu).slideUp(1000);
      }
    });
  $(".menu-icon").click(function () {
    $(".header-contact").slideToggle("slow");
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
      $(".header").addClass("fixed-header");
      $(".header").addClass("visible-title");
    } else {
      $(".header").removeClass("fixed-header");
      $(".header").removeClass("visible-title");
    }
  });
});
