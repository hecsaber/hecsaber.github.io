const slideMenu = document.querySelector('.menu');
const videoDiv = document.querySelector('.video');

const hambMenu = document.querySelector('.hamb');

hambMenu.addEventListener('click', slideIn);

function slideIn(e) {
  e.preventDefault();
  slideMenu.classList.toggle('active');
  videoDiv.classList.toggle('passive');
}
