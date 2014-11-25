function orientation() {
  var windowWidth = $(window).outerWidth();
  var windowHeight = $(window).outerHeight();

  var orientation;

  $('html').removeClass('landscape');
  $('html').removeClass('portrait');

  if( windowWidth >= windowHeight) {
    orientation = 'landscape';
  } else {
    orientation = 'portrait';
  }

  $('html').addClass(orientation);
}

$(function() {
  orientation();
});

$( window ).resize(function() {
  orientation();
});

$(window).on("orientationchange",function(){
  orientation();
});