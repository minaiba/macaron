const data = [
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
const root = document.getElementById("root");
data.forEach((item) => {
    const datalist = document.createElement("div");
    datalist.innerHTML = `
    
    <div class=" border-4 w-[370px] h-[459px] shadow-2xl">
    <img  src=${item.img} class="transition-transform duration-100 hover:scale-110 ">
    <h1 class=" text-[18px] font-semibold ml-[21px] "> ${item.name}</h1>
    <p class="text-[14px] text-[#292929] font-normal ml-[21px] "> ${item.p}</P>
    <h2 Class=" ml-[20px] text-[#E7426A] text-[18px] font-semibold  "> ${item.h2}</h2>
     <button class=" w-[173px] h-[49px] border-2 ml-[190px] mt-[12px] hover:text-[red] "> ${item.btn}</button>
     <img  src=${item.img1} class="mt-[-35px] ml-[210px]">

    </div>
    `;
    root.appendChild(datalist);
});


const see = [
    {
     img:"./img/7section/Rectangle214.svg",
     h1:"Лучшие ингрединты",
     p:"Что-то про суперкачество, лучших <br> поваров, свежесть и т.д."
    },
    {
     img:"./img/7section/Rectangle215.svg",
     h1:"Упаковка",
     p:"Что-то про суперкоробочки и бантики и бла бла бла"
    },
    {
     img:"./img/7section/Rectangle216.svg",
     h1:"Получение в день заказа",
     p:"В день заказа доставка курьером или самовывоз"
    },
    {
     img:"./img/7section/Rectangle217.svg",
     h1:"Анонимная доставка",
     p:"Можем преподнести Ваш заказ как анонимный подарок"
    },
];

const see7 = document.getElementById("see7");
see.forEach((item) => {
    const seelist = document.createElement("div");
    seelist.innerHTML = `
    
    <div class=" w-[310px] h-[390px] ">
    <img  src=${item.img} class="w-[310px]">
     <h1 class="font-semibold text-[18px] mt-[29px] "> ${item.h1}</h1>
     <p class="font-normal text-[14px] "> ${item.p}</p>
    </div>
    `;
    see7.appendChild(seelist);
});