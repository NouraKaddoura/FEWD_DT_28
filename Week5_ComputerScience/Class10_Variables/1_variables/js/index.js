var variable = "Hello";

function showVariable(showWhateverIsPassedHere)
{
   $('#variable').html(showWhateverIsPassedHere);
   $('#type').html(typeof(showWhateverIsPassedHere)); 
}

showVariable(variable);

/*
$('#fromStringToInt').on('click',function(){
    console.log(variable);
    var newVariable = parseInt(variable);
    console.log(newVariable);
    showVariable(newVariable);
});
*/