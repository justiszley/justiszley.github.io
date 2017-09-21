var writeUs = document.querySelector(".js-write-us-btn");
var writeUsPopup = document.querySelector(".js-modal-write-us");
var writeUsClose = document.querySelector(".js-modal-write-us .js-modal-close");

var	map = document.querySelector(".js-map-btn");
var mapPopup = document.querySelector(".js-modal-map");
var mapClose = document.querySelector(".js-modal-map .js-modal-close");

writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsPopup.classList.add("modal-show");
});

writeUsClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsPopup.classList.remove("modal-show");
})

map.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
})