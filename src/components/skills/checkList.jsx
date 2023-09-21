//Modules
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

//Components
import Check from 'skills/check.jsx';

const CheckList = props => {
	const { skillset, checkList, uniKey } = props;
	return (
		<div class='skillset-check-list'>
			<ul id={'ul-' + skillset} class={skillset}>
				{checkList.map((check, index) => <Check key={uniKey + index} check={check} skillset={skillset} delay={index * 200}/> )}
			</ul>
		</div>
	);
}

CheckList.propTypes = {
  skillset: PropTypes.string.isRequired,
  checkList: PropTypes.array.isRequired,
  uniKey: PropTypes.number.isRequired,
};

export default CheckList;