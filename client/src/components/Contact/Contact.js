import React, { Component } from 'react';

import "./style.css";

class Contact extends Component {
    state = {
        email: {
            recipient: 'Micaiah20x6@gmail.com',
            sender: 'chich20x6@gmail.com',
            subject: '',
            text: ''
        }
    }
    sendEmail = () => {
        
        fetch("/send-email",{
            method: 'POST',
            body: JSON.stringify({
              email: this.state.email
            }),
            headers: {"Content-Type": "application/json"}
          })
        
    }
    render() {
        const { email } = this.state;
        const spacer = {
            margin: 10
        }
        const textArea = {
            borderRadius: 4
        }
        return (
            <div className="contactForm">
                <div style={{ marginTop: 10 }} >
                    <h2 className= "contactMeTitle"> Send Email </h2>
                    {/* <label> Recipient </label>
                    <br />
                    <input value={email.recipient}
                        onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                    <div style={spacer} /> */}
                    {/* <label> Sender </label>
                    <br />
                    <input value={email.sender}
                        onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
                    <div style={spacer} /> */}
                    <label> Subject </label>
                    <br />
                    <input value={email.subject}
                        onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                    <div style={spacer} />
                    <label> Message </label>
                    <br />
                    <textarea rows={3} value={email.text} style={textArea}
                        onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                    <div style={spacer} />
                    <button onClick={() => {
                        this.sendEmail();
                    }}> Send Email </button>
                </div>
            </div>



        );
    }
}

export default Contact;
