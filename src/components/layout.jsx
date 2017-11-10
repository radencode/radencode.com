import React from 'react';
import Header from 'header/header.jsx';
import Expertise from 'expertise/expertise.jsx';
import Skills from 'skills/skills.jsx';

export default class Layout extends React.Component {
	render(){
		return (
			<div class='layout'>
				<Header/>
				<Expertise/>
				<Skills/>
			</div>
		);
	}
}