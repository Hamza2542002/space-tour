let icon = document.querySelector(".link-icon img")
let links = document.querySelector(".links")
let flag = false;
function toogle(){
 if(!flag){
  links.style.display = 'block';
  flag = true;
  icon.src = "../images/shared/icon-close.svg";
 }else{
  links.style.display = 'none';
  flag = false;
  icon.src = "../images/shared/icon-hamburger.svg";
 }
}
function myfunc(){
 if(window.innerWidth > 690){
  links.style.display = 'flex';
  icon.style.display = "none";
 }else{
  links.style.display = "none";
  icon.style.display = "inline";
  icon.addEventListener("click",toogle);
 }
}
icon.addEventListener("click",toogle);

window.addEventListener("resize",myfunc)

// destenation page

let dLinks = document.querySelectorAll(".f-d .info ul li");
let dTextInfo = document.querySelectorAll(".info .text")
let imag = document.querySelector(".f-d .image img")
let dSources = [
 "images/destination/image-moon.webp",
 "images/destination/image-mars.webp",
 "images/destination/image-titan.webp",
 "images/destination/image-europa.webp"
]

dLinks.forEach((element,index) => {
 element.onclick = ()=>{
  dLinks.forEach(e => {
   if(e.classList.contains("active")){
    e.classList.remove("active")
   }
  })
  dTextInfo.forEach(e => {
   e.style.opacity = '0';
  })
  element.classList.add("active");
  dTextInfo[index].style.opacity = '1';
  imag.src = dSources[index];
 }
})

//  crew page

let body = document.querySelector("body");


let crewInfo = document.querySelectorAll(".crew-info .text");
let crewImage = document.querySelector(".crew-info .image img");
let crewPullets = document.querySelectorAll(".details .container .pullets li")
let crewSources = [
 "images/crew/image-anousheh-ansari.png",
 "images/crew/image-douglas-hurley.png",
 "images/crew/image-victor-glover.png",
 "images/crew/image-mark-shuttleworth.png"
]
let index = 1;

function creToggle(){
 crewInfo.forEach((e)=>{
  e.style.opacity = '0';
 })
 crewPullets.forEach((e)=>{
  e.style.backgroundColor = 'rgb(97, 97, 97)';
 })
 if(window.innerWidth >= 1200){
  crewPullets[index].style.backgroundColor = 'white';
 }
 crewImage.src = crewSources[index];
 crewInfo[index].style.opacity = '1';
 index ++ ;
 if(index >= crewSources.length){
  index = 0;
 }
}


// technology page

let techInfo = document.querySelectorAll(".tech-info .text .m-i");
let techImage = document.querySelector(".tech-info .image img");
let techPullets = document.querySelectorAll(".tech-info .bullets li");

let porperty = 'landscape'

if(body.getAttribute('index') === '2'){
 setInterval(()=>{
  creToggle();
 },3000)
}else if (body.getAttribute('index') === '3'){
 setInterval(()=>{
  techToggle();
 },3000)
 if (window.matchMedia("(max-width: 1200px)").matches) {
  porperty = 'landscape'
  techImage.src = `images/technology/image-launch-vehicle-${porperty}.jpg`
 }else{
  porperty = 'portrait'
  techImage.src = `images/technology/image-launch-vehicle-${porperty}.jpg`
 }
}

function setporperty(){
 if(window.innerWidth <= 1200){
  porperty = "landscape"
 }else{
  porperty = "portrait";
 }
}

let techSources = [
 `images/technology/image-launch-vehicle-${porperty}.jpg`,
 `images/technology/image-space-capsule-${porperty}.jpg`,
 `images/technology/image-spaceport-${porperty}.jpg`
]

let techIndex = 1

techPullets.forEach((e,index) => {
 e.onclick = () => {
  goTo(index)
 }
})

function goTo(i){
 techInfo.forEach((e)=>{
  if(e.classList.contains("shown"))
  e.classList.remove("shown")
 })
 techPullets.forEach((e)=>{
  if(e.classList.contains("active"))
   e.classList.remove("active")
 })
 techPullets[i].classList.add("active")
 techImage.src = techSources[i];
 techInfo[i].classList.add("shown")
 techIndex = i+1;
 if(techIndex >= techSources.length){
  techIndex = 0;
 }
}

function techToggle(){
 techInfo.forEach((e)=>{
  if(e.classList.contains("shown"))
  e.classList.remove("shown")
 })
 techPullets.forEach((e)=>{
  if(e.classList.contains("active"))
   e.classList.remove("active")
 })
 techPullets[techIndex].classList.add("active")
 techImage.src = techSources[techIndex];
 techInfo[techIndex].classList.add("shown")
 techIndex ++;
 if(techIndex >= techSources.length){
  techIndex = 0;
 }
}

setporperty()
window.addEventListener("resize",setporperty);



