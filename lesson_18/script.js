let h, m, s, alarmNull = true, alarmTime, music = new Audio("resources/old_car_horn.mp3"),
	hArrow = document.querySelector("#clock__hour"),
	mArrow = document.querySelector("#clock__min"),
	sArrow = document.querySelector("#clock__sec"),
	clockText = document.querySelector(".clock__text"),
	alarmInp = document.getElementsByClassName("inp"),
	alarmBtn = document.querySelector("#setAlarm");

for (var i = 23; i >= 0; i--) {
	alarmInp[0].firstElementChild.insertAdjacentHTML("afterend", `<option value="${i}">${i}</option>`);
}
for (var i = 59; i >= 0; i--) {
	alarmInp[1].firstElementChild.insertAdjacentHTML("afterend", `<option value="${i}">${i}</option>`);
}
for (var i = 59; i >= 0; i--) {
	alarmInp[2].firstElementChild.insertAdjacentHTML("afterend", `<option value="${i}">${i}</option>`);
}

let upd = () => {
	let time = new Date();
	h = time.getHours();
	m = time.getMinutes();
	s = time.getSeconds();
	hArrow.style.transform = `rotate(${h*30-90}deg)`;
	mArrow.style.transform = `rotate(${m*6-90}deg)`;
	sArrow.style.transform = `rotate(${s*6-90}deg)`;
	clockText.innerHTML = `${('0' + h).slice(-2)}:${('0' + m).slice(-2)}:${('0' + s).slice(-2)}`;
	if (alarmTime == `${h}:${m}:${s}`) {
		music.play();
		music.loop = true;
	}
}

function setAlarm() {
	if (!alarmNull) {
		music.pause();
		alarmBtn.innerText = "Add alarm";
		alarmTime = "";
		alarmNull = true;
	} else {
		let time = `${alarmInp[0].value}:${alarmInp[1].value}:${alarmInp[2].value}`;
		if (time.includes("hour") || time.includes("min") || time.includes("sec")) {
			alert("Спочатку виберіть параметри Будильника!!!");
		} else {
			alarmBtn.innerText = "Remove alarm";
			alarmTime = time;
			alarmNull = false;
		}
	}
}

upd();
setInterval(upd, 1000);
alarmBtn.addEventListener("click", setAlarm);
