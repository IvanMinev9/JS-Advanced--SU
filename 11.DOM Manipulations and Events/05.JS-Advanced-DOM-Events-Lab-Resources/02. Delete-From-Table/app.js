function deleteByEmail() {
	const resultElement = document.getElementById(`result`);
	const tableInfoElement = document.querySelectorAll(`tbody tr`);
	const inputElement = document.querySelector(`input[name=email]`);

	const resultRows = Array.from(tableInfoElement).find(
		(tr) => tr.getElementsByTagName(`td`)[1].textContent === inputElement.value
	);
	if (resultRows) {
		resultRows.remove();
		resultElement.textContent = `Deleted`;
	} else {
		resultElement.textContent = `Not found.`;
	}
}
