let photos = [
  "images/photo1.png",
  "images/photo2.png",
  "images/photo3.png"
];

let currentIndex = 0;

const slideImage = document.getElementById("slideImage");

function showSlide(index) {
  slideImage.style.opacity = 0;

  setTimeout(() => {
    slideImage.src = photos[index];
    slideImage.style.opacity = 1;
  }, 300);
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= photos.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = photos.length - 1;
  }
  showSlide(currentIndex);
}
