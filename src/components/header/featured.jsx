//Modules
import React from 'react';
import Typed from 'typed.js'

export default class Header extends React.PureComponent {
	componentDidMount(){
		let typed = new Typed('#featured-item', {
			strings: ['Single Page Apps', 'Landing Pages', 'User Interfaces', 'Desktop Apps'],
			typeSpeed: 100,
			backSpeed: 50,
			smartBackspace: true,
			backDelay: 1000,
			loop: true,
			loopCount: Infinity,
			showCursor: true,
			cursorChar: '|'
		});		
	}
	render(){
		return (		
			<div id='featured' data-aos='fade' data-aos-delay='2000' data-aos-anchor='#header'>
				<div class='rope left'>
					<div class='h-anchor'></div>
					<div class='r-anchor left'>
						<div class='v-anchor'></div>
						<div class='c-anchor left'></div>
						<div class='line left'></div>
					</div>
				</div>
				<div class='rope right'>
					<div class='h-anchor'></div>
					<div class='r-anchor right'>
						<div class='v-anchor'></div>
						<div class='c-anchor right'></div>
						<div class='line right'></div>
					</div>
				</div>
				<div id='featured-box'>
					<h2><span id='featured-item'></span></h2>
				</div>
			</div>		
		);
	}
}