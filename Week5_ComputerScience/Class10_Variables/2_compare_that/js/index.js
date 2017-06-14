
$('#submit').on('click',function(){

    //Hide the comparison symbol
    $('#comparison').hide();

    //Get the variables
    var stringA = $('#a').val();
    var stringB = $('#b').val();
    var intA = parseInt(stringA);
    var intB = parseInt(stringB);


    //Set the values we wanna check
    var value1 = stringA;
    var value2 = stringB;

    //Equals AND same type
    if(value1 === value2) {
        $('#comparison').text('===');

    //Equals BUT type is converted
    } else if(value1 == value2) {
        $('#comparison').text('==')

    //Greater than
    } else if (value1 > value2) {
        $('#comparison').text('>');

    //Less than
    } else if (value1 < value2) {
        $('#comparison').text('<');

    //Hmmmmmm
    } else {
        $('#comparison').text("?");
    }

    console.log('Strings', stringA, stringB);
    console.log('Integers', intA, intB);

    //Fade in the comparison symbol
    $('#comparison').fadeIn();
});