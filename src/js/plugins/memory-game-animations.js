function memoryGameIntro() {
  window.setTimeout(function(){
      $('.memory-game .intro.main').show().fadeOut(400)
  }, 2100);

  window.setTimeout(function(){
      $('.memory-game .game').hide().fadeIn(400);
      $('.memory-game .bottom-bar .playback-controls').hide().fadeIn(400);
  }, 2500);
}

function memoryGameOutro() {
  $('.memory-game .game .intro').show().fadeOut(400);

  $('.memory-game .outro').hide().fadeIn(400);
}

function memoryGameReset() {
  $('.memory-game .game .intro').hide()

  $('.memory-game .outro').show()
}