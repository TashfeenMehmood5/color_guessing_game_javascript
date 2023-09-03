
// get id Function
var id = (id) => document.getElementById(id);
// query to select all ids
var query = (query) => document.querySelectorAll(query);
// get all selections
var square = query('.square');
var color_display = id('color-display');
var playAgain = id('play-again');
var newColor = id('new-color');
var result = id('result');
var header = id('header');

//////////////////////////////////////////////////////////////////////////


//empty array to push random colors
var colors = [];

//Generate colors
GenerateColor();
function GenerateColor() {
    var i;
    for(i=0; i<square.length ; i++){
        colors.push(
            `rgb(${Math.floor(Math.random()*255)} , ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)} )`
        );
    }
}

//Assign colors
AssignColor();
function AssignColor()
 {
    var j;
    for(j=0 ; j<square.length ; j++){
        square[j].style.backgroundColor = colors[j];
        square[j].setAttribute("data-color",colors[j])
    }  
}
//Show random color on screen 
var picked_color = Get_Random_Color();
function Get_Random_Color() {
    var random_color = colors[Math.floor(Math.random()*square.length)];
    color_display.innerText = random_color;
    return random_color;
}

//check color selected by user is correct? if not fade the color of that square
Check_Color();
function Check_Color(){
var i, j ;
for(i=0 ; i< square.length ; i++){
   square[i].onclick = function(){
    var getColor = this.getAttribute("data-color");
    if(getColor == picked_color)
        {
              for( j = 0; j<square.length ; j++){
                square[j].style.opacity = "1";
                square[j].style.backgroundColor = picked_color;

              }
            playAgain.innerHTML = "Play Again";
            header.style.background = picked_color;  
            result.innerText = "Correct";
        }
    else{
        result.innerText = "Wrong";
        this.classList.add("fade");
    }


   }
  }
}

// button to add new colors
newColor.onclick = function(){
    Reset();
}
// button to play again
playAgain.onclick = function(){
    Reset();
}

// Reset function
function Reset(){
    window.location = location.href;
}





