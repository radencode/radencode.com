import React from 'react';

export default class Target extends React.PureComponent{
  render(){
    return (
      <div class={'target ' + this.props.shape} style={this.props.position}>
        <div class='target-area outer'></div>
        <div class='target-area outer-middle'></div>
        <div class='target-area inner-middle'></div>
        <div class='target-area inner'></div>
      </div>
    );
  }
}