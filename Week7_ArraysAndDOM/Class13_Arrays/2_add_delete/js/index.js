// Define our variables
var cities = [];
cities[0] = 'Los Angeles';
cities[1] = 'New York';
cities[2] = 'Sydney';

//Is there a function to easily add?
cities.push("Miami");

// Add another city!

// Now lets remove "Sydney"
//.splice(index, number_of_items_to_remove)
cities.splice(2, 1);

// If we uncomment the next line what city will it remove?
//cities.splice(0,1);
// If we uncomment the next line how many cities will be on our list?
//cities.splice(0);

// Append to the DOM
$.each(cities, function(index, value){
    $('#myCities').append('<li class="list-group-item">' + value + '</li>');
});

// Handle Events
$('#addCity').on('click', function(){
    //We'll do this together
});

