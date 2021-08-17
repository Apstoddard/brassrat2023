$(document).ready(function () {
    $("#yellow_button").click(function () {
      $(window).scrollTop($("#yellow_gold_section").offset().top - 64);
    });
    $("#white_button").click(function () {
      $(window).scrollTop($("#white_gold_section").offset().top - 64);
    });
    $("#rose_button").click(function () {
      $(window).scrollTop($("#rose_gold_section").offset().top - 64);
    });
    $("#silver_button").click(function () {
        $(window).scrollTop($("#silver_section").offset().top - 64);
    });
    $("#ultrium_button").click(function () {
        $(window).scrollTop($("#ultrium_section").offset().top - 64);
      });
  });



