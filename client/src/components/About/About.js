import React, { Component } from 'react';

import "./style.css";

// Allow less secure apps: ON in gmail settings to be able to send email
class About extends Component {
    // state = {
    //     email: {
    //         recipient: 'sn.reactport@gmail.com',
    //         sender: 'chich20x6@gmail.com',
    //         from: '',
    //         subject: '',
    //         text: '',
    //         confirmMsg: ''
    //     }
    // }
    // sendEmail = () => {
    //     fetch("/send-email", {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             email: this.state.email
    //         }),
    //         headers: { "Content-Type": "application/json" }
    //     })
    //         .then(res => {
    //             if (res) {
    //                 const { email } = this.state;
    //                 this.setState({ email: { ...email, confirmMsg: "Email sent.", from: "", subject: "", text: "" } })
    //             } else {
    //                 alert("email was not sent!");
    //             }
    //         })
    // }

    render() {

        return (
            
            <div className="aboutMain container animated fadeInDown" >
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <h3 className="aboutMeTitle">
                                About Me
                            </h3>
                        </div>
                        <div className="row">
                            <div className="aboutMeInfo">
                                <p><h3>Hi! My name is Saron.</h3></p>
                                
                                <p>I am a Full Stack Web Developer with strong skills in HTML, CSS, Javascript, NodeJS, Express, MongoDB, and React. I’m passionate about learning new things and find great satisfaction in solving complex problems. </p>
                                <p>My previous career as a Software Test Engineer allowed me to understand the hard work it takes to put out quality software and the importance of identifying bugs in the early stages of software development. Applying this unique perspective and diverse skills to Web Development has helped me improve the quality of my applications and save time in the debugging phase of development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <img className="imgHolder" src={process.env.PUBLIC_URL + "/img/saron.jpg"} />
                    </div>
                </div>
            </div>



        );
    }
}

export default About;
