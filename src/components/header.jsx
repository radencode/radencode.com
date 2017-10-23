//React modules
import React from 'react';

export default class Header extends React.Component {
	constructor(props){
		super(props)
		this.state = {menuState: ''};	
		this.hoverOnMenuIcon = this.hoverOnMenuIcon.bind(this);
		this.hoverOffMenuIcon = this.hoverOffMenuIcon.bind(this);		
	}
	componentDidMount(){
		this.menuIcon = document.getElementById('menu-icon');
		this.menuIcon.addEventListener('mouseover', this.hoverOnMenuIcon, false);
		this.menuIcon.addEventListener('mouseout', this.hoverOffMenuIcon, false);			
	}
	componentWillUnmount(){
		this.menuIcon.removeEventListener('mouseover', this.hoverOnMenuIcon, false);
		this.menuIcon.removeEventListener('mouseout', this.hoverOffMenuIcon, false);	
	}
	hoverOnMenuIcon(){
		this.setState({menuState: 'hovered'});
	}
	hoverOffMenuIcon(){
		this.setState({menuState: ''});
	}	
	render(){
		return (
			<header>
				<div data-aos='fade-right' id='menu-icon'>
					<div class={'menu-bar top ' + this.state.menuState}></div>
					<div class={'menu-bar middle ' + this.state.menuState}></div>
					<div class={'menu-bar bottom ' + this.state.menuState}></div>
				</div>
			</header>
		);
	}
}