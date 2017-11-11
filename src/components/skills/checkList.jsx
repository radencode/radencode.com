import React from 'react';
import MediaQuery from 'react-responsive';

export default class CheckList extends React.PureComponent{
	constructor(props){
		super(props);
		this.checkIconPosition = this.checkIconPosition.bind(this);
	}
	checkIconPosition(skillset, check){
		switch(skillset){
			case 'Front-End':
				return ( <h2><span><i class="fa fa-check" aria-hidden="true"></i></span>{check}</h2> );
			case 'Back-End':
				return ( <h2>{check}<span><i class="fa fa-check" aria-hidden="true"></i></span></h2> );
		}
	}	
  render(){  
		return (
			<div class='skillset-check-list'>
				<ul id={'ul-' + this.props.skills.skillset} class={this.props.skills.skillset}>
					{this.props.skills.checkList.map((check, index) => {
						return (
							<li class={this.props.skills.skillset} key={this.props.skills.key + index} data-aos-anchor={'#ul-' + this.props.skills.skillset} data-aos='fade-up' data-aos-delay={index * 200}>
								<MediaQuery query='(min-width: 1600px)'>
									{this.checkIconPosition(this.props.skills.skillset, check)}
								</MediaQuery>
								<MediaQuery query='(max-width: 1599px)'>
									<span><i class="fa fa-check" aria-hidden="true"></i></span>
									<h2>{check}</h2>
								</MediaQuery>                 
							</li>
						);
					})}
				</ul>
			</div>
		);
  }    
}