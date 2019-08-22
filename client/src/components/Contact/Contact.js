import React, { Component } from 'react';

import "./style.css";

// Allow less secure apps: ON in gmail settings to be able to send email
class Contact extends Component {
    state = {
        email: {
            recipient: 'sn.reactport@gmail.com',
            sender: 'chich20x6@gmail.com',
            from: '',
            subject: '',
            text: '',
            confirmMsg: ''
        }
    }
    sendEmail = () => {
        fetch("/send-email", {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                if (res) {
                    const { email } = this.state;
                    this.setState({ email: { ...email, confirmMsg: "Email sent.", from: "", subject: "", text: "" } })
                } else {
                    alert("email was not sent!");
                }
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
            <div className="contactForm" >
                {/* <div style={{ marginTop: 10 }} >
                    <h2 className= "contactMeTitle"> Send Email </h2>
                    <label> From: </label>
                    <br />
                    <input value={email.from}
                        onChange={e => this.setState({ email: { ...email, from: e.target.value } })} />
                    <div style={spacer} />
                    <label> Subject: </label>
                    <br />
                    <input value={email.subject}
                        onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                    <div style={spacer} />
                    <label> Message: </label>
                    <br />
                    <textarea rows={3} value={email.text} style={textArea}
                        onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                    <div style={spacer} />
                    <button onClick={() => {
                        this.sendEmail();
                    }}> Send Email </button>
                    <p id="confirmMessage">{email.confirmMsg}</p>
                </div> */}
                <div className="containerForm">
                    <div  className="wrapper animated bounceInLeft">
                        <div className="company-info">
                            <h3>Contact</h3>
                            <ul className="ulForm">
                                <li><i className="fa fa-phone"></i> (209) 598-4517</li>
                                <li><i className="fa fa-envelope"></i> saronnhong@gmail.com</li>
                                <li><a className="contactLinks" href="https://www.linkedin.com/in/saronnhong"><div><i class="fab fa-linkedin"></i> LinkedIn</div></a></li>
                                <li><a className="contactLinks" href="https://github.com/saronnhong"><div><i class="fab fa-github"></i> Github</div></a></li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h3>Email</h3>
                            <p id="confirmMessage">{email.confirmMsg}</p>
                            <form>
                                <p>
                                    <label>Name</label>
                                    <input value={email.subject}
                                        onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                                </p>
                                <p>
                                    <label>Email Address</label>
                                    <input value={email.from}
                                        onChange={e => this.setState({ email: { ...email, from: e.target.value } })} />
                                </p>
                                <p className="full">
                                    <label>Message</label>
                                    <textarea rows="5" value={email.text}
                                        onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                                </p>

                                <button onClick={() => {
                                    this.sendEmail();
                                }}> Submit</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>



        );
    }
}

export default Contact;
