import React from 'react';

export default class Square extends React.PureComponent{
  render(){
    return (
			<div class={'square ' + this.props.size + ' ' + this.props.angle} style={this.props.position}></div>      
    );
  }
}