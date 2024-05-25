function colorize() {
	let tableRow = document.querySelectorAll(`table tr`);
	let index = 0;

	for (el of tableRow) {
		index++;
		if (index % 2 == 0) {
			el.style.background = `teal`;
		}
	}
	console.log(`ACTIVE`);
}
