var menu_open = false;

$(window).scroll(function(){
    var sticky = $('#sub_header'), scroll = $(window).scrollTop();
    if (scroll >= 64) sticky.addClass('sub_header_fixed');
    else sticky.removeClass('sub_header_fixed');
});


document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if($( img ).offset().top < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
  $(document).ready(function () {
    lazyload();
  });
});

$(document).ready(function () {
  $("#menu_button").click(function () {
    $("#header_container").slideToggle();
    $("#menu_button").toggleClass("is-active");
    $("#menu_button").toggleClass("is-fixed");
  });
});


