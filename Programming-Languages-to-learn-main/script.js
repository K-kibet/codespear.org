 //enable hidden topnav
        {
            const topNav= document.querySelector('header');
            let lastScrollY=window.screenY
            window.addEventListener('scroll',()=>{
                if(lastScrollY < window.scrollY){
                    topNav.classList.add("header-hidden")
                }else{
                    topNav.classList.remove("header-hidden")
                    
                }
                lastScrollY=window.scrollY
            })
            

        }



//toggle sidebar
function toggleNav(){
            document.querySelector('.navbar').classList.toggle('navbar--open')
        }


{
//Toggle btwn light and dark mode
var toggleMode=document.getElementById("btn");

function lightMode(){
    toggleMode.style.left="0px";
    document.querySelector("body").style.
      backgroundColor="white"
    document.querySelector("html").style.
      color="black"
}
function darkMode(){
    toggleMode.style.left="74px";
    document.querySelector("body").style.
      backgroundColor="#285267"
    document.querySelector("html").style.
      color="white"
  }
}
function openJS(){
  open("https://www.w3schools.com/js/DEFAULT.asp")
}
function openJsCodeCamp(){
  open("https://www.freecodecamp.org/news/learn-javascript-full-course/")
}
function openGo(){
  open("https://www.w3schools.com/go/index.php")
}
function openPy(){
  open("https://www.w3schools.com/python/default.asp")
}
function openCousera(){
  open("https://www.coursera.org/courses?query=python")
}
  function OpenGo(){
    open("https://go.dev/learn/")
  }

//settings
const  settings=document.getElementById("settings");
settings.addEventListener('click',myFun)

function myFun(){
  const ourbtn=document.querySelector('.togglebtn');
  ourbtn.classList.toggle('togglebtn__hidden')
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const d_none=document.querySelector(".d-none")
const ad=document.querySelector(".ad")
d_none.addEventListener("click",()=>{
  const  conf =confirm("Do you want to close this ad?")
  if(conf==true){
    ad.classList.add("ad-none")
  }else{
    return 
  }
  
})
