import React from 'react';
import MediaQuery from 'react-responsive';
import Particles from 'react-particles-js';
import Title from 'global/title.jsx';
import Square from 'global/square.jsx';
import Discription from 'global/discription.jsx';
import LightBulb from 'expertise/lightbulb.jsx';
import particlesConfig from 'particles-config-expertise.json';

export default class Expertise extends React.Component{
  constructor(props){
    super(props);
    this.development = this.development.bind(this);
    this.ux = this.ux.bind(this);
    this.performance = this.performance.bind(this);
    this.customization = this.customization.bind(this);
    this.integration = this.integration.bind(this);
  }
  development(){
    return (
      <LightBulb icon='fa fa-code' placement='first' order={1} title='Web Development' discription='I develop front-end clients, portals, landing pages, and web and desktop applications. My projects and designs are completed using the latest ES6 JavaScript tools including: Node.JS, Babel, Webpack, React.JS and more.'/>
    );
  }
  ux(){
    return (
      <LightBulb icon='fa fa-mobile' placement='second' order={2} title='UX/UI' discription='Creating responsive, visually rich user interfaces and applications is essential to customer satisfaction. I use UX techniques to deliver top-notch performance and usability to the end user.'/>
    );
  }
  performance(){
    return (
      <LightBulb icon='fa fa-database' placement='third' order={3} title='Performance' discription='Fast loading web pages are crutial to the end user; therefore I strive to develop the fastest applications possible by providing quality front-end clients built with performace and scalability in mind.'/>
    );
  }
  customization(){
    return (
      <LightBulb icon='fa fa-cogs' placement='fourth' order={4} title='Customization' discription='I am all about innovative and challenging projects. Developing applications from scratch allows me to select the best tools and modules without limitations. '/>
    );
  }
  integration(){
    return (
      <LightBulb icon='fa fa-cloud-upload' placement='fifth' order={5} title='Cloud Integration' discription={"Whether it's consuming or building web APIs for my applications, I enjoy integrating two pieces of software to make a functional product."}/>
    );
  }
  render(){
    return (
      <section id='expertise'>
        <MediaQuery query='(min-width: 1024px)'>
          <Particles params={particlesConfig} style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px'}}/>		
				</MediaQuery>        
        <MediaQuery query='(min-width: 1600px)'>
          <Square size='big' angle='thirty-right' position={{top: '800px', right: '-1000px'}}/>
					<Square size='big' angle='fifteen-left' position={{top: '400px', left: '-900px'}}/>		
				</MediaQuery>
				<Title title='Expertise' subTitle={'This is how I create & build'}/>
				<Discription id='expertise-anchor' discription='I love to create eye catching and easy to use applications that provide a great user experience. I specialize in developing with React.js/Redux and RESTful APIs as a backend to my applications. Developing web applications is more than a job to me; it is a hobby. Although I always strive for the end product with customer satisfaction at highest priority, it is the collection of experiences gained over time that drives me. Oh... and did I mention I love JavaScript?!'/>
        <div id="lightbulb-container">
          <MediaQuery query='(max-width: 1599px)'>
            {this.development()}
            {this.ux()}
            {this.performance()}
            {this.customization()}
            {this.integration()}
          </MediaQuery>
          <MediaQuery query='(min-width: 1600px)'>
            <div id="lightbulb-container-top">
              {this.development()}
              {this.ux()}
              {this.performance()}
            </div>
            <div id="lightbulb-container-bottom">
              {this.customization()}
              {this.integration()}
            </div>
          </MediaQuery> 
        </div> 
      </section>
    );
  }
}