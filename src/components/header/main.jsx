//Modules
import MediaQuery from 'react-responsive';
import React from 'react';

//Components
import Anchor from 'global/anchor.jsx';
import Featured from 'header/featured.jsx';
import Tagline from 'header/tagline.jsx';

const Main = () => {
	return (
		<main>
			<div id='title' data-aos='fade' data-aos-delay='1600' data-aos-anchor='#header'>
				<Anchor type='top-left' color='yellow' animation='fade-down-right' delay={2000} anchor='#header'/>
				<Anchor type='top-right' color='yellow' animation='fade-down-left' delay={2000} anchor='#header'/>
				<Anchor type='bottom-right' color='yellow' animation='fade-up-left' delay={2000} anchor='#header'/>
				<Anchor type='bottom-left' color='yellow' animation='fade-up-right' delay={2000} anchor='#header'/>
				<div id="title-anchor">
					<h1 data-aos='fade' data-aos-delay='2000' data-aos-anchor='#header'><span>Teddy </span><span class='highlight'>Radenkov</span></h1>
					<MediaQuery query='(min-width: 500px)'>
						<Tagline/>
					</MediaQuery>
				</div>						
			</div>
			<MediaQuery query='(max-width: 499px)'>
				<Tagline/>
			</MediaQuery>
			<MediaQuery query='(min-width: 1024px)'>
				<Featured/>
			</MediaQuery>
		</main>
	);
}

export default Main;