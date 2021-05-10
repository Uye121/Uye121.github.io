import React from 'react';

import './side-container.styles.scss';

const SideContainer = ({ builtWith }) => (
  <div className='side-container'>
    <h5>Built with:</h5>
    {builtWith}
  </div>
);

export default SideContainer;