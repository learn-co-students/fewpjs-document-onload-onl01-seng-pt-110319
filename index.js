// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  changeText()
  
});

function changeText(){
 text = document.getElementById('text')
 text.innerHTML='This is really cool!'
}