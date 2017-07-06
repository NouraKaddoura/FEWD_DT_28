$(function(){
    var products    = ['apples', 'oranges', 'bananas', 'kiwi', 'carrots', 'grapes'];
    var details     = ['Apples are delicious', 'Oranges are yummy'];
    var prices      = [1.25, 1.00, .19, .75, .50, 2.00];
    var cart        = [0, 0, 0, 0, 0];

    //Add products to the store
    $.each(products, function(i,v)
    {
        var string = "";

        string += '<div class="col-xs-2">';
        string += '<img class="img-thumbnail" src="./images/apples.png"/>';
        string += '<div class="title">' + products[i] + '</div>';
        string += '<div class="details">This is a delicious apple</div>';
        string += '<div class="price">' + currencyFormat(prices[i]) + '</div>';
        string += '<div class="quantity">1</div>';
        string += '<button class="btn btn-success" value=' + i + '>Add to Cart</button>';
        string += '</div>';

        $('#products').append(string);
    });

    //Add product event
    $('#products').on('click', '.btn', function(button){
        var index = $(this).val();
        cart[index]++;
        console.log(cart);
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

function buildSelect(index)
{
    var string = '';
    
    return string;
}

function currencyFormat(number)
{ 
    currency = "$" + number.toFixed(2);
    return currency;
}
