import React, { useRef, useState } from 'react';
import { Link } from "react-scroll";

import MenuButton from '../menu-button/menu-button.component';
import CloseButton from '../close-button/close-button.component';

import useOutsideAlerter from '../hooks/useOutsideAlerter.component';

import pdf from '../../assets/UlricYe_Resume.pdf';

import './nav-options.styles.scss';

const NavOptions = ({ active }) => {
  const [showClosedIcon, setShowClosedIcon] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(showClosedIcon, setShowClosedIcon, wrapperRef);

  const clickLinkHanlder = () => {
    setShowClosedIcon(false);
  }

  return (
    <React.Fragment>
      <MenuButton 
        showClosedIcon={showClosedIcon} 
        setShowClosedIcon={setShowClosedIcon} 
      />
      <ul 
        ref={wrapperRef}
        className={`${showClosedIcon ? 'show' : ''} ${active? 'active ' : ''}options-container`}
      >
        <li>
          <CloseButton
            showClosedIcon={showClosedIcon} 
            setShowClosedIcon={setShowClosedIcon}
          />
        </li>
        <li>
          <Link 
            className='option'
            to='projects'
            spy={true}
            smooth={true}
            onClick={() => clickLinkHanlder()}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <a 
            href={pdf} 
            target="_blank" 
            rel="noreferrer"
            onClick={() => clickLinkHanlder()}
          >
            RÉSUMÉ
          </a>
        </li>
      </ul>
    </React.Fragment>
  )
};

export default NavOptions;