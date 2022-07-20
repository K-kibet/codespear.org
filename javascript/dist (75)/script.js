let active;

sections = document.querySelectorAll("section");
sections.forEach((section) => {
	let article = section.querySelector("article");

	let articleWrapper = document.createElement("div");

	articleWrapper.className = "article-wrapper";

	articleWrapper.append(article);
	section.append(articleWrapper);
	let arr = document.createElement("div");
	arr.className = "arrow fas fa-angle-down";

	section.append(arr);
});

//section arrow click handler
window.addEventListener("click", (event) => {
	target = event.target;
	if (!target.classList.contains("arrow")) return;
	let section = target.parentElement;

	let articleWrapper = section.querySelector(".article-wrapper");
	let article = articleWrapper.querySelector("article");

	let wh = articleWrapper.offsetHeight;//wrapper height
	let ah = article.offsetHeight;//article height 
	articleWrapper.style.height = wh + "px";

	setTimeout(() => {
		if (wh == 0) {
			section.querySelector(".arrow").classList.remove("close");
			articleWrapper.style.height = ah + "px";
			articleWrapper.addEventListener("transitionend", auto);
		} else {
			section.querySelector(".arrow").classList.add("close");
			articleWrapper.style.height = "0";
		}
	}, 0);

	function auto() {
		articleWrapper.removeEventListener("transitionend", auto);
		if (articleWrapper.offsetHeight != 0) articleWrapper.style.height = "auto";
	}
});

//IntersectionObserver--------------------------------------------
options = {
	rootMargin: "0% 0% -80% 0%",
	threshold: 0,
};

function handleIntersection(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const lastActive = document.querySelector(".active");

			if (lastActive) lastActive.classList.remove("active");
			active = document.querySelector("[href='#" + entry.target.id + "']");

			active.classList.add("active");
		
				indicatePosition();	
		}
	});
}

function indicatePosition(){
	document.body.style.setProperty(
		"--top",
		active.offsetTop + active.offsetHeight / 2 + "px"
	);
}
const observer = new IntersectionObserver(handleIntersection, options);

sections.forEach((section) => {
	observer.observe(section);
});
//_________________________________________________________________________________________________________


const navigationBtns = document.querySelectorAll("#navigation .nav-arrow");

navigationBtns[0].addEventListener(
	"click",
	handleScroll.bind(null,"previousElementSibling")
);
navigationBtns[1].addEventListener(
	"click",
	handleScroll.bind(null,"nextElementSibling")
);

function handleScroll(sib) {
	let bro = active.parentElement;
	if(!bro[sib])return;

	bro=bro[sib].firstElementChild;
	active=bro;
let section=document.querySelector(bro.hash);

	indicatePosition();

	 window.scrollBy(0, gbcr(section));
	 //section.offsetTop doesnt work ! !
	 //gota check the difference between offsetTop ans gbcr.top
}




function gbcr(element,prop="top"){
	return element.getBoundingClientRect()[prop];
}

const navbar=document.querySelector("#navbar");
navbar.addEventListener("click",()=>{

	if(event.target.tagName.toLowerCase()=="a")hamburger.classList.remove("on")
})
const hamburger=document.querySelector("#hamburger");

hamburger.addEventListener("click",()=>{
	hamburger.classList.toggle("on")
})