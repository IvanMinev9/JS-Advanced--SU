window.addEventListener("load", solve);

function solve() {
	const gemElementName = document.getElementById(`gem-name`);
	const colorElementInput = document.getElementById(`color`);
	const caratsElementInput = document.getElementById(`carats`);
	const priceElementInput = document.getElementById(`price`);
	const typeElement = document.getElementById(`type`);
	const addBtnElement = document.getElementById(`add-btn`);
	const previewElement = document.getElementById(`preview-list`);
	const collectionList = document.getElementById(`collection`);

	addBtnElement.addEventListener(`click`, addBtnEventHandler);

	function addBtnEventHandler(e) {
		const inputElements = [
			gemElementName,
			colorElementInput,
			caratsElementInput,
			priceElementInput,
			typeElement,
		];

		if (inputElements.some((element) => element.value === ``)) {
			return;
		}

		const preview = createPreviewElements(
			gemElementName.value,
			colorElementInput.value,
			caratsElementInput.value,
			priceElementInput.value,
			typeElement.value
		);

		previewElement.appendChild(preview);

		e.currentTarget.setAttribute(`disabled`, `disabled`);

		inputElements.forEach((el) => (el.value = ``));
	}

	function createPreviewElements(name, color, carats, price, type) {
		const craftH4Nama = document.createElement(`h4`);
		craftH4Nama.textContent = name;

		const craftColor = document.createElement(`p`);
		craftColor.textContent = `Color: ${color}`;

		const craftCarats = document.createElement(`p`);
		craftCarats.textContent = `Carats: ${carats}`;

		const setPrice = document.createElement(`p`);
		setPrice.textContent = `Price: ${price}$`;

		const craftType = document.createElement(`p`);
		craftType.textContent = `Type: ${type}`;

		const articleAreaElements = document.createElement(`article`);

		articleAreaElements.appendChild(craftH4Nama);
		articleAreaElements.appendChild(craftColor);
		articleAreaElements.appendChild(craftCarats);
		articleAreaElements.appendChild(setPrice);
		articleAreaElements.appendChild(craftType);

		const craftSaveBtn = document.createElement(`button`);
		craftSaveBtn.classList.add(`save-btn`);
		craftSaveBtn.textContent = `Save to Collection`;

		const craftEditBtn = document.createElement(`button`);
		craftEditBtn.classList.add(`edit-btn`);
		craftEditBtn.textContent = `Edit Information`;

		craftEditBtn.addEventListener(`click`, (e) => {
			gemElementName.value = name;
			colorElementInput.value = color;
			caratsElementInput.value = carats;
			priceElementInput.value = price;
			typeElement.value = type;

			e.currentTarget.parentElement.remove();

			addBtnElement.removeAttribute(`disabled`);
		});

		const craftCancelBtn = document.createElement(`button`);
		craftCancelBtn.classList.add(`cancel-btn`);
		craftCancelBtn.textContent = `Cancel`;

		const craftLiElement = document.createElement(`li`);
		craftLiElement.classList.add(`gem-info`);

		craftLiElement.appendChild(articleAreaElements);
		craftLiElement.appendChild(craftSaveBtn);
		craftLiElement.appendChild(craftEditBtn);
		craftLiElement.appendChild(craftCancelBtn);

		craftSaveBtn.addEventListener(`click`, (e) => {
			const craftCollectionP = document.createElement(`p`);
			craftCollectionP.classList.add(`collection-item`);
			craftCollectionP.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}/ Type: ${type}`;

			collectionList.appendChild(craftCollectionP);

			e.currentTarget.parentElement.remove();

			addBtnElement.removeAttribute(`disabled`);
		});

		craftCancelBtn.addEventListener(`click`, (e) => {
			e.currentTarget.parentElement.remove();

			addBtnElement.removeAttribute(`disabled`);
		});

		return craftLiElement;
	}
}
