const card = document.querySelector('.card');
const container = document.querySelector('.container');

// moving animation event
container.addEventListener('mousemove', (e) => {
  letxAxis = window.innerWidth / 2 - e.pageX;
});
