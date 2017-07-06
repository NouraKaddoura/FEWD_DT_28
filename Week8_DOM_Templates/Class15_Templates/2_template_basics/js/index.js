$(function(){

    // Build your arrays

    var products    = ['apples'];
    //var products    = ['apples', 'oranges', 'bananas', 'kiwi', 'carrots'];
    var details     = [
        'This is a delicious apple',
        'I love oranges! They are the best.',
        'Bananas are the safest fruit to eat unorganicly.',
        'Why do kiwis have hair?',
        'Carrots are the best'
    ];
    var images      = ['apples.png'];
    var prices      = [1.25, 1.00, .19, .75, .50];
    var cart        = [];
    var cartCounter = [0, 0, 0, 0, 0];

    // Add products to the store
    $.each(products, function(index, value){
        var string = "";
        
        // once we have a product design we like, "templatize" it here
        string +='<div class="col-xs-2">';
        string +='  <div class="product">';

        // This is the shorthand way of doing this:
        /*
            var image = "";
            if(images[index])
            {
                image = images[index];
            } else {
                image = "default.jpg";
            }
        */
        var image = images[index] || 'default.jpg';

        string +='      <img class="img-thumbnail" src="./images/' + image + '"/>';
        string +='      <div class="title">' + products[index] + '</div>';
        string +='      <div class="price">' + prices[index] + '</div>';
        string +='      <div class="details">' + details[index] + '</div>';
        string +='      <div class="quantity">Quantity';
        string +='          <select id="applesSelect">';
        string +='              <option value=1>1</option>';
        string +='              <option value=2>2</option>';
        string +='              <option value=3>3</option>';
        string +='          </select>';
        string +='      </div>';
        string +='      <button class="btn btn-success" value=' + index +   '>Add to Cart</button>';
        string +='  </div>';
        string +='</div>';

        $('#products').append(string);
    });

    //Add product event
    $('#products').on('click', '.btn', function(button){
        // Get the value of "this" button and assign it to index
        var index = $(this).val();
        // Add +1 to the cartCounter for that index
        cartCounter[index]++;
    });

});