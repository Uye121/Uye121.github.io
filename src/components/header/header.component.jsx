import React, { useState, useEffect } from 'react';

import Logo from '../logo/logo.component';
import NavOptions from '../nav-options/nav-options.component';

import './header.styles.scss';

const Header = () => {
  const [active, setActive] = useState(false);

  const listenScrollEvent = () => {
    if(window.scrollY > 40) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  },[]);

  return (
    <div className={(active? 'active ' : '') + 'header-container'}>
      <Logo />
      <NavOptions active={active} />
    </div>
  );
};


export default Header;