function addItem() {
	const inputFieldElement = document.getElementById(`newItemText`);
	const ulElement = document.getElementById(`items`);

	const liElement = document.createElement(`li`);
	liElement.textContent = inputFieldElement.value;

	ulElement.append(liElement);

	inputFieldElement.value = ``;

	inputFieldElement.focus();
}
