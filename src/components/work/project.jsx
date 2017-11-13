import React from 'react';
import Tag from 'work/tag.jsx';

export default class Project extends React.PureComponent{
  render(){  
		return (
			<div class={this.props.first ? 'project first' : 'project'}>
				<div class={'discription ' + this.props.card}>
					<div class={'card ' + this.props.card}>
						<div class={'line ' + this.props.card}></div>
						<h1>{this.props.project.title}</h1>
						<p>{this.props.project.discription}</p>
						<ul class='tags'>
							{this.props.project.tags.map((tag, index) => { return <Tag key={tag.id} id={tag.id} name={tag.name} card={this.props.card}/> })}				
						</ul>					
					</div>
					<a class='view-github' href={this.props.project.link} target='_blank'>View on github</a>
				</div>
				<div class={'image ' + this.props.card + ' ' + this.props.project.title}>
					<div class='cut'></div>
				</div>
			</div>
		);
  }    
}