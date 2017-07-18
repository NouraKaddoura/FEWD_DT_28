$(function(){

    $('#lookup').on('click', function(clickEvent){
        var address = $('#address').val();
        var encoded_address = encodeURIComponent(address);
        console.log("Without Encoding", $('#address').val());
        console.log("With Encoding", encoded_address);

        //The GET request that Google expects:
        //https://maps.googleapis.com/maps/api/geocode/json?&address=360%20E%202nd%20Street%2C%20Los%20Angeles%2C%20CA
        var request_url = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + encoded_address
        console.log(request_url);

        //Make an API request to the request_url and write an anonymous function to handle the response
        $.get(request_url,function(response){
            console.log(response);

            // var lat = response[][][][][];
            // or
            // var lat = response.value[index].value.value.value
            // NOT
            // var lat = response.value.value.value.value.value
            
            var lat = null;
            var lng = null;

            $('#lat').html(lat);
            $('#long').html(lng);

            $('#output').html(JSON.stringify(response, null, 2));
        });
    });

});