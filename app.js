import { data } from "./data.js";

const swiperContainer = document.querySelector('.mySwiper');

data.forEach(item => {
  const swiperSlide = document.createElement('swiper-slide');
  swiperSlide.innerHTML = `
    <div class="rounded-[15px] mt-[72px] relative text-[#292929]">
      <div class="">
        <img src="${item.img}" alt="Product Image">
      </div>
      <div class=" w-[270px] font-medium text-[#EDEDF0] text-[16px] text-center rounded-b-[6px]">
        <h3 class="text-center text-[#292929] font-bold text-[20px]">${item.price}</h3>
        <h3 class="w-[200px] ml-[35px] text-[#E7426A] font-semibold">${item.tea}</h3>
      </div>
    </div>
  `;
  swiperContainer.appendChild(swiperSlide);
});






// import { data } from "./data.js";

// const swiperContainer2 = document.querySelector('.mySwiper2');

// newsData.forEach(news => {
//   const slide = document.createElement('swiper-slide');
//   slide.innerHTML = `
//     <div class="rounded-[10px] shadow-lg bg-white p-4">
//       <img src="${news.img}" alt="${news.title}" class="w-full h-[150px] object-cover rounded-t-[10px]">
//       <h3 class="text-[20px] font-semibold mt-4">${news.title}</h3>
//       <p class="text-[14px] mt-2 text-gray-600">${news.description}</p>
//     </div>
//   `;
//   swiperContainer.appendChild(slide);
// });






