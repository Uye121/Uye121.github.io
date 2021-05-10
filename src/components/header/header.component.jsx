import React from 'react';

import Logo from '../logo/logo.component';
import NavOptions from '../nav-options/nav-options.component';

import './header.styles.scss';

const Header = () => (
  <div className='header-container'>
    <Logo />
    <NavOptions />
  </div>
);


export default Header;