import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT4.css';

const WhatGPT4 = () => (
  <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
    <div className="gpt4__whatgpt4-feature">
      <Feature title="What is GPT-4" text="Amidst the digital realm, GPT-4 stands as a brilliant marvel. A fusion of code and data, each engagement propels its potential to new heights. Minds are captivated, and boundless opportunities unfold as we plunge into the realm of this artificial wonder. Discover its remarkable prowess — from crafting eloquent prose to deciphering complex data, GPT-4 pushes the boundaries of what's conceivable. Join us in this exploration of innovation, where every interaction shapes the future of human-AI interaction." />
    </div>
    <div className="gpt4__whatgpt4-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt4__whatgpt4-container">
      <Feature title="Chatbots" text="Unveiling new conversational frontiers. Chatbots excel in delivering delightful opinions and messages, resembling a finely-tuned AI plate serving responses. With their dynamic virtual presence, they redefine interaction, promising endless possibilities." />
      <Feature title="Knowledgebase" text= "Knowledgebase flourishes as a guiding constellation. Each entry, a stepping stone; every query, a pathway to understanding. Minds kindled, curiosity sets sail, as the exploration of insights propels our collective journey toward limitless horizons." />
      <Feature title="Education" text="Within the realm of education, knowledge blooms as a guiding light. Each lesson, a stepping stone; every question, a pathway to insight. Minds ignited, curiosity takes flight, as the quest for understanding fuels our shared journey toward boundless heights." />
    </div>
  </div>
);

export default WhatGPT4;