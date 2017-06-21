var lights = "on";

$('#lightSwitch').click(function(){
    console.log(lights);
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
