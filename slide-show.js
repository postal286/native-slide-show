function ready() {

  function imgCicle() {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    images[currentSlide].style.display = 'block';
  }

  function nextImage() {
    currentSlide += 1;
    if (currentSlide >= images.length) { currentSlide = 0; }
    imgCicle();
  }

  function prevImage() {
    currentSlide -= 1;
    if (currentSlide < 0) { currentSlide = images.length - 1; }
    imgCicle();
  }

  var images = document.getElementsByClassName('slide-show__image'),
      prevButton = document.getElementById('slide-show__prev-button'),
      nextButton = document.getElementById('slide-show__next-button'),
      currentSlide = 0;
  prevButton.onclick = prevImage;
  nextButton.onclick = nextImage;
  imgCicle();
}

document.addEventListener("DOMContentLoaded", ready);
