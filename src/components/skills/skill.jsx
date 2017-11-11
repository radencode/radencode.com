import React from 'react';
import MediaQuery from 'react-responsive';
import Anchor from 'global/anchor.jsx';

export default class Skill extends React.PureComponent{
  render(){    
    return (
      <div id={'skill-' + this.props.skill.id} class='skill' data-aos={this.props.animation.name} data-aos-delay={this.props.animation.delay} data-aos-anchor={this.props.animation.anchor}>
				<MediaQuery query='(min-width: 1024px)'>
					<Anchor type='top-left' color='dark-blue' animation='fade-down-right' delay='0' anchor={"#skill-" + this.props.skill.id}/>
					<Anchor type='top-right' color='dark-blue' animation='fade-down-left' delay='0' anchor={"#skill-" + this.props.skill.id}/>
					<Anchor type='bottom-right' color='dark-blue' animation='fade-up-left' delay='0' anchor={"#skill-" + this.props.skill.id}/>
					<Anchor type='bottom-left' color='dark-blue' animation='fade-up-right' delay='0' anchor={"#skill-" + this.props.skill.id}/>
        </MediaQuery>
        <div class='skill-properties' >
          <div class={'skill-diamond ' + this.props.color}>
            <div class='skill-timeframe'>
              <h2 class='skill-years'>{this.props.skill.years}</h2>
              <h2 class='skill-tag'>{this.props.skill.tag}</h2>
            </div>
          </div>
          <h2 class={'skill-name ' + this.props.color} >{this.props.skill.name}</h2>
          <div class='skill-progress'>
            <div class={'skill-level ' + this.props.color} style={{width: this.props.skill.skilllevel}}></div>
          </div>
        </div>
      </div>
    );
  }    
}