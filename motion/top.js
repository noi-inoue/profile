function vue_profile_slideshow(){
	let first_img = document.getElementById("vueprofile-img3").src
	let middle_img = document.getElementById("vueprofile-img2").src
	let last_img = document.getElementById("vueprofile-img1").src
	let tmp = first_img
	first_img = middle_img
	middle_img = last_img
	last_img = tmp
	document.getElementById("vueprofile-img3").src=first_img;
	document.getElementById("vueprofile-img2").src=middle_img;
	document.getElementById("vueprofile-img1").src=last_img;
}

function gftd_log_slideshow(){
	let first_img = document.getElementById("gftdlog-img3").src
	let middle_img = document.getElementById("gftdlog-img2").src
	let last_img = document.getElementById("gftdlog-img1").src
	let tmp = first_img
	first_img = middle_img
	middle_img = last_img
	last_img = tmp
	document.getElementById("gftdlog-img3").src=first_img;
	document.getElementById("gftdlog-img2").src=middle_img;
	document.getElementById("gftdlog-img1").src=last_img;
}

function life_log_slideshow(){
	let first_img = document.getElementById("lifelog-img3").src
	let middle_img = document.getElementById("lifelog-img2").src
	let last_img = document.getElementById("lifelog-img1").src
	let tmp = first_img
	first_img = middle_img
	middle_img = last_img
	last_img = tmp
	document.getElementById("lifelog-img3").src=first_img;
	document.getElementById("lifelog-img2").src=middle_img;
	document.getElementById("lifelog-img1").src=last_img;
}
