import React from 'react';

function App() {
  
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')
    const navLinks = document.querySelectorAll('.nav a')


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, idx) => {
          if (link.style.animation) {
            link.style.animation = ''
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${idx / 7}s`;
          }
        })
        burger.classList.toggle('toggle');
    })
  }

  return (
    <div class="App">
      <div class="header">
        <div className="left">
          <div>Fake Company</div>
        </div>
        <div class="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
        </div>
        <div class="burger" onClick={navSlide}>
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;