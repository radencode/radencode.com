//Modules
import PropTypes from 'prop-types';
import React from 'react';

export default class Field extends React.Component {
  constructor(props){
    super();
    this.props = props;
    this.state = {
			error: false,
			smallLabel: false, 
      fieldStage: 'idle',
      errorMessage: props.defaultError,
    };
		this.autoResizeMessageBox = this.autoResizeMessageBox.bind(this);
    this.generateFormField = this.generateFormField.bind(this);
    this.printError = this.printError.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateOnFocus = this.validateOnFocus.bind(this);
    this.validateOnBlur = this.validateOnBlur.bind(this);
    this.testField = this.testField.bind(this);
  }

  handleOnChange = (textarea, evt) => {
    if(textarea)
      this.autoResizeMessageBox(evt.target);    
    this.validateField(evt.target);
  }

	validateOnFocus = evt => {
    this.setState({
      smallLabel: true, 
      fieldStage: this.state.error ? 'error' : 'active',
    });
  }

  validateOnBlur = evt => {
    if(evt.target.value == '')
      this.setState({smallLabel: false});
    this.validateField(evt.target);
  }

  validateField(field){
    if(field.value == '' || field.value == undefined){
      this.setState({
        error: true,
        errorMessage: `${this.props.label} is a required field.`,
        fieldStage: 'error',
      });
      return;
    }
    if(!this.testField(field.value)){
      this.setState({
        error: true,
        errorMessage: this.props.defaultError,
        fieldStage: 'error',
      });
    }
    else{
      this.setState({
        error: false,
        fieldStage: 'idle',
      });
    }     
  }

  testField = (value) => {
    switch(this.props.validation){
      case 'name':
        return new RegExp('^[a-z A-Z]+$').test(value);       
      case 'email':
        return new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$').test(value);
      case 'message': 
        return value.trim().split('').length >= 25 ? true : false;
      default:
        throw new Error('Field validation not specified'); 
    }
  }

	autoResizeMessageBox = textarea => {
    let messageStyles = window.getComputedStyle(textarea);
    let messagePadding = parseInt(messageStyles.paddingTop) + parseInt(messageStyles.paddingBottom);
    textarea.style.height = 'auto';
    let messageHeight = textarea.scrollHeight - messagePadding;
    textarea.style.height = messageHeight + 'px';
  }
  
  generateFormField = field => {
    switch(field){
      case 'input':
        return (
          <input 
            type={this.props.inputType} 
            id={this.props.id} 
            name={this.props.id} 
            autoComplete='off'
            onChange={this.handleOnChange.bind(this, false)}
            onFocus={this.validateOnFocus}
            onBlur={this.validateOnBlur}
          />          
        );
      case 'textarea':
        return (
          <textarea  
            id={this.props.id} 
            name={this.props.id} 
            rows={1} 
            onChange={this.handleOnChange.bind(this, true)}
            onFocus={this.validateOnFocus}
            onBlur={this.validateOnBlur}
          />
        );
      default:
        return;
    }
  }

  printError = () => {
    if(this.state.error) 
      return <h3 class='errorMessage'>{this.state.errorMessage}</h3>
    return;
  }

  render(){ 
    return (
      <li class='field'>
        <div class='anchor'>
          <label class={this.state.smallLabel ? 'small' : ''} htmlFor={this.props.id}>{this.props.label}</label>
          {this.generateFormField(this.props.type)}
          <div class='status'>
            <div class={this.state.fieldStage === 'error' ? 'bar idle' : `bar ${this.state.fieldStage}`}></div>
            <div class={this.state.fieldStage != 'error' ? 'bar idle' : 'bar error'}></div>
          </div>
        </div>          
        {this.printError()}
      </li>
    );
  }
}

Field.propTypes = {
  type: PropTypes.string.isRequired,
  inputType: (props, propName, componentName) => {
    if(props['type'] === 'input' && props[propName] == undefined || props[propName] == '')
      return new Error(`The prop \`${propName}\` is marked as required in \`${componentName}\`, but it's value is \`undefined\`.`);
  },
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validate: PropTypes.bool.isRequired,
  addFormError: PropTypes.func.isRequired,
  defaultError: PropTypes.string.isRequired,
  validation: PropTypes.string.isRequired,
}
