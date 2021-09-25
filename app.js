// Mobile menu toggle
const toggleMenu = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggleMenu.addEventListener("click", ()=> {
    menu.classList.toggle('open')
    toggleMenu.classList.toggle('open')
})


// Header scrolled class
const header = document.querySelector('header');

var myScrollFunc = function() {
    var y = window.scrollY;
    
    if (y >= 100) {  
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')

    }    

  
  };
  
  window.addEventListener("scroll", myScrollFunc);