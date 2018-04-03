//Modules
import axios from 'axios';
import React from 'react';
//Components
import Field from 'contact/field.jsx';

export default class Contact extends React.Component {
  constructor(props){
    super();
    this.state = {
      stage: 'fetching',
      formValided: false,
      validate: false,
    };
    this.errors = 0;
    this.fields = ['firstName', 'lastName', 'email', 'message'];
    this.formDisplayCurrentStage = this.formDisplayCurrentStage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.addFormError = this.addFormError.bind(this);
  }
  componentDidMount(){
    axios.get('/radencode/sendmail').then((response) => {
      console.log(response.data);
    });
  }
  addFormError = () => {
    this.errors++;
  }
  submitMessage = evt => {
    evt.preventDefault();
  }
  formDisplayCurrentStage = () => {
    switch(this.state.stage){
      case 'fetching':
        return (
          <form onSubmit={this.submitMessage} noValidate>
            <h1 id='formTitle'>Get in Touch</h1>
            <ul id='formList'>             
              <Field type='input' 
                     inputType='text'
                     id='firstName' 
                     label='First name' 
                     validate={this.state.validate} 
                     addFormError={this.addFormError} 
                     defaultError='First name can only contain letters.' 
                     validation='name'
              />
              <Field type='input' 
                     inputType='text' 
                     id='lastName' 
                     label='Last name' 
                     validate={this.state.validate} 
                     addFormError={this.addFormError} 
                     defaultError='Last name can only contain letters.' 
                     validation='name'
              />
              <Field type='input' 
                     inputType='email' 
                     id='email' 
                     label='Email' 
                     validate={this.state.validate} 
                     addFormError={this.addFormError} 
                     defaultError='Email format is invalid' 
                     validation='email'
              />
              <Field type='textarea' 
                     id='message' 
                     label='Message' 
                     validate={this.state.validate} 
                     addFormError={this.addFormError} 
                     defaultError='Message needs to be at least 25 characters.' 
                     validation='message'
              />
            </ul>
						<div id='submit'>
            	<input type='submit' value='Send Message'/>
						</div>
          </form>
        );
      case 'sending': 
        return;
      case 'sent':
        return;
      default:
        throw new Error('From status is unavailable');
    }
  }
  render(){  
    return this.formDisplayCurrentStage();
  }
}
