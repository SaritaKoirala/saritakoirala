/* Sticky Navbar */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 20);
});

/* Nav Toggle */
const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");
navToggle.addEventListener("click", () => navMenu.classList.toggle("active"));

/* Portfolio Slider */
const sliders = document.querySelectorAll(".portfolio-slider");
sliders.forEach(slider => {
  const track = slider.querySelector(".slide-track");
  const slides = slider.querySelectorAll(".slide");
  const prevBtn = slider.querySelector(".arrow.left");
  const nextBtn = slider.querySelector(".arrow.right");
  let index = 0;

  function showSlide(i) {
    if (i < 0) i = slides.length - 1;
    if (i >= slides.length) i = 0;
    track.style.transform = `translateX(-${i * 100}%)`;
    index = i;
  }

  nextBtn.addEventListener("click", () => showSlide(index + 1));
  prevBtn.addEventListener("click", () => showSlide(index - 1));

  showSlide(0);
});
