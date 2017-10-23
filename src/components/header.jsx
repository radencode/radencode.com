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
				<main>
					<div id="title">
						<div class="anchor top-left"></div>
						<div class="anchor top-right"></div>
						<div class="anchor bottom-right"></div>
						<div class="anchor bottom-left"></div>
						<h1><span>Teddy </span><span class="highlight">Radenkov</span></h1>						
					</div>
					<div id="tag-line">
						<h2><span class="highlight">Front-End</span> Engineer</h2>
						<div id="line-breaker"></div>
						<h2>Currently available for work</h2>
					</div>
					<div id="learn-more">
						<h3>Learn <span class="highlight"> more </span> about me</h3>
						<div id="scroll-icon-mouse">
							<div id="scroll-icon-button"></div>
						</div>
					</div>
				</main>
			</header>
		);
	}
}