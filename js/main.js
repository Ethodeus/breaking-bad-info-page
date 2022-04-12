console.log('test');

window.addEventListener(
	'DOMContentLoaded',
	function (e) {
		// Original JavaScript code by Chirp Internet: chirpinternet.eu
		// Please acknowledge use of this code by including this header.

		var slide = document.getElementById('slide');
		var fadeComplete = function (e) {
			slide.appendChild(arr[0]);
		};
		var arr = slide.getElementsByTagName('img');
		for (var i = 0; i < arr.length; i++) {
			arr[i].addEventListener('animationend', fadeComplete, false);
		}
	},
	false
);
