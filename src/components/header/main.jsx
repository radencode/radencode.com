import React from 'react';
import MediaQuery from 'react-responsive';
import Featured from 'header/featured.jsx'
import Anchor from 'header/anchor.jsx';

export default class Main extends React.Component {
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
			<main>
				<div id='title' data-aos='fade' data-aos-delay='1600'>
					<Anchor type='top-left' animation='fade-down-right' delay='2000'/>
					<Anchor type='top-right' animation='fade-down-left' delay='2000'/>
					<Anchor type='bottom-right' animation='fade-up-left' delay='2000'/>
					<Anchor type='bottom-left' animation='fade-up-right' delay='2000'/>
					<div id="title-anchor">
						<h1 data-aos='fade' data-aos-delay='2000'><span>Teddy </span><span class='highlight'>Radenkov</span></h1>
						<MediaQuery query='(min-width: 500px)'>
							{(matches) => { return matches ? this.tagline() : null }}
						</MediaQuery>
					</div>						
				</div>
				<MediaQuery query='(max-width: 499px)'>
					{(matches) => { return matches ? this.tagline() : null }}
				</MediaQuery>
				<MediaQuery query='(min-width: 1024px)'>
					<Featured/>
				</MediaQuery>
			</main>
		);
	}
}