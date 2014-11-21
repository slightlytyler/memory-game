$(window).load(function(){
  viewportUnitFallback();

  memoryGameIntro();
  $('.game').memoryGame();
  ie8Fixes();
});