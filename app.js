// $(document).ready(function () {
// $(window).scroll(function () {
// var a = $(window).scrollTop(); if (a > 200) {
// $(".banner").addClass("change");
// }
// else { $(".banner").removeClass("change") }
// });
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
function rad() {

var nurl = window.location.href;
console.log(nurl)
var x = location.search;
console.log(x)
const urlParams = new URLSearchParams(x);
const has = urlParams.has('ayush')
console.log(has)
const product = urlParams.get('ayush');
console.log(product)
if (has) {
var checked = document.getElementById(product).checked = true;
document.querySelectorAll("input[type='radio']").forEach(radi => {
	document.getElementById(radi.id).disabled = true;
	document.getElementById(product).disabled=false;
console.log(radi.id)
});
document.querySelectorAll('input[type="radio"]').disabled = true;
// document.getElementById(product).disabled=true;
};
}
rad();
// var url = new URL(url_string);
// var c = url.searchParams.get("c");

document.getElementById("close").addEventListener('click', function () {
// document.querySelector(".banner").classList.add("hide");
// document.querySelector(".banner").classList.remove("banner");
document.querySelector(".banner").classList.remove("change");

}) 
