const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const container = document.querySelector(".carousel-container");
const currentPageSpan = document.querySelector(".current-page");
const totalPagesSpan = document.querySelector(".total-pages");

let currentIndex = 0;
let autoSlideInterval = null;
let autoSlideTimeout = null;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth;
    container.style.transform = `translateX(-${index * slideWidth}px)`; // 슬라이드 컨테이너의 위치 변경
    currentPageSpan.textContent = index + 1;
}

function moveSlide(index){
    if(index < 0) index+=slides.length;
    currentIndex = (index) % slides.length;
    showSlide(currentIndex);
    resetAutoSlideTimer();
}

function nextSlide() {
    moveSlide(currentIndex+1);
}

function prevSlide() {
    moveSlide(currentIndex-1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 6000); // 6초마다 nextSlide 함수 호출
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval); // 타이머 중지
}

function resetAutoSlideTimer() {
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(() => {
        nextSlide();
        startAutoSlide();
    }, 6000); // 6초 후에 자동으로 다음 슬라이드로 이동
}

nextButton.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide(); // 다음 슬라이드로 이동 시 자동 슬라이드 중지
});

prevButton.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
});

totalPagesSpan.textContent = slides.length; 

showSlide(currentIndex);
startAutoSlide();