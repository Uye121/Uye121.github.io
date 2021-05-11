import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './close-button.styles.scss';

const CloseButton = ({ 
  showClosedIcon, 
  setShowClosedIcon 
}) => {
  if(!showClosedIcon) return null;
  
  return <FontAwesomeIcon 
    onClick={() => setShowClosedIcon(false)}
    icon={faTimes}
    size='lg'
  />
};

export default CloseButton;