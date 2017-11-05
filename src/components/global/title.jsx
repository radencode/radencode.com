import React from 'react';

export default class Expertise extends React.PureComponent{
  render(){
    return (
			<div class='section-title'>
				<h1 data-aos='fade-right'>{this.props.title}</h1>
				<h3 data-aos='fade-left'>{this.props.subTitle}</h3>
			</div>      
    );
  }
}