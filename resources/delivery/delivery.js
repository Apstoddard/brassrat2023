$(document).ready(function () {
  $("#delivery_button").click(function () {
    $(window).scrollTop($("#delivery_section").offset().top - 64);
  });
});