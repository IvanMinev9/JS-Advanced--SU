function sumTable2() {
	const sumEl = document.getElementById(`sum`);

	const priceElements = document.querySelectorAll(`table tr td:nth-of-type(2)`); // намери таблицата -> във нея всички tr -> и от тях select всички td които са второто от вида си
	let totalPrice = 0;

	for (let el of priceElements) {
		let price = Number(el.textContent);
		totalPrice += price;
	}

	sumEl.textContent = totalPrice.toFixed(2);
}
