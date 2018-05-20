"use strict";
$(document).ready(function(){
			var preloader = document.getElementById("preloader_preload");
			function fadeOut(elem){
				elem.style.opacity = 1;
				var interpreloader = setInterval(function(){
					elem.style.opacity = elem.style.opacity - 0.05;
					if (elem.style.opacity <=0.05){ 
						clearInterval(interpreloader);
					preloader.style.display = "none";
					}
				},16);
			}
			window.onload = function(){
				setTimeout(function(){
					fadeOut(preloader);
				},1000);
			};
});