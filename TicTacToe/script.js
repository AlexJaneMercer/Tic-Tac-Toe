window.onload = function() {
	window.setInterval(function(){

		const date = new Date();

		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let milliseconds = date.getMilliseconds();

		if (hours < 10){
			hours = "0" + hours;	
		} 
		if (minutes < 10){
			minutes = "0" + minutes;	
		} 
		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		if (milliseconds < 100) {
			milliseconds = "0" + milliseconds;
		}

		if (milliseconds < 10) {
			milliseconds = "00" + milliseconds;
		}

		const time = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

		document.getElementById("time").innerHTML = time;
	},100);
}

const win = document.getElementById("win-spot");
const grid = document.getElementById("wrapper");

const g1 = document.getElementById("g1");
g1.addEventListener('click', (e) => {
		if (e.shiftKey) {
			g1.innerHTML = `<img class="images-krug" src="krug.png">`;
		}
		else{
			g1.innerHTML = `<img class="images-ix" src="ix.png">`;
		}
check_krug();
check_ix();			
})		

const g2 = document.getElementById("g2");
g2.addEventListener('click', (e) => {
		if (e.shiftKey) {
			g2.innerHTML = `<img class="images-krug" src="krug.png">`;
		}
		else{
			g2.innerHTML = `<img class="images-ix" src="ix.png">`;
		}
check_krug();
check_ix();			
})		

const g3 = document.getElementById("g3");
g3.addEventListener('click', (e) => {
		if (e.shiftKey) {
			g3.innerHTML = `<img class="images-krug" src="krug.png">`;
		}
		else{
			g3.innerHTML = `<img class="images-ix" src="ix.png">`;
		}
check_krug();
check_ix();			
})		

const g4 = document.getElementById("g4");
g4.addEventListener('click', (e) => {
		if (e.shiftKey) {
			g4.innerHTML = `<img class="images-krug" src="krug.png">`;
		}
		else{
			g4.innerHTML = `<img class="images-ix" src="ix.png">`;
		}
check_krug();
check_ix();	
})		

const g5 = document.getElementById("g5");
g5.addEventListener('click', (e) => {
		if (e.shiftKey) {
			g5.innerHTML = `<img class="images-krug" src="krug.png">`;
		}
		else{
			g5.innerHTML = `<img class="images-ix" src="ix.png">`;
		}	
check_krug();
check_ix();		
})		

const g6 = document.getElementById("g6");
g6.addEventListener('click', (e) => {
		if (e.shiftKey) {
			g6.innerHTML = `<img class="images-krug" src="krug.png">`;
		}
		else{
			g6.innerHTML = `<img class="images-ix" src="ix.png">`;
		}			
check_krug();
check_ix();
})		

const g7 = document.getElementById("g7");
g7.addEventListener('click', (e) => {
		if (e.shiftKey) {
			g7.innerHTML = `<img class="images-krug" src="krug.png">`;
		}
		else{
			g7.innerHTML = `<img class="images-ix" src="ix.png">`;
		}
check_krug();
check_ix();			
})		

const g8 = document.getElementById("g8");
g8.addEventListener('click', (e) => {
		if (e.shiftKey) {
			g8.innerHTML = `<img class="images-krug" src="krug.png">`;
		}
		else{
			g8.innerHTML = `<img class="images-ix" src="ix.png">`;
		}	
check_krug();
check_ix();		
})		

const g9 = document.getElementById("g9");
g9.addEventListener('click', (e) => {
		if (e.shiftKey) {
			g9.innerHTML = `<img class="images-krug" src="krug.png">`;
		}
		else{
			g9.innerHTML = `<img class="images-ix" src="ix.png">`;
		}	
check_krug();
check_ix();		
})		

function check_krug() {
	if (g1.innerHTML == `<img class="images-krug" src="krug.png">` && 
		g2.innerHTML == `<img class="images-krug" src="krug.png">` &&
		g3.innerHTML == `<img class="images-krug" src="krug.png">` ||

		g4.innerHTML == `<img class="images-krug" src="krug.png">` && 
		g5.innerHTML == `<img class="images-krug" src="krug.png">` &&
		g6.innerHTML == `<img class="images-krug" src="krug.png">` ||

		g7.innerHTML == `<img class="images-krug" src="krug.png">` && 
		g8.innerHTML == `<img class="images-krug" src="krug.png">` &&
		g9.innerHTML == `<img class="images-krug" src="krug.png">` ||

		g1.innerHTML == `<img class="images-krug" src="krug.png">` && 
		g4.innerHTML == `<img class="images-krug" src="krug.png">` &&
		g7.innerHTML == `<img class="images-krug" src="krug.png">` ||

		g2.innerHTML == `<img class="images-krug" src="krug.png">` && 
		g5.innerHTML == `<img class="images-krug" src="krug.png">` &&
		g8.innerHTML == `<img class="images-krug" src="krug.png">` ||

		g3.innerHTML == `<img class="images-krug" src="krug.png">` && 
		g6.innerHTML == `<img class="images-krug" src="krug.png">` &&
		g9.innerHTML == `<img class="images-krug" src="krug.png">` ||

		g1.innerHTML == `<img class="images-krug" src="krug.png">` && 
		g5.innerHTML == `<img class="images-krug" src="krug.png">` &&
		g9.innerHTML == `<img class="images-krug" src="krug.png">` ||

		g3.innerHTML == `<img class="images-krug" src="krug.png">` && 
		g5.innerHTML == `<img class="images-krug" src="krug.png">` &&
		g7.innerHTML == `<img class="images-krug" src="krug.png">` ) {

		win.innerHTML = "Нолики выиграли!";
		win.style.color = "red";
		grid.style.pointerEvents = "none";
	}
}


function check_ix() {
	if (g1.innerHTML == `<img class="images-ix" src="ix.png">` && 
		g2.innerHTML == `<img class="images-ix" src="ix.png">` &&
		g3.innerHTML == `<img class="images-ix" src="ix.png">` ||

		g4.innerHTML == `<img class="images-ix" src="ix.png">` && 
		g5.innerHTML == `<img class="images-ix" src="ix.png">` &&
		g6.innerHTML == `<img class="images-ix" src="ix.png">` ||

		g7.innerHTML == `<img class="images-ix" src="ix.png">` && 
		g8.innerHTML == `<img class="images-ix" src="ix.png">` &&
		g9.innerHTML == `<img class="images-ix" src="ix.png">` ||

		g1.innerHTML == `<img class="images-ix" src="ix.png">` && 
		g4.innerHTML == `<img class="images-ix" src="ix.png">` &&
		g7.innerHTML == `<img class="images-ix" src="ix.png">` ||

		g2.innerHTML == `<img class="images-ix" src="ix.png">` && 
		g5.innerHTML == `<img class="images-ix" src="ix.png">` &&
		g8.innerHTML == `<img class="images-ix" src="ix.png">` ||

		g3.innerHTML == `<img class="images-ix" src="ix.png">` && 
		g6.innerHTML == `<img class="images-ix" src="ix.png">` &&
		g9.innerHTML == `<img class="images-ix" src="ix.png">` ||

		g1.innerHTML == `<img class="images-ix" src="ix.png">` && 
		g5.innerHTML == `<img class="images-ix" src="ix.png">` &&
		g9.innerHTML == `<img class="images-ix" src="ix.png">` ||

		g3.innerHTML == `<img class="images-ix" src="ix.png">` && 
		g5.innerHTML == `<img class="images-ix" src="ix.png">` &&
		g7.innerHTML == `<img class="images-ix" src="ix.png">` ) {

		win.innerHTML = "Крестики выиграли!";
		win.style.color = "blue";
		grid.style.pointerEvents = "none";
	}
}
