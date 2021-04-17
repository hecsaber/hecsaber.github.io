const slideMenu = document.querySelector('.menu');
const videoDiv = document.querySelector('.video');

const hambMenu = document.querySelector('.hamb');

hambMenu.addEventListener('click', slideIn);

function slideIn(e) {
  e.preventDefault();
  slideMenu.classList.toggle('active');
  videoDiv.classList.toggle('passive');
}

const services = ['szolgáltatásaink', 'marketing', 'coaching'];

const slideElement = document.querySelector('.slide');

console.log(slideElement.firstElementChild)

slideElement.querySelector('.slide-content').textContent = services[2];

console.log(services.findIndex((val) => val === 'marketing'))
