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
/*===== Profile-Section =====*/
.profile-section {
  margin-bottom: 40px;
  padding: 24px 16px;
  background: #f9f9f9;
  border-radius: 12px;
}
.section-title {
  margin-bottom: 18px;
  font-size: 1.3rem;
  color: #333;
}

/*===== Skills Animation =====*/
      const skills_wrap = document.querySelector(".about-skills"),
      skills_bar = document.querySelectorAll(".progress-line");
      window.addEventListener("scroll", () => {
          skillsEffect();
      })
      // every time we scroll checking, we exceeded the about-skills or not
      function checkScroll(el)
      {
          //getting the top position of about-skills relative to view port, in other words we need to get
          // amount of pixels between about-skills and the top edge of the window.
          let rect = el.getBoundingClientRect();
          // after knowing the amount of pixels between the top edge of about skills and the top edge of window
          // now we will check we exceeded the bottom edge of about skills or not
          if(window.innerHeight >= rect.top + el.offsetHeight) return true;
          return false;
      }
      function skillsEffect()
      {
          if(!checkScroll(skills_wrap)) return;
          skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));

/*===== Portfolio Item Filter main page =====*/

document.querySelectorAll('.portfolio-slider').forEach(function(slider) {
  const slideTrack = slider.querySelector('.slide-track');
  const slides = slider.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slideTrack.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  slider.querySelector('.arrow.left').onclick = () => showSlide(currentIndex - 1);
  slider.querySelector('.arrow.right').onclick = () => showSlide(currentIndex + 1);

  showSlide(0); // Show the first slide initially
});


/*===== Lightbox =====*/
const lightbox = document.querySelector(".lightbox");
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
  const imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = PortfolioItems[itemIndex].querySelector("h4").innerHTML;
  lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalportfolioItem;
}

// close lightbox
lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});






