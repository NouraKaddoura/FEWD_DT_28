var cities = ['los angeles','new york','sydney'];

console.log(cities);

// Notice how .html() is a function?
$('#myArray').html(cities);

// Here is another function:
// $.each()
// this function takes two variables: the array and a callback function
$.each(cities, function(index, value){
    console.log(index, value);
});

// You know callback functions! All of the .on() functions use them
$('#myButton').on('click', function(clickEvent){
    console.log("Say Hi!");
});