import React from 'react';
import MediaQuery from 'react-responsive';
import Anchor from 'global/anchor.jsx';

export default class Discription extends React.PureComponent{
  render(){
    return (			
			<div id={this.props.id} class='section-discription' data-aos='fade-up'>
				<MediaQuery query='(min-width: 1024px)'>
					<Anchor type='top-left' color='dark-blue' animation='fade-down-right' delay='0' anchor={"#" + this.props.id}/>
					<Anchor type='top-right' color='dark-blue' animation='fade-down-left' delay='0' anchor={"#" + this.props.id}/>
					<Anchor type='bottom-right' color='dark-blue' animation='fade-up-left' delay='0' anchor={"#" + this.props.id}/>
					<Anchor type='bottom-left' color='dark-blue' animation='fade-up-right' delay='0' anchor={"#" + this.props.id}/>		
				</MediaQuery>				
				<p>{this.props.discription}</p>
			</div>      
    );
  }
}