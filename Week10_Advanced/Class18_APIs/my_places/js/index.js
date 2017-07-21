$(function(){

    //Click event handling
    $('#lookup').on('click', function(clickEvent){
        //Set variables
        var keyword = $('#keyword').val(); // From the html
        var address = $('#address').val(); // From the html
        var encoded_address = encodeURIComponent(address);
        var request_url = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + encoded_address

        //Make an API request to the request_url and write an anonymous function to handle the response
        $.get(request_url,function(response){
            var lat = response["results"][0]["geometry"]["location"]["lat"];
            var lng = response["results"][0]["geometry"]["location"]["lng"];

            //Display in the html
            $('#lat').html(lat);
            $('#long').html(lng);

            //Create a position object with lat & lng
            var position = { lat: lat, lng: lng };

            //Invoke loadMap and pass it position and keyword
            loadMap(position, keyword);
        });
    });
});

//Declare global variables
var map;
var infowindow;

//The Callback function we tell Google to call once the map script is loaded
function loadMap(position, keyword) {

    //I'll show you all other ways to set default values on Thursday
    //If position is empty, set the value
    if(!position)
    {
        position = { lat: 34.0478914, lng: -118.2401423 };
    }

    //If keyword is empty, set the value
    if(!keyword)
    {
        keyword = 'store';
    }

    //Create the initial map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: position
    });

    //Add the places - notice the use of position and keyword below
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.textSearch({location: position, radius: 500, query:keyword}, callback);
}

//This is the function definition for the callback in line 58
function callback(results, status) {
    //If there are places
    if (status === google.maps.places.PlacesServiceStatus.OK) {

        //Iterate the results and pass each result to the createMarker function
        //This could also be a $.each()
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

//Function definition that adds each place to the map
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}




