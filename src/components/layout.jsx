import React from 'react';
import Header from 'header/header.jsx';
import Expertise from 'expertise/expertise.jsx';

export default class Layout extends React.Component {
	render(){
		return (
			<div class='layout'>
				<Header/>
				<Expertise/>
			</div>
		);
	}
}