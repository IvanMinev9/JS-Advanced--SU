window.addEventListener("load", solve);

function solve() {
  const inputElementGemName = document.getElementById(`gem-name`);
  const inputElementColor = document.getElementById(`color`);
  const inputElementCarats = document.getElementById(`carats`);
  const inputElementPrice = document.getElementById(`price`);
  const inputElementType = document.getElementById(`type`);
  const addButton = document.getElementById(`add-btn`);
  const previewList = document.getElementById(`preview-list`);
  const collectionItems = document.getElementById(`collection`);

  addButton.addEventListener(`click`, (e) => {
    const inputElements = [
      inputElementGemName,
      inputElementColor,
      inputElementCarats,
      inputElementPrice,
      inputElementType,
    ];

    if (inputElements.some((el) => el.value === ``)) {
      return;
    }

    const previewElements = createPreviewEl(
      inputElementGemName.value,
      inputElementColor.value,
      inputElementCarats.value,
      inputElementPrice.value,
      inputElementType.value
    );

    previewList.appendChild(previewElements);

    inputElements.forEach((e) => (e.value = ``));

    e.currentTarget.setAttribute(`disabled`, `disabled`);
  });

  function createPreviewEl(name, color, carats, price, type) {
    const nameElement = document.createElement(`h4`);
    nameElement.textContent = name;

    const colorElement = document.createElement(`p`);
    colorElement.textContent = `Color: ${color}`;

    const caratsElement = document.createElement(`p`);
    caratsElement.textContent = `Carats: ${carats}`;

    const priceElement = document.createElement(`p`);
    priceElement.textContent = `Price: ${price}$`;

    const typeElement = document.createElement(`p`);
    typeElement.textContent = `Type: ${type}`;

    const articleElement = document.createElement(`article`);

    articleElement.append(
      nameElement,
      colorElement,
      caratsElement,
      priceElement,
      typeElement
    );

    const saveButton = document.createElement(`button`);
    saveButton.classList.add(`save-btn`);
    saveButton.textContent = `Save to Collection`;

    const editButon = document.createElement(`button`);
    editButon.classList.add(`edit-btn`);
    editButon.textContent = `Edit Information`;

    const cancelButton = document.createElement(`button`);
    cancelButton.classList.add(`cancel-btn`);
    cancelButton.textContent = `Cancel`;

    const liElement = document.createElement(`li`);
    liElement.classList.add(`gem-info`);

    liElement.append(articleElement, saveButton, editButon, cancelButton);

    editButon.addEventListener(`click`, (e) => {
      inputElementGemName.value = name;
      inputElementColor.value = color;
      inputElementCarats.value = carats;
      inputElementPrice.value = price;
      inputElementType.value = type;

      addButton.removeAttribute(`disabled`);

      e.currentTarget.parentElement.remove();
    });

    saveButton.addEventListener(`click`, (e) => {
      const collectionParagraph = document.createElement(`p`);
      collectionParagraph.classList.add(`collection-item`);
      collectionParagraph.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}/ Type: ${type}`;

      const collectionItemList = document.createElement(`li`);
      collectionItemList.appendChild(collectionParagraph);

      collectionItems.appendChild(collectionItemList);

      e.currentTarget.parentElement.remove();

      addButton.removeAttribute(`disabled`);
    });

    cancelButton.addEventListener(`click`, (e) => {
      e.currentTarget.parentElement.remove();

      addButton.removeAttribute(`disabled`);
    });
    return liElement;
  }
}
