//Modules
import PropTypes from 'prop-types';
import React from 'react';

const Target = props => {
  const { shape, color, animation } = props;
  return (
    <div class={'target ' + shape}>
      <div class={'target-area ' + color + ' outer'} data-aos={'fade-' + animation.first}></div>
      <div class={'target-area ' + color + ' outer-middle'} data-aos={'fade-' + animation.second} data-aos-delay={200}></div>
      <div class={'target-area ' + color + ' inner-middle'} data-aos={'fade-' + animation.first} data-aos-delay={400}></div>
      <div class={'target-area ' + color + ' inner'} data-aos={'fade-' + animation.second} data-aos-delay={600}></div>
    </div>
  );
}

Target.propTypes = {
  shape: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  animation: PropTypes.object,    
};

Target.defaultProps = {
  animation: {
    first: 'right',
    second: 'left',
  },
}

export default Target;