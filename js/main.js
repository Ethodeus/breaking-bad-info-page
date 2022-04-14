window.addEventListener(
	'DOMContentLoaded',
	function (e) {
		var slide = document.getElementById('slide');
		var fadeComplete = function (e) {
			//this function adds the elment located in arr[0] to the end of the array
			slide.appendChild(arr[0]);
		};
		var arr = slide.getElementsByTagName('img'); //this creates an array with all the 'img elements that are located inside the .slide element.

		for (var i = 0; i < arr.length; i++) {
			//this loop iterates through all images and when the animation ends it runs the fadeComplete function.
			arr[i].addEventListener('animationend', fadeComplete, false);
		}
	},
	false
);

document.querySelector('button').addEventListener('click', playMusic, { once: true });

function playMusic() {
	let audio = document.getElementById('my-audio');

	audio.play();
	audio.volume = 0.1;
}

document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
	const input = document.querySelector('input').value;
	console.log(input);
	const url = `https://www.breakingbadapi.com/api/characters?name=${input}`;

	resetDOM();

	document.querySelector('#details-container').scrollIntoView({
		behavior: 'smooth',
	});

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			let character = data[0];
			console.log(character);
			addToDOM(character);
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

function addToDOM(character) {
	const div = document.createElement('div');
	div.classList.add('details-content');

	div.innerHTML = `
		<div class="photo">
			<div class="item">
				<div class="polaroid">
					<img
						id="fetched-photo"
						src="${character.img}"
					/>
					<div class="caption">${character.name}</div>
				</div>
			</div>
		</div>
		<div class="information">
			<div class="information-content">
				<div class="information-card">
					<h3>Name: <span>${character.name}</span></h3>
					<h3>Season appearances: <span>${character.appearance.join(', ')}</span></h3>
					<h3>Birthday: <span>${character.birthday}</span></h3>
					<h3>Nickname: <span>${character.nickname}</span></h3>
					<h3>Occupation: <span>${character.occupation}</span></h3>
					<h3>Portrayed by: <span>${character.portrayed}</span></h3>
					<h3>Status: <span>${character.status}</span></h3>
				</div>
    `;

	document.querySelector('#details-container').appendChild(div);
}

function resetDOM() {
	const info = document.querySelector('#details-container');

	while (info.firstChild) {
		info.removeChild(info.firstChild);
	}
}
