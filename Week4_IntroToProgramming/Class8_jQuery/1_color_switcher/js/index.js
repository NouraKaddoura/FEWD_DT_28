/*
*** JavaScript ***

document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;
document.getElementById('reset').onclick = reset;

function switchBlue() {
    document.body.style.backgroundColor = '#337ab7';
    document.body.style.color = 'white';
    console.log("Send message");
}

function switchYellow() {
    document.body.style.backgroundColor = '#f0ad4e';
    document.body.style.color = 'black';
    console.log("Switched to yellow");
}

function reset() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    console.log("reset");
}
*/

/*
*** jQuery IS JavaScript ***
*/

/* Events */
$('#blueButton').on('click', switchBlue);

$('#yellowButton').on('click', switchYellow);

/* Functions */
function switchBlue(){
    $('body').css('backgroundColor','#337ab7');
    $('body').css('color','white');
}

function switchYellow(){
    $('body').css('backgroundColor','#f0ad4e');
    $('body').css('color','black');
}



