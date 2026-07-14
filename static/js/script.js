function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
	var nameEQ = name + "=";
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		while (cookie.charAt(0) === " ") {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(nameEQ) === 0) {
			return cookie.substring(nameEQ.length);
		}
	}
	return null;
}

function pop(imageURL) {
	var modal = document.getElementById("modal");
	var img = modal.querySelector(".modal-img");
	if (imageURL) {
		img.src = imageURL;
		modal.classList.add("active");
	} else {
		modal.classList.remove("active");
		img.src = "";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	var html = document.querySelector("html");
	var themeToggle = document.getElementById("themeToggle");
	var themeState = getCookie("themeState") || "Light";

	function changeTheme(theme) {
		html.dataset.theme = theme;
		setCookie("themeState", theme, 365);
		themeState = theme;
	}

	themeToggle.addEventListener("click", function () {
		changeTheme(themeState === "Dark" ? "Light" : "Dark");
	});

	changeTheme(themeState);
});
