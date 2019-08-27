import React, { Component } from "react";
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="main">
        
        <div className="homeScreen">
          <div className="container">
            <div className="row">
              <div className="col-md-12 imgRow">
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="nameText animated zoomInDown slower" >
                  Full Stack Web Developer
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="introText animated fadeInUp slow">
                  HTML | CSS | JavaScript | NodeJS | Express | MySQL | MongoDB | ReactJS
                </div>
              </div>
            </div>
            <div className="emptyRow">
            </div>
          </div>
        </div>


      </div >
    );
  }
}

export default App;
