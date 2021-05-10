import React, { useState } from 'react';

import ProjectItem from '../project-item/project-item.component';
import ModalContent from '../modal-content/modal-content.component';

import './modal-container.styles.scss';

const ModalContainer = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <ProjectItem {...data} openModal={openModal} />
      <ModalContent 
        isOpen={isOpen}
        closeModal={closeModal}
        {...data}
      />
    </React.Fragment>
  )
}

export default ModalContainer;