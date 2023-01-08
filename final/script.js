let plans = document.querySelectorAll(".plans__plan"),
	planButtons = document.querySelectorAll(".plan__button"),
	burgerButton = document.querySelector(".header__burger"),
	headerContent = document.querySelector(".header__content"), 
	customersRadio = document.querySelectorAll(".customers__radio"),
	customersArrows = document.querySelectorAll(".arrow"),
	customersList = document.querySelectorAll(".customers__customer"),
	ch = 0;

function planChange(e) {
	for (var i = 0; i < plans.length; i++) {
		plans[i].classList.remove("active");
	}
	e.target.parentElement.classList.add("active");
}

function changeCustomer(ch) {
	console.log(ch);
	console.log(customersRadio[ch]);
	customersRadio[ch].checked = true;
	let d = 0;
	for (var i = 0; i < ch; i++) {
		d += customersList[ch].offsetWidth+50;
	}
	for (i = 0; i < customersList.length; i++) {
		customersList[i].style.transform = `translateX(${-d}px)`
	}
}

for (var i = 0; i < customersRadio.length; i++) {
	customersRadio[i].addEventListener("click", function(e) {
		if (e.target.checked == true) {
			ch = Array.prototype.indexOf.call(customersRadio, e.target);
			changeCustomer(ch);
		}
	})
}

customersArrows[0].addEventListener("click", function(e) {
	ch = Math.max(ch-1, 0);
	changeCustomer(ch);
})

customersArrows[1].addEventListener("click", function(e) {
	ch = Math.min(ch+1, 2);
	changeCustomer(ch);
})

for (var i = 0; i < planButtons.length; i++) {
	planButtons[i].addEventListener("click", planChange);
}

burgerButton.addEventListener("click", function (e) {
	headerContent.classList.toggle("active");
})
