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

const footerSubList = document.querySelectorAll(".footerSubList")
const listHeader = document.querySelectorAll(".listHeader")

const scroll = document.querySelector(".scroll")



// Scroll

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scroll.classList.add("active")
  } else {
    scroll.classList.remove("active")
  }
})


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
    overlay.classList.add("hidden");
  } else {
    menuMobile.style.display = "block";
    document.body.style.overflow = 'hidden';
    overlay.classList.remove("hidden");
  }
})

menuHeaderIcon.addEventListener("click", () => {
  menuMobile.style.display = "none";
  document.body.style.overflow = 'auto';
  overlay.classList.add("hidden");
})

document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (key === "Escape") {
    menuMobile.style.display = "none";
    overlay.classList.add("hidden");
  }
});


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


// Footer

listHeader.forEach((list) => {
  list.addEventListener("click", () => {
    if (footerSubList.style.display === "none") {
      footerSubList.style.display = "block"
      console.log("1");
    } else {
      footerSubList.style.display = "none"
      console.log("2");
    }
  });
});


// Products filter

// const productsEl = document.querySelector(".products");

// const filteredCategories = [];

// productsEl.innerHTML = ``;

// filteredProducts.forEach((product) => {
//   const pName = product.name
//     .split(" ")
//     .map((name) => name[0].toUpperCase() + name.slice(1))
//     .join(" ");

//   productsEl.innerHTML += `<div class="productItem">
//   <div class="productImg">
//       <span>10%</span>
//       <a href="./product.html">
//           <img src="./assets/images/product1.webp" alt="product">
//           <img src="./assets/images/product1-Hover.webp" class="hover DisplayNone"
//               alt="productHover">
//       </a>
//       <div class="productIcon">
//           <i class="fa-regular fa-heart heart"></i>
//           <a href="./basket.html">
//               <i class="fa-solid fa-cart-shopping"></i>
//           </a>
//           <a href="">
//               <i class="fa-regular fa-eye"></i>
//           </a>
//       </div>
//   </div>
//   <div class="productDesc">
//       <p>Blackberry 100%organic</p>
//       <div class="rating">
//           <ul>
//               <li>
//                   <i class="fa-solid fa-star"></i>
//               </li>
//               <li>
//                   <i class="fa-solid fa-star"></i>
//               </li>
//               <li>
//                   <i class="fa-solid fa-star"></i>
//               </li>
//               <li>
//                   <i class="fa-solid fa-star"></i>
//               </li>
//               <li>
//                   <i class="fa-regular fa-star"></i>
//               </li>
//           </ul>
//       </div>
//       <div class="productPrice">
//           <div class="newPrice">€18.00</div>
//           <div class="oldPrice">€20.00</div>
//       </div>
//   </div>
// </div>`;

//   const productItems = document.querySelectorAll(".productItem");
//   productItems.forEach((productItem, index) => {
//     productItem.addEventListener("click", () => {
//       const selectedProduct = filteredProducts[index];
//       localStorage.setItem("product", JSON.stringify(selectedProduct));
//     });
//   });
// });
