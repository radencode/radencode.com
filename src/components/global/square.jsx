//Modules
import PropTypes from 'prop-types';
import React from 'react';

const Square = props => {
  const { size, angle, settings } = props;
  return (
    <div class={'square ' + size + ' ' + angle} style={settings}></div>
  );
}

Square.propTypes = {
  size: PropTypes.string.isRequired,
  angle: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,  
};

export default Square;