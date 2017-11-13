import React from 'react';

export default class Square extends React.PureComponent{
  render(){
    return (
			<div class={this.props.light ? 'square light ' + this.props.size + ' ' + this.props.angle : 'square ' + this.props.size + ' ' + this.props.angle} style={this.props.position}></div>      
    );
  }
}