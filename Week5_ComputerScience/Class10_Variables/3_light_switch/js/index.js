/* assigns a value to our lights variable */
var lights = 'off';

$('#lightSwitch').click(function(){

    if(lights === "on")
    {
        $('#lightSwitch').attr('src','./images/off.png');
        $('body').addClass('dark');
    } else {
        $('#lightSwitch').attr('src','./images/on.png');
        $('body').removeClass('dark');
    }
});

//Can you write a function that changes the color of the light?
