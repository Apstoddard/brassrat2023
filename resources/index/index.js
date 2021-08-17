$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
  });

$(document).ready(function () {
    $("#team_button").click(function () {
      $(window).scrollTop($("#team_section").offset().top - 64);
    });
    $("#pricing_button").click(function () {
      $(window).scrollTop($("#pricing_section").offset().top - 64);
    });
    $("#events_button").click(function () {
      $(window).scrollTop($("#events_section").offset().top - 64);
    });
    $("#faq_button").click(function () {
      $(window).scrollTop($("#faq_section").offset().top - 64);
    });
    $(".faq_question").click(function () {
      $(this).siblings(".faq_answer").slideToggle();
      $(this).siblings(".faq_more").toggleText('-', '+');
    });
    $(".faq_more").click(function () {
        $(this).siblings(".faq_answer").slideToggle();
        $(this).toggleText('-', '+');
      });
  });