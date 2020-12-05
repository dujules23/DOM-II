// Your code goes here

//Nav mouseover to blue
const nav = document.querySelector('.nav')
// console.log(nav);

nav.addEventListener('mouseover', function(e){
    e.target.style.color = "blue";


    setTimeout(function(){
        e.target.style.color = "";

    }, 500);

}, false);


//Main picture scales when you scroll against; includes a preventDefault();
const introImg = document.querySelector('.intro img');
// console.log(introImg);

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    introImg.style.transform = `scale(${scale})`;
  }

let scale = 1;
introImg.addEventListener('wheel', zoom);






