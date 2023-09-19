const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul')

// browser onscroll event triger
window.onscroll = function () { scrollFunction() };

// code form W3S about scrolling, for for two browsers
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const mobMenu = () => {
  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive')
  } else {
    nav.classList.add('responsive')
  }

}

backButton.addEventListener('click', getToTop)
mobButton.addEventListener('click', mobMenu)
