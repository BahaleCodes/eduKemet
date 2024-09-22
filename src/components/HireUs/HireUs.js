import React, { Component } from 'react';
import emailjs from 'emailjs-com';

import './HireUs.css';

class HireUs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quote: {
                name: props.name,
                email: props.email,
                message: props.message,
                systemType: props.systemType,
                loading: false
            }
        }
    }

    handleName = (e) => {
        var quote = this.state.quote;
        quote.name = e.target.value;
    }
    handleEmail = (e) => {
        var quote = this.state.quote;
        quote.email = e.target.value;
    }
    handleMessage = (e) => {
        var quote = this.state.quote;
        quote.message = e.target.value;
    }
    handleBasicWeb = (e) => {
        var quote = this.state.quote;
        quote.systemType = "Basic Website";
        alert(this.state.quote.systemType + " selected. \n\nPlease proceed give us some details about you and to tell us more about the system you want.");
    }
    handlePro = (e) => {
        var quote = this.state.quote;
        quote.systemType = "Professional Website";
        alert(this.state.quote.systemType + " selected. \n\nPlease proceed give us some details about you and to tell us more about the system you want.");
    }
    handleRoyal = (e) => {
        var quote = this.state.quote;
        quote.systemType = "Full-Stack Web Application";
        alert(this.state.quote.systemType + " selected. \n\nPlease proceed give us some details about you and to tell us more about the system you want.");
    }
    handleDivine = (e) => {
        var quote = this.state.quote;
        quote.systemType = "Full-Stack System Application";
        alert(this.state.quote.systemType + " selected. \n\nPlease proceed give us some details about you and to tell us more about the system you want.");
    }
    handleBasic = (e) => {
        var quote = this.state.quote;
        quote.systemType = "Basic mobile Application";
        alert(this.state.quote.systemType + " selected. \n\nPlease proceed give us some details about you and to tell us more about the system you want.");
    }
    handleDynamic = (e) => {
        var quote = this.state.quote;
        quote.systemType = "Dynamic Hybrid Application";
        alert(this.state.quote.systemType + " selected. \n\nPlease proceed give us some details about you and to tell us more about the system you want.");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.setState({loading: true});
        var nm = this.state.quote.name;
        var eml = this.state.quote.email;
        var mess = "Desired System: "+this.state.quote.systemType+", specs: "+this.state.quote.message;
        let templeteParams = {
            from_name: nm,
            to_name: 'Bahale Codes',
            // subject: this.state.contactForm.subject,
            message_html: mess,
            from_email: eml
        };
        emailjs.send('bahalecode', 'template_344am1s', templeteParams, 'user_rayodiGCpUWj4QUfHPvIY')
        .then( result => {
            alert('Request sent, we will respond shortly. Thank you.', result.text);
            this.setState({loading: false});
        },
        error => {
            alert('An error was encounter, Please try again', error.text);
            this.setState({loading: false});
        })
        this.clearState();
    }

    clearState = () => {
          this.setState({
              name: '',
              email: '',
              subject: '',
              message: '',
        })
    }

    render() {
        return (
            <div id="hire-us" className='text-center'>
                <div className='container'>
                    <div className="section-title">
                        <h2>Give Bahale the job</h2>
                    </div>
                    <div className="section-title">
                        <h1>Web Development</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Basic</h1>
                                </div>
                                <ul>
                                    <h4>Static Website</h4>
                                    <li>Basic responsive website</li>
                                    <li>Hosted as a Heroku application</li>
                                    <li>Limited Functionality</li>
                                    <li>Functioning with Static data</li>
                                    <li>Developed with ReactJS</li>
                                    <li>Once off development no maintenance and support contract</li>
                                    <li>LOGO Only</li>
                                    <li>Basic Web design</li>
                                    <h4>BEST FOR: CV/Resume/Personal Websites</h4>
                                </ul>
                                <h1>From: R3000</h1>
                                <a href='#quote' value="Basic Website" className='page-scroll' onClick={this.handleBasicWeb}>
                                    GET A QUOTE
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Professional</h1>
                                </div>
                                <ul>
                                    <h4>Dynamic Website</h4>
                                    <li>Responsive website design</li>
                                    <li>Hosted on Heroku / Digital Ocean</li>
                                    <li>Connected to a personalized domain</li>
                                    <li>Limited to essential business Functionalities</li>
                                    <li>Functioning with Static JSON data</li>
                                    <li>Developed with ReactJS</li>
                                    <li>1 year maintenance and support contract</li>
                                    <li>Free stress testing</li>
                                    <li>3 LOGO options</li>
                                    <li>Word Document Letter heads</li>
                                    <li>Company E-mail address</li>
                                    <li>advance color coding</li>
                                    <h4>BEST FOR: Company Websites</h4>
                                </ul>
                                <h1>From: R6000</h1>
                                <a href='#quote' value="Professional Website" className='page-scroll' onClick={this.handlePro}>
                                    GET A QUOTE
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Royalty</h1>
                                </div>
                                <ul>
                                    <h4>Full-Stack Web Application</h4>
                                    <li>Fully responsive website design</li>
                                    <li>Hosted on Heroku or Digital Ocean</li>
                                    <li>Connected to a personalized domain</li>
                                    <li>Unlimited business Functionalities</li>
                                    <li>Functioning with Static JSON data</li>
                                    <li>Connected to a custom built RESTapi service</li>
                                    <li>Utilizing custom built Authentication</li>
                                    <li>2 year maintenance and support contract</li>
                                    <li>Free SSL certificate</li>
                                    <li>Free SEO</li>
                                    <li>Free stress testing</li>
                                    <li>Free penetration testing</li>
                                    <li>3 LOGO options</li>
                                    <li>Word Document Letter heads</li>
                                    <li>Company E-mail Addresses</li>
                                    <li>Animated background designs</li>
                                    <li>Advance website theming</li>
                                    <li>Google My Business account creation</li>
                                    <li>Social Media content and theme development and maintenance</li>
                                    <h4>BEST FOR: Web Applications, basic E-commerce site, Photography sites, and system E-learning sites</h4>
                                </ul>
                                <h1>From: R9000</h1>
                                <a href='#quote' value="Full-Stack Web Application" className='page-scroll' onClick={this.handleRoyal}>
                                    GET A QUOTE
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Divine</h1>
                                </div>
                                <ul>
                                    <h4>Full-Stack System Application</h4>
                                    <li>Fully responsive website design</li>
                                    <li>Animated design</li>
                                    <li>Hosted on a dedicated could server</li>
                                    <li>Connected to a personalized domain</li>
                                    <li>Comes with business emails</li>
                                    <li>Unlimited business Functionalities</li>
                                    <li>Functioning with Dynamic JSON data</li>
                                    <li>Connected to a custom built RESTapi service</li>
                                    <li>RESTapi connection to web application, mobile application and system dashboard</li>
                                    <li>Utilizing custom built Authentication</li>
                                    <li>Mobile Application (iOS and Android) for mobile use</li>
                                    <li>Progressive Web Application (optional)</li>
                                    <li>2 year maintenance and support contract</li>
                                    <li>Free SSL certificate</li>
                                    <li>Free SEO</li>
                                    <li>Free stress testing</li>
                                    <li>Free penetration testing</li>
                                    <li>3 LOGO options</li>
                                    <li>Word Document Letter heads</li>
                                    <li>Animated background design</li>
                                    <li>Advance website theming</li>
                                    <li>Google service connections</li>
                                    <li>Google My Business account creation</li>
                                    <li>Social Media content and theme development and maintenance</li>
                                    <li></li>
                                    <h4>BEST FOR: Service systems, advance E-commerce, Social media platforms</h4>
                                </ul>
                                <a href='#quote' value="Full-Stack System Application" className='page-scroll' onClick={this.handleDivine}>
                                    GET A QUOTE
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                        <h1>Mobile Application Development</h1>
                    </div>

                    <div className="col-md-6 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Basic</h1>
                                </div>
                                <ul>
                                    <h4>Basic static Application</h4>
                                    <li>Either for Android or iOS</li>
                                    <li>Fully responsive design</li>
                                    <li>Hosted on Firebase</li>
                                    <li>Limited business Functionalities</li>
                                    <li>Functioning with Static data</li>
                                    <li>Utilizing custom standard Authentication if needed</li>
                                    <li>6 month maintenance and support contract</li>
                                    <li>Free stress testing</li>
                                    <li>Free penetration testing</li>
                                    <li>Basic website for App details</li>
                                    <li>Basic LOGO design with 3 options</li>
                                    <li>Company E-mail Address</li>
                                    <li>Social Media content and theme development and maintenance</li>
                                    <li>connection to static JSON data</li>
                                    <h4>BEST FOR: Basic E-commerce</h4>
                                </ul>
                                <h1>From: R8000</h1>
                                <a href='#quote' className='page-scroll' value={"Dynamic Hybrid Application"} onClick={this.handleBasic}>
                                    GET A QUOTE
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="HireUsContainer">
                                <div className="section-title">
                                    <h1>Dynamic</h1>
                                </div>
                                <ul>
                                    <h4>Dynamic Hybrid Application</h4>
                                    <li>Functional on both iOS and Android</li>
                                    <li>Deployed on Play Store, App Gallery and App store</li>
                                    <li>Fully responsive and animated design</li>
                                    <li>Hosted on Firebase</li>
                                    <li>Unlimited business Functionalities</li>
                                    <li>Functioning with Dynamic JSON data</li>
                                    <li>Integration with advanced technologies like Block-chain, SHA-256 Hashin and AI</li>
                                    <li>Data Encryption</li>
                                    <li>Connected to a custom built RESTapi service</li>
                                    <li>Utilizing custom built Authentication</li>
                                    <li>2 year maintenance and support contract</li>
                                    <li>Free stress testing</li>
                                    <li>Free penetration testing</li>
                                    <li>Professional website for App details and for business</li>
                                    <li>Business development and revenue advice</li>
                                    <li>Dynamic LOGO design with 3 options</li>
                                    <li>Company E-mail Address</li>
                                    <li>Business Google tools set up</li>

                                    <li>Social Media content and theme development and maintenance</li>
                                    <h4>BEST FOR: Service systems, advance E-commerce, Social media platforms</h4>
                                </ul>
                                <a href='#quote' className='page-scroll' value={"Dynamic Hybrid Application"} onClick={this.handleDynamic}>
                                    GET A QUOTE
                                </a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div id="quote" className='container'>
                        <div className="section-title">
                            <h2>Lets Get you a Quote</h2>
                        </div>
                        <form name='sentMessage' onSubmit={this.handleSubmit} validate >
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        className='form-control'
                                        placeholder='Your Name and Surname'
                                        required
                                        onChange={this.handleName.bind(this)}
                                    />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        className='form-control'
                                        placeholder='Your Email'
                                        required
                                        onChange={this.handleEmail.bind(this)}
                                    />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                        </div>
                        <h4>Please tell us more about the system you want. How you want it to look and feel.</h4>
                        <div className='form-group'>
                            <textarea
                                name='message'
                                id='message'
                                className='form-control'
                                rows='4'
                                placeholder='System details'
                                required
                                onChange={this.handleMessage.bind(this)}
                            ></textarea>
                            <p className='help-block text-danger'></p>
                        </div>
                        <div id='success'></div>
                            <button type='submit' className='btn btn-custom btn-lg'>
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
        )
    }
}

export default HireUs;