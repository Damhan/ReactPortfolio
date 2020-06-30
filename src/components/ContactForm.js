import React from 'react';
import './../App.css';

class ContactForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
  }

  onChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }

  onSubmit(event) {
    event.preventDefault()
    fetch('https://submit-form.com/SLP5r92ZjzhgchjHX_OXW', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json'
      }, 
      body: JSON.stringify(this.state)
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error)
    })
  }

  render() {
    return (
      <div class="wrapper">
        <section class="contact-form-sect">
        <div class="cf-title">
						<h2>Contact Me<hr/></h2>

				</div>
          <form  class="contact-form" onSubmit={this.onSubmit}>

          <p class="form-labels">Name:</p>
          <input
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />

          <p class="form-labels">Email:</p>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />

          <p class="form-labels">Message:</p>
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.onChange}
            class="cf-textarea"
            />
          <input class="contact-sub" type="submit" value="Send Message"/>
          </form>
        </section>
      </div>
      
      
      );
  }

  }

export default ContactForm;