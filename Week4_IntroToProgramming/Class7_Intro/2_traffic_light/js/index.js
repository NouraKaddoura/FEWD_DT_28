document.getElementById('greenButton').onclick = turnGreen;
document.getElementById('yellowButton').onclick = turnYellow;
document.getElementById('redButton').onclick = turnRed;
document.getElementById('resetButton').onclick = resetLights;

function turnGreen() {
 //resetLights();    
 document.getElementById('greenLight').style.backgroundColor = 'green';
}

function turnYellow() {
 //resetLights();    
 document.getElementById('yellowLight').style.backgroundColor = 'yellow';
}

function turnRed() {
 //resetLights();
 document.getElementById('redLight').style.backgroundColor = 'red';
}

function resetLights() {
 document.getElementById('greenLight').style.backgroundColor = 'black';
 document.getElementById('yellowLight').style.backgroundColor = 'black';
 document.getElementById('redLight').style.backgroundColor = 'black';
}