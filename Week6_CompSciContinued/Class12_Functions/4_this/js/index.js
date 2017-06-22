//Declare & Assign Variables
var yourName = "";
var theirName = "";
var buttonValue = "";

//Access Variables
$('#yourName').html(yourName);
$('#theirName').html(theirName);

//Handle Events
$('.addLastName').on('click', function(){
    buttonValue = $(this).val();

    // What is the value of buttonValue?
    // Well it depends on which button was clicked! How cool!
    console.log(buttonValue);

    // Let's access the addText function below and pass it two variables

});

//Declare a Function
function addText(id, textToAdd)
{
    // This won't work
    //var localName = id;

    // This will
    //var localName = eval(id);

    // We are accessing 2 types of variables in our function:
    // id & textToAdd which are variables passed into the function (aka a parameter)
    // localName which is a local variable
    $('#' + id).html(localName + " " + textToAdd);
}

