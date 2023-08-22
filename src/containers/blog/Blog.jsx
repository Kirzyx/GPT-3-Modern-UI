import React from 'react';
import './blog.css'
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="Sep26, 23" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Aug 15, 23" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
            <Article imgUrl={blog03} date="Oct 8, 23" title="Navigating the Digital Landscape: Exploring Tech Trends of 2023"/>
            <Article imgUrl={blog04} date="Nov 2, 23" title="Unraveling the Quantum Realm: Exploring Breakthroughs in Quantum Computing"/>
            <Article imgUrl={blog05} date="Jul 11, 23" title="The Quantified Self: How Wearable Tech is Transforming Health Monitoring"/>
          </div>
          
        </div>
    </div>
  )
}

export default Blog