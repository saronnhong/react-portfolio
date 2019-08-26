import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import Project from "./projectList.json";
import "./style.css";

class Portfolio extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="portMain animated bounceInRight slower">
                <div className="container portContainer">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 id="portfolioTitle">My Portfolio</h1>
                        </div>
                    </div>

                    {Project.map((projects) =>
                        <div className="row">
                            <div className="col-md-6 cardRow">
                                <div className="cardPort">
                                    <div className="card cardFront">
                                        <a href={projects.deployLink1} >
                                            <img src={process.env.PUBLIC_URL + projects.imageLocation1} className="card-img-top" alt="..." />
                                        </a>
                                        <div className="card-body">
                                            <div className="card-text">{projects.project1}
                                                <a href={projects.githubLink1}>
                                                    <i className="fab fa-github githubFA"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardBack">
                                        <div className="cardDetails">
                                            <h6>DANI is a Full Stack MERN application that provides children with autism a source of entertainment and learning. The app is divided into three units, Look, Listen, and Learn. Each of these units contains three modules for engagement and learning.</h6>
                                            <div>
                                            Technologies: JavaScript, React, React Canvas Draw, React Player, Node/Express Server, MongoDB/Mongoose, MVC, Heroku, Robo 3T, Reddit API, Photo Sphere Viewer
                                            </div>
                                        </div>

                                    </div>
                                </div>




                            </div>

                            <div className="col-md-6 cardRow">
                                <div className="cardPort">
                                    <div className="card cardFront">
                                        <a href={projects.deployLink2} >
                                            <img src={process.env.PUBLIC_URL + projects.imageLocation2} className="card-img-top" alt="..." />
                                        </a>
                                        <div className="card-body">
                                            <div className="card-text">{projects.project2}
                                                <a href={projects.githubLink1}>
                                                    <i className="fab fa-github githubFA"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardBack">
                                        <div className="cardDetails">
                                            <h8>Saron Nhong <span>Web Developer</span></h8>
                                            <div className="social-icons">
                                                <a ><i class="fab fa-facebook-f"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                </div>




                            </div>
                        </div>
                    )}
                </div>
            </div >
        );
    }
}
export default Portfolio;
