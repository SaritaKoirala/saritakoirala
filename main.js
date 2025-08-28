/*===== Resize Navbar on Scroll =====*/
const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  window.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

/*===== Nav Toggler =====*/
const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
const navLinks = document.querySelectorAll(".nav-link");
function linkAction() {
  navMenu.classList.remove("active");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));

/*===== Skills Animation =====*/
const skills_wrap = document.querySelector(".about-skills");
const skills_bar = document.querySelectorAll(".progress-line");
function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  return window.innerHeight >= rect.top + el.offsetHeight;
}
function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bar.forEach((skill) => {
    skill.style.width = skill.dataset.progress;
  });
}
window.addEventListener("scroll", skillsEffect);

/*===== Portfolio Filter =====*/
const FilterContainer = document.querySelector(".portfolio-filter");
const filterBtns = FilterContainer ? FilterContainer.children : [];
const PortfolioItems = document.querySelectorAll(".portfolio-item");
const totalportfolioItem = PortfolioItems.length;
for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    FilterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    const filterValue = this.getAttribute("data-filter");
    PortfolioItems.forEach((item) => {
      if (
        filterValue === "all" ||
        filterValue === item.getAttribute("data-category")
      ) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  });
}

/*===== Lightbox =====*/
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  const lightboxText = lightbox.querySelector(".caption-text");
  const lightboxCounter = lightbox.querySelector(".caption-counter");
  let itemIndex = 0;

  PortfolioItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      itemIndex = i;
      changeItem();
      toggleLightbox();
    });
  });

  function nextItem() {
    itemIndex = (itemIndex + 1) % totalportfolioItem;
    changeItem();
  }
  function prevItem() {
    itemIndex = (itemIndex - 1 + totalportfolioItem) % totalportfolioItem;
    changeItem();
  }
  function toggleLightbox() {
    lightbox.classList.toggle("open");
  }
  function changeItem() {
    const imgSrc = PortfolioItems[itemIndex]
      .querySelector(".portfolio-img img")
      .getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML =
      PortfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalportfolioItem;
  }
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightboxClose || event.target === lightbox) {
      toggleLightbox();
    }
  });
}

/*===== Bottom Slider =====*/
const slides = document.querySelectorAll("#gallery-slider .slide");
let currentSlide = 0;
function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
}
document.querySelector(".next-btn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
document.querySelector(".prev-btn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
showSlide(currentSlide);
