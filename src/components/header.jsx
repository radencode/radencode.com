//React modules
import React from 'react';
import MediaQuery from 'react-responsive';

export default class Header extends React.Component {
	constructor(props){
		super(props)
		this.state = {menuState: ''};	
		this.hoverOnMenuIcon = this.hoverOnMenuIcon.bind(this);
		this.hoverOffMenuIcon = this.hoverOffMenuIcon.bind(this);
		this.tagline = this.tagline.bind(this);		
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
	tagline(){
		return (
			<div id='tag-line'>
				<h2 data-aos='fade-right' data-aos-delay='1500'><span class='highlight'>Front-End</span> Engineer</h2>
				<div id="line-breaker" data-aos='fade' data-aos-delay='2000'></div>
				<h2 data-aos='fade-left' data-aos-delay='1500'>Currently available for work</h2>
			</div>
		);			
	}
	render(){
		return (
			<header>
				<div id='menu-icon' data-aos='fade-right'>
					<div class={'menu-bar top ' + this.state.menuState}></div>
					<div class={'menu-bar middle ' + this.state.menuState}></div>
					<div class={'menu-bar bottom ' + this.state.menuState}></div>
				</div>
				<main>
					<div id='title' data-aos='fade' data-aos-delay='500'>
						<div class='anchor top-left' data-aos='fade-down-right' data-aos-delay='1000'></div>
						<div class='anchor top-right' data-aos='fade-down-left' data-aos-delay='1000'></div>
						<div class='anchor bottom-right' data-aos='fade-up-left' data-aos-delay='1000'></div>
						<div class='anchor bottom-left' data-aos='fade-up-right' data-aos-delay='1000'></div>
						<div id="title-anchor">
							<h1 data-aos='fade' data-aos-delay='1000'><span>Teddy </span><span class='highlight'>Radenkov</span></h1>
							<MediaQuery query='(min-width: 500px)'>
								{(matches) => { return matches ? this.tagline() : null }}
							</MediaQuery>
						</div>						
					</div>
					<MediaQuery query='(max-width: 499px)'>
						{(matches) => { return matches ? this.tagline() : null }}
					</MediaQuery>
					<div id='learn-more' data-aos='fade-up' data-aos-delay='2500'>
						<h3>Learn <span class='highlight'> more </span> about me</h3>
						<div id='scroll-icon-mouse'>
							<div id='scroll-icon-button'></div>
						</div>
					</div>
				</main>
			</header>
		);
	}
}