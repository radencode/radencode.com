//Modules
import PropTypes from 'prop-types';
import React from 'react';

const Target = props => {
  const { shape, color } = props;
  return (
    <div class={'target ' + shape}>
      <div class={'target-area ' + color + ' outer'} data-aos='fade-right'></div>
      <div class={'target-area ' + color + ' outer-middle'} data-aos='fade-left' data-aos-delay={200}></div>
      <div class={'target-area ' + color + ' inner-middle'} data-aos='fade-right' data-aos-delay={400}></div>
      <div class={'target-area ' + color + ' inner'} data-aos='fade-left' data-aos-delay={600}></div>
    </div>
  );
}

Target.propTypes = {
  shape: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,    
};

export default Target;