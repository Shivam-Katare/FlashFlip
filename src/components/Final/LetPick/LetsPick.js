import React from 'react'
import { MdOutlineQuiz } from "react-icons/md";
import './LetsPick.css'
import { Link } from 'react-router-dom';

function LetsPick() {
  return (
    <>
    <header className='lets-pick-header'>
      <h1>Discovery Deck</h1>
      <p>Choose a option from below and get started</p>
    </header>

    <div className='lets-pick-container'>
      <Link to="/codecard" class="lets-pick-card">
    <div class="lets-pick-card">
      <MdOutlineQuiz />
    <div class="lets-pick-card__content">
    <p class="lets-pick-card__title">QUEST
    </p><p class="lets-pick-card__description">A quick quest for knowledge through interactive multiple choice questions. Earn points and level up your skills.</p>
  </div>
</div>
</Link>

<Link to="/folder" class="lets-pick-card">
      <MdOutlineQuiz />
    <div class="lets-pick-card__content">
    <p class="lets-pick-card__title">MIND
    </p><p class="lets-pick-card__description">Expand your mind by creating your own flashcards to remember facts, formulas and concepts your own way.</p>
  </div>
</Link>

<div class="lets-pick-card">
      <MdOutlineQuiz />
    <div class="lets-pick-card__content">
    <p class="lets-pick-card__title">STOCK
    </p><p class="lets-pick-card__description">Stock up on ready-made flashcards covering a variety of subjects to feed your mind with knowledge.</p>
  </div>
</div>

    </div>
    </>
  )
}

export default LetsPick