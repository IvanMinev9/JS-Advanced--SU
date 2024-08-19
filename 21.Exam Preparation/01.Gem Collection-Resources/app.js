window.addEventListener("load", solve);

function solve() {
  const gemName = document.getElementById("gem-name");
  const colorElement = document.getElementById("color");
  const caratsElement = document.getElementById("carats");
  const priceElement = document.getElementById("price");
  const typeElement = document.getElementById("type");
  const addButton = document.getElementById("add-btn");
  const previewList = document.getElementById("preview-list");
  const collectionElement = document.getElementById("collection");

  addButton.addEventListener("click", addButtonClickHandler);

  function addButtonClickHandler(e) {
    const inputElements = [gemName, colorElement, caratsElement, priceElement, typeElement];

    if (inputElements.some((el) => el.value === ``)) {
      return;
    }

    const previewElements = createPreviewElements(gemName.value, color.value, carats.value, price.value, type.value);
    previewList.appendChild(previewElements);

    e.currentTarget.setAttribute(`disabled`, `disabled`);

    inputElements.forEach((el) => (el.value = ``));
  }

  function createPreviewElements(name, color, carats, price, type) {
    const nameInput = document.createElement("h4");
    nameInput.textContent = `${name}`;

    const colorInput = document.createElement("p");
    colorInput.textContent = `Color: ${color}`;

    const caratsInput = document.createElement("p");
    caratsInput.textContent = `Carats: ${carats}`;

    const priceInput = document.createElement("p");
    priceInput.textContent = `Price: ${price}$`;

    const typeInput = document.createElement("p");
    typeInput.textContent = `Type: ${type}`;

    const articleElement = document.createElement("article");

    articleElement.appendChild(nameInput);
    articleElement.appendChild(colorInput);
    articleElement.appendChild(caratsInput);
    articleElement.appendChild(priceInput);
    articleElement.appendChild(typeInput);

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save to Collection";

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Information";

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";

    const liElement = document.createElement("li");
    liElement.classList.add("gem-info");

    liElement.appendChild(articleElement);
    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(cancelBtn);

    editBtn.addEventListener("click", (e) => {
      gemName.value = name;
      colorElement.value = color;
      caratsElement.value = carats;
      priceElement.value = price;
      typeElement.value = type;

      e.currentTarget.parentElement.remove();

      addButton.removeAttribute(`disabled`);
    });

    saveBtn.addEventListener("click", (e) => {
      const collectionParagraph = document.createElement("p");
      collectionParagraph.classList.add("collection-item");

      collectionParagraph.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

      const collectionLiItem = document.createElement("li");
      collectionLiItem.appendChild(collectionParagraph);

      collectionElement.appendChild(collectionLiItem);

      e.currentTarget.parentElement.remove();

      addButton.removeAttribute(`disabled`);
    });

    cancelBtn.addEventListener("click", (e) => {
      e.currentTarget.parentElement.remove();

      addButton.removeAttribute("disabled");
    });

    return liElement;
  }
}
