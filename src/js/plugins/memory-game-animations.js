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

  if($('html').hasClass('no-flash')) {
    $('.fireworks__fallback').html('<img src="images/fireworks.gif" />');
    $('.fireworks__fallback').addClass('play');

    window.setTimeout(function(){
      $('.fireworks__fallback').fadeIn(400);

      window.setTimeout(function(){
          $('.fireworks__fallback').fadeOut(300);
          $('.memory-game .outro').fadeIn(1300);

          window.setTimeout(function(){
              $('.trophies').addClass('zoom');
          }, 400);
      }, 4500);
    }, 400);
  } else if($('html').hasClass('flash')) {
    window.setTimeout(function(){
      $('.memory-game .outro').fadeIn(800);
    }, 1000);

    window.setTimeout(function(){
        $('.trophies').addClass('zoom');
    }, 2400);
  }

  if (typeof _callback === "undefined" || _callback === null) {
    // console.log('No callback on pageLoad, proceeding');
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

    $('.memory-game').removeClass('winner');

    if($('html').hasClass('flash')) {
      videojs('fireworks-vid').pause();
      videojs('fireworks-vid').currentTime(0);
    }

    $('.fireworks__fallback').emtpy();
    $('.fireworks__fallback').removeClass('play');

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

    window.setTimeout(function(){
        cardsContainer.hide().fadeIn(400);
        trophyCase.hide().fadeIn(400);
        $('.trophies').removeClass('zoom');
        intro.show().fadeIn(400);
    }, 400);
}