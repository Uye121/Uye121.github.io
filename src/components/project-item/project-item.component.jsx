import React from 'react';

import './project-item.styles.scss';

const ProjectItem = ({ title, image, openModal }) => {

  return (
    <div
      className='project-container'
      onClick={() => openModal()}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${image})`
        }}
      >
      </div>
      <div className='content'>
        <h2 className='title'>{title.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default ProjectItem;