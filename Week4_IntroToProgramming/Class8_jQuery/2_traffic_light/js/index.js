$('#greenButton').click(function(){
    resetLights();
    $('#greenLight').css('background-color','green');
});

$('#yellowButton').click(function(){
    resetLights();
    $('#yellowLight').css('background-color','yellow');
});

$('#redButton').click(function(){
    resetLights();
    $('#redLight').css('background-color','red');
});

$('#resetButton').click(function(){
    resetLights();
});


function resetLights()
{
    $('.bulb').css('background-color','black');
}