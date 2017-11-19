//Modules
import MediaQuery from 'react-responsive';
import Particles from 'react-particles-js';
import React from 'react';

//Components
import Title from 'global/title.jsx';
import Project from 'work/project.jsx';
import Discription from 'global/discription.jsx';

//Assets
import ParticlesConfig from 'particles-config-body.json';

const radencode = {
	title: 'Radencode',
	discription: 'Web portfolio that showcases my skills and experience through an elegant design and interactive examples.',
	tags: [{id: 'radencode-react', name: 'React.js'}, {id: 'radencode-webpack', name: 'Webpack'}, {id: 'radencode-babel', name: 'Babel'}, {id: 'radencode-node', name: 'Node.js'}, {id: 'radencode-sass', name: 'Sass'}],
	link: 'https://github.com/radencode/radencode.com',
	imageId: 'radencode',
};

const reflow = {
	title: 'Reflow File',
	discription: 'File management software that manages thousands of files and folders. Built with aesthetics in mind, reflow provides great user interface and user experience for the desktop environment.',
	tags: [{id: 'reflow-react', name: 'React.js'}, {id: 'reflow-redux', name: 'Redux'}, {id: 'reflow-electron', name: 'Electron'}, {id: 'reflow-node', name: 'Node.js'}, {id: 'reflow-sass', name: 'Sass'}],
	link: 'https://github.com/radencode/reflow',
	imageId: 'reflow',
};

const Work = () => {
	return (
		<section id='work'>
			<MediaQuery query='(min-width: 1024px)'>
				<Particles params={ParticlesConfig} style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px'}}/>		
			</MediaQuery>
			<Title title='Work' subTitle='Simplicity always wins'/>
			<Discription id='work-anchor' discription={"My most important goal is to get a product out the door. There is always more fine-tuning to add to any good application, but this is best accomplished after a trial period. The feedback I receive from customers, colleagues, and friends is essential to my development process as it dramatically helps to improve the functionality of my applications design and my customers’ user experience."}/>
			<div id='work-examples'>
				<Project pattern='left' project={radencode}/>
				<Project pattern='right' project={reflow}/>
			</div>
		</section>
	);
}

export default Work;