let sum = (x, y) => x+y;
let subtr = (x, y) => x-y;
let mult = (x, y) => x*y;
let divis = function(x, y) {
	if (y===0)
		return "You can't divide by zero(";
	return x/y
}

let a,b,c;

a = parseInt(prompt('Type first number'));
b = parseInt(prompt('Type second number'));
c = prompt('Type function (+, -, * or /)');

switch (c) {
	case '+' :
		console.log(sum(a, b));
		break;
	case '-' :
		console.log(subtr(a, b));
		break;
	case '*' :
		console.log(mult(a, b));
		break;
	case '/' :
		console.log(divis(a, b));
		break;
	default :
		console.log('Wrong symbol. Restart the page to do it again')
		break;
}
