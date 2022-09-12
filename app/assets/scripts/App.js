import '../styles/styles.css'

if (module.hot) {
  module.hot.accept()
}

var btnContainer = document.getElementById("link-row");
var btns = btnContainer.getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    (document.querySelector('.menuActive')) ? document.querySelector('.menuActive').classList.remove('menuActive') : '';
    this.classList.add('menuActive');
  });
} 