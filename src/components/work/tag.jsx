import React from 'react';
import Anchor from 'global/anchor.jsx';

export default class Tag extends React.PureComponent{
  render(){  
		return (
			<li id={this.props.id} class={'tag ' + this.props.card}>
				<Anchor type='top-left' color='blue' animation='fade' delay='0' anchor={"#" + this.props.id}/>
				<Anchor type='top-right' color='blue' animation='fade' delay='0' anchor={"#" + this.props.id}/>
				<Anchor type='bottom-right' color='blue' animation='fade' delay='0' anchor={"#" + this.props.id}/>
				<Anchor type='bottom-left' color='blue' animation='fade' delay='0' anchor={"#" + this.props.id}/>
				<h2>{this.props.name}</h2>
			</li>
		);
  }    
}