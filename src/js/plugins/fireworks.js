$(window).load(function(){
  // Override click handler on media object;
  videojs.MediaTechController.prototype.onClick = function() {};

  var videoPlayer = videojs('fireworks-vid'); 

  videoPlayer.load();
});