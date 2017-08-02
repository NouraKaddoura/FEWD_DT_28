$(function(){

    $('#showVariable').on('click', function(){
        var variable = $('#variable').val(); //will always be a "string"

        //can you convert it to an integer?
        variable = parseInt(variable);

        //can you add 1 to it?

        //can you add 10 to it?

        //can you turn it into a string?

        //can you add " is awesome" to the it?
        variable += " is awesome";
        
        $('#output').text(variable);
    });

});
