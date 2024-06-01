function solve() {
	document.querySelector("#btnSend").addEventListener("click", onClick);

	const textFieldRef = document.querySelector(`textarea`);
	const bestRestRef = document.querySelector(`#bestRestaurant p`);
	const workersRef = document.querySelector(`#workers p`);

	function createWorkerList(data) {
		const result = {};

		for (let el of data) {
			let [workerName, salary] = el.split(` `);
			const workers = { name: workerName, salary: salary };

			result.push(workers);
		}
		return result;
	}

	function concatWorkers(currWorkerList, newWorkerList) {
		return currWorkerList.concat(newWorkerList);
	}

	function onClick() {
		const data = textFieldRef.value;
		const restData = JSON.parse(data);
		const result = {};

		for (let el of restData) {
			const { restName, workerList } = el.split(` - `);

			if (!result.hasOwnProperty(restName)) {
				result[restName] = {
					avgSalary: 0,
					bestSalary: 0,
					workers: [],
				};
			}
			const workerData = workerList.split(`, `);
			const finalWorkers = createWorkerList(workerData);
			result[restName].workers = concatWorkers(
				result[restName].workers,
				finalWorkers
			);
		}
	}
	function calcRestSalary(workerList) {
		const result = {
			avgSalary: 0,
			bestSalary: 0,
		};

		let sum = 0;

		for (let el of workerList) {
			let [name, salary] = el;
			salary = Number(salary);
			if (result.bestSalary < salary) {
				result.bestSalary = salary;
			}
			sum += salary;
		}
		result.avgSalary = sum / workerList.length;

		return result;
	}
}

/*
["PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660"]

*/
