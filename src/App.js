import React from 'react';

var logo = 'https://toppng.com/uploads/preview/the-flash-cw-logo-png-flash-logo-transparent-background-11562928638xytciqj3el.png'

function App() {
  return (
    <div class="App">
      <div class="header">
        <div className="left">
          {/* <a href="#"><img src={logo} /></a> */}
          <div>Fake Company</div>
        </div>
        <div class="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
        </div>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
      <div class="main">

      </div>
    </div>
  );
}

export default App;