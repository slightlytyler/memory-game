function audioPlayback() {
  $('#volume').bind( "click", function() {

    $(this).toggleClass('muted');

    if($(this).hasClass('muted')) {
      $('audio').prop("volume",0);
    } else {
      $('audio').prop("volume",.7);
    }
  });
}