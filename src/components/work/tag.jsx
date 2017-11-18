//Modules
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Anchor from 'global/anchor.jsx';

const Tag = props => {
	const { id, pattern, delay, anchor, name } = props;
	return (
		<li id={id} class={'tag ' + pattern} data-aos='fade-up' data-aos-delay={delay} data-aos-anchor={anchor}>
			<Anchor type='top-left' color='blue' animation={false}/>
			<Anchor type='top-right' color='blue' animation={false}/>
			<Anchor type='bottom-right' color='blue' animation={false}/>
			<Anchor type='bottom-left' color='blue' animation={false}/>
			<h2>{name}</h2>
		</li>
	);
}

Tag.propTypes = {
	id: PropTypes.string.isRequired,
	pattern: PropTypes.string.isRequired,
	delay: PropTypes.number.isRequired,
	anchor: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,	
};

export default Tag;