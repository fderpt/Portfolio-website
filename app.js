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

  const link1 = document.getElementById('link1')
  const link2 = document.getElementById('link2')
  const link3 = document.getElementById('link3')
  const text1 = document.getElementById('text1')
  const text2 = document.getElementById('text2')
  const text3 = document.getElementById('text3')

  const textLinks = document.getElementById('texts-links')

  textLinks.addEventListener("click", e => {     

      if(e.target.id === 'link1') {
        link1.classList.add("active");
        link2.classList.remove("active");
        link3.classList.remove("active");   
        text1.style.display = 'block';
        text2.style.display = 'none';
        text3.style.display = 'none';
      }

      if(e.target.id === 'link2') {
        link1.classList.remove("active");
    link2.classList.add("active");
    link3.classList.remove("active");   
    text1.style.display = 'none';
    text2.style.display = 'block';
    text3.style.display = 'none';
      }

      if(e.target.id === 'link3') {
        link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.add("active");   
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'block';
      }
  })

//   text2.style.display = 'none';
//   text3.style.display = 'none';

//   link1.addEventListener("click", () => {
//       link1.classList.add("active");
//       link2.classList.remove("active");
//       link3.classList.remove("active");   
//       text1.style.display = 'block';
//       text2.style.display = 'none';
//       text3.style.display = 'none';
//   })

//   link2.addEventListener("click", () => {
//     link1.classList.remove("active");
//     link2.classList.add("active");
//     link3.classList.remove("active");   
//     text1.style.display = 'none';
//     text2.style.display = 'block';
//     text3.style.display = 'none';
// })

// link3.addEventListener("click", () => {
//     link1.classList.remove("active");
//     link2.classList.remove("active");
//     link3.classList.add("active");   
//     text1.style.display = 'none';
//     text2.style.display = 'none';
//     text3.style.display = 'block';
// })