import React from 'react';
import { Link } from "react-scroll";

import './arrow-down.styles.scss';

const ArrowDown = () => {
  return (
    <Link 
      className='arrow bounce'
      to='projects'
      spy={true}
      smooth={true}
    >
      <span>&or;</span>
    </Link>
  );
}

export default ArrowDown;