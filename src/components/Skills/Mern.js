import React, { Component } from 'react'

export class mern extends Component {
  render() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <img src="img/portfolio/01-small.jpg" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>M-E-R-N and Full-Stack Development</h2>
                            <p>
                                Full development, deployment, hosting, and maintenance of systems all the way from the database management system, the api endpoints and the various user interfaces, and connecting the whole system. We develop these systems using the most secure, fast, responsive, cost-efficient, robust and powerful frameworks, programming languages and technologies.
                            </p>
                            <h4>
                                Specialties:
                            </h4>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li>M-E-R-N Stack</li>
                                        <li>React, Django & PostgreSQL</li>
                                        <li>C# .NET & MySQL</li>
                                    </ul>
                                </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                        <li>Firebase</li>
                                        <li>Flutter, Django & PostgreSQL</li>
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

export default mern;