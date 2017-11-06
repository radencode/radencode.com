import React from 'react';
import MediaQuery from 'react-responsive';
import Title from 'global/title.jsx';
import Square from 'global/square.jsx';
import Discription from 'global/discription.jsx';
import LightBulb from 'expertise/lightbulb.jsx';

export default class Expertise extends React.Component{
  render(){
    return (
      <section id='expertise'>
				<MediaQuery query='(max-width: 1023px)'>
					<Square size='small' angle='twenty-left' position={{top: '20px', left: '-520px'}}/>		
				</MediaQuery>
				<Title title='Expertise' subTitle={'This is how I create & build'}/>
				<Discription id='expertise-anchor' discription='I love to create eye catching and easy to use applications that provide a great user experience. I specialize in developing with React.js/Redux and RESTful APIs as a backend to my applications. Developing web applications is more than a job to me; it is a hobby. Although I always strive for the end product with customer satisfaction at highest priority, it is the collection of experiences gained over time that drives me. Oh... and did I mention I love JavaScript?!'/>
        <LightBulb after={true} icon='fa fa-code' order={1} title='Web Development' discription='I develop front-end clients, portals, landing pages, and web and desktop applications. My projects and designs are completed using the latest ES6 JavaScript tools including: Node.JS, Babel, Webpack, React.JS and more.'/>
        <LightBulb after={true} icon='fa fa-mobile' order={2} title='UX/UI' discription='Creating responsive, visually rich user interfaces and applications is essential to customer satisfaction. I use UX techniques to deliver top-notch performance and usability to the end user.'/>
        <LightBulb after={true} icon='fa fa-database' order={3} title='Performance' discription='Fast loading web pages are crutial to the end user; therefore I strive to devlop the fastest applications possible by providing quality front-end clients built with performace and scalability in mind.'/>
        <LightBulb after={true} icon='fa fa-cogs' order={4} title='Customization' discription='I am all about innovative and challenging projects. Developing applications from scratch allows me to select the best tools and modules without limitations. '/>
        <LightBulb after={false} icon='fa fa-cloud-upload' order={5} title='Cloud Integration' discription={"Whether it's consuming or building web APIs for my applications, I enjoy integrating two pieces of software to make a functional product."}/>
      </section>
    );
  }
}