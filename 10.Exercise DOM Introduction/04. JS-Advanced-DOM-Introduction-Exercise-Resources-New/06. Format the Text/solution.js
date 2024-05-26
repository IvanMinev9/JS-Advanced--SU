function solve() {
	const textArea = document.getElementById(`input`);
	const textOutput = document.getElementById(`output`);

	const incomeText = textArea.value.split(`.`).filter((el) => el.length > 0);

	for (let i = 0; i < incomeText.length; i += 3) {
		let result = [];

		for (let j = 0; j < 3; j++) {
			if (!incomeText[i + j]) {
				break;
			}

			result.push(incomeText[i + j]);
		}

		let p = document.createElement(`p`);
		p.textContent = result.join(`. `) + `.`;
		textOutput.appendChild(p);
	}
}
