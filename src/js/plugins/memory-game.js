// GCC Memory Game
// Author: Tyler Martinez
// slightlytyler.com

;(function ( $, window, document, undefined ) {

    var pluginName = "memoryGame",
      defaults = {};

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    var $this = this;

    $.extend(Plugin.prototype, {
        init: function () {
            // Randomize cards
            $('.memory-game ul.cards').randomizeList();

            $('.memory-game ul.cards li').bind( "click", function() {

              $(this).addClass('flipped');
              checkMatch();
            });

            $('#memory-game-reset').bind( "click", function() {
                memoryGameReset();
            });

            function checkMatch() {
                var unMatchedCards = $('.memory-game ul.cards li:not(.matched)');
                var flippedCards = $('.memory-game ul.cards li.flipped:not(.matched)');

                if(flippedCards.size() >= 2){
                    var cardOne = $(flippedCards[0]);
                    var cardTwo = $(flippedCards[1]);

                    unMatchedCards.addClass('locked');

                    if(cardOne.data('card-type') == cardTwo.data('card-type')) {
                        window.setTimeout(function(){
                            flippedCards.addClass('matched');

                            addTrophy(cardOne.data('card-type'))

                            unMatchedCards.removeClass('locked');
                        }, 700);

                        window.setTimeout(function(){

                            if(unMatchedCards.size() <= 2) {
                                isWinner()
                            }
                        }, 1100);
                    } else {
                         window.setTimeout(function(){
                            flippedCards.removeClass('flipped');

                            unMatchedCards.removeClass('locked');
                        }, 700);
                    }
                }
            }

            function addTrophy(type) {
                var trophyCase = $('.memory-game ul.trophies');

                trophyCase.append('<li data-card-type="' + type + '"><img class="card--front" src="images/gift-' + type + '.png" /></li>')
            }

            function isWinner() {
                memoryGameOutro();
            }

            function memoryGameReset() {
                var cardsContainer = $('.memory-game ul.cards');
                var allCards = $('.memory-game ul.cards li');
                var trophyCase = $('.memory-game ul.trophies');
                var intro = $('.memory-game .game .intro');
                var outro = $('.memory-game .outro');

                cardsContainer.fadeOut(150);
                trophyCase.fadeOut(150);
                outro.fadeOut(150);


                window.setTimeout(function(){
                    trophyCase.contents().remove();
                    $('ul.cards').randomizeList();

                    allCards.removeClass('flipped');
                    allCards.removeClass('matched');
                }, 150);

                window.setTimeout(function(){
                    cardsContainer.hide().fadeIn(400);
                    trophyCase.hide().fadeIn(400);
                    intro.show().fadeIn(400);
                }, 400);
            }
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        var args = arguments;

        if (options === undefined || typeof options === 'object') {
            return this.each(function () {

                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
                }
            });

        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            var returns;

            this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);

                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }

                if (options === 'destroy') {
                  $.data(this, 'plugin_' + pluginName, null);
                }
            });

            return returns !== undefined ? returns : this;
        }
    };

})( jQuery, window, document );