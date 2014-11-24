function memoryGameIntro() {
  window.setTimeout(function(){
      $('.memory-game .intro.main').hide().fadeIn(400);
  }, 200);

  window.setTimeout(function(){
      $('.memory-game .intro.main').show().fadeOut(400);
  }, 3200);

  window.setTimeout(function(){
      $('.memory-game .game').hide().fadeIn(400);
  }, 3600);
}

function memoryGameOutro(_callback) {
  $('.memory-game .game .intro').show().fadeOut(400);

  window.setTimeout(function(){
      $('.memory-game .outro').fadeIn(400);
  }, 400);

  if (typeof _callback === "undefined" || _callback === null) {
    console.log('No callback on pageLoad, proceeding');
  } else {
    _callback(); 
  }
}

function memoryGameReset() {
    var cardsContainer = $('.memory-game ul.cards');
    var allCards = $('.memory-game ul.cards li');
    var trophyCase = $('.memory-game ul.trophies');
    var intro = $('.memory-game .game .intro');
    var outro = $('.memory-game .outro');

    videojs('fireworks-vid').pause();
    videojs('fireworks-vid').currentTime(0);

    cardsContainer.fadeOut(150);
    trophyCase.fadeOut(150);
    outro.fadeOut(150);


    window.setTimeout(function(){
        trophyCase.contents().remove();
        $('ul.cards').randomizeList();
        $('.ie8 ul.cards li').removeClass('last-in-row');
        $('.ie8 ul.cards li:nth-child(4n)').addClass('last-in-row');

        allCards.removeClass('flipped');
        allCards.removeClass('matched');
    }, 150);

    $('.memory-game').removeClass('winner');

    window.setTimeout(function(){
        cardsContainer.hide().fadeIn(400);
        trophyCase.hide().fadeIn(400);
        intro.show().fadeIn(400);
    }, 400);
}