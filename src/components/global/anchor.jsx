//Modules
import PropTypes from 'prop-types';
import React from 'react';

const isAnimation = (props) => {
	const { type, color, animation, delay, anchor } = props;
	if(!animation) return <div class={'anchor ' + type + ' ' + color}></div>
	return <div class={'anchor ' + type + ' ' + color} data-aos={animation} data-aos-delay={delay} data-aos-anchor={anchor}></div>
}

const Anchor = props => isAnimation(props); 

Anchor.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  animation: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  delay: PropTypes.number,
  anchor: PropTypes.string,
};

export default Anchor;