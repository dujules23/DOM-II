// Your code goes here

//Mouseover - changes the color of nav items to blue
const nav = document.querySelector('.nav')
// console.log(nav);

nav.addEventListener('mouseover', function(e){
    e.target.style.color = "blue";
    e.preventDefault();
    e.stopPropagation();
    setTimeout(function(){
        e.target.style.color = "";

    }, 500);

}, false);


//Main picture scales when you scroll against; includes a preventDefault();
const introImg = document.querySelector('.intro img');
// console.log(introImg);

function zoom(event) {
    event.preventDefault();
    event.stopPropagation();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    introImg.style.transform = `scale(${scale})`;
  }

let scale = 1;
introImg.addEventListener('wheel', zoom);


//Load - Loads Message 
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
  // Can only be used on <input type = "text"> or <textarea>

  
  const desH4 = document.querySelectorAll('.destination h4');
  // console.log(desH4);

  desH4.forEach( desH4 => {
    desH4.addEventListener('select', e =>{
      const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
      desH4.textContent = `You Selected: ${selection} `
      e.stopPropagation();
    });

  })
 

//Dblclick

const signUp = document.querySelectorAll('.btn');
// console.log(signUp);

signUp.forEach(signUp => {
    signUp.addEventListener('dblclick', e => {

      e.target.style.color = "red";
      e.stopPropagation();
    })

})
  


//focus and blur

const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('focus', (e) => {
  e.target.style.color = 'pink';   
  e.stopPropagation() 
}, true);

logoHeading.addEventListener('blur', (e) => {
  e.target.style.color = '';
  e.stopPropagation()
}, true);

//click 
//When you click sign up, It will show a message " Sign Up Count : Number"

const button = document.querySelectorAll('.btn');
// console.log(button);

button.forEach( button => {
  button.addEventListener('click', e => {
    button.innerHTML = ` Sign up count: ${e.detail}`
    e.stopPropagation();
  })
})


