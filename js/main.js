// var ball = document.querySelector(".ball")
// var leftbtn = document.querySelector(".leftbtn")
// var rightbtn = document.querySelector(".righttbtn")

// leftbtn.addEventListener('click',function(){
//   ball.style.left = '80%';
// });



var ball = document.querySelector(".ball")

var rightbtn =document.querySelector(".rightbtn")
var leftbtn =document.querySelector(".leftbtn")


rightbtn.addEventListener('click' , function(){ 
    ball.style.left = '79%';


});

leftbtn.addEventListener('click', function () {
    ball.style.left = '0%';
});