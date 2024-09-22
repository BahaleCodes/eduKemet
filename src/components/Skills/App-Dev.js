import React, { Component } from 'react'

export class AppDev extends Component {
  render() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <img src="img/portfolio/02-small.jpg" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>Mobile Application Development</h2>
                            <p>
                                The development, maintenance, and deployment of powerful, stable, secure and fast mobile applications. Supporting and delivering applications that remain operational on Android and iOS devices with no downtimes during maintenance.
                            </p>
                            <h4>
                                Specialties:
                            </h4>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li>FLutter Hybrid Development</li>
                                        <li>Progressive Web Application Development with React</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default AppDev;