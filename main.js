const mwm = document.querySelector("span.mess-with-me");
mwm.style.fontSize = '3em';
const para = document.querySelector("p.mess-with-me");
para.style.background = 'green';
const hiddenImg = document.querySelector("#hide-me");
hiddenImg.style.display = "none";
const  tri = document.querySelector("img#triceratops");
tri.style.width = "324";
const spanOrange = function(){
    mwm.style.color = 'orange';
}
mwm.addEventListener('click',spanOrange);

const redBorder = function(){
    tri.style.border = "red";
}
tri.addEventListener('click', redBorder);

const feather = document.querySelector("#feathers");
const big = document.querySelector("#biggify");
const trans50 = function(){
    feather.style.opacity = "0.5";
}
const enhance = function(){
    big.style.width = '200';
}
feather.addEventListener('click',trans50);
big.addEventListener('mouseover',enhance);
const imagesRow = document.querySelector("#row")
const button = document.querySelector("button");
const colorChange = function(){
    imagesRow.style.background = 'blue'
}
button.addEventListener('click',colorChange);
