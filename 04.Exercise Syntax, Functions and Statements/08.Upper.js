function upperCase(text) {
	let upperText = text.toUpperCase();
	let text1 = upperText.split(/\W+/);
	let filterText = text1.filter((x) => !!x);
	console.log(filterText.join(`, `));
}
upperCase("Hi, how are you?");
