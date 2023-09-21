//Modules
import MediaQuery from 'react-responsive';
import Particles from 'react-particles-js';
import React from 'react';

//Components
import Main from 'header/main.jsx';
import MobileMenu from 'header/mobileMenu.jsx';
import SocialMedia from 'header/socialMedia.jsx';

//Assets
import ParticlesConfig from 'particles-config-header.json';

export default class Header extends React.PureComponent {
	componentDidMount(){
		if(navigator.userAgent.match(/Android|iPhone|iPad|iPod|IEMobile|BlackBerry|webOS|Oper Mini/i)){
			let header = document.getElementsByTagName('header')[0];
			let height = header.offsetHeight;
			header.style.height = height + 'px';
		}
	}
	render(){
		return (
			<header id='header'>				
				<MediaQuery query='(max-width: 1023px)'>
					<MobileMenu/>		
				</MediaQuery>
				<MediaQuery query='(min-width: 1024px)'>
					<Particles params={ParticlesConfig} style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px'}}/>
					<SocialMedia/>
					<div id='menu'>
						<nav>
							<ul>
								<li data-aos='fade-down' data-aos-anchor='#header'><a href='#expertise'>Expertise</a></li>
								<li data-aos='fade-down' data-aos-delay='200' data-aos-anchor='#header'><a href='#skills'>Skills</a></li>
								<li data-aos='fade-down' data-aos-delay='400' data-aos-anchor='#header'><a href='#work'>Work</a></li>
								<li data-aos='fade-down' data-aos-delay='800' data-aos-anchor='#header'><a href='#about'>About</a></li>
								<li data-aos='fade-down' data-aos-delay='1000' data-aos-anchor='#header'><a href='https://www.linkedin.com/in/radencode' target='_blank'>Get In Touch</a></li>
							</ul>
						</nav>
					</div>
				</MediaQuery>					
				<Main/>
				<div id='learn-more' data-aos='fade-up' data-aos-delay='1000' data-aos-anchor='#header'>
					<h3>Learn <span class='highlight'> more </span> about me</h3>
					<div id='scroll-icon-mouse'>
						<div id='scroll-icon-button'></div>
					</div>
				</div>				
			</header>
		);
	}
}