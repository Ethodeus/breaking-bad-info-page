console.log('test');

window.addEventListener(
	'DOMContentLoaded',
	function (e) {
		var slide = document.getElementById('slide');
		var fadeComplete = function (e) {
			slide.appendChild(arr[0]);
		};
		var arr = slide.getElementsByTagName('img');
		console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			arr[i].addEventListener('animationend', fadeComplete, false);
		}
	},
	false
);
