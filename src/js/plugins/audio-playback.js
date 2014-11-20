function audioPlayback() {
  $('#volume').bind( "click", function() {

    $(this).toggleClass('muted');
  });
}