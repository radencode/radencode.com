import React from 'react';
import ReactDOM from 'react-dom';
import Loader from 'global/loader.jsx';
import Layout from 'layout.jsx';
import AOS from 'aos';
import 'aos.css';
import 'font-awesome.css'
import 'app.sass';

class App extends React.Component {
	constructor(props){
		super(props)
		AOS.init({
			duration: 1000,
			offset: 0
		});
		this.state = {loading: true};
		this.updateContent = this.updateContent.bind(this);		
	}
	componentDidMount(){
		this.loader = setTimeout(() => this.setState({loading: false}), 4500);
	}
	componentWillUnmount(){
		clearTimeout(this.loader);
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