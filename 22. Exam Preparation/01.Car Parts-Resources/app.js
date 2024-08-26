window.addEventListener("load", solve);

function solve() {
  document.querySelector("form").addEventListener("submit", onSubmit);
  const carModelRef = document.getElementById("car-model");
  const carYearRef = document.getElementById("car-year");
  const partNameRef = document.getElementById("part-name");
  const partNumberRef = document.getElementById("part-number");
  const conditionRef = document.getElementById("condition");
  const partInfoRef = document.querySelector(".info-list");
  const nextBtn = document.getElementById("next-btn");
  const confirmRef = document.querySelector(".confirm-list");

  function onSubmit(e) {
    e.preventDefault();

    const carModel = carModelRef.value;
    const carYear = carYearRef.value;
    const partName = partNameRef.value;
    const partNumber = partNumberRef.value;
    const condition = conditionRef.value;

    if (!carModel || !carYear || !partName || !partNumber || !condition || !(carYear >= 1980 || carYear <= 2023)) {
      return;
    }

    const li = createLi(carModel, carYear, partName, partNumber, condition);
    partInfoRef.appendChild(li);

    clearField(carModelRef, carYearRef, partNameRef, partNumberRef, conditionRef);

    nextBtn.setAttribute("disabled", "disabled");

    document.getElementById("complete-img").style.visibility = "hidden";
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

    const pModel = document.createElement("p");
    pModel.textContent = `Car Model: ${carModel}`;

    const pYear = document.createElement("p");
    pYear.textContent = `Car Year: ${carYear}`;

    const pName = document.createElement("p");
    pName.textContent = `Part Name: ${partName}`;

    const pNumber = document.createElement("p");
    pNumber.textContent = `Part Number: ${partNumber}`;

    const pCondition = document.createElement("p");
    pCondition.textContent = `Condition: ${condition}`;

    article.appendChild(pModel);
    article.appendChild(pYear);
    article.appendChild(pName);
    article.appendChild(pNumber);
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
    carModelRef.value = carModel;
    carYearRef.value = carYear;
    partNameRef.value = partName;
    partNumberRef.value = partNumber;
    conditionRef.value = condition;

    li.remove();
    nextBtn.removeAttribute("disabled");
  }

  function onContinue(e) {
    const li = e.currentTarget.parentElement;

    confirmRef.appendChild(li);

    Array.from(li.querySelectorAll("button")).forEach((button) => button.remove());

    const confirmBtn = createBtnNListener("confirm-btn", "Confirm", onConfirm);
    const cancelBtn = createBtnNListener("cancel-btn", "Cancel", onCancel);

    li.appendChild(confirmBtn);
    li.appendChild(cancelBtn);
  }

  function onConfirm(e) {
    e.currentTarget.parentElement.remove();

    nextBtn.removeAttribute("disabled");
    document.getElementById("complete-text").textContent = "Part is Ordered!";
    document.getElementById("complete-img").style.visibility = "visible";
  }

  function onCancel(e) {
    e.currentTarget.parentElement.remove();

    nextBtn.removeAttribute("disabled");
  }
}
