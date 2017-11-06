import React from 'react';

export default class Target extends React.PureComponent{
  render(){
    return (
      <div class={'target ' + this.props.shape} style={this.props.position}>
        <div class='target-area outer' data-aos='fade-right'></div>
        <div class='target-area outer-middle' data-aos='fade-left' data-aos-delay={200}></div>
        <div class='target-area inner-middle' data-aos='fade-right' data-aos-delay={400}></div>
        <div class='target-area inner' data-aos='fade-left' data-aos-delay={600}></div>
      </div>
    );
  }
}