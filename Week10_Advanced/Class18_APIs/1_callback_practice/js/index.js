$(function(){

    // Set a variable
    var instant_pour = false;
    var breakfast_type = "";

    // Handle events
    $('#getBreakfast').on('click', function(){
        // Declare & assign a local variable
        var bowl = [];

        // Access a global variable
        breakfast_type = "Asynch"; 

        // Invoke functions
        start();
        pour('Almond Milk', bowl);
        pour('Frosted Flakes', bowl);
        eat(bowl);
    });

    $('#getCallbackBreakfast').on('click', function(){
        // Declare & assign a local variable
        var bowl = [];

        // Access a global variable
        breakfast_type = "Blocking";

        // Invoke functions
        start();
        pour('Almond Milk', bowl, function(bowlWithStuff){
            pour('Frosted Flakes', bowl, function(bowlWithMoreStuff){
                eat(bowlWithStuff);
            });
        });
    });

    // Function definitions
    function start()
    {
        //Reset actions & results
        $('#actions').html('<li class="list-group-item active">On your mark...get set...' + breakfast_type + ' BREAKFAST!</li>');
        $('#actions').append('<li class="list-group-item" id="cartoons">Turn on cartoons</li>')
        $('#results').html('<li class="list-group-item active">Your are gonna eat a bowl full of the following:</li>');
    }

    function pour(food, bowl, callback)
    {
        // Instantly pour food into the bowl
        if(instant_pour)
        {
            $('#actions').append('<li class="list-group-item">Pour ' + food + ' into the bowl</li>');

            //Add food to the bowl array
            bowl.push(food);

            //If there is a callback function variable...invoke it and pass the bowl
            if(typeof(callback) === "function")
            {
                callback(bowl);
            }

        // Wait 2 seconds and THEN pour food into the bowl
        } else {
            setTimeout(function () {
                $('#actions').append('<li class="list-group-item">Pour ' + food + ' into the bowl</li>');

                //Add food to the bowl array
                bowl.push(food);

                //If there is a callback function variable...invoke it and pass the bowl
                if(typeof(callback) === "function")
                {
                    callback(bowl);
                }
            }, 2000);
        }
    }

    function eat(bowl)
    {
        $('#actions').append('<li class="list-group-item">Eat</li>');

        // See if anything is in the bowl array
        if(bowl.length > 0)
        {
            // If so, iterate the array
            $.each(bowl, function(key, index){
                $('#results').append('<li class="list-group-item">' + index + '</li>');
            });
            $('#results').append('<li class="list-group-item">...and you are HAPPY!</li>');

        // Otherwise go be...sad :(
        } else {
            $('#results').append('<li class="list-group-item">NOTHING!</li>');
            $('#results').append('<li class="list-group-item">...and you are SAD!</li>');
        }
    }
    
});
