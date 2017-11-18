//Modules
import PropTypes from 'prop-types';
import React from 'react';

const Title = props => {
  const { title, subTitle } = props;
  return (
    <div class='section-title'>
      <h1 data-aos='fade-right'>{title}</h1>
      <h3 data-aos='fade-left'>{subTitle}</h3>
    </div>    
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired, 
  subTitle: PropTypes.string.isRequired,
};

export default Title;