function addItem() {
	const newListItem = document.getElementById(`items`);
	const addListItem = document.getElementById(`newItemText`);

	const setLiElement = document.createElement(`li`);

	setLiElement.textContent = addListItem.value;

	newListItem.append(setLiElement);

	addListItem.value = ``;
	addListItem.focus;
}
