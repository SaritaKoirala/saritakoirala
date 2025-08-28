/*===== Resize Navbar on Scroll =====*/
const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  window.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};

/*===== Nav Toggler =====*/
const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// closing menu when link is clicked
const navLinks = document.querySelectorAll(".nav-link");
function linkAction() {
  navMenu.classList.remove("active");
}
navLinks.forEach(n => n.addEventListener("click", linkAction));

/*===== Scroll Section Active Link =====*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(`.links a[href*='${sectionId}']`);
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== Skills Animation =====*/
const skills_wrap = document.querySelector(".about-skills");
const skills_bar = document.querySelectorAll(".progress-line");

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  return window.innerHeight >= rect.top + el.offsetHeight;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bar.forEach(skill => {
    skill.style.width = skill.dataset.progress;
  });
}
window.addEventListener("scroll", skillsEffect);

/*===== Portfolio Item Filter =====*/
const FilterContainer = document.querySelector(".portfolio-filter");
const filterBtns = FilterContainer ? FilterContainer.children : [];
const PortfolioItems = document.querySelectorAll(".portfolio-item");

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    FilterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    PortfolioItems.forEach(item => {
      if (filterValue === "all" || filterValue === item.getAttribute("data-category")) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  });
}

/*===== Lightbox Slideshow for All Section Images =====*/
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const lightboxText = lightbox.querySelector(".caption-text");
const lightboxCounter = lightbox.querySelector(".caption-counter");

// Collect ALL images inside sections
const allSectionImages = document.querySelectorAll("section img");
let slideIndex = 0;

// Open lightbox on image click
allSectionImages.forEach((img, i) => {
  img.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
    toggleLightbox();
  });
});

function showSlide(index) {
  if (index >= allSectionImages.length) slideIndex = 0;
  if (index < 0) slideIndex = allSectionImages.length - 1;

  const currentImg = allSectionImages[slideIndex];
  lightboxImg.src = currentImg.src;
  lightboxText.innerHTML = currentImg.alt || "Image";
  lightboxCounter.innerHTML = (slideIndex + 1) + " of " + allSectionImages.length;
}

function nextItem() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevItem() {
  slideIndex--;
  showSlide(slideIndex);
}

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

// Close lightbox
lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});

// Keyboard support
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "ArrowRight") nextItem();
  if (e.key === "ArrowLeft") prevItem();
  if (e.key === "Escape") toggleLightbox();
});
