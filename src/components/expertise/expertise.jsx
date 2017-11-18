//Modules
import React from 'react';
import MediaQuery from 'react-responsive';
import Particles from 'react-particles-js';
//Components
import Discription from 'global/discription.jsx';
import LightBulb from 'expertise/lightbulb.jsx';
import Square from 'global/square.jsx';
import Title from 'global/title.jsx';
//Assets
import ParticlesConfig from 'particles-config-body.json';

const lightBulbData = [
  {
    Icon: 'fa fa-code',
    Placement: 'first',
    Order: 1,
    Title: 'Web Development',
    Discription: 'I develop front-end clients, portals, landing pages, and web and desktop applications. My projects and designs are completed using the latest ES6 JavaScript tools including: Node.JS, Babel, Webpack, React.JS and more.',
  },
  {
    Icon: 'fa fa-mobile',
    Placement: 'second',
    Order: 2,
    Title: 'UX/UI',
    Discription: 'Creating responsive, visually rich user interfaces and applications is essential to customer satisfaction. I use UX techniques to deliver top-notch performance and usability to the end user.',
  },
  {
    Icon: 'fa fa-database',
    Placement: 'third',
    Order: 3,
    Title: 'Performance',
    Discription: 'Fast loading web pages are crutial to the end user; therefore I strive to develop the fastest applications possible by providing quality front-end clients built with performace and scalability in mind.',
  },
  {
    Icon: 'fa fa-cogs',
    Placement: 'fourth',
    Order: 4,
    Title: 'Customization',
    Discription: 'I am all about innovative and challenging projects. Developing applications from scratch allows me to select the best tools and modules without limitations.',
  },
  {
    Icon: 'fa fa-cloud-upload',
    Placement: 'fifth',
    Order: 5,
    Title: 'Cloud Integration',
    Discription: "Whether it's consuming or building web APIs for my applications, I enjoy integrating two pieces of software to make a functional product.",
  },
];

const renderLightBulbs = (list, start, end) => {
  return list.map((bulb, index) => {
    if(index >= start && index <= end) {
      return ( <LightBulb key={'lightbulb' + index}
                          icon={bulb.Icon}
                          placement={bulb.Placement}
                          order={bulb.Order}
                          title={bulb.Title}
                          discription={bulb.Discription}
                          /> );
    }
    return;
  });
}

const Expertise = () => {
  return (
    <section id='expertise'>
      <MediaQuery query='(min-width: 1024px)'>
        <Particles params={ParticlesConfig} style={{width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px'}}/>		
      </MediaQuery>        
      <MediaQuery query='(min-width: 1600px)'>
        <Square size='big' angle='thirty-right' settings={{top: '800px', right: '-1000px', borderColor: '#F3F3F3'}}/>
        <Square size='big' angle='fifteen-left' settings={{top: '400px', left: '-900px', borderColor: '#F3F3F3'}}/>		
      </MediaQuery>
      <Title title='Expertise' subTitle={'This is how I create & build'}/>
      <Discription id='expertise-anchor' discription='I love to create eye catching and easy to use applications that provide a great user experience. I specialize in developing with React.js/Redux and RESTful APIs as a backend to my applications. Developing web applications is more than a job to me; it is a hobby. Although I always strive for the end product with customer satisfaction at highest priority, it is the collection of experiences gained over time that drives me. Oh... and did I mention I love JavaScript?!'/>
      <div id="lightbulb-container">
        <MediaQuery query='(max-width: 1599px)'>
          {renderLightBulbs(lightBulbData, 0, 4)}
        </MediaQuery>
        <MediaQuery query='(min-width: 1600px)'>
          <div id="lightbulb-container-top">
            {renderLightBulbs(lightBulbData, 0, 2)}
          </div>
          <div id="lightbulb-container-bottom">
            {renderLightBulbs(lightBulbData, 3, 4)}
          </div>
        </MediaQuery> 
      </div> 
    </section>
  );
}

export default Expertise; 
