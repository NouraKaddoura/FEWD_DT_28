var name = "";

document.getElementById('do').onclick = sayHello;

function sayHello() {
    console.log("Hello!");
    document.getElementById('something').innerHTML = 'Hello!';
}

function changeBackground() {
    document.body.style.backgroundColor = '#f0ad4e';
}

function moveDown() {
    document.getElementById('do').style.position = 'relative';
    document.getElementById('do').style.top = '200px';
}

// There is a CSS style called "visibility" that when set to "hidden", it hides the DOM element
// Write a function that will make the "do" button disappear