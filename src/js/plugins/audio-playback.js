function audioPlayback() {
  if(getIOSVersion()) {
    $('#volume').toggleClass('muted')

    $('#volume').bind( "click", function() {

    $(this).toggleClass('muted');

      if($(this).hasClass('muted')) {
        $('audio')[0].pause();
      } else {
        $('audio')[0].play();
      }
    });
  } else {
    $('#volume').bind( "click", function() {

      $(this).toggleClass('muted');

      if($(this).hasClass('muted')) {
        $('audio').prop("volume",0);
      } else {
        $('audio').prop("volume",.7);
      }
    });
  }
}



$(window).load(function(){
  $('audio').prop("volume",.7);
  $('audio')[0].play();
  audioPlayback();
});