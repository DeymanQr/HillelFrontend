var cnv = document.querySelector("#cnv"),
	ctx = cnv.getContext("2d");

cnv.width = innerWidth; cnv.height = innerHeight

function clear() {
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, cnv.width, cnv.height);
}

function pict1() {
	ctx.fillStyle = "#0094ff";
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	ctx.fillStyle = "#00ce42";
	ctx.fillRect(0, cnv.height*.7, cnv.width, cnv.height*.2);
	ctx.fillStyle = "#680000";
	for (var i = 1; i < 20; i++) {
		ctx.fillRect(cnv.width*(.05*i-.003), cnv.height*.7, cnv.width*.006, cnv.height*2);
	}
	ctx.fillStyle = "#006321";
	ctx.fillRect(0, cnv.height*.9, cnv.width, cnv.height*.1);
	ctx.fillStyle = "#ce7300";
	ctx.fillRect(cnv.width*.35, cnv.height*.6, cnv.width*.3, cnv.height*.3);
	ctx.fillStyle = "#ce0000";
	ctx.beginPath();
	ctx.moveTo(cnv.width*.33, cnv.height*.6);
	ctx.lineTo(cnv.width*.4, cnv.height*.5);
	ctx.lineTo(cnv.width*.6, cnv.height*.5);
	ctx.lineTo(cnv.width*.67, cnv.height*.6);
	ctx.fill();
	ctx.fillStyle = ctx.strokeStyle = "#ffff00";
	ctx.lineCap = "round";
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.arc(cnv.width*.2, cnv.height*.2, cnv.height*.1, 0, Math.PI*2);
	ctx.fill();
	ctx.beginPath();
	for (var i = 0; i < 7; i++) {
		ctx.moveTo(cnv.width*.2 + cnv.height*.11*Math.cos(Math.PI*2*i/7), cnv.height*.2 + cnv.height*.11*Math.sin(Math.PI*2*i/7));
		ctx.lineTo(cnv.width*.2 + cnv.height*.17*Math.cos(Math.PI*2*i/7), cnv.height*.2 + cnv.height*.17*Math.sin(Math.PI*2*i/7));
	}
	ctx.stroke();
	ctx.fillRect(cnv.width*.37, cnv.height*.7, cnv.width*.05, cnv.width*.05);
	ctx.fillRect(cnv.width*.58, cnv.height*.7, cnv.width*.05, cnv.width*.05);
	ctx.fillStyle = "#fff";

	ctx.beginPath(); ctx.arc(cnv.width*.4, cnv.height*.1, cnv.width*.03, 0, Math.PI*2); ctx.fill();
	ctx.beginPath(); ctx.arc(cnv.width*.44, cnv.height*.11, cnv.width*.03, 0, Math.PI*2); ctx.fill();
	ctx.beginPath(); ctx.arc(cnv.width*.7, cnv.height*.14, cnv.width*.03, 0, Math.PI*2); ctx.fill();
	ctx.beginPath(); ctx.arc(cnv.width*.72, cnv.height*.12, cnv.width*.03, 0, Math.PI*2); ctx.fill();
	ctx.beginPath(); ctx.arc(cnv.width*.75, cnv.height*.16, cnv.width*.03, 0, Math.PI*2); ctx.fill();
}

function pict2() {
	ctx.strokeStyle = "#000";
	ctx.lineCap = "butt";
	ctx.lineWidth = 4;
	ctx.fillStyle = "#fe0000";
	ctx.beginPath();
	ctx.moveTo(cnv.width*.4, cnv.height*.7); ctx.lineTo(cnv.width*.5, cnv.height*.4); ctx.lineTo(cnv.width*.6, cnv.height*.7);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = "#008001";
	ctx.beginPath();
	ctx.moveTo(cnv.width*.2, cnv.height*.7); ctx.lineTo(cnv.width*.8, cnv.height*.7); ctx.lineTo(cnv.width*.7, cnv.height*.9); ctx.lineTo(cnv.width*.3, cnv.height*.9); ctx.lineTo(cnv.width*.2, cnv.height*.7);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = "#0080ff";
	ctx.beginPath(); 
	ctx.moveTo(cnv.width*.5, cnv.height*.4); ctx.lineTo(cnv.width*.5, cnv.height*.24); ctx.lineTo(cnv.width*.6, cnv.height*.24); ctx.lineTo(cnv.width*.57, cnv.height*.3); ctx.lineTo(cnv.width*.6, cnv.height*.36); ctx.lineTo(cnv.width*.5, cnv.height*.36);
	ctx.fill();
	ctx.stroke();
}

function pict3() {
	var d = Math.min(cnv.width*.8, cnv.height*.8)
	ctx.fillStyle = "#ffff00";
	ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.arc(cnv.width*.5, cnv.height*.5, d*.5, 0, Math.PI*2);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.ellipse(cnv.width*.5 - d*.2, cnv.height*.38, d*.08, d*.12, 0, 0, Math.PI*2);
	ctx.ellipse(cnv.width*.5 + d*.2, cnv.height*.38, d*.08, d*.12, 0, 0, Math.PI*2);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(cnv.width*.5, cnv.height*.55, d*.3, Math.PI*.1, Math.PI*.9)
	ctx.stroke();
}

pictures = [pict1, pict2, pict3];
ch = 0;

function m() {
	clear();
	pictures[ch]();
	ch++; ch %= pictures.length;
}

m()

setInterval(m, 5000);
