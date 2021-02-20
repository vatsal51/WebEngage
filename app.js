// $(document).ready(function () {
// 	$(window).scroll(function () {
// 		var a = $(window).scrollTop(); if (a > 200) {
// 			$(".banner").addClass("change");
// 		}
// 		else { $(".banner").removeClass("change") }
// 	});
// })


let scrollpos = window.scrollY
const header = document.querySelector(".banner")
const header_height = 100;
// const header_height=header.offsetHeight;


const add_class_on_scroll = () => header.classList.add("change")
const remove_class_on_scroll = () => header.classList.remove("change")

window.addEventListener('scroll', function () {
	scrollpos = window.scrollY;

	if (scrollpos >= header_height) { add_class_on_scroll() }
	else { remove_class_on_scroll() }

})
// document.querySelectorAll("button").addEventListener('click', function (e) {
// 	// var btn=(this).document.getElementById(this.id);
// 	var id = document.querySelectorAll(this.id);
// 	console.log(this.id);
// 	e.preventDefault()
// 	id.innerHTML = "code copied";

// })
const btns = document.querySelectorAll('button')

btns.forEach(btn => {

	btn.addEventListener('click', event => {
		document.querySelectorAll('button').forEach(group => {
			// console.log(group.id);
			document.getElementById(group.id).classList.remove("copied");
		});
		console.log(event.target.id);
		document.getElementById(event.target.id).classList.add("copied");
		document.getElementById(event.target.id).innerHTML = "copied"
	});

});
function myFunction(elem) {
	copyToClipBoard(elem.innerHTML);

	// var elem = document.getElementById((this).id);
	// elem.innerHTML="code copied";
	// console.log(this.id);
	// (this).innerHTML = "CODE COPIED";
	// console.log((this))
	// this.innerHTML="code copied";
}

const copyToClipBoard = (str) => {
	const el = document.createElement('textarea');
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};
// Radios
// var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
// var url = new URL(url_string);
// var c = url.searchParams.get("c");
// console.log(c);

document.getElementById("close").addEventListener('click', function () {
	// document.querySelector(".banner").classList.add("hide");
	// document.querySelector(".banner").classList.remove("banner");
	document.querySelector(".banner").classList.remove("change");

}) 
