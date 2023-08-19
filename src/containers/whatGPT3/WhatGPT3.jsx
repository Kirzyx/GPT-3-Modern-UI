import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Within the digital expanse, GPT-3 emerges as a radiant marvel. A culmination of code and data, each interaction unlocks its potential further. Minds intrigued, possibilities unfurl, as we delve into the capabilities of this artificial curiosity, propelling us towards new frontiers of understanding." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Unveiling new conversational frontiers. Chatbots excel in delivering delightful opinions and messages, resembling a finely-tuned AI plate serving responses. With their dynamic virtual presence, they redefine interaction, promising endless possibilities." />
      <Feature title="Knowledgebase" text= "Knowledgebase flourishes as a guiding constellation. Each entry, a stepping stone; every query, a pathway to understanding. Minds kindled, curiosity sets sail, as the exploration of insights propels our collective journey toward limitless horizons." />
      <Feature title="Education" text="Within the realm of education, knowledge blooms as a guiding light. Each lesson, a stepping stone; every question, a pathway to insight. Minds ignited, curiosity takes flight, as the quest for understanding fuels our shared journey toward boundless heights." />
    </div>
  </div>
);

export default WhatGPT3;