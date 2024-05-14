AOS.init();


// lenis studio freight 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
// console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// ================================================================================



// ================================================================================
// slide menu toggle ==============================================================
// ================================================================================
    const buttonAdd = document.getElementById('openSlidemenu');
    const buttonRemove = document.getElementById('closeSlidemenu');
    const element = document.getElementById('slideMenu');
    const targetClass = 'active'; // Replace 'active' with your desired class name

    buttonAdd.addEventListener('click', function() {
    element.classList.add(targetClass);
    });

    buttonRemove.addEventListener('click', function() {
    element.classList.remove(targetClass);
    });
// ================================================================================


// Swiper Homepage Hero 
    var swiper = new Swiper(".heroSwiper", {});
    var swiper = new Swiper(".product-lists", {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
// ================================================================================


