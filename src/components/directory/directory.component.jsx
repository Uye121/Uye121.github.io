import React from 'react';

import ModalContainer from '../modal-container/modal-container.component';

import DirectoryData from './directory.data';

import './directory.styles.scss';

const Directory = () => {
  return (
    <div className='directory-container' id='projects'>
      {
        DirectoryData.map(({ id, ...props }) => (
          <ModalContainer key={id} data={props} />
        ))
      }
    </div>
  )
};

export default Directory;