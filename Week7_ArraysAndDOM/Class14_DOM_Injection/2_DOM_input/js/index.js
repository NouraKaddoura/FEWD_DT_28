$(function(){

    //##### Injection from input #####
    $('#shoppingForm').on('submit', function(submitEvent){
        submitEvent.preventDefault();

        var item = $('#item').val();
        $('#item').val('');
        $('#shoppingList').append('<button class="item btn btn-lg btn-success">' + item + '</button>');
    });

    // Our first TAG selector
    $('button').on('click', function(clickEvent){
        console.log('A button was clicked');
    });

    // Use this selector
    $('#selfAware').on('click', function(clickEvent){
        //console.log( $(this).html() );
    });

    // Our first "on" event
    $('#shoppingList').on('click', 'button', function(clickEvent){
        //$(this).remove();
    });

});