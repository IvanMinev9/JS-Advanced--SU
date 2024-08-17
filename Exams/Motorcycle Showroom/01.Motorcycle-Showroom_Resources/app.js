window.addEventListener("load", solve);

function solve() {
	const colorInput = document.getElementById("colors");
	const modelInput = document.getElementById("motorcycles");
	const dateTimeInput = document.getElementById("datetime");
	const nameInput = document.getElementById("full-name");
	const emailInput = document.getElementById("email");
	const addButton = document.getElementById("test-ride-btn");
	const previewList = document.getElementById("preview-list");
	const completeList = document.getElementById("complete-list");

	addButton.addEventListener(`click`, onSubmit);

	function onSubmit(e) {
		const color = colorInput.value;
		const model = modelInput.value;
		const datetime = dateTimeInput.value;
		const name = nameInput.value;
		const email = emailInput.value;

		if (!color || !model || !datetime || !name || !email) {
			return;
		}
		const prevList = createLiElement(color, model, datetime, name, email);
		previewList.appendChild(prevList);

		e.currentTarget.setAttribute("disabled", "disabled");

		clear(colorInput, modelInput, dateTimeInput, nameInput, emailInput);
	}

	function clear(...fields) {
		fields.forEach((el) => (el.value = ""));
	}

	function createBtnListener(classes, text, handler) {
		const btn = document.createElement("button");
		btn.classList.add(classes);
		btn.textContent = text;
		btn.addEventListener("click", handler);
		return btn;
	}

	function createLiElement(color, model, datetime, name, email) {
		const liElement = document.createElement("li");

		const article = createArticleElement(color, model, datetime, name, email);
		liElement.appendChild(article);

		// previewList.appendChild(liElement);

		// const editBtn = document.createElement("button");
		// editBtn.classList.add("edit-btn");
		// editBtn.textContent = "Edit";

		// const nextBtn = document.createElement("button");
		// nextBtn.classList.add("next-btn");
		// nextBtn.textContent = "Next";

		const editBtn = createBtnListener("edit-btn", "Edit", onEdit);
		const nextBtn = createBtnListener("next-btn", "Next", onNext);

		liElement.appendChild(editBtn);
		liElement.appendChild(nextBtn);
		return liElement;
	}

	function createArticleElement(color, model, datetime, name, email) {
		const pColor = document.createElement("p");
		pColor.textContent = `Color: ${color}`;

		const pModel = document.createElement("p");
		pModel.textContent = `Model: ${model}`;

		const pName = document.createElement("p");
		pName.textContent = `For: ${name}`;

		const pEmail = document.createElement("p");
		pEmail.textContent = `Contact: ${email}`;

		const pDatetime = document.createElement("p");
		pDatetime.textContent = `Test Ride On: ${datetime}`;

		const article = document.createElement("article");

		article.appendChild(pColor);
		article.appendChild(pModel);
		article.appendChild(pName);
		article.appendChild(pEmail);
		article.appendChild(pDatetime);

		return article;
	}
	function onEdit(e) {
		const li = e.currentTarget.parentElement;

		const pList = li.querySelectorAll("p");

		const [color, model, name, datetime, email] = Array.from(pList).map((el) => {
			const [key, value] = el.textContent.split(": ");
			return value;
		});
		colorInput.value = color;
		modelInput.value = model;
		dateTimeInput.value = datetime;
		nameInput.value = name;
		emailInput.value = email;

		addButton.removeAttribute("disabled");
		li.remove();
	}

	function onNext(e) {
		completeList.appendChild(previewList);

		li.remove();
	}
}
