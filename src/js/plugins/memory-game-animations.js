function memoryGameIntro() {
  window.setTimeout(function(){
      $('.memory-game .intro.main').hide().fadeIn(400)
  }, 200);

  window.setTimeout(function(){
      $('.memory-game .intro.main').show().fadeOut(400)
  }, 3200);

  window.setTimeout(function(){
      $('.memory-game .game').hide().fadeIn(400);
  }, 3600);
}

function memoryGameOutro() {
  $('.memory-game .game .intro').show().fadeOut(400);

  window.setTimeout(function(){
      $('.memory-game .outro').hide().fadeIn(400);
      $('.fireworks').hide().fadeIn(400);
  }, 400);

  window.setTimeout(function(){
      $('.fireworks').show().fadeOut(400);
  }, 2500);
}

function memoryGameReset() {
  $('.memory-game .game .intro').hide();

  $('.memory-game .outro').show();
}