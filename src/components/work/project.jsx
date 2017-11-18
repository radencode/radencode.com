//Modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Tag from 'work/tag.jsx';
import Grid from 'work/grid.jsx';

const Project = props => {
	const { pattern, project } = props;
	return (
		<div class='project' data-aos={'zoom-in'}>
				<div class={'discription ' + pattern}>
					<div class={'card ' + pattern}>
						<div class={'line ' + pattern} data-aos='fade'></div>
						<h1 id={'work-' + project.image + '-title'} data-aos='fade-up'>{project.title}</h1>
						<p data-aos='fade-up'>{project.discription}</p>
						<ul id={'work-' + project.image + '-tags'} class='tags'>
							{project.tags.map((tag, index) => <Tag key={tag.id} id={tag.id} name={tag.name} pattern={pattern} delay={index * 100} anchor={'#work-' + project.image + '-tags'}/> )}				
						</ul>					
					</div>
					<a class='view-github' href={project.link} target='_blank' data-aos='fade' data-aos-delay={400}>View on github</a>
				</div>
				<div class={'image ' + pattern + ' ' + project.title}>
					<MediaQuery query='(max-width: 1023px)'>
          	<div class='cut'></div>
					</MediaQuery>
					<MediaQuery query='(min-width: 1024px)'>
          	<Grid name={project.title} image={project.image} direction={pattern}/>
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