$(function(){

    // Build your arrays
    var products = [];

    // Add products to the store
    $.each(products, function(index, value){
        var string = "";
        
        // once we have a product design we like, "templatize" it here

        $('#products').append(string);
    });

});