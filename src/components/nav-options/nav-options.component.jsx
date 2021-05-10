import React, { useState } from 'react';
import { Link } from "react-scroll";

import MenuIcon from '../menu-icon/menu-icon.component';

import pdf from '../../assets/UlricYe_Resume.pdf';

import './nav-options.styles.scss';

const NavOptions = () => {
  const [showClosedIcon, setShowClosedIcon] = useState(false);

  return (
    <React.Fragment>
        <MenuIcon 
          showClosedIcon={showClosedIcon} 
          setShowClosedIcon={setShowClosedIcon} 
        />
        <ul className={`${showClosedIcon ? 'show' : ''} options-container`}>
          <li>
            <Link 
              className='option'
              to='projects'
              spy={true}
              smooth={true}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <a 
              href={pdf} 
              target="_blank" 
              rel="noreferrer"
            >
              RÉSUMÉ
            </a>
          </li>
        </ul>
    </React.Fragment>
  )
};

export default NavOptions;