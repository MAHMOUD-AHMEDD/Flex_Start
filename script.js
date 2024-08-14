let btns = document.querySelectorAll(".portfolio .container .buttons button");

for (let button of btns) {
  button.onclick = function () {
    //event.target.style.cssText = "color:red;margin:50px;";
    document.querySelector(".active").className = "";
    event.target.className = "active";
    let type = event.target.name;
    if (type == "all") {
      let all_image = document.querySelectorAll(
        ".portfolio .container .images img"
      );
      for (let img of all_image) {
        img.style.display = "block";
      }
    } else {
      let related = document.querySelectorAll("." + type);
      //console.log(related);
      let all_image = document.querySelectorAll(
        ".portfolio .container .images img"
      );
      for (let img of all_image) {
        img.style.display = "none";
      }
      for (let img of related) {
        img.style.display = "block";
      }
    }
  };
}
//
//
//
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hiddenn");
  } else {
    backToTopButton.classList.add("hiddenn");
  }
});
//
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};
backToTopButton.addEventListener("click", goToTop);
//
//
//
let mod=localStorage.mode;
let lightmode=document.querySelector('.LightMode');
let darkmode=document.querySelector('.DarkMode');
lightmode.onclick=function (){
  let file=document.querySelector('head link:last-child ');
  console.log(file);
  file.href='light.css';
  localStorage.setItem('mode','light');
}
darkmode.onclick=function (){
  let file=document.querySelector('head link:last-child');
  console.log(file);
  file.href='dark.css';
  localStorage.setItem('mode','dark');
}
document.querySelector('head link:last-child').href=mod+'.css';