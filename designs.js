//Global Variables.
//const vairable cannot be changed or reassigned
////let variable can be changed or reassigned anytime
/*const table = document.getElementById("pixelCanvas");
doesn't work when makeGrid() calLed, so used a jQuery #id which does work*/
/*The dollar function, $(), used as shorthand for getElementById function*/
const table = $('#pixelCanvas');
const submit = document.getElementById('sub');

// Select color input
/*https://api.jquery.com/ useful resource for this function which I found
difficult*/
/*Functions stored in variables do not need function names.
They are always invoked (called) using the variable name.*/
function pickAColor() {
  $('td').on('click', function() {
  let color = colorPicker.value;
  $(this).attr('style', 'background-color' + ':' + color);
  });
}

// When size is submitted by the user, call makeGrid()
//Lesson 10, W3schools and MDN Web Docs was a useful reference
submit.addEventListener('click', function(event) {
  event.preventDefault();
  makeGrid();
  pickAColor();
});

// Select size input
function makeGrid() {
  //designs.js:18 Uncaught ReferenceError: $ is not defined
  //added jQuery to HTML learned from Lesson 8
  //also played with getElementById.value
  let userRow = document.getElementById('inputHeight').value;
  let userCol = document.getElementById('inputWidth').value;
  //Resets - removes any previous grids
  table.children().remove();

  for (let i = 0; i < userRow; i++) {
    table.append('<tr></tr>');

    for (let j = 0; j < userCol; j++) {
      table.children().last().append('<td></td>');
    }
  }
}
/*Style Guide
http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html */
