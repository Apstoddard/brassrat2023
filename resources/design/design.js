$(document).ready(function () {
    $("#bezel_button").click(function () {
      $(window).scrollTop($("#bezel_section").offset().top - 64);
    });
    $("#shanks_button").click(function () {
      $(window).scrollTop($("#shanks_section").offset().top - 64);
    });
    $("#skylines_button").click(function () {
      $(window).scrollTop($("#skylines_section").offset().top - 64);
    });
    $("#hackers_map_button").click(function () {
      $(window).scrollTop($("#hackers_map_section").offset().top - 64);
    });

    $(".design_overlay").hover(function () {
      $( this ).fadeTo( "medium" , 1);
    }, function () {
      $( this ).fadeTo( "medium" , 0);
    });
  });