function calculateTimes(bpm){
	WholeNoteMillisseconds(bpm)
	HalfNoteMillisseconds(bpm)
	QuarterNoteMillisseconds(bpm)
	EighthNoteMillisseconds(bpm)
	SixteenthNoteMillisseconds(bpm)
	DottedQuarterMillisseconds(bpm)
	DottedEighthMillisseconds(bpm)
	DottedSixteenthMillisseconds(bpm)
	TripletQuarterMillisseconds(bpm)
	TripletEighthMillisseconds(bpm)
	TripletSixteenthMillisseconds(bpm)
	WholeNoteHertz(bpm)
	HalfNoteHertz(bpm)
	QuarterNoteHertz(bpm)
	EighthNoteHertz(bpm)
	SixteenthNoteHertz(bpm)
	DottedQuarterHertz(bpm)
	DottedEighthHertz(bpm)
	DottedSixteenthHertz(bpm)
	TripletQuarterHertz(bpm)
	TripletEighthHertz(bpm)
	TripletSixteenthHertz(bpm)
}

function WholeNoteMillisseconds(bpm){
	var node = document.getElementById("wholenotemilliseconds");
	node.innerHTML = (240/bpm)*1000;
}

function HalfNoteMillisseconds(bpm){
	var node = document.getElementById("halfnotemilliseconds");
	node.innerHTML = (120/bpm)*1000;
}

function QuarterNoteMillisseconds(bpm){
	var node = document.getElementById("quarternotemilliseconds");	
	node.innerHTML = (60/bpm)*1000;
}

function EighthNoteMillisseconds(bpm){
	var node = document.getElementById("eighthnotemilliseconds");	
	node.innerHTML = (30/bpm)*1000;
}

function SixteenthNoteMillisseconds(bpm){
	var node = document.getElementById("sixteenthnotemilliseconds");	
	node.innerHTML = (15/bpm)*1000;
}

function DottedQuarterMillisseconds(bpm){
	var node = document.getElementById("dottedquarternotemilliseconds");
	node.innerHTML = (90/bpm)*1000;
}

function DottedEighthMillisseconds(bpm){
	var node = document.getElementById("dottedeighthnotemilliseconds");
	node.innerHTML = (45/bpm)*1000;
}

function DottedSixteenthMillisseconds(bpm){
	var node = document.getElementById("dottedsixteenthnotemilliseconds");
	node.innerHTML = (22.5/bpm)*1000;
}

function TripletQuarterMillisseconds(bpm){
	var node = document.getElementById("tripletquarternotemilliseconds");
	node.innerHTML = (40/bpm)*1000;
}

function TripletEighthMillisseconds(bpm){
	var node = document.getElementById("tripleteighthnotemilliseconds");
	node.innerHTML = (20/bpm)*1000;
}

function TripletSixteenthMillisseconds(bpm){
	var node = document.getElementById("tripletsixteenthnotemilliseconds");
	node.innerHTML = (10/bpm)*1000;
}



function WholeNoteHertz(bpm){
	var node = document.getElementById("wholenotehertz");
	node.innerHTML = (bpm/240);
}

function HalfNoteHertz(bpm){
	var node = document.getElementById("halfnotehertz");
	node.innerHTML = (bpm/120);
}

function QuarterNoteHertz(bpm){
	var node = document.getElementById("quarternotehertz");	
	node.innerHTML = (bpm/60);
}

function EighthNoteHertz(bpm){
	var node = document.getElementById("eighthnotehertz");	
	node.innerHTML = (bpm/30);
}

function SixteenthNoteHertz(bpm){
	var node = document.getElementById("sixteenthnotehertz");	
	node.innerHTML = (bpm/15);
}

function DottedQuarterHertz(bpm){
	var node = document.getElementById("dottedquarternotehertz");
	node.innerHTML = (bpm/90);
}

function DottedEighthHertz(bpm){
	var node = document.getElementById("dottedeighthnotehertz");
	node.innerHTML = (bpm/45);
}

function DottedSixteenthHertz(bpm){
	var node = document.getElementById("dottedsixteenthnotehertz");
	node.innerHTML = (bpm/22.5);
}

function TripletQuarterHertz(bpm){
	var node = document.getElementById("tripletquarternotehertz");
	node.innerHTML = (bpm/40);
}

function TripletEighthHertz(bpm){
	var node = document.getElementById("tripleteighthnotehertz");
	node.innerHTML = (bpm/20);
}

function TripletSixteenthHertz(bpm){
	var node = document.getElementById("tripletsixteenthnotehertz");
	node.innerHTML = (bpm/10);
}


function buttonClicked(){
	var bpm = document.getElementById('bpm').value
	// call function to calculate and fill in values
	calculateTimes(bpm);
}
