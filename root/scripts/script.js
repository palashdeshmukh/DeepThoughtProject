//This Funtion is created for the Click Effect For the Navbar



let screenSize =document.getElementsByTagName("body");
screenSize.innerText= `Screen Height :${window.innerHeight} Screen Width:${window.innerWidth}`
document.getElementById('demo').innerText=screenSize.innerText;


function DisplayItemBar(){
let block = document.getElementsByClassName("icon-container");
if(window.innerWidth<=768){
  block.style.display="block";
} 
}