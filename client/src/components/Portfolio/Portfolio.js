import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import Project from "./projectList.json";
import "./style.css";

class Portfolio extends Component {
    // state = {
    //     isClicked: false
    // }
    // componentDidMount() {
    //     window.scrollTo(0, 0);
    // }

    render() {
        return (
            <div className="portMain animated fadeInRight">
                <div className="container portContainer">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 id="portfolioTitle">My Portfolio</h1>
                        </div>
                    </div>

                    {Project.map((projects) =>
                        <div className="row">
                            <div className="col-md-6 cardRow ">
                                <div className="cardPort">
                                    <div className="card cardFront">
                                        <a >
                                            <img src={process.env.PUBLIC_URL + projects.imageLocation1} className="card-img-top" alt="..." />
                                        </a>
                                        <div className="card-body">
                                            <div className="card-text">{projects.project1}
                                                {/* <a href={projects.githubLink1}>
                                                    <i className="fab fa-github githubFA"></i>
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardBack">
                                        <div className="cardDetails">
                                            <p><div className="descriptTitle">Overview: </div>{projects.overview1}</p>
                                            
                                            <p><div className="descriptTitle">Technologies:</div>{projects.tech1}</p>
                                            
                                            <p className="cardBackLink">
                                                <div className="descriptTitle"> Deployed: </div>
                                                <a href={projects.deployLink1}>
                                                    {projects.deployLink1}
                                                </a>
                                            </p>

                                            <p className="cardBackLink">
                                                <div className="descriptTitle"> GitHub: </div>
                                                <a  href={projects.githubLink1}>
                                                    {projects.githubLink1}
                                                </a>
                                            </p>

                                        </div>

                                    </div>
                                </div>




                            </div>

                            <div className="col-md-6 cardRow">
                                <div className="cardPort">
                                    <div className="card cardFront">
                                        <a >
                                            <img src={process.env.PUBLIC_URL + projects.imageLocation2} className="card-img-top" alt="..." />
                                        </a>
                                        <div className="card-body">
                                            <div className="card-text">{projects.project2}
                                                {/* <a href={projects.githubLink2}>
                                                    <i className="fab fa-github githubFA"></i>
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardBack">
                                        <div className="cardDetails">
                                            <p><div className="descriptTitle">Overview: </div>{projects.overview2}</p>
                                            
                                            <p><div className="descriptTitle">Technologies:</div>{projects.tech2}</p>
                                            
                                            <p className="cardBackLink">
                                                <div className="descriptTitle">Deployed: </div>
                                                <a href={projects.deployLink2}>
                                                    {projects.deployLink2}
                                                </a>
                                            </p>

                                            <p className="cardBackLink">
                                                <div className="descriptTitle">GitHub: </div>
                                                <a href={projects.githubLink2}>
                                                    {projects.githubLink2}
                                                </a>
                                            </p>

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
