import React from 'react';
import './possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Initiate Your Ai Journey</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore GPT-3's boundless potential as it propels you into a world of limitless opportunities. Unleash creativity, revolutionize problem-solving, and bring the unimaginable to life with every interaction.</p>
        <h4> Request Early Access to Get Started</h4>
        </div>
    </div>
  )
}

export default Possibility