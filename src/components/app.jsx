//React modules
import React from 'react';
import ReactDOM from 'react-dom';

//Animations
import AOS from 'aos';
import 'aos.css';

//Styles
import 'app.sass';

//Components
import Loader from 'loader.jsx';
import Layout from 'layout.jsx';

class App extends React.Component {
	constructor(props){
		super(props)
		AOS.init();
		this.state = {loading: true};
		this.updateContent = this.updateContent.bind(this);		
	}
	componentDidMount(){
		setTimeout(() => this.setState({loading: false}), 4500);
	}
	updateContent(loading){
		return loading ? <Loader/> : <Layout/>
	}
	render(){
		return (
			this.updateContent(this.state.loading)
		);
	}
}

const app = document.getElementById('radencode-app');
ReactDOM.render(<App/>, app);