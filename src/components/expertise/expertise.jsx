import React from 'react';
import MediaQuery from 'react-responsive';
import Target from 'global/target.jsx';
import Title from 'global/title.jsx';
import Square from 'global/square.jsx';
import Discription from 'global/discription.jsx';

export default class Expertise extends React.Component{
  render(){
    return (
      <section id='expertise'>
				<MediaQuery query='(max-width: 1023px)'>
					<Square size='small' angle='twenty-left' position={{top: '20px', left: '-520px'}}/>		
				</MediaQuery>
				<Title title='Expertise' subTitle='This is how I create & build'/>
				<Discription discription='I love to create eye catching and easy to use applications that provide a great user experience. I specialize in developing with React.js/Redux and RESTful APIs as a backend to my applications. Developing web applications is more than a job to me; it is a hobby. Although I always strive for the end product with customer satisfaction at highest priority, it is the collection of experiences gained over time that drives me. Oh... and did I mention I love JavaScript?!'/>
      </section>
    );
  }
}