//React modules
import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import sass from 'styles/app.sass';

//Components
import Loader from 'components/loader.jsx';

class App extends React.Component {
	render(){
		return (
			<Loader/>
		);
	}
}

const app = document.getElementById('radencode-app');
ReactDOM.render(<App/>, app);