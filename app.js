const data = [
    {
        img:"./img/5 section/Rectangle 172.svg",
        name: "Сердце",
       
    },
];
const root = document.getElementById("root");
data.forEach((item) => {
    const datalist = document.createElement("div");
    datalist.innerHTML = `
    
    <div>
    <img  src=${item.img}>
    <h1> ${item.name}</h1>
   
    </div>
    `;
    root.appendChild(datalist)
});