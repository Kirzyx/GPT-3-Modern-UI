import React from 'react';
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
        <div className = "gpt3__header-content">
          <h1 className="gradient__text">Let's Build Something amazing with GPT-3 Open AI</h1>
          <p>Step into a realm of endless possibilities as we harness the magic of GPT-3 and OpenAI. Let's build something truly amazing, where innovation and creativity intertwine. Join us in crafting wonders that redefine what's achievable.</p>
          
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your Email Address"></input>
            <button type="button">Get Started</button>
          </div>

          <div className = "gpt3__header-content__people">
            <img src={people} alt="people"/>
            <p>1,600 access visit requests were made within the last 24 hours.</p>
          </div>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai"></img>
        </div>
      </div>
  )
}

export default Header