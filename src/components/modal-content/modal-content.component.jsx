import React from 'react';
import Modal from 'react-modal';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import SideContainer from '../side-container/side-container.component';
import MiniButton from '../mini-button/mini-button.component';

import './modal-content.styles.scss';

// Bind modal to app for accessibility purpose (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ModalContent = ({ 
  isOpen, 
  closeModal, 
  title, 
  description, 
  githubUrl, 
  siteUrl, 
  builtWith 
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
  >
    <h2>{title}</h2>
    <button className='close-button' onClick={closeModal}>x</button>
    <div className='button-container'>
      <MiniButton
        url={githubUrl}
        icon={faGithubSquare}
        text='Code'
      />
      {
        (siteUrl !== '') 
        && 
        (<MiniButton 
          url={siteUrl}
          icon={faGlobe}
          text='Demo'
        />)
      }
    </div>
    <div className='content-container'>
      <SideContainer builtWith={builtWith} />
      <div className='main-container'>
        <p>{description}</p>
      </div>
    </div>

  </Modal>
);

export default ModalContent;