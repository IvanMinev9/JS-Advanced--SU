function solve() {
	document.querySelector("#btnSend").addEventListener("click", onClick);
	const textArea = document.querySelector(`textarea`);
	const bestRest = document.querySelector(`#bestRestaurant p`);
	const workersRef = document.querySelector(`#workers p`);

	function onClick() {
		const data = textArea.value;
		const restData = JSON.parse(data);
		const result = {};

		for (let el of restData) {
			const [restName, workersList] = el.split(` - `);
			if (!result.hasOwnProperty(restName)) {
				result[restName] = {
					avgSalary: 0,
					bestSalary: 0,
					workers: [],
				};
			}
		}
	}
}

/*
["PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660"]

*/
