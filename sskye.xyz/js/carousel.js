//Carousel code

var slideIndex = 0;
var slides = document.getElementsByClassName("carouselSlides");
currentSlide(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	if (n > slides.length-1) {slideIndex = 0;}
	if (n < 0) {slideIndex = slides.length-1;}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = "block";
	slides[slideIndex].style.opacity = 1;
}

//Auto-rotate slides every 5000ms - except when mouseover.
var intvl = window.setInterval("plusSlides(1)", 5000);

document.getElementById('carousel').onmouseover = function () {
	clearInterval(intvl);
}

document.getElementById('carousel').onmouseout = function () {
	intvl = window.setInterval("plusSlides(1)", 5000);
}

//Your general hide id.

function hide(idToHide){
	var intervalID = setInterval(function () {
		
		if (!idToHide.style.opacity) {idToHide.style.opacity = 1;}
		if (idToHide.style.opacity <= 0) {idToHide.style.display = "none";}
		if (idToHide.style.opacity > 0) {idToHide.style.opacity -= 0.07;}
		
		else {
			clearInterval(intervalID);
		}
	}, 50);
}

//Remove cookieContainer on press of "OK".

document.getElementById('btn_cookieConsent').onclick = function () {
	var cookieContainer = document.getElementById('cookieContainer');
	hide(cookieContainer);
}

//Fade to-top button when we're already there / btn_top

window.onscroll = function() {
    if(pageYOffset >= 300)
    {
        document.getElementById('btn_top').style.visibility="visible"
    }else
    {
        document.getElementById('btn_top').style.visibility="hidden";
    }
};