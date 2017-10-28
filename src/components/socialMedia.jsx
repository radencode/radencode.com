import React from 'react';
import MediaQuery from 'react-responsive';
import Anchor from 'anchor.jsx'

export default class SocialMedia extends React.Component {
	render(){
		return (
			<div id='social-media' data-aos='fade-right' data-aos-delay='1600'>		
				<a class='social-icon' href='#'>
					<Anchor type='top-right' animation='fade-down-left' delay='2000'/>	
					<Anchor type='bottom-right' animation='fade-up-left' delay='2000'/>
					<i class="fa fa-dribbble" aria-hidden="true"></i>
					<MediaQuery query='(min-width: 1300px)'>	
						<h3>View my <span>Dribble</span> page</h3>
					</MediaQuery>				
				</a>
				<a class='social-icon featured' href='https://github.com/radencode' target='_blank'>
					<Anchor type='top-right' animation='fade-down-left' delay='2000'/>	
					<Anchor type='bottom-right' animation='fade-up-left' delay='2000'/>
					<i class="fa fa-github" aria-hidden="true"></i>
					<MediaQuery query='(min-width: 1300px)'>
						<h3>View my <span>GitHub</span> page</h3>
					</MediaQuery>					
				</a>
				<a class='social-icon' href='https://www.linkedin.com/in/radencode' target='_blank'>
					<Anchor type='top-right' animation='fade-down-left' delay='2000'/>	
					<Anchor type='bottom-right' animation='fade-up-left' delay='2000'/>
					<i class="fa fa-linkedin" aria-hidden="true"></i>
					<MediaQuery query='(min-width: 1300px)'>
						<h3>View my <span>LinkedIn</span> page</h3>
					</MediaQuery>				
				</a>
			</div>	
		);
	}
}