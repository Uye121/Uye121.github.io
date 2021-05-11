import React from 'react';

import Directory from '../../components/directory/directory.component';
import About from '../../components/about/about.component';
import ArrowDown from '../../components/arrow-down/arrow-down.component';

import './homepage.styles.scss';

const HomePage = () => {
  console.log("homepage");
  return (
  <div className='homepage-container'>
    <About />
    <ArrowDown />
    <Directory />
  </div>
)};

export default HomePage;