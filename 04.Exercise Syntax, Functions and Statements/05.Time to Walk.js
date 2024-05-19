function timeToWalk(steps, meters, speedInKm) {
	let distMet = steps * meters;
	let speedMetSec = speedInKm / 3.6;
	let time = distMet / speedMetSec;
	let rest = Math.floor(distMet / 500);

	let timeMin = Math.floor(time / 60);
	let timeSec = Math.round(time - timeMin * 60);
	let timeHr = Math.floor(time / 3600);

	console.log(
		(timeHr < 10 ? "0" : "") +
			timeHr +
			":" +
			(timeMin + rest < 10 ? "0" : "") +
			(timeMin + rest) +
			":" +
			(timeSec < 10 ? "0" : "") +
			timeSec
	);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
