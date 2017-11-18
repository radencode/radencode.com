//Modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

const checkIconPosition = (skillset, check) => {
	switch(skillset){
		case 'Front-End':
			return ( <h2><span><i class="fa fa-check" aria-hidden="true"></i></span>{check}</h2> );
		case 'Back-End':
			return ( <h2>{check}<span><i class="fa fa-check" aria-hidden="true"></i></span></h2> );
	}
}	

const Check = props => {
	const { skillset, check, delay } = props
	return (
		<li class={skillset} data-aos-anchor={'#ul-' + skillset} data-aos='fade-up' data-aos-delay={delay}>
			<MediaQuery query='(min-width: 1600px)'>
				{checkIconPosition(skillset, check)}
			</MediaQuery>
			<MediaQuery query='(max-width: 1599px)'>
				<span><i class="fa fa-check" aria-hidden="true"></i></span>
				<h2>{check}</h2>
			</MediaQuery>                 
		</li>
	);
}

Check.propTypes = {
	skillset: PropTypes.string.isRequired,
	check: PropTypes.string.isRequired,
	delay: PropTypes.number.isRequired,
};

export default Check;