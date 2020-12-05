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


//Load
window.addEventListener('load', () => {
    console.log("Welcome to the Fun Bus!");
})


//Resize
const imgContent = document.querySelector('.img-content img')
// console.log(imgContent);



window.addEventListener('resize', (imgContent) =>  {
    imgContent.textContent = window.innerWidth
})



window.addEventListener('resize', imgContent)


// Scroll
//Clicking on the footer will bring you back to the top of the page
const footer = document.querySelector('.footer');
console.log(footer);

footer.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
  };

  window.addEventListener('scroll', function() {
    footer.hidden = (pageYOffset < document.documentElement.clientHeight);
  });


  //Select

    function pSelection(e) {
    const log = document.querySelector('.destination');
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
   const desH4 = document.querySelector('.destination h4');
  console.log(desH4);
 desH4.addEventListener('select', pSelection);

 //Dblclick

 const signUp = document.querySelectorAll('.btn');
console.log(signUp);
// signUp.addEventListener('dblclick', function () {
//   signUp.style.color = "red";
//   console.log('Sign Up Here');
// });




