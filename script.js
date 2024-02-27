const btn = document.querySelector('.circle');
const text = document.querySelector('.text'); 

btn.addEventListener("click", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
    
    text.style.color = text.style.color === 'white' ? 'black' : 'white';
});

let moveRight = false;
function move() {
    var div = document.getElementById("myDiv");

    if(!moveRight){
    div.style.transform = "translateX(100px)";
    }else{
    div.style.transform = "none";
    }
    moveRight = !moveRight;

    }
