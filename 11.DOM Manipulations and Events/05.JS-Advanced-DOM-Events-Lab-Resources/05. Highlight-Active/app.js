function focused() {
	const focElement = document.querySelectorAll(`div div input`);

	for (let el of focElement) {
		el.addEventListener(`focus`, (e) => {
			e.target.parentNode.classList.add(`focused`);
		});

		el.addEventListener(`blur`, (e) => {
			e.target.parentNode.classList.remove(`focused`);
		});
	}
}
