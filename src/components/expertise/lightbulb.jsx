//Modules
import PropTypes from 'prop-types';
import React from 'react';
//Components
import Target from 'global/target.jsx';

const LightBulb = props => {
	let { icon, placement, order, title, discription } = props;
	return (
		<div class={'lightbulb ' + placement}>
			<div class='icon'>
				<div class='bulb' data-aos='fade-down'>
					<Target shape='circle' color='blue'/>
					<div class='stand' data-aos='fade-up'></div>
					<i class={icon} aria-hidden="true"></i>
				</div>
			</div>
			<div class='order' data-aos='fade-up'>{order}</div>
			<div class='discription'>
				<h2 data-aos='fade-up'>{title}</h2>
				<div class='break-line' data-aos='fade-up'></div>
				<p data-aos='fade-up'>{discription}</p>
			</div>
		</div>
	);
}

LightBulb.propTypes = {
	icon: PropTypes.string.isRequired,
	placement: PropTypes.string.isRequired,
	order: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	discription: PropTypes.string.isRequired,	
};

export default LightBulb;