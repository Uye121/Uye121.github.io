import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './mini-button.styles.scss';

const MiniButton = ({ icon, url, text }) => {
  console.log(url);
  return (
  <a className=' button' href={url} target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={icon} size='2x' color={'white'} />
    &nbsp;{text}
  </a>
)};

export default MiniButton;