import React from 'react';
import MediaQuery from 'react-responsive';
import Particles from 'react-particles-js';
import MobileMenu from 'header/mobileMenu.jsx';
import SocialMedia from 'header/socialMedia.jsx';
import Main from 'header/Main.jsx';
import particlesConfig from 'particles-config.json';

export default class Header extends React.Component {
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
					<Particles params={particlesConfig} style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px'}}/>
					<SocialMedia/>
					<div id='menu'>
						<nav>
							<ul>
								<li data-aos='fade-down' data-aos-anchor='#header'><span>Expertise</span></li>
								<li data-aos='fade-down' data-aos-delay='200' data-aos-anchor='#header'><span>Skills</span></li>
								<li data-aos='fade-down' data-aos-delay='400' data-aos-anchor='#header'><span>Work</span></li>
								<li data-aos='fade-down' data-aos-delay='800' data-aos-anchor='#header'><span>About</span></li>
								<li data-aos='fade-down' data-aos-delay='1000' data-aos-anchor='#header'><span>Get In Touch</span></li>
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