function printNumbers(from, to) {
	if (from < to) {
		let timerId = setTimeout(function print(a) {
			console.log(a);
			if (a < to) {
				timerId = setTimeout(print, 1000, a+1);
			}
		}, 0, from);
	}
}

let a = parseInt(prompt("From:"))
let b = parseInt(prompt("To:"))
printNumbers(a, b);
