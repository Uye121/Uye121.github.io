import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './mini-button.styles.scss';

const MiniButton = ({ icon, url, text }) => (
  <Link className='button' to={{ pathname: url}} target="_blank">
    <FontAwesomeIcon icon={icon} size='2x' color={'white'} />
    &nbsp;{text}
  </Link>
);

export default MiniButton;