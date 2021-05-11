import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './footer.styles.scss';

const Footer = () => (
  <div className='footer-container'>
    <div className='logos-container'>
      <a href='https://github.com/uye121'>
        <FontAwesomeIcon icon={faGithubSquare} size='2x' color={'black'} />
      </a>
      <a href='https://www.linkedin.com/in/ulric-ye/'>
        <FontAwesomeIcon icon={faLinkedin} size='2x' color={'black'} />
      </a>
    </div>
    <p>©2021 Ulric Ye</p>
  </div>
);

export default Footer;