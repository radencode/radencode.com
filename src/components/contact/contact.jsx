//Modules
import React from 'react';
//Components
import Form from 'contact/form.jsx';

const Contact = props => {
  return (
    <footer id='contact'>
      {/*Left Square*/}
      {/*Right Square*/}
      <div id='formBackground'>
        <Form/>
      </div>
      <div id='links'>
        <ul></ul>
        <div id='break'></div>
        <h3 id='copyright'>&copy; 2017 radencode.com</h3>
      </div>
    </footer>
  );
}

export default Contact; 
