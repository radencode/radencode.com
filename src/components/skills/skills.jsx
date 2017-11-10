import React from 'react';
import Skillset from 'skills/skillset.jsx';
import Title from 'global/title.jsx';
import Square from 'global/square.jsx';
import Discription from 'global/discription.jsx';

export default class Skills extends React.Component{
  componentWillMount(){
    this.frontEndSkills = {
      skillset: 'Front-End',
			key: 1,
			icon: 'fa fa-desktop',
			color: 'dark-blue',
      skillList: [
				{
					name: 'JavaScript',
					years: 3,
					tag: 'Years',
					skilllevel: '95%',
					id: 'javascript',
				},
				{
					name: 'React.js',
					years: 2,
					tag: 'Years',
					skilllevel: '90%',
					id: 'react',
				},
				{
					name: 'Redux',
					years: 2,
					tag: 'Years',
					skilllevel: '85%',
					id: 'redux',
				},
				{
					name: 'HTML5',
					years: 5,
					tag: 'Years',
					skilllevel: '98%',
					id: 'html',
				},
				{
					name: 'CSS3/SASS',
					years: 5,
					tag: 'Years',
					skilllevel: '98%',
					id: 'css',
				},
			],
      check: true,
      checkList: [
        'Transform designs into well structured and robust applications.',
        'Responsive applications that are compatible with most devices and browsers.',
        'Intuitive UI patterns that provide a smooth user experience.',
        'Agile development approach with scalability in mind.',
      ],
    }
    this.backEndSkills = {
      skillset: 'Back-End',
			key: 10,
			icon: 'fa fa-server',
			color: ' blue',
      skillList: [
				{
					name: 'C++',
					years: 5,
					tag: 'Years',
					skilllevel: '70%',
					id: 'cpp',
				},
				{
					name: 'PHP',
					years: 2,
					tag: 'Years',
					skilllevel: '60%',
					id: 'php',
				},
				{
					name: 'MySQL',
					years: 2,
					tag: 'Years',
					skilllevel: '55%',
					id: 'mysql',
				},
				{
					name: 'Node.js',
					years: 1,
					tag: 'Year',
					skilllevel: '40%',
					id: 'node',
				},
				{
					name: 'Electron',
					years: 1,
					tag: 'Year',
					skilllevel: '70%',
					id: 'electron',
				},
			],
      check: true,
      checkList: [
        'Reusable components and modules.',
        'Proficient database integration.',
        'Continuous improvement with incremental changes.',
      ],
    }
    this.devToolSkills = {
      skillset: 'Dev-Tools',
			key: 100,
			icon: 'fa fa-cubes',
			color: 'gray',
      skillList: [
				{
					name: 'Webpack',
					years: 1,
					tag: 'Year',
					skilllevel: '75%',
					id: 'webpack',
				},
				{
					name: 'Babel',
					years: 1,
					tag: 'Year',
					skilllevel: '50%',
					id: 'babel',
				},
				{
					name: 'Yarn/NPM',
					years: 2,
					tag: 'Years',
					skilllevel: '65%',
					id: 'yarn',
				},
				{
					name: 'Git/GitHub',
					years: 2,
					tag: 'Years',
					skilllevel: '70%',
					id: 'git',
				},
				{
					name: 'CLI',
					years: 5,
					tag: 'Years',
					skilllevel: '90%',
					id: 'cli',
				},
			],
      check: false,
    }
  }
  render(){    
    return (
      <section id='skills'>
				<Title title='Skills' subTitle={'I always strive for the better'}/>
				<Discription id='skills-anchor' discription='I thrive in a challenging environment that requires quick thinking and problem solving skills. I love to learn and continue to practice with the latest technology in hopes of achieving my personal goals as well as better my skills.'/>
        <Skillset skills={this.frontEndSkills}/>
        <Skillset skills={this.backEndSkills}/>
        <Skillset skills={this.devToolSkills}/>
      </section>
    );
  }    
}