import React from 'react';

export default class Anchor extends React.PureComponent {
	render(){
		return (
			<div class={'anchor ' + this.props.type + ' ' + this.props.color} data-aos={this.props.animation} data-aos-delay={this.props.delay}></div>	
		);
	}
}