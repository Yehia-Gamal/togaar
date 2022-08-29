
// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

(function () {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;

        if (myWidth <= 429) {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1,
            });
        } else if (myWidth <= 500) {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
            });
        } else if (myWidth <= 650) {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
            });
        } else if (myWidth <= 900) {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
            });
        } else if (myWidth >= 1000) {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 4,
            });
        }
    }
})();
