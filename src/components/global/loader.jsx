import React from 'react';

export default class Loader extends React.Component {
	render(){
		return (
			<div id="loader-backgound">
				<main id="loader">
					<div id="loader-icon">
						<div class="loading-bar left"></div>
						<div class="loading-bar middle"></div>
						<div class="loading-bar right"></div>
					</div>
					<h1><span class="highlight">Raden</span><span>code</span></h1>
					<div id="loading-progress">
						<div id="loading-completed"></div>
					</div>
				</main>
			</div>
		);
	}
}