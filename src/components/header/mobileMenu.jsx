import React from 'react';
import MediaQuery from 'react-responsive';

export default class MobileMenu extends React.Component {
	constructor(props){
		super(props)
		this.state = {hover: false, open: false};	
		this.menuHover = this.menuHover.bind(this);
		this.menuOpen = this.menuOpen.bind(this);
		this.menuList = this.menuList.bind(this);
	}
	componentDidMount(){
		this.menuIcon = document.getElementById('menu-icon');
		this.menuIcon.addEventListener('mouseover', this.menuHover, false);
		this.menuIcon.addEventListener('mouseout', this.menuHover, false);
		this.menuIcon.addEventListener('click', this.menuOpen, false);			
	}
	componentWillUnmount(){
		this.menuIcon.removeEventListener('mouseover', this.menuHover, false);
		this.menuIcon.removeEventListener('mouseout', this.menuHover, false);
		this.menuIcon.removeEventListener('click', this.menuOpen, false);	
	}
	menuHover(){
		this.setState({hover: !this.state.hover});
	}
	menuOpen(){
		this.setState({open: !this.state.open});
	}
	menuList(animate){
		if(animate){
			return (
				<nav data-aos='fade'>
					<ul>
						<li data-aos='fade-right' data-aos-delay='600'>Expertise</li>
						<li data-aos='fade-right' data-aos-delay='800'>Skills</li>
						<li data-aos='fade' data-aos-delay='1000'>Work</li>
						<li data-aos='fade-left' data-aos-delay='800'>About</li>
						<li data-aos='fade-left' data-aos-delay='600'>Get In Touch</li>
					</ul>
				</nav>
			);
		}
	}
	render(){
		let hover = this.state.hover ? ' hover' : '';
		let open = this.state.open ? ' open' : '';
		return (
			<div id="menu-mobile">		
				{this.menuList(this.state.open)}	
				<div id='menu-icon' data-aos='fade-right'>
					<div class={'menu-bar top' + hover + open}></div>
					<div class={'menu-bar middle' + hover + open}></div>
					<div class={'menu-bar bottom' + hover + open}></div>
				</div>
			</div>	
		);
	}
}