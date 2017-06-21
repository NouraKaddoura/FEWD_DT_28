//Variables
var quantity = 0;

//Access Variables / default functions
$('#iWantCandy').hide();
$('#iHaveCandy').hide();
$('#iHateCandy').hide();

//Events
$('#yesToCandy').on('click', function(){
    $('#iWantCandy').show();
    $('#iHateCandy').hide();
});

$('#noToCandy').on('click', function(){
    $('#iHateCandy').show();
    $('#iWantCandy').hide();
});

$('#giveMeCandy').on('click', function(){
    quantity = $('#piecesOfCandy').val();

    $('#quantity').html(quantity);
    $('#iHaveCandy').show();
});