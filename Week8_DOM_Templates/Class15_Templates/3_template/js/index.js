var products    = ['apples', 'oranges', 'bananas', 'kiwi', 'carrots', 'grapes'];
var details     = [
    'This is a delicious apple',
    'I love oranges! They are the best.',
    'Bananas are the safest fruit to eat unorganicly.',
    'Why do kiwis have hair?',
    'Carrots are the best'
];
var images      = ['apples.png'];
var prices      = [1.25, 1.00, .19, .75, .50, 2.00];
var inventories = [100, 15, 30, 500, 100, 2];
var cart        = [0, 0, 0, 0, 0];
var total       = 0;

$(function(){
    //Add products to the store
    $.each(products, function(i,v)
    {
        var string = "";

        string +='<div class="col-xs-2">';
        string +='  <div class="product">';

        var image = images[i] || 'default.jpg';
        string +='      <img class="img-thumbnail" src="./images/' + image + '"/>';
        

        string +='      <div class="title">' + products[i] + '</div>';
        string +='      <div class="price">' + currencyFormat(prices[i]) + '</div>';
        string +='      <div class="details">' + details[i] + '</div>';
        string +='      <div class="quantity">Quantity';
        string +=           buildSelect(i);
        string +='      </div>';
        string +='      <button class="btn btn-success" value=' + i +   '>Add to Cart</button>';
        string +='  </div>';
        string +='</div>';

        $('#products').append(string);
    });

    //Add product event
    $('#products').on('click', '.btn', function(button){
        var i = $(this).val();
        var quantity = parseInt($('#' + products[i] + 'Select').val());
        var price = prices[i];

        //Add quantity to cart
        cart[i] = cart[i] + quantity;

        //Add (quantity * price) to total
        total = total + (quantity * price);

        console.log(total, cart);
    });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cart[i];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }
    });

    //Checkout
    $('#checkout').on('click', function(){
        console.log("Checking out");
        $('#checkoutModal').modal();
    });

    $('.nav a').on('click', function(){
        var _opened = $(".navbar-collapse").hasClass("collapse in");
        if (_opened === true) {
            $('.navbar-toggle').click();
        }
    });

});

function buildSelect(i)
{
    var product = products[i];
    var inventory = inventories[i];
    var string = '';

    string +='          <select id="' + product + 'Select">';
    var max = inventory || 0;
    for(var j = 1; j <= max; j++)
    {
        string += '<option value=' + j + '>' + j + '</option>';
    }
    string +='          </select>';

    return string;
}

function currencyFormat(number)
{ 
    currency = "$" + number.toFixed(2);
    return currency;
}
