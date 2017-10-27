import React from 'react';
import MediaQuery from 'react-responsive';
import Particles from 'react-particles-js';
import Typed from 'typed.js'
import MobileMenu from 'mobileMenu.jsx';
import SocialMedia from 'socialMedia.jsx';
import Anchor from 'anchor.jsx';
import particlesConfig from 'particles-config.json';

export default class Header extends React.Component {
	constructor(props){
		super(props)
		this.tagline = this.tagline.bind(this);	
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
				<MediaQuery query='(max-width: 1023px)'>
					<MobileMenu/>		
				</MediaQuery>
				<MediaQuery query='(min-width: 1024px)'>
					<Particles params={particlesConfig} style={{width: '100%', height: '100%', position: 'absolute'}}/>
					<SocialMedia/>
					<div id='menu'>
						<nav>
							<ul>
								<li data-aos='fade-down'><span>Expertise</span></li>
								<li data-aos='fade-down' data-aos-delay='200'><span>Skills</span></li>
								<li data-aos='fade-down' data-aos-delay='400'><span>Work</span></li>
								<li data-aos='fade-down' data-aos-delay='800'><span>About</span></li>
								<li data-aos='fade-down' data-aos-delay='1000'><span>Get In Touch</span></li>
							</ul>
						</nav>
					</div>
				</MediaQuery>					
				<main>
					<div id='title' data-aos='fade' data-aos-delay='500'>
						<Anchor type='top-left' animation='fade-down-right' delay='1000'/>
						<Anchor type='top-right' animation='fade-down-left' delay='1000'/>
						<Anchor type='bottom-right' animation='fade-up-left' delay='1000'/>
						<Anchor type='bottom-left' animation='fade-up-right' delay='1000'/>
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
				</main>
				<div id='learn-more' data-aos='fade-up' data-aos-delay='2000' data-aos-anchor='#title'>
					<h3>Learn <span class='highlight'> more </span> about me</h3>
					<div id='scroll-icon-mouse'>
						<div id='scroll-icon-button'></div>
					</div>
				</div>				
			</header>
		);
	}
}