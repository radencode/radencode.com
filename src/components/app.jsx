//React modules
import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import sass from 'app.sass';

//Components
import Loader from 'loader.jsx';

class App extends React.Component {
	render(){
		return (
			<Loader/>
		);
	}
}

const app = document.getElementById('radencode-app');
ReactDOM.render(<App/>, app);