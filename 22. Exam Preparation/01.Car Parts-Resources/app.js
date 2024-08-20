window.addEventListener("load", solve);

function solve() {
  document.querySelector("form").addEventListener("submit", onSubmit);
  const carModelReference = document.getElementById("car-model");
  const carYearReference = document.getElementById("car-year");
  const partNameReference = document.getElementById("part-name");
  const partNumberReference = document.getElementById("part-number");
  const conditionReference = document.getElementById("condition");
  const infoList = document.querySelector(".info-list");
  const nextBtn = document.getElementById("next-btn");
  const confirmRef = document.querySelector(".confirm-list");

  function onSubmit(e) {
    e.preventDefault();

    const carModel = carModelReference.value;
    const carYear = carYearReference.value;
    const partName = partNameReference.value;
    const partNumber = partNumberReference.value;
    const condition = conditionReference.value;

    if (!carModel || !carYear || !partName || !partNumber || !condition || !(carYear >= 1980 || carYear <= 2023)) {
      return;
    }

    const li = createLi(carModel, carYear, partName, partNumber, condition);
    infoList.appendChild(li);

    clearField(carModelReference, carYearReference, partNameReference, partNumberReference, conditionReference);

    nextBtn.setAttribute("disabled", "disabled");
  }

  function clearField(...fields) {
    fields.forEach((el) => (el.value = ""));
  }

  function createLi(carModel, carYear, partName, partNumber, condition) {
    const liElement = document.createElement("li");
    liElement.classList.add("part-content");

    const articleElement = createArticle(carModel, carYear, partName, partNumber, condition);

    const editBtn = createBtnNListener("edit-btn", "Edit", onEdit);
    const continueBtn = createBtnNListener("continue-btn", "Continue", onContinue);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);

    return liElement;
  }

  function createBtnNListener(classes, text, handler) {
    const btn = document.createElement("button");
    btn.classList.add(classes);
    btn.textContent = text;
    btn.addEventListener("click", handler);

    return btn;
  }

  function createArticle(carModel, carYear, partName, partNumber, condition) {
    const article = document.createElement("article");

    const pCarModel = document.createElement("p");
    pCarModel.textContent = `Car Model: ${carModel}`;

    const pCarYear = document.createElement("p");
    pCarYear.textContent = `Car Year: ${carYear}`;

    const pPartName = document.createElement("p");
    pPartName.textContent = `Part Name: ${partName}`;

    const pPartNumber = document.createElement("p");
    pPartNumber.textContent = `Part Number: ${partNumber}`;

    const pCondition = document.createElement("p");
    pCondition.textContent = `Condition: ${condition}`;

    article.appendChild(pCarModel);
    article.appendChild(pCarYear);
    article.appendChild(pPartName);
    article.appendChild(pPartNumber);
    article.appendChild(pCondition);

    return article;
  }

  function onEdit(e) {
    const li = e.currentTarget.parentElement;

    const pList = li.querySelectorAll("p");
    const [carModel, carYear, partName, partNumber, condition] = Array.from(pList).map((el) => {
      const [key, value] = el.textContent.split(": ");
      return value;
    });
    carModelReference.value = carModel;
    carYearReference.value = carYear;
    partNameReference.value = partName;
    partNumberReference.value = partNumber;
    conditionReference.value = condition;

    li.remove();

    nextBtn.removeAttribute("disabled");
  }

  function onContinue(e) {
    const li = e.currentTarget.parentElement;

    confirmRef.appendChild(li);
    Array.from(li.querySelectorAll("button")).forEach((button) => button.remove());

    const confirmBtn = createBtnNListener("confirm-btn", "Confirm", OnConfirm);
    const cancelBtn = createBtnNListener("confirm-btn", "Cancel", OnCancel);

    li.appendChild(confirmBtn);
    li.appendChild(cancelBtn);
  }

  function OnConfirm(e) {
    e.currentTarget.parentElement.remove();

    nextBtn.removeAttribute("disabled");
    document.getElementById("complete-img").style.visibility = visible;
  }

  function OnCancel(e) {
    e.currentTarget.parentElement.remove();

    nextBtn.removeAttribute("disabled");
  }
}
