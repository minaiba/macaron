let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const carousel = document.querySelector('.carousel');

function moveSlide() {
  // Убираем класс 'active' у текущего слайда
  slides[currentSlide].classList.remove('active');
  
  // Переходим к следующему слайду
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  
  // Добавляем класс 'active' новому слайду
  slides[currentSlide].classList.add('active');
  
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Устанавливаем начальный слайд
slides[currentSlide].classList.add('active');

// Автоматическое переключение слайдов
setInterval(moveSlide, 4000); // Каждые 4 секунды переключается слайд






import { data, data2, data1, see } from "./data.js";

const macarons = [
    {
        img:"./img/5section/Group3.svg",
        name: "Сердце",
        btn: "В корзину",
        p: "24 штуки в коробке в виде сердца. <br> Ассорти из 6 вкусов ",
        h2: "2800 руб",
        img1: "./img/5section/Group3(2).svg"
    },
    {
        img:"./img/5section/Rectangle174.svg",
        name: "Красота спасёт мир ",
        btn: "В корзину",
        p: "Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан ",
        h2: "750 руб",
        img1: "./img/5section/Group3(2).svg"
    },
    {
        img:"./img/5section/Rectangle176.svg",
        name: "Круглый набор",
        btn: "В корзину",
        p: "40 макаронс в круглой коробке с персональной надписью ",
        h2: "3900 руб",
        img1: "./img/5section/Group3(2).svg"
    },
    {
        img:"./img/5section/Rectangle282.svg",
        name: "Набор на 9",
        btn: "В корзину",
        p: "Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня",
        h2: "950 руб",
        img1: "./img/5section/Group3(2).svg"
    },
    {
        img:"./img/5section/Rectangle283.svg",
        name: "Набор на 16",
        btn: "В корзину",
        p: "Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад   ",
        h2: "1500 руб",
        img1: "./img/5section/Group3(2).svg"
    },
    {
        img:"./img/5section/Rectangle284.svg",
        name: "Сердце",
        btn: "В корзину",
        p: "24 штуки в коробке в виде сердца. <br> Ассорти из 6 вкусов ",
        h2: "2800 руб",
        img1: "./img/5section/Group3(2).svg"
    },
];

// myrza
const popular = document.getElementById("popular");
data1.forEach((i) => {
    const datalist = document.createElement("div");
    datalist.innerHTML = `
    
    <div class="border-4 w-[370px] h-[459px] shadtow-2xl ransition-transform duration-500 hover:scale-110">
    <img  src=${i.img} class="">
    <h1 class=" text-[18px] font-semibold ml-[21px] "> ${i.name}</h1>
    <p class="text-[14px] text-[#292929] font-normal ml-[21px] "> ${i.p}</P>
   <h2 Class="  text-[#E7426A] text-[18px] font-semibold mt-[25px] ml-[10px] "> ${i.h2}</h2>
     <button class=" w-[173px] h-[49px] border-2  hover:text-[red] ml-[190px] mt-[-20px] "> ${i.btn}</button>
      <img  src=${i.img1} class="ml-[215px] mt-[-35px]">

    </div>
    `;
    popular.appendChild(datalist);
});


 





// shahida
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




const swiperContainer2 = document.querySelector('.mySwiper2');

data2.forEach(news => {
  const slide = document.createElement('swiper-slide');
  slide.innerHTML = `
    <div class="rounded-[10px] p-[10px] shadow-lg bg-white">
      <img src="${news.img}" alt="${news.title}" class="w-full h-[150px] object-cover rounded-t-[10px]">
      <h3>${news.tea1}</h3>
      <h3 class="text-[20px] font-semibold mt-4">${news.price}</h3>
      <p class="text-[14px] mt-2 text-gray-600">${news.macaron}</p>
    </div>
  `;
  swiperContainer2.appendChild(slide);
});










const see7 = document.getElementById("see7");
see.forEach((item) => {
    const seelist = document.createElement("div");
    seelist.innerHTML = `
    
    <div class=" w-[310px] h-[390px] transition-transform duration-500 hover:scale-110  ">
    <img  src=${item.img} class="w-[310px]">
     <h1 class="font-semibold text-[18px] mt-[29px] "> ${item.h1}</h1>
     <p class="font-normal text-[14px] "> ${item.p}</p>
    </div>
    `;
    see7.appendChild(seelist);
});
