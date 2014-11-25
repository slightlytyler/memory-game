function viewportUnitFallback() {
  $('.ie8 .memory-game').height($(window).height());
  $('.ie8 .memory-game').width($(window).width());
}

window.viewportUnitsBuggyfill.init({
  refreshDebounceWait: 50,
  hacks: window.viewportUnitsBuggyfillHacks
});