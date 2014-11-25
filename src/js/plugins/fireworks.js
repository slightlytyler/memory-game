$(window).load(function(){
  // Override click handler on media object;
  videojs.MediaTechController.prototype.onClick = function() {};

  _V_.options.flash.params = {
       wmode: "transparent"
   };

  var videoPlayer = videojs('fireworks-vid', { wmode: "transparent" }, function() {
    this.on('ended', function() {
      this.pause();
      this.currentTime(0);
    });
  }); 

  videoPlayer.load();
});