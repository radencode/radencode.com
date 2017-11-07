import React from 'react';
import Target from 'global/target.jsx';

export default class LightBulb extends React.PureComponent{
  render(){
    return (
      <div class={'lightbulb ' + this.props.placement}>
				<div class='icon'>
					<div class='bulb' data-aos='fade-down'>
						<Target shape='circle' position={{bottom: '-21px', left: '39px'}}/>
						<div class='stand' data-aos='fade-up'></div>
						<i class={this.props.icon} aria-hidden="true"></i>
					</div>
				</div>
				<div class='order' data-aos='fade-up'>{this.props.order}</div>
				<div class='discription'>
					<h2 data-aos='fade-up'>{this.props.title}</h2>
					<div class='break-line' data-aos='fade-up'></div>
					<p data-aos='fade-up'>{this.props.discription}</p>
				</div>
      </div>
    );
  }
}