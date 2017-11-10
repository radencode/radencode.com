import React from 'react';
import MediaQuery from 'react-responsive';
import Skill from 'skills/skill.jsx';
import Target from 'global/target.jsx';

export default class Skillset extends React.PureComponent{
  constructor(props){
		super(props);
    this.skillChecks = this.skillCheckList.bind(this);
  }
  skillCheckList(check){
    if(check){
      return (
        <div class='skillset-check-list'>
          <ul>
            {this.props.skills.checkList.map((check, index) => {
              return (
                <li key={this.props.skills.key + index} data-aos='fade-up'>
                  <MediaQuery query='(min-width: 1024px)'>
										<span><i class="fa fa-check" aria-hidden="true"></i></span>
									</MediaQuery>
									<MediaQuery query='(max-width: 1023px)'>
                  	<div><i class="fa fa-check" aria-hidden="true"></i></div>
									</MediaQuery>
                  <h2>{check}</h2>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  render(){    
    return (
      <div class='skillset'>
        <div class={'skillset-header ' + this.props.skills.color} data-aos='zoom-in-up'>
          <i class={this.props.skills.icon} aria-hidden="true"></i>
          <Target shape='circle' color='dark-blue' translate={true} position={{bottom: '-21px', left: '50%'}}/>
          <h1 class='skillset-name'>{this.props.skills.skillset}</h1>
        </div>
        <div class='skillset-skills'>
          {this.props.skills.skillList.map((skill, index) => <Skill key={this.props.skills.key + index} color={this.props.skills.color}skill={skill}/> )}
        </div>
        {this.skillCheckList(this.props.skills.check)}
      </div>
    );
  }    
}