import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render(){
		return (
			<h1>Setup webpack dev server</h1>
		);
	}
}

const app = document.getElementById('radencode-app');
ReactDOM.render(<App/>, app);