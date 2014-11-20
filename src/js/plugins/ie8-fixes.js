function ie8Fixes() {
  console.log('ie8 fixes');

  // Fix the background using background-size.js
  $('.ie8 .memory-game').css({backgroundSize: "cover"});

  // No need for selectivizer, just do it manually
  $('.ie8 ul.cards li:nth-child(4n)').addClass('last-in-row');
  $('.ie8 ul.charities li:nth-child(3n)').addClass('last-in-row');

}