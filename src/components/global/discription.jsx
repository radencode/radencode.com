//Modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
//Components
import Anchor from 'global/anchor.jsx';

const Discription = props => {
	const { id, discription } = props;
	return (
		<div id={id} class='section-discription' data-aos='fade-up'>
			<MediaQuery query='(min-width: 1024px)'>
				<Anchor type='top-left' color='dark-blue' animation='fade-down-right' delay={0} anchor={"#" + id}/>
				<Anchor type='top-right' color='dark-blue' animation='fade-down-left' delay={0} anchor={"#" + id}/>
				<Anchor type='bottom-right' color='dark-blue' animation='fade-up-left' delay={0} anchor={"#" + id}/>
				<Anchor type='bottom-left' color='dark-blue' animation='fade-up-right' delay={0} anchor={"#" + id}/>		
			</MediaQuery>				
			<p>{discription}</p>
		</div> 
	);
}

Discription.propTypes = {
  id: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
};

export default Discription;