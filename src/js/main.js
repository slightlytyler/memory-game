$(window).load(function(){
  viewportUnitFallback();
  
  audioPlayback();
  
  memoryGameIntro();
  $('.game').memoryGame();
  ie8Fixes();
});