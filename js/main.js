// try {
//   // category_btn
//   let catalog_content = document.querySelector('.catalog_content');
//   let catalog_btn = document.querySelector('.catalog_btn');
//   let catalog_content_bg = document.querySelector('.catalog_content_bg');

//   catalog_btn.addEventListener('click', () => {
//     catalog_content.classList.toggle('active');
//     catalog_btn.classList.toggle('active');
//     catalog_content_bg.classList.toggle('active');
//   });

//   catalog_content_bg.addEventListener('click', () => {
//     catalog_content.classList.remove('active');
//     catalog_btn.classList.remove('active');
//     catalog_content_bg.classList.remove('active');
//   })

//   catalog_content.addEventListener('click', () => {
//     catalog_content.classList.remove('active');
//     catalog_btn.classList.remove('active');
//     catalog_content_bg.classList.remove('active');
//   })
//   // category_btn
// } catch (err) {
//   console.log(err);
// }

var swiper = new Swiper(".goodsSwiper", {
    // slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
    navigation: {
      nextEl: ".goods_btn_next",
      prevEl: ".goods_btn_prev",
    },

});

