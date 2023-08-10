import React from 'react'
import './Landing.css'
import SideCard from './SIdeCard'
import G from "./l.gif"
import NewLanding from './NewLanding'
import FeatureOne from '../ExtraPages/FeatureOne'

function Landing() {
  return (
   <>
       <div className='main-container-flash'>
  <section class="showcase">
    <header>
      <h2 class="logo">Flash Flip</h2>
      <div class="toggle"></div>
    </header>
    <video src="https://traversymedia.com/downloads/videos/explore.mp4" muted loop autoplay></video>
    {/* <div class="overlay"></div> */}
    <div class="text">
      <h2>Learn. Flip. </h2> 
      <h3>Master!</h3>
      <p>Welcome to FlahCards, where learning becomes an exciting journey! Explore interactive flashcards
         designed to enhance your knowledge effortlessly. Embrace a fun and effective way to master key
          concepts across various subjects. 
        Unleash your true potential with FlahCards and spark a passion for continuous learning!</p>
      <a href="/new">Explore</a>
    </div>
    <ul class="social">
      <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" /></a></li>
      <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" /></a></li>
      <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" /></a></li>
    </ul>

    <section className='side-card-container'>
     <img src={G} />
     {/* Hello */}
  </section>
  </section>
  {/* <div class="menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Destination</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div> */}
    </div>

   </>
  )
}

export default Landing