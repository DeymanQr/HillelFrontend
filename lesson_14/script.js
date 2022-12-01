let expires = new Date();
expires.setHours(expires.getHours() + 1);
// console.log(expires.getHours());
document.cookie = "name=Ostap;expires" + expires.toUTCString() + ';';
document.cookie = "age=15;expires" + expires.toUTCString() + ';';

let cookies = document.cookie.split(';')
for (var i = 0; i < cookies.length; i++) {
	let cookie = cookies[i].split('=');
	document.write(`<br><br>Name: ${cookie[0]}<br>`)
	document.write(`<br><br>Value: ${cookie[1]}<br><br>`)
}