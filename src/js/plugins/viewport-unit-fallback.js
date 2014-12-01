function getIOSVersion(ua) {
  var ua = ua || navigator.userAgent;
  var match = parseFloat(
  ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
  .replace('undefined', '3_2').replace('_', '.').replace('_', '')
  ) || false;
  return match;
}

$(function() {
    var iosVersion = getIOSVersion();

    if(iosVersion && iosVersion < 8) {
      $('html').addClass('viewport-fallback');
    }
});

var getIOSWindowHeight = function() {
    // Get zoom level of mobile Safari
    // Note, that such zoom detection might not work correctly in other browsers
    // We use width, instead of height, because there are no vertical toolbars :)
    var zoomLevel = document.documentElement.clientWidth / window.innerWidth;

    // window.innerHeight returns height of the visible area. 
    // We multiply it by zoom and get out real height.
    return window.innerHeight * zoomLevel;
};

// You can also get height of the toolbars that are currently displayed
var getHeightOfIOSToolbars = function() {
    var tH = (window.orientation === 0 ? screen.height : screen.width) -  getIOSWindowHeight();
    return tH > 1 ? tH : 0;
};

function viewportUnitFallback() {
  $('.ie8 .memory-game').height($(window).height());
  $('.ie8 .memory-game').width($(window).width());

  $('.viewport-fallback .memory-game, .viewport-fallback .fireworks').css({height: (getIOSVersion() ? $(window).height() : $(window).height()), width: $(window).width()});
}