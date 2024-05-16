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
// ==============================================================



// ===============================================================
// slide menu toggle =============================================
// ===============================================================
function gnbSlideMenuTrigger () {
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
}
gnbSlideMenuTrigger ()
// ==============================================================


// Swiper Homepage Hero 
function indexSwiperHero () {
  var swiper = new Swiper(".heroSwiper", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
indexSwiperHero ()

function indexSwiperProduct () {
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
}
indexSwiperProduct ()
    
// ==============================================================


// ===============================================================
// Go Top Button =================================================
// ===============================================================
function goTop() {
  const goTopButton = document.getElementById("goTopButton");

  if (goTopButton) {

    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        // Show 
        goTopButton.style.opacity = "1";
        goTopButton.style.transform = "translateY(0)";
      } else {
        // Hide 
        goTopButton.style.opacity = "0";
        goTopButton.style.transform = "translateY(180%)";
      }
    });

    goTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

  }
  
}
goTop()
// ==============================================================