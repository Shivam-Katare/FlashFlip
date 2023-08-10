import React from 'react'
import './SideCard.css'

function SideCard() {
  return (
    <>
     <div class="bday-card">
  
  <div class="bday-decor--container">

    <div class="bday-pic "> 
      <img src="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80" />
    </div>

    <p class="bday-decor bday-decor--top-right float">🎈</p>
    <p class="bday-decor bday-decor--top-left spin">🌼</p>

  </div> 


  <h1 class="bday-banner">
    <span>Happy</span> <span>Birthday</span>
  </h1> 

  <div class="bday-message bday-message--paper">
    <p>Ana, yet another year that we get to celebrate together! Hope you have a great day, and may your new age be full of health, love and laughter. Love you loads <br /> Camila</p> 
    <p class="bday-decor bday-decor--bottom-right zoom-left-in-out">🎉</p>
  </div>

</div>


    </>
  )
}

export default SideCard