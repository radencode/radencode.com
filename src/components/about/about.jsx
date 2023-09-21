//Modules
import MediaQuery from 'react-responsive';
import Particles from 'react-particles-js';
import React from 'react';

//Components
import Activity from 'about/activity.jsx';
import Anchor from 'global/anchor.jsx';
import Discription from 'global/discription.jsx';
import Square from 'global/square.jsx';
import Target from 'global/target.jsx';
import Title from 'global/title.jsx';

export default class About extends React.Component {
	constructor(props) {
		super();
		this.state = { activityCoding: false, activityImage: true, stage: 'image' };
		this.updateActivityImage = this.updateActivityImage.bind(this);
		this.updateButton = this.updateButton.bind(this);
		this.updateMessage = this.updateMessage.bind(this);
	}
	updateActivityImage = () => {
		this.setState({
			activityCoding: !this.state.activityCoding,
			activityImage: !this.state.activityImage,
			stage: this.state.activityCoding ? 'image' : 'coding',
		});
	};
	updateButton = button => {
		return (
			<div id="try-again" data-aos="fade-up">
				<Anchor type="top-left" color="dark-blue" animation={false} />
				<Anchor type="top-right" color="dark-blue" animation={false} />
				<Anchor type="bottom-right" color="dark-blue" animation={false} />
				<Anchor type="bottom-left" color="dark-blue" animation={false} />
				<a href="#coding" onClick={this.updateActivityImage}>
					{button}
				</a>
			</div>
		);
	};
	updateMessage = stage => {
		switch (stage) {
			case 'image':
				return (
					<div key="about-stage-image">
						<h2 id="wait-question" data-aos="fade-left">
							<span>Wait</span>, wait, wait... a <span>front-end engineer</span> that doesn't enjoy coding?
						</h2>
						{this.updateButton("Let's try again")}
					</div>
				);
			case 'coding':
				return (
					<div key="about-stage-coding">
						<h2 id="wait-question" data-aos="fade-left">
							<span>Now</span> that is the <span>real activity</span> that I <span>absolutely</span> enjoy doing.
						</h2>
						{this.updateButton('View others again')}
					</div>
				);
		}
	};
	render() {
		return (
			<section id="about">
				<Title title="About" subTitle="Eat - Sleep - Code" />
				<Discription
					id="abour-anchor"
					discription={
						"My name is Teddy Radenkov. I'm a 24 year-old Front-End Engineer living in Portland, Oregon. I was born and raised in Bulgaria and moved to the United States at the age of 13. I started learning computer programming my junior year in High School. I have been in love with creating  and developing applications using web technologies ever since. Just like you, I am a human that likes to have fun when away from the keyboard."
					}
				/>
				<div id="enjoy">
					<h2 id="coding" data-aos="fade-up">
						What I <span>enjoy</span> doing!
					</h2>
					<i class="fa fa-long-arrow-down" aria-hidden="true" data-aos="fade-up" />
				</div>
				<div id="side-squares">
					<MediaQuery query="(max-width: 1023px)">
						<Square
							size="small"
							angle="forty-five"
							settings={{ top: '-251px', left: '-674px', borderColor: '#F8F8F8' }}
						/>
						<Square
							size="small"
							angle="forty-five"
							settings={{ top: '-251px', right: '-674px', borderColor: '#F8F8F8' }}
						/>
					</MediaQuery>
					<MediaQuery query="(min-width: 1024px)">
						<Square
							size="big"
							angle="forty-five"
							settings={{ top: '-506px', left: '-1300px', borderColor: '#F8F8F8' }}
						/>
						<Square
							size="big"
							angle="forty-five"
							settings={{ top: '-506px', right: '-1300px', borderColor: '#F8F8F8' }}
						/>
					</MediaQuery>
					<Target shape="diamond" color="dark-blue" animation={{ first: 'right', second: 'up' }} />
					<Target shape="diamond" color="dark-blue" animation={{ first: 'down', second: 'left' }} />
				</div>
				<ul id="activities">
					<Activity
						size="small"
						inDelay={1000}
						outDelay={0}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="hockey"
						animation={{ type: 'fade-down', delay: 0, anchor: '#act-pool' }}
					/>
					<Activity
						size="small"
						inDelay={1200}
						outDelay={200}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="skiing"
						animation={{ type: 'fade-right', delay: 200, anchor: '#act-pool' }}
					/>
					<Activity
						size="small"
						inDelay={1200}
						outDelay={200}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="tennis"
						animation={{ type: 'fade-left', delay: 200, anchor: '#act-pool' }}
					/>
					<Activity
						size="small"
						inDelay={1400}
						outDelay={400}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="cooking"
						animation={{ type: 'fade-right', delay: 400, anchor: '#act-pool' }}
					/>
					<Activity
						size="big"
						inDelay={1500}
						outDelay={500}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="hiking"
						animation={{ type: 'fade-up', delay: 400, anchor: '#act-pool' }}
					/>
					<Activity
						size="small"
						inDelay={1400}
						outDelay={400}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="pool"
						animation={{ type: 'fade-left', delay: 400, anchor: '#act-pool' }}
					/>
					<Activity
						size="small"
						inDelay={1600}
						outDelay={600}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="traveling"
						animation={{ type: 'fade-right', delay: 600, anchor: '#act-pool' }}
					/>
					<Activity
						size="small"
						inDelay={1600}
						outDelay={600}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="filming"
						animation={{ type: 'fade-left', delay: 600, anchor: '#act-pool' }}
					/>
					<Activity
						size="small"
						inDelay={1800}
						outDelay={800}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="eating"
						animation={{ type: 'fade-right', delay: 800, anchor: '#act-pool' }}
					/>
					<Activity
						size="small"
						inDelay={1800}
						outDelay={800}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="gaming"
						animation={{ type: 'fade-left', delay: 800, anchor: '#act-pool' }}
					/>
					<Activity
						size="small"
						inDelay={2000}
						outDelay={1000}
						codingState={this.state.activityCoding ? 'animated-in' : 'animated-out'}
						imageState={this.state.activityImage ? 'animated-in' : 'animated-out'}
						name="cards"
						animation={{ type: 'fade-up', delay: 1000, anchor: '#act-pool' }}
					/>
				</ul>
				{this.updateMessage(this.state.stage)}
			</section>
		);
	}
}
