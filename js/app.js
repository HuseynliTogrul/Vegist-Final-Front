"use strict";

const categoryList = document.querySelector(".CategoryList");
const CategoryHeader = document.querySelector(".CategoryHeader");

const searchIcon = document.querySelector(".searchIcon");
const searchSection = document.querySelector(".searchSection");
const closeSearch = document.querySelector("#close-search");

const productIcon = document.querySelector(".productIcon i")

const menubarIcon = document.querySelector(".menubarIcon i")
const menuMobile = document.querySelector(".menu-mobile")
const menuHeaderIcon = document.querySelector(".menu-header i")


const category = document.querySelectorAll('.category');
const categories = document.querySelector('.categories');

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");



// Category

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

window.onkeydown = function (event) {
  if (event.keyCode == 27) {
    searchSection.style.display = "none";
  }
};

// MenuBar

menubarIcon.addEventListener("click", () => {
  if (menubarIcon.style.display === "none") {
    menuMobile.style.display = "none";
  } else {
    menuMobile.style.display = "block";
    document.body.style.overflow = 'hidden';
  }
})

menuHeaderIcon.addEventListener("click", () => {
  menuMobile.style.display = "none";
  document.body.style.overflow = 'auto';
})


//MenuSlider

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});


// Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});


// categorySlider

let index = 0;

rightBtn.addEventListener("click", () => {
  if (index === category.length - 1) {
    index = 0;
  } else {
    index++;
  }

  categories.style.transform = `translateX(-${index * 200}px)`;
});

leftBtn.addEventListener("click", () => {
  if (index === 0) {
    index = category.length - 1;
  } else {
    index--;
  }

  categories.style.transform = `translateX(-${index * 200}px)`;
});