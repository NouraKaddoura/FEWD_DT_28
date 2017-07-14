$(function(){

    var meals = {
        'breakfast': ['eggs','cereal','toast'],
        'lunch': ['blt','chicken sandwhich', 'fries'],
        'dinner': ['pasta','steak','chicken']
    }

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#buildButton').click(function(clickEvent){
      
        //Iterate meals array
        $.each(meals,function(meal, items){
            $('#' + meal + ' h3').html(meal);
            $('#' + meal + ' ul').html('');
            $.each(items, function(index, value) {
                $('#' + meal + ' ul').append('<li class="list-group-item">' + value + '</li>');
            });
        });
    });
});