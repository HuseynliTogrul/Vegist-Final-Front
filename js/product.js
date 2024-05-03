let img = document.querySelector(".mainImg img");

img.onmousemove = function(e) {
  e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
  e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
}
