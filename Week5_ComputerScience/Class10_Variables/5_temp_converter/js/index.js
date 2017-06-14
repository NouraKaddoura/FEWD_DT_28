$(function(){
    
	$('button').click(function(submitEvent){
        submitEvent.preventDefault();
        var celsius = $('#celsius').val();
        var fahr = parseInt(celsius) * 1.8 +32;
        $('#fahrenheit').text(fahr);
        howDoesItFeel(celsius);
    });

    function howDoesItFeel(celsius)
    {
        if(celsius > 40)
        {
            console.log("HOT!");
        } else if (celsius <= 40 && celsius > 30) {
            console.log("Warm");
        } else if (celsius <= 30 && celsius > 20) {
            console.log("Cool");
        }
    }
});
