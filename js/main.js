$(document).ready(function(){
  // Variables
  var $root = $('html, body');
  
  // initialize Animate On Scroll
  AOS.init();

  $('.res-nav-button').on('click', function() {
    $('.res-nav-items').slideToggle('slow');
  });
  if($('.slider-text-title').height() > $('.heart-icon').height())
  {
    $('.heart-icon').height($('.slider-text-title').height());
  } else
  {
    $('.slider-text-title').height($('.heart-icon').height());
  }
  // Slowing Scroll Speed on Anchor Click
  $("a[href^='#']").click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);

    return false;
});
});
