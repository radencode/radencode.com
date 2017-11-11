import React from 'react';
import MediaQuery from 'react-responsive';
import Skill from 'skills/skill.jsx';
import Target from 'global/target.jsx';
import CheckList from 'skills/checkList.jsx';

export default class Skillset extends React.PureComponent{
  constructor(props){
		super(props);
    this.skillChecks = this.skillCheckList.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
  }
  skillCheckList(check){
    if(check){
      return ( <CheckList skills={this.props.skills} /> );
    }
  }
  setAnimation(skillset, index){
    switch(skillset){
      case 'Front-End':
        return {
          name: 'fade-right',
          anchor: '#skillset-header-Front-End',
          delay: index * 200,
        }
      case 'Back-End':
        return {
          name: 'fade-left',
          anchor: '#skillset-header-Back-End',
          delay: index * 200,
        }
      case 'Dev-Tools':
        return {
          name: 'fade-up',
          anchor: '#skillset-header-Dev-Tools',
          delay: index * 200,
        }
    }
  }
  render(){    
    return (
      <div class={'skillset ' + this.props.skills.skillset}>
        <div id={'skillset-header-' + this.props.skills.skillset}class={'skillset-header ' + this.props.skills.skillset + ' ' + this.props.skills.color} data-aos='zoom-in-up'>
          <i class={this.props.skills.icon} aria-hidden="true"></i>
          <Target shape='circle' color='dark-blue'/>
          <h1 class={'skillset-name ' + this.props.skills.skillset}>{this.props.skills.skillset}</h1>
        </div>
        <MediaQuery query='(max-width: 1023px)'>
          <div class='skillset-skills'>
            {this.props.skills.skillList.map((skill, index) => <Skill key={this.props.skills.key + index} color={this.props.skills.color}skill={skill} animation={this.setAnimation(this.props.skills.skillset, index + 2)}/> )}
          </div>
        </MediaQuery>
        <MediaQuery query='(min-width: 1024px)'>		
          {this.props.skills.skillList.map((skill, index) => <Skill key={this.props.skills.key + index} color={this.props.skills.color}skill={skill} animation={this.setAnimation(this.props.skills.skillset, index)}/> )}
        </MediaQuery>        
        {this.skillCheckList(this.props.skills.check)}
      </div>
    );
  }    
}