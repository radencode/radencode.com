//Modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Anchor from 'global/anchor.jsx';

const Skill = props => {
  const { skill, color, animation } = props;
  return (
    <div id={'skill-' + skill.id} class='skill' data-aos={animation.name} data-aos-delay={animation.delay} data-aos-anchor={animation.anchor}>
      <MediaQuery query='(min-width: 1024px)'>
        <Anchor type='top-left' color='dark-blue' animation='fade-down-right' delay={0} anchor={"#skill-" + skill.id}/>
        <Anchor type='top-right' color='dark-blue' animation='fade-down-left' delay={0} anchor={"#skill-" + skill.id}/>
        <Anchor type='bottom-right' color='dark-blue' animation='fade-up-left' delay={0} anchor={"#skill-" + skill.id}/>
        <Anchor type='bottom-left' color='dark-blue' animation='fade-up-right' delay={0} anchor={"#skill-" + skill.id}/>
      </MediaQuery>
      <div class='skill-properties' >
        <div class={'skill-diamond ' + color}>
          <div class='skill-timeframe'>
            <h2 class='skill-years'>{skill.years}</h2>
            <h2 class='skill-tag'>{skill.tag}</h2>
          </div>
        </div>
        <h2 class={'skill-name ' + color}>{skill.name}</h2>
        <div class='skill-progress'>
          <div class={'skill-level ' + color} style={{width: skill.skilllevel}}></div>
        </div>
      </div>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  animation: PropTypes.object.isRequired,
};

export default Skill;