import React, { Component } from 'react'

export class Api extends Component {
  render() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <img src="img/portfolio/03-small.jpg" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>RESTful Development</h2>
                            <p>
                                Full development of RESTapi endpoints, secure, stable and responsive enough to connect from any type of Database Management System to any type of user interface. Secure user authentication, dashboard development, token management, and data transmission. 
                            </p>
                            <h4>
                                Specialties:
                            </h4>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li>Django RestFramework</li>
                                        <li>NodeJS and ExpressJS</li>
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

export default Api;