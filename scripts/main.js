function scrollToDescription() {
  scrollTo(0, 675);
 }

var element = document.getElementById('b1');
    var rect = element.getBoundingClientRect();
    var position = rect.top;

function scrollToHistory() {
  scrollTo(0, position);
}
