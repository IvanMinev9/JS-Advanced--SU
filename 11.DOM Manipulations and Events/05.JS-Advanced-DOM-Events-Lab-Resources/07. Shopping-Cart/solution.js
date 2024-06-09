function solve() {
	const addBtn = document.querySelectorAll(`.add-product`);
	const textArea = document.querySelector(`textarea`);
	const checkOutBtn = document.querySelector(`.checkout`);

	let cart = {};

	checkOutBtn.addEventListener(`click`, (event) => {
		let totalPrice = Object.values(cart).reduce((sum, price) => sum + price, 0);

		const list = Object.keys(cart).join(`, `);

		textArea.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
		addBtn.forEach((button) => button.setAttribute("disabled", "disabled"));
		event.currentTarget.setAttribute("disabled", "disabled");
	});

	function addBtnHandler(event) {
		const prodBtn = event.currentTarget.parentElement.parentElement;

		const prodName = prodBtn.querySelector(`.product-title`).textContent;
		const prodPrice = Number(
			prodBtn.querySelector(`.product-line-price`).textContent
		);

		if (!cart[prodName]) {
			cart[prodName] = 0;
		} else {
			cart[prodName] += prodPrice;
		}
		textArea.value += `Added ${prodName} for ${prodPrice.toFixed(
			2
		)} to the cart.\n`;
	}

	addBtn.forEach((btn) => btn.addEventListener(`click`, addBtnHandler));
}
