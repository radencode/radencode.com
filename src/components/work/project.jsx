//Modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Anchor from 'global/anchor.jsx';
import Tag from 'work/tag.jsx';
import Grid from 'work/grid.jsx';

const Project = props => {
	const { pattern, project } = props;
	return (
		<div class='project' data-aos={'zoom-in'}>
				<div class={'discription ' + pattern}>
					<div class={'card ' + pattern}>
						<div class={'line ' + pattern} data-aos='fade'></div>
						<h1 id={'work-' + project.imageId + '-title'} data-aos='fade-up'>{project.title}</h1>
						<p data-aos='fade-up'>{project.discription}</p>
						<ul id={'work-' + project.imageId + '-tags'} class='tags'>
							{project.tags.map((tag, index) => <Tag key={tag.id} id={tag.id} name={tag.name} pattern={pattern} delay={index * 100} anchor={'#work-' + project.imageId + '-tags'}/> )}				
						</ul>					
					</div>
					<div class='view-github' data-aos='fade' data-aos-delay={400}>
						<Anchor type='top-left' color='dark-blue' animation={false}/>
						<Anchor type='top-right' color='dark-blue' animation={false}/>
						<Anchor type='bottom-right' color='dark-blue' animation={false}/>
						<Anchor type='bottom-left' color='dark-blue' animation={false}/>
						<a href={project.link} target='_blank'>View on github</a>
					</div>
				</div>
				<div class={'image ' + pattern + ' ' + project.title}>
					<MediaQuery query='(max-width: 1023px)'>
          	<div class='cut'></div>
					</MediaQuery>
					<MediaQuery query='(min-width: 1024px)'>
          	<Grid title={project.title} imageId={project.imageId} pattern={pattern}/>
					</MediaQuery>						
				</div>
			</div>
	);
}

Project.propTypes = {
	pattern: PropTypes.string.isRequired,
	project: PropTypes.object.isRequired,
};

export default Project;