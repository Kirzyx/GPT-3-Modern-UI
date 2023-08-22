import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Unleashing Infinite Possibilities',
    text: 'Welcome to a realm where language meets innovation. With GPT-4 at your fingertips, explore new horizons of creativity and interaction. Our platform empowers developers, creators, and businesses to tap into limitless potential.',
  },
  {
    title: 'Behind the AI Magic',
    text: "Discover the magic of GPT-4's neural networks. Dive into the intricacies that enable it to understand and generate human-like text. Explore the architecture that underpins its remarkable natural language processing capabilities.",
  },
  {
    title: 'Transforming Industries',
    text: "Witness GPT-4's transformative impact across sectors. See how it revolutionizes marketing, development, and more, redefining how businesses and creatives approach their work.",
  },
  {
    title: 'Embrace the Future',
    text: "Step into a world of AI innovation. Access user-friendly APIs, collaborate with a dynamic community, and be a driving force in advancing AI's boundaries.",
  },
];

const Features = () => (
  <div className="gpt4__features section__padding" id="features">
    <div className="gpt4__features-heading">
      <h1 className="gradient__text"> The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt4__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;