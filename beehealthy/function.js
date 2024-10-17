//Toggle Search Bar
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
}


//Mobile Menu
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
}


//Image Carousel
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = totalSlides - 1; 
    } else {
        currentIndex = index;
    }

const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(() => {
    nextSlide(); 
}, 5000);


//Opening and Closing Cart
function showCart() {
    document.getElementById("cartPage").classList.add("open");
}

function closeCart() {
    document.getElementById("cartPage").classList.remove("open");
}


//Button on click navigate to other page
function navigateToPage() {
    window.location.href = "order-form.html";
}

