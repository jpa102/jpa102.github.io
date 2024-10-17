let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slideshow-inner').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 3000); 
