//Modules
import PropTypes from 'prop-types';
import React from 'react';

const Diamond = props => {
	const { size,	diamondPositionId, imagePositionId, animation, imageId } = props;
	return (
		<div class={'diamond-area ' + size + ' ' + diamondPositionId} data-aos={animation.type} data-aos-anchor={animation.anchor} data-aos-delay={animation.delay}>
			<div class={'diamond ' + size}>
				<div class={'diamond-image ' + size + ' ' + imageId + ' ' + imagePositionId}></div>
			</div>
		</div>
	);
}

Diamond.propTypes = {
	size: PropTypes.string.isRequired,
	diamondPositionId: PropTypes.string.isRequired,
	imagePositionId: PropTypes.string.isRequired,
	animation: PropTypes.object.isRequired,
	imageId: PropTypes.string.isRequired,
};

export default Diamond;