let inp1 = document.querySelector('#inp1'), 
	inp2 = document.querySelector('#inp2'), 
	btn1 = document.querySelector('#btn1'), 
	btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', function(e) {
	inp1.value = 'chicken sandwich';
})

btn2.addEventListener('click', function(e) {
	alert(inp2.value);
})