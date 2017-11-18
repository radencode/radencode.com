//Modules
import React from 'react';
//Components
import Expertise from 'expertise/expertise.jsx';
import Header from 'header/header.jsx';
import Skills from 'skills/skills.jsx';
import Work from 'work/work.jsx';

const Layout = () => {
	return (
		<div class='layout'>
			<Header/>
			<Expertise/>
			<Skills/>
			<Work/>
		</div>
	);
}

export default Layout;