//Modules
import PropTypes from 'prop-types';
import React from 'react';

const Activity = props => {
	const { size, name, animation, codingState, imageState, inDelay, outDelay } = props;
	return (
		<li id={'act-' + name} class={'activity ' + name + ' ' + size} data-aos={animation.type} data-aos-delay={animation.delay} data-aos-anchor={animation.anchor}>
			<div class={'activity-cutout ' + codingState + ' ' + size} style={codingState === 'animated-in' ? {transitionDelay: inDelay + 'ms'} : {transitionDelay: outDelay + 'ms'}}>
				<div class={'activity-coding ' + name + ' ' + size} ></div>				
			</div>
			<div class={'activity-cutout ' + imageState + ' ' + size} style={imageState === 'animated-in' ? {transitionDelay: inDelay + 'ms'} : {transitionDelay: outDelay + 'ms'}}>
				<div class={'activity-image ' + name + ' ' + size} ></div>
			</div>	
		</li>
	);
}

Activity.propTypes = { 
	size: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	animation: PropTypes.object.isRequired,
	codingState: PropTypes.string.isRequired,
	imageState: PropTypes.string.isRequired,
	inDelay: PropTypes.number.isRequired,
	outDelay: PropTypes.number.isRequired,
};

export default Activity;