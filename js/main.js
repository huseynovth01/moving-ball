var ball = document.querySelector(".ball")
var leftbtn = document.querySelector(".leftbtn")
var rightbtn = document.querySelector(".rightbtn")

leftbtn.addEventListener('click',function(){
  ball.style.left = '0%';

});
rightbtn.addEventListener('click',function(){
    ball.style.left = '88%';
})
// document.addEventListener("DOMContentLoaded", function () {
//     const moveButton = document.getElementById("moveButton");
//     const ball = document.querySelector(".ball");
//     const container = document.querySelector(".container");
  
//     moveButton.addEventListener("click", function () {
//       const containerWidth = container.offsetWidth;
//       const ballWidth = ball.offsetWidth;
  
//       const currentPosition = ball.offsetLeft;
  
//       // Topu konteynerin sağına köçürmək
//       if (currentPosition + ballWidth <= containerWidth) {
//         ball.style.left = `${containerWidth - ballWidth}px`;
//       } else {
//         // Top konteynerin sağına çatdıqdan sonra, səhifə yeniləndikdə soldan başlayır
//         ball.style.left = '0';
//       }
//     });
//   });
  



