const categoryList = document.querySelector(".CategoryList");
const CategoryHeader = document.querySelector(".CategoryHeader");

const searchIcon = document.querySelector(".searchIcon");
const searchSection = document.querySelector(".searchSection");
const closeSearch = document.querySelector("#close-search");

const productIcon = document.querySelector(".productIcon i")

const menubarIcon = document.querySelector(".menubarIcon i")
const menuMobile = document.querySelector(".menu-mobile")
const menuHeaderIcon = document.querySelector(".menu-header i")



window.onkeydown = function (event) {
  if (event.keyCode == 27) {
    searchSection.style.display = "none";
  }
};

CategoryHeader.addEventListener("click", () => {
  categoryList.classList.toggle("DisplayNone");
})

// Search

searchIcon.addEventListener("click", () => {
  searchSection.style.display = "block";
  document.body.style.overflow = 'hidden';
})

closeSearch.addEventListener('click', () => {
  searchSection.style.display = 'none';
  document.body.style.overflow = 'auto';
})

// MenuBar

menubarIcon.addEventListener("click", () => {
  if (menubarIcon.style.display === "none") {
    menuMobile.style.display = "none";
  } else {
    menuMobile.style.display = "block";
  }
})

menuHeaderIcon.addEventListener("click", () => {
  menuMobile.style.display = "none";
})

// Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});