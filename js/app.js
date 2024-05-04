const categoryList = document.querySelector(".CategoryList");
const CategoryHeader = document.querySelector(".CategoryHeader");

const searchIcon = document.querySelector(".searchIcon");
const searchSection = document.querySelector(".searchSection");

const searchButton = document.querySelector(".search button");


window.onkeydown = function (event) {
    if (event.keyCode == 27) {
        searchSection.style.display = "none";
    }
};

CategoryHeader.addEventListener("click", () => {
    categoryList.classList.toggle("DisplayNone");
})

searchIcon.addEventListener("click", () => {
    if (searchSection.style.display === 'block') {
        searchSection.style.display = 'none';
    } else {
        searchSection.style.display = 'block';
    }
})

searchButton.addEventListener("click", () => {
    searchSection.style.display = "none";
})




// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName(".slide");
//   let point = document.getElementsByClassName("slidePoint p");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < point.length; i++) {
//     point[i].className = point[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   point[slideIndex-1].className += " active";
// }