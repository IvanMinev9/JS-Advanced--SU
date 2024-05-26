function solve() {
	document.querySelector("#searchBtn").addEventListener("click", onClick);
	let searchedInput = document.getElementById(`searchField`);
	let tableRows = document.querySelectorAll(`tbody tr`);

	function onClick() {
		let searchedText = searchedInput.value;
		searchedInput.value = ``;
		for (let row of tableRows) {
			const tableRowRef = row.querySelectorAll(`td`);

			for (let data of tableRowRef) {
				if (data.textContent.includes(searchedText)) {
					row.classList.add(`select`);
					break;
				} else {
					row.classList.remove(`select`);
				}
			}
		}
	}
}
