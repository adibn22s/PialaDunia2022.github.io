let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let carousel = document.getElementsByClassName('carousel');
  let demo = document.getElementsByClassName('demo');
  let judul = document.getElementById('judul');
  if (n > carousel.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = carousel.length;
  }
  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = 'none';
  }
  for (i = 0; i < demo.length; i++) {
    demo[i].className = demo[i].className.replace(' active', '');
  }
  carousel[slideIndex - 1].style.display = 'block';
  demo[slideIndex - 1].className += ' active';
  judul.innerHTML = demo[slideIndex - 1].alt;
}
