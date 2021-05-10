import React from 'react';
import { Link } from 'react-router-dom';

import './logo.styles.scss';

const Logo = () => (
  <div className='logo-container'>
    <Link 
      to="/" 
      style={{ 
        textDecoration: 'none', 
        color: 'inherit' 
      }}
    >
      ULRIC YE
    </Link>
  </div>
);

export default Logo;