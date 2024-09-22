import React, { Component } from 'react'

export class mern extends Component {
  render() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <img src="img/portfolio/06-small.jpg" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>Blockchain Integration and Cryptography</h2>
                            <p>
                                The integration of blockchain methods into functioning systems as well as full development of systems using blockchain technology. We also include Full encryption of system functionalities and secure paths for data transmission.
                            </p>
                            <h4>
                                Specialties:
                            </h4>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li>SHA-256 Password Hashing</li>
                                        <li>TripleDES</li>
                                        <li>AES</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li>Blockchain encryption</li>
                                        <li>RSA security</li>
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