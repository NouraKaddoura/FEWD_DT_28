var lights = "on";

$('#lightSwitch').click(function(){
    console.log(lights);
    if(lights === "on")
    {
        $('#lightSwitch').attr('src','./images/off.png');
        $('body').removeClass('blue');
        $('body').addClass('dark');
        lights = "off";
    } else {
        $('#lightSwitch').attr('src','./images/on.png');
        $('body').removeClass('dark');
        lights = "on";
    }
});