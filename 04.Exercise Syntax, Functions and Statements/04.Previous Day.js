function date(year, month, day) {
	let prevDate = new Date(year, month - 1, day);

	prevDate.setDate(prevDate.getDate() - 1);
	console.log(
		`${prevDate.getFullYear()}-${prevDate.getMonth() + 1}-${prevDate.getDate()}`
	);
}

date(2016, 9, 30);
date(2015, 5, 10);
