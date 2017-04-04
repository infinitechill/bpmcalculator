function calculateTimes(bpm){
	WholeNote(bpm)
	HalfNote(bpm)
	QuarterNote(bpm)
	EighthNote(bpm)
	SixteenthNote(bpm)
}

function WholeNote(bpm){
	var node = document.getElementById("wholenote");
	node.innerHTML = 240/bpm;
}

function HalfNote(bpm){
	var node = document.getElementById("halfnote");
	node.innerHTML = (120/bpm)
}

function QuarterNote(bpm){
	var node = document.getElementById("quarternote");	
	node.innerHTML = (60/bpm)
}

function EighthNote(bpm){
	var node = document.getElementById("eighthnote");	
	node.innerHTML = (30/bpm)
}

function SixteenthNote(bpm){
	var node = document.getElementById("sixteenthnote");	
	node.innerHTML = (15/bpm)
}


function buttonClicked(){
	var bpm = document.getElementById('bpm').value
	// call function to calculate and fill in values
	calculateTimes(bpm);
}
