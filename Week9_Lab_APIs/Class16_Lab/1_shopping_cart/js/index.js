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
        //Clear the cart items
        $('#items').html('');

        //Build the cart
        $.each(products,function(index, value) {
            var count = cart[index];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += value;
                string += '<button class="btn btn-danger btn-xs remove pull-right" value=' + index + '>Remove</button>'
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#items').append(string);
            }
        });
    });

    //Remove item event
    $('#cart').on('click', '.remove', function(){
        var index = $(this).val();

        //Select the parent and remove it from the DOM
        //Hint: You're gonna need this, parent() and remove() :)

        //Use the index to add items back into the inventory

        //Use the index to reset the count

        console.log(index);
    });

    //Checkout event
    $('#checkout').on('click', function(){
        console.log("Checking out");
        $('#checkoutModal').modal();
    });

    //This is so that on a small menu it closes once you select a menu item
    $('.nav a').on('click', function(){
        var _opened = $(".navbar-collapse").hasClass("collapse in");
        if (_opened === true) {
            $('.navbar-toggle').click();
        }
    });

});

function buildSelect(i)
{
    // i will be the index that gets passed in when buildSelect is invoked
    var product = products[i];
    var inventory = inventories[i];
    var string = '';

    /*
    The lines below will create something like this:
        <select id="applesSelect">
            <option value=1>1</option>
            <option value=2>2</option>
            etc...
        </select>
    There will be an <option></option> up to the max value of "inventory"
    */
    string +='<select id="' + product + 'Select">';
    var max = inventory || 0;
    for(var count = 1; count <= max; count++)
    {
        string += '<option value=' + count + '>' + count + '</option>';
    }
    string +='</select>';

    return string;
}

function currencyFormat(number)
{ 
    currency = "$" + number.toFixed(2);
    return currency;
}
