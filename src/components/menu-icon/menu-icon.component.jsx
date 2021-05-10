import React from 'react';

import './menu-icon.styles.scss';

const MenuIcon = ({ showClosedIcon, setShowClosedIcon }) => (
  <div 
    className={` icon-container`}
    onClick={() => setShowClosedIcon(!showClosedIcon)}
  >
    <div className={`${showClosedIcon? 'show-x' : ''} nav-icon`}>
      <div></div>
    </div>
  </div>
);

export default MenuIcon;