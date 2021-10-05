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

  // What we believe in texts

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

  // FAQ
  const q1 = document.getElementById('q-text1');
  const q2 = document.getElementById('q-text2');
  const q3 = document.getElementById('q-text3');
  const q4 = document.getElementById('q-text4');
  const q5 = document.getElementById('q-text5');
  const q6 = document.getElementById('q-text6');
  const q7 = document.getElementById('q-text7');
  const q8 = document.getElementById('q-text8');
  const q9 = document.getElementById('q-text9');
  const q10 = document.getElementById('q-text10');  

  const answer1 = document.getElementById('answer1');
  const answer2 = document.getElementById('answer2');
  const answer3 = document.getElementById('answer3');
  const answer4 = document.getElementById('answer4');
  const answer5 = document.getElementById('answer5');
  const answer6 = document.getElementById('answer6');
  const answer7 = document.getElementById('answer7');
  const answer8 = document.getElementById('answer8');
  const answer9 = document.getElementById('answer9');
  const answer10 = document.getElementById('answer10');

  const icon1 = document.getElementById('icon1');
  const icon2 = document.getElementById('icon2');
  const icon3 = document.getElementById('icon3');
  const icon4 = document.getElementById('icon4');
  const icon5 = document.getElementById('icon5');
  const icon6 = document.getElementById('icon6');
  const icon7 = document.getElementById('icon7');
  const icon8 = document.getElementById('icon8');
  const icon9 = document.getElementById('icon9');
  const icon10 = document.getElementById('icon10');

  const questionContainer = document.getElementById('question-container')
  
  questionContainer.addEventListener("click", e => {
    if(e.target.dataset.num === "1") {
      answer1.classList.toggle("open")
      answer2.classList.remove("open")
      answer3.classList.remove("open")
      answer4.classList.remove("open")
      answer5.classList.remove("open")    
      icon1.classList.toggle("open");
      q1.classList.toggle("open");
    }

    if(e.target.dataset.num === "2") {
      answer2.classList.toggle("open")
      answer1.classList.remove("open")
      answer3.classList.remove("open")
      answer4.classList.remove("open")
      answer5.classList.remove("open")      
      icon2.classList.toggle("open");
      q2.classList.toggle("open");
    }

    if(e.target.dataset.num === "3") {
      answer3.classList.toggle("open")
      answer1.classList.remove("open")
      answer2.classList.remove("open")
      answer4.classList.remove("open")
      answer5.classList.remove("open")      
      icon3.classList.toggle("open");
      q3.classList.toggle("open");
    }

    if(e.target.dataset.num === "4") {
      answer4.classList.toggle("open")
      answer2.classList.remove("open")
      answer3.classList.remove("open")
      answer1.classList.remove("open")
      answer5.classList.remove("open")    
      icon4.classList.toggle("open");
      q4.classList.toggle("open");
    }

    if(e.target.dataset.num === "5") {
      answer5.classList.toggle("open")
      answer2.classList.remove("open")
      answer3.classList.remove("open")
      answer4.classList.remove("open")
      answer1.classList.remove("open")     
      icon5.classList.toggle("open");
      q5.classList.toggle("open");
    }

    if(e.target.dataset.num === "6") {
      answer6.classList.toggle("open")    
      icon6.classList.toggle("open");
      q6.classList.toggle("open");
    }

    if(e.target.dataset.num === "7") {
      answer7.classList.toggle("open")    
      icon7.classList.toggle("open");
      q7.classList.toggle("open");
    }

    if(e.target.dataset.num === "8") {
      answer8.classList.toggle("open")    
      icon8.classList.toggle("open");
      q8.classList.toggle("open");
    }

    if(e.target.dataset.num === "9") {
      answer9.classList.toggle("open")    
      icon9.classList.toggle("open");
      q9.classList.toggle("open");
    }

    if(e.target.dataset.num === "10") {
      answer10.classList.toggle("open")    
      icon10.classList.toggle("open");
      q10.classList.toggle("open");
    }
  })

 