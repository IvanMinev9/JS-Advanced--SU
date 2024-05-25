function colorize2() {
	const evenRows = document.querySelectorAll(`table tr:nth-child(even)`);

	for (const el of evenRows) {
		el.style.backgroundColor = `teal`;
	}
	console.log(`ACTIVE2`);
}
