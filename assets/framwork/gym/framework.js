
// [INFO]: importer base
function importScripts(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.body.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}


// [INFO]: import manual madule
importScripts('assets/font/fontawesome-free-5.7.1-web/js/all.js');
importScripts('assets/component/wow-js/dist/wow.js');


// [INFO]: importer base
function importStyle(url) {
	document.head.insertAdjacentHTML( 'afterbegin', '<link rel=stylesheet href=' + url + '>' );
}

// [INFO]: import manual stylesheet
importStyle('assets/font/fontawesome-free-5.7.1-web/css/all.css');
importStyle('assets/component/wow-js/css/libs/animate.css');
importStyle('https://fonts.googleapis.com/css?family=Lato:400,700,900|Montserrat:400,700,900');
// <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900|Montserrat:400,700,900" rel="stylesheet"> 
//font-family: 'Montserrat', sans-serif;  font-family: 'Lato', sans-serif;



// [INFO]: change font style
function fontStyle(a,b,c) {
	var x = document.querySelectorAll(a);
	var i,j;
	for (i = 0; i < x.length; i++) {
		x[i].style.fontFamily = b;
		x[i].style.fontWeight = c;
	}
}

// [INFO]: Styling Font Family
// Target,font-famil,font-weight
// fontStyle("p","Lato","400");
fontStyle("body","Lato");
fontStyle("nav","Montserrat");
fontStyle("nav a","Montserrat",700);
fontStyle("nav a.dropdown-item","Montserrat",400);


// [INFO]: change text color to the objects
function theColorText(a,b) {
	var x = document.querySelectorAll(a);
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.color = b;
	}
}

// [INFO]: Styling Font color
// Target,color ----------> "name" or "#xxyyzz"
theColorText("p.lead","#7a7a7a");



// [INFO]: change rules for objects
$(document).ready(function () {

	$( "a" ).attr({
		target: "_self"
	});
	$( ".navbar-brand" ).attr({
		href: "index.html"
	});
	$( "body" ).attr({
		rules: "site-container"
	});

});




// [INFO]: add class to the objects
function pragmatic(naiveAlpha,naiveBeta){
	$(document).ready(function() {
		$(naiveAlpha).addClass(naiveBeta);
	});
}
pragmatic("header .dropdown-menu","animated fadeInUp delay-1s mt-4");
pragmatic(".stickyNav .dropdown-menu","animated fadeInUp delay-1s mt-3");




// [INFO]: sticky top navbar
$(document).ready(function () {

	$(window).scroll(function(){
		$('.stickyNav').toggleClass('navbar d-block navbar-expand-lg navbar-light bg-light mx-5 rounded px-5 pt-5 sticky-top scrollednav py-3 animated fadeInDown delay-2s', $(this).scrollTop() > 650);
	});

});



// [INFO]: testimonialPage SlideShow Script
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
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
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
			captionText.innerHTML = dots[slideIndex-1].alt;
		} 



