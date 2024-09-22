import React, { Component } from 'react'

export class mern extends Component {
  render() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <img src="img/portfolio/05-small.jpg" className="img-responsive" alt=""/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>Offensive Security and Information Security Audit</h2>
                            <p>
                                Full Information Security audit covering all system user interfaces and network at the physical base of operations. This is achieved through means of penetration testing, Network cracking, system re-analysis, and code reviewing.
                            </p>
                            <h4>
                                Specialties:
                            </h4>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li>Kali Linux Ethical Hacking</li>
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