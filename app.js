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
        img:"./img/5section/Group3.svg",
        name: "Сердце",
        btn: "В корзину",
        p: "24 штуки в коробке в виде сердца. <br> Ассорти из 6 вкусов ",
        h2: "2800 руб",
        img1: ""
    },
    {
        img:"./img/5section/Group3.svg",
        name: "Сердце",
        btn: "В корзину",
        p: "24 штуки в коробке в виде сердца. <br> Ассорти из 6 вкусов ",
        h2: "2800 руб",
        img1: "./img/5section/Group3(2).svg"
    },
    {
        img:"./img/5section/Group3.svg",
        name: "Сердце",
        btn: "В корзину",
        p: "24 штуки в коробке в виде сердца. <br> Ассорти из 6 вкусов ",
        h2: "2800 руб",
        img1: "./img/5section/Group3(2).svg"
    },
    {
        img:"./img/5section/Group3.svg",
        name: "Сердце",
        btn: "В корзину",
        p: "24 штуки в коробке в виде сердца. <br> Ассорти из 6 вкусов ",
        h2: "2800 руб",
        img1: "./img/5section/Group3(2).svg"
    },
    {
        img:"./img/5section/Group3.svg",
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
    <img  src=${item.img} class="transition-transform duration-500 hover:scale-110">
    <h1 class=" text-[18px] font-semibold ml-[21px] "> ${item.name}</h1>
    <p class="text-[14px] text-[#292929] font-normal ml-[21px] "> ${item.p}</P>
    <h2 Class=" ml-[20px] text-[#E7426A] text-[18px] font-semibold  "> ${item.h2}</h2>
     <button class=" w-[173px] h-[49px] border-2 ml-[190px] mt-[12px]"> ${item.btn}</button>
     <img  src=${item.img1} class="mt-[-35px] ml-[210px]">
    </div>
    `;
    root.appendChild(datalist)
});
