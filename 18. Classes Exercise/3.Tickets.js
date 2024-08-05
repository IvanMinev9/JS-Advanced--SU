function tickets(arrOfData, sortCriteria) {
	const listOfTickets = [];
	class Tickets {
		constructor(destination, price, status) {
			this.destination = destination;
			this.price = Number(price);
			this.status = status;
		}
		static sort(arr, sortCriteria) {
			return arr.sort((a, b) => {
				return sortCriteria === "price"
					? a[sortCriteria] - b[sortCriteria]
					: a[sortCriteria].localeCompare(b[sortCriteria]);
			});
		}
	}

	for (let el of arrOfData) {
		const [destination, price, status] = el.split("|");

		const currTick = new Tickets(destination, price, status);
		listOfTickets.push(currTick);
	}

	return Tickets.sort(listOfTickets, sortCriteria);
}

const result = tickets(
	[
		"Philadelphia|94.20|available",
		"New York City|95.99|available",
		"New York City|95.99|sold",
		"Boston|126.20|departed",
	],
	"destination"
);

console.log(result);
