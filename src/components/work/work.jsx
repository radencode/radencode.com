import React from 'react';
import Title from 'global/title.jsx';
import Project from 'work/project.jsx';
import Discription from 'global/discription.jsx';

export default class Work extends React.Component{
	componentWillMount(){
		this.radencode = {
			title: 'Radencode',
			discription: 'Web portfolio that showcases my skills and experience through an elegant design and interactive examples.',
			tags: [{id: 'radencode-react', name: 'React.js'}, {id: 'radencode-webpack', name: 'Webpack'}, {id: 'radencode-babel', name: 'Babel'}, {id: 'radencode-node', name: 'Node.js'}, {id: 'radencode-sass', name: 'Sass'}],
			link: 'https://github.com/radencode/radencode.com',
		};
		this.reflow = {
			title: 'Reflow File',
			discription: 'File management software that manages thousands of files and folders. Built with aesthetics in mind, reflow provides great user interface and user experience for the desktop environment.',
			tags: [{id: 'reflow-react', name: 'React.js'}, {id: 'reflow-redux', name: 'Redux'}, {id: 'reflow-electron', name: 'Electron'}, {id: 'reflow-node', name: 'Node.js'}, {id: 'reflow-sass', name: 'Sass'}],
			link: 'https://github.com/radencode/reflow',
		};
	} 
  render(){  
		return (
			<section id='work'>
				<Title title='Work' subTitle='Simplicity always wins'/>
				<Discription id='work-anchor' discription={"My most important goal is to get a product out the door. There is always more fine-tuning to add to any good application, but this is best accomplished after a trial period. The feedback I receive from customers, colleagues, and friends is essential to my development process as it dramatically helps to improve the functionality of my applications design and my customers’ user experience."}/>
				<div id='work-examples'>
					<Project card='left' first={true} project={this.radencode}/>
					<Project card='right' first={false} project={this.reflow}/>
				</div>
			</section>
		);
  }    
}