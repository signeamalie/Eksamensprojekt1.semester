/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('success: javascript from js/js.js running!')

const buttons = document.querySelectorAll('.togglebutton');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active')); 
    this.classList.add('active'); 
  });
});

let currentslide = 0;
const slides = document.querySelectorAll('.slide');
const totalproducts = 6; 
let productclickcount = 0;

document.getElementById('prev').addEventListener('click', () => {
  changeslide(-1);
});

document.getElementById('next').addEventListener('click', () => {
  changeslide(1);
});

document.getElementById('chooseproduct').addEventListener('click', () => {
  if (productclickcount < totalproducts) {
    console.log('produkt valgt: ' + (currentslide + 1));
    productclickcount++;
  } else {
    console.log('du har nået grænsen for produktvalg.');
  }
});

function changeslide(step) {
  slides[currentslide].classList.remove('active');
  currentslide = (currentslide + step + slides.length) % slides.length;
  slides[currentslide].classList.add('active');
}

function navigateto(url) {
  window.location.href = url;
}

function togglemenu() {
  const navlinks = document.querySelector('.navlinks');
  navlinks.classList.toggle('active');
}