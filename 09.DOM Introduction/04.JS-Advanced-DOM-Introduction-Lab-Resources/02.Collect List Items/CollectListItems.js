function extractText() {
	// get list elements
	let liElements = document.querySelectorAll(`li`);
	// extract list items
	let items = Array.from(liElements).map(
		(liElements) => liElements.textContent
	);
	//get result element
	let result = document.getElementById(`result`);
	// populate in result element
	result.value = items.join(`\n`);
}
