//CASH REGISTER
/*
WTF is this very first anonymous function?!?
*/
$(function(){
    
    //Declare and assign global variables
    var total = 0;

    //Event Handler
    $("#register").on('submit', function(submitEvent){

        //Prevent the form from submitting
        submitEvent.preventDefault();

        //Declare and assign local variables
        var itemCost = $("#entry").val();
        var formattedCost = "";
        var formattedTotal = "";

        //Assign new values
        itemCost = parseFloat(itemCost);
        formattedCost = currencyFormat(itemCost);
        total = total + itemCost;
        formattedTotal = currencyFormat(total);

        //Update the DOM
        $("#itemRow").append('<div class="col-xs-12">' + formattedCost + "</div>");
        $("#entry").val("");
        $("#total").html(formattedTotal);
    });


});

function currencyFormat(number){ 
    currency = "$" + number.toFixed(2);
    return currency;
}



