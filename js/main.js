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
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
        576: {
        slidesPerView: 2,
        spaceBetween: 30,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
        992: {
        slidesPerView: 4,
        spaceBetween: 30,
        }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

// home swipper
// let swiper_one = new Swiper(".homeSwiper", {
//   slidesPerView: "auto",
//   // effect: "fade",
//   navigation: {
//     nextEl: ".home_btn_right",
//     prevEl: ".home_btn_left",
//   },
//   pagination: {
//     el: ".home_swiper_pagination",
//     clickable: true,
//   },
// });
// // home swipper

// // popular_product
// let swiper_two = new Swiper(".popularSwiper", {
//   slidesPerView: 1.2,
//   spaceBetween: 20,
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     }
//   },
//   navigation: {
//     nextEl: ".product_slider_next",
//     prevEl: ".product_slider_prev",
//   },
// });
// // popular_product


// // about page
// let swiper_three = new Swiper(".aboutSwiper", {
//   slidesPerView: 1.2,
//   spaceBetween: 20,
//   breakpoints: {
//     576: {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     }
//   },
//   navigation: {
//     nextEl: ".avalon_office_next",
//     prevEl: ".avalon_office_prev",
//   },
// });
// about page
