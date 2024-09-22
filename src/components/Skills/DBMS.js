import React, { Component } from 'react'

export class DBMS extends Component {
  render() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <img src="img/portfolio/04-small.jpg" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>Database Management System Development</h2>
                            <p>
                                Full development, deployment, hosting, and maintenance of Database management system over the local network and the internet. Securing and fire-fencing of the database. This also comes with full encryption of stored data while maintaining speed of access to the data.
                            </p>
                            <h4>
                                Specialties:
                            </h4>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li>MySQL</li>
                                        <li>NoSQL</li>
                                    </ul>
                                </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                        <li>PostgreSQL</li>
                                        <li>MangoDB</li>
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

export default DBMS;