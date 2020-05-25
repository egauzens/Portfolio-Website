import React from 'react';
import axios from 'axios';

import '../stylesheets/ContactForm.css';

class ContactForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        subject:'',
        email: '',
        message: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST", 
            url:"https://afternoon-escarpment-85532.herokuapp.com/send", 
            data:  this.state
          }).then((response)=>{
            if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
            }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
            }
          })
    }

    onFirstNameChanged = (e) => {
        this.setState({firstName: e.target.value});
    }

    onLastNameChanged = (e) => {
        this.setState({lastName: e.target.value});
    }

    onEmailChanged = (e) => {
        this.setState({email: e.target.value});
    }

    onSubjectChanged = (e) => {
        this.setState({subject: e.target.value});
    }

    onMessageChanged = (e) => {
        this.setState({message: e.target.value});
    }

    resetForm() {
        this.setState({firstName: '', lastName: '', email: '', subject: '', message: ''});
     }

    render() {
        return (
            <div id="contactSection" className="container-fluid pt-sm-0 pb-3 pb-lg-0">
                <div className="row justify-content-between">
                    <div className="col-lg-5 pl-0">
                        <h1 className="pl-3">Contact</h1>
                        <img id="smallHeadshot" className="d-none d-lg-block" src='/headshot-small.JPG' />
                    </div>
                    <div className="col-lg-7">
                        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                            <div className="row">
                                <div className="col-lg-6 form-group">
                                    <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.onFirstNameChanged} required placeholder="First Name" />
                                </div>
                                <div className=" col-lg-6 form-group">
                                    <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.onLastNameChanged} required placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.onEmailChanged} required placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" value={this.state.subject} onChange={this.onSubjectChanged} required placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="message" value={this.state.message} onChange={this.onMessageChanged} required placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="form-control">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;