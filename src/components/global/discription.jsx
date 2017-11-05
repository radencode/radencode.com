import React from 'react';
import Anchor from 'global/anchor.jsx';

export default class Discription extends React.PureComponent{
  render(){
    return (
			<div class='section-discription' data-aos='fade-up'>
				<Anchor type='top-left' color='dark-blue' animation='fade-down-right' delay='0'/>
				<Anchor type='top-right' color='dark-blue' animation='fade-down-left' delay='0'/>
				<Anchor type='bottom-right' color='dark-blue' animation='fade-up-left' delay='0'/>
				<Anchor type='bottom-left' color='dark-blue' animation='fade-up-right' delay='0'/>
				<p>{this.props.discription}</p>
			</div>      
    );
  }
}