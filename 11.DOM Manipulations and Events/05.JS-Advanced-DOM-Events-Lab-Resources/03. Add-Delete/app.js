function addItem() {
	const itemsList = document.getElementById(`items`);
	const inputTextField = document.getElementById(`newItemText`);

	const createLiElement = document.createElement(`li`);
	createLiElement.textContent = inputTextField.value;

	const delElement = document.createElement(`a`);
	delElement.href = `#`;
	delElement.textContent = `Deleted`;

	delElement.addEventListener(`click`, (event) => {
		createLiElement.remove();
	});

	itemsList.append(createLiElement);
	createLiElement.append(delElement);
	inputTextField.value = ``;
}
