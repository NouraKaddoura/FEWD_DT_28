//Declare & Assign a GLOBAL variable
var age = 37;

//Declare Functions
function showYourLocalAge()
{
    //Declare and Assign a LOCAL variable
    var age = 40;
    console.log("Local", age);
    $('#yourAge').html(age);

    //We'll uncomment this together and see what happens!
    //showYourGlobalAge();
}

function showYourGlobalAge()
{
    //Access a GLOBAL variable
    console.log("Global", age);
    $('#yourAge').html(age);
}

//Invoke a Function
showYourLocalAge();