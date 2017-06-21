//Declare & Assign Variables
var name = "";
var age = 0;
var random_fact = "";
var funny_fact = "";
var show_funny_fact = true;

//Access Variables
$('#name').html("no answer");
$('#age').html("no answer");
$('#fact').html("no answer");


//Handle Events
$('#changeName').on('click', function(){
    //How could we change the value of $('#name')?
});

$('#changeAge').on('click', function(){
    //Step 1: re-assign the variable age to a different value
    //Step 2: set the value of $('#age') to the variable age
});

$('#changeFact').on('click', function(){
    if(show_funny_fact) {
        //Step 1: set the value of $('#fact') to the variable funny_fact
        //Step 2: set the value of show_funny_fact to false
    } else {
        //Step 3: set the falue of $('#fact') to the variable random_fact
        //Step 4: set the value of show_funny_fact to true
    }
});

