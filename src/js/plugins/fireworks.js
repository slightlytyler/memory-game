$(window).load(function(){
  var _flash_installed = ((typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") || (window.ActiveXObject && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false));

  if(_flash_installed) {
    $('html').addClass('flash');
    $('.fireworks__fallback').remove();

    _V_.options.flash.params = {
         wmode: "transparent"
     };

    var videoPlayer = videojs('fireworks-vid', { wmode: "transparent" }, function() {
      this.on('ended', function() {
        this.pause();
        this.currentTime(0);
      });

      this.on('pause', function() {
        if($('.memory-game').hasClass('winner') ) {
          this.play();
        }
      });

      this.on('play', function() {
        if(! $('.memory-game').hasClass('winner') ) {
          this.pause();
          this.currentTime(0);
        }
      });

      this.load();
    });

    $('.fireworks').show();
  } else {
    $('html').addClass('no-flash');
    $('.fireworks').remove();
  }
});