//Modules
import React from 'react';

//Components
import SocialBox from 'header/socialBox.jsx';

const socialMediaData = [
	{
		icon: 'fa fa-dribbble',
		name: 'Dribble',
		link: '#',
		featured: false,
	},
	{
		icon: 'fa fa-github',
		name: 'GitHub',
		link: 'https://github.com/radencode',
		featured: true,
	},
	{
		icon: 'fa fa-linkedin',
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/radencode',
		featured: false,
	},
];

const renderSocialMedia = (list) => {
	return list.map((item, index) => {
		return (
			<SocialBox key={'socialBox' + index} box={item}/>
		);
	});
}

const SocialMedia = () => {
	return (
		<div id='social-media' data-aos='fade-right' data-aos-delay='800' data-aos-anchor='#header'>
			{renderSocialMedia(socialMediaData)}
		</div>
	);	
}

export default SocialMedia;