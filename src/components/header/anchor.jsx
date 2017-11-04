import React from 'react';

export default class Anchor extends React.PureComponent {
	render(){
		return (
			<div class={'anchor ' + this.props.type} data-aos={this.props.animation} data-aos-delay={this.props.delay}></div>	
		);
	}
}