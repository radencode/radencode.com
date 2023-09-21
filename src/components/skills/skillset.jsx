//Modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

//Components
import CheckList from 'skills/checkList.jsx';
import Skill from 'skills/skill.jsx';
import Target from 'global/target.jsx';

const setAnimation = (skillset, index) => {
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

const skillCheckList = skillData =>{
  if(skillData.hasCheckList){
    return ( <CheckList checkList={skillData.checkList} skillset={skillData.skillset} uniKey={skillData.key} /> );
  }
}

const Skillset = props => {
  const { skillData } = props;
  return (
    <div class={'skillset ' + skillData.skillset}>
      <div id={'skillset-header-' + skillData.skillset}class={'skillset-header ' + skillData.skillset + ' ' + skillData.color} data-aos='zoom-in-up'>
        <i class={skillData.icon} aria-hidden="true"></i>
        <Target shape='circle' color='dark-blue'/>
        <h1 class={'skillset-name ' + skillData.skillset}>{skillData.skillset}</h1>
      </div>
      <MediaQuery query='(max-width: 1023px)'>
        <div class='skillset-skills'>
          {skillData.skillList.map((skill, index) => <Skill key={skillData.key + index} color={skillData.color} skill={skill} animation={setAnimation(skillData.skillset, index + 2)}/> )}
        </div>
      </MediaQuery>
      <MediaQuery query='(min-width: 1024px)'>		
        {skillData.skillList.map((skill, index) => <Skill key={skillData.key + index} color={skillData.color}skill={skill} animation={setAnimation(skillData.skillset, index)}/> )}
      </MediaQuery>        
      {skillCheckList(skillData)}
    </div>
  );
}

Skillset.propTypes = {
  skillData: PropTypes.object.isRequired,
};

export default Skillset;