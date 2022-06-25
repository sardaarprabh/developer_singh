const themeButton=document.querySelector("#icon");
const logo=document.querySelector(".logo");

themeButton.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    themeButton.src="./images/sun.png";
    logo.src="./images/whitelogo.png";
  }
  else{
    themeButton.src="./images/moon.png";
    logo.src="./images/logo.png";
  }
}