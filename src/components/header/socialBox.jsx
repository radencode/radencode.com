//Modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Anchor from 'global/anchor.jsx';

const SocialBox = props => {
	const { box } = props;
	return (
		<a class={box.featured ? 'social-icon featured' : 'social-icon'} href={box.link}>
			<Anchor type='top-right' color='yellow' animation='fade-down-left' delay={1400}/>	
			<Anchor type='bottom-right' color='yellow' animation='fade-up-left' delay={1400}/>
			<i class={box.icon} aria-hidden="true"></i>
			<MediaQuery query='(min-width: 1300px)'>	
				<h3>View my <span>{box.name}</span> page</h3>
			</MediaQuery>				
		</a>
	);
}

SocialBox.propTypes = {
	box: PropTypes.object.isRequired
};

export default  SocialBox;