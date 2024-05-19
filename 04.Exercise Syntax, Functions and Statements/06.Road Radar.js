function roadRadar(speed, area) {
	let info = ``;
	let status = ``;
	let speedLimit = 0;
	let speedDifference = 0;

	switch (area) {
		case `motorway`:
			speedLimit = 130;
			break;
		case `interstate`:
			speedLimit = 90;
			break;
		case `city`:
			speedLimit = 50;
			break;
		case `residential`:
			speedLimit = 20;
			break;
	}

	if (speed <= speedLimit && speed > 0) {
		info = `Driving ${speed} km/h in a ${speedLimit} zone`;
	} else {
		speedDifference = speed - speedLimit;
		if (speedLimit >= 20) {
			status = `speeding`;
			info = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
		} else if (speedDifference > 20 && speedLimit <= 40) {
			status = `excessive speeding`;
			info = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
		} else {
			status = `reckless driving`;
			info = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
		}
	}
	console.log(info);
}

roadRadar(40, "city");
console.log(`----------------`);
roadRadar(21, "residential");
console.log(`----------------`);
roadRadar(120, "interstate");
console.log(`----------------`);
roadRadar(200, "motorway");
