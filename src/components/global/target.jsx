import React from 'react';

export default class Target extends React.PureComponent{
  render(){
    return (
      <div class={this.props.translate ? 'target translate ' + this.props.shape : 'target ' + this.props.shape}>
        <div class={'target-area ' + this.props.color + ' outer'} data-aos='fade-right'></div>
        <div class={'target-area ' + this.props.color + ' outer-middle'} data-aos='fade-left' data-aos-delay={200}></div>
        <div class={'target-area ' + this.props.color + ' inner-middle'} data-aos='fade-right' data-aos-delay={400}></div>
        <div class={'target-area ' + this.props.color + ' inner'} data-aos='fade-left' data-aos-delay={600}></div>
      </div>
    );
  }
}