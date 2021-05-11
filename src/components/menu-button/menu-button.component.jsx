import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './menu-button.styles.scss';

const MenuButton = ({
  showClosedIcon,
  setShowClosedIcon
}) => {
  if(showClosedIcon) return null;

  return <FontAwesomeIcon 
    onClick={() => setShowClosedIcon(true)}
    icon={faBars} 
    size='lg'
  />
};

export default MenuButton;