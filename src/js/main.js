$(window).load(function(){
  viewportUnitFallback();
  
  $('audio').prop("volume",.7);
  $('audio')[0].play();
  audioPlayback();

  memoryGameIntro();
  $('.game').memoryGame();
  ie8Fixes();
});