const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const container = document.querySelector(".carousel-container");
const currentPageSpan = document.querySelector(".current-page");
const totalPagesSpan = document.querySelector(".total-pages");

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth;
    container.style.transform = `translateX(-${index * slideWidth}px)`; // 슬라이드 컨테이너의 위치 변경
    currentPageSpan.textContent = index + 1;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

totalPagesSpan.textContent = slides.length; 

showSlide(currentIndex);
