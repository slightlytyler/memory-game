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
            $('ul.cards').randomizeList();

            $('ul.cards li').bind( "click", function() {

              $(this).addClass('flipped');
              checkMatch();
            });

            function checkMatch() {
                var allCards = $('ul.cards li');
                var flippedCards = $('ul.cards li.flipped:not(.matched)');

                if(flippedCards.size() >= 2){
                    var cardOne = $(flippedCards[0]);
                    var cardTwo = $(flippedCards[1]);

                    allCards.addClass('locked');

                    if(cardOne.data('card-type') == cardTwo.data('card-type')) {
                        window.setTimeout(function(){
                            flippedCards.addClass('matched');

                            allCards.removeClass('locked');
                        }, 700);

                        window.setTimeout(function(){
                            flippedCards.remove();

                            if(allCards.size() <= 2) {
                                isWinner()
                            }
                        }, 1100);
                    } else {
                         window.setTimeout(function(){
                            flippedCards.removeClass('flipped');

                            allCards.removeClass('locked');
                        }, 700);
                    }
                }
            }

            function isWinner() {
                alert('winner');
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