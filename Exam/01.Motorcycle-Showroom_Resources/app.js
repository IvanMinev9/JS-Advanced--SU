window.addEventListener("load", solve);

function solve() {
  document.querySelector("form").addEventListener("click", onSubmit);

  const colorInputRef = document.getElementById("colors");
  const modelInputRef = document.getElementById("motorcycles");
  const dateTimeInputRef = document.getElementById("datetime");
  const fullNameInputRef = document.getElementById("full-name");
  const emailInputRef = document.getElementById("email");

  function onSubmit(e) {
    const color = colorInputRef.value;
    const model = modelInputRef.value;
    const dateTime = dateTimeInputRef.value;
    const fullName = fullNameInputRef.value;
    const email = emailInputRef.value;

    if (!color || !model || !dateTime || !fullName || !email) {
      return;
    }
  }

  function createLi(color, model, dateTime, fullName, email) {
    const liElement = document.createElement("li");
  }

  function createArticle(color, model, dateTime, fullName, email) {
    const article = document.createElement("article");

    const pColor = document.createElement("p");
    pColor.textContent = `Color: ${color}`;
  }
}
