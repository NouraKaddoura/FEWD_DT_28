//Declare & Assign Variables
var yourName = "";
var buttonValue = "";

//Access Variables
$('#yourName').html(yourName);

//Handle Events
$('#addFun').on('click', function(){
    buttonValue = $('#addFun').val();
    console.log(buttonValue);
    
    // TODO: invoke the addText function and pass it buttonValue as a parameter

});

$('#addAwesome').on('click', function(){
    buttonValue = $('#addAwesome').val();
    console.log(buttonValue);
    
    // TODO: invoke the addText function and pass it buttonValue as a parameter

});

// TODO: After you add a button in the HTML, come back here and add a click event

//Declare a Function
function addText(textToAdd)
{
    $('#yourName').html(yourName + " " + textToAdd);
}

