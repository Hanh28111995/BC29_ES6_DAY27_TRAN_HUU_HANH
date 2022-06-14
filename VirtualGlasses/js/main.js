let dataGlasses = [
  { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
  { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
  { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
  { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
  { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
  { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
  { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
function getEle(id) {
  return document.getElementById(id);
}
let content1 = "";
let content2 = "";
let content3 = "";
let changeGlasses = (i, z) => {
  console.log(i);
  content2 = ` <img id="try" src="${i}" alt="" class="img-fluid"> `;
  content3 = `
  <div class="content_info">
  <h1>${dataGlasses[z].name} - ${dataGlasses[z].brand} (${dataGlasses[z].color})</h1>
  <P><span class="price">$${dataGlasses[z].price}</span><span class="status"> Stocking</span></P>
  <p>${dataGlasses[z].description}</p>
  </div>
`
  getEle("avatar").innerHTML = content2;
  getEle("glassesInfo").style.display = "block";
  getEle("glassesInfo").innerHTML = content3;

}
dataGlasses.forEach((item, index) => {
  content1 += `
    <div id="${item.id}" class="vglasses__items col-4 my-2" onclick="changeGlasses('${item.virtualImg}', ${index})"><img src="${item.src}" alt="" class="img-fluid"></div>
      `;
  getEle("vglassesList").innerHTML = content1;
});

let removeGlasses = (clear) => {
  if (!clear) { getEle('try').style.display = "none";   getEle("glassesInfo").style.display = "none";}
  else { getEle('try').style.display = "block"; getEle("glassesInfo").style.display = "block";}
}





