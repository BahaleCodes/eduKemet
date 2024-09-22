import React from "react"

const Team = (props) => {
    return (
        <div id='team' className='text-center'>
            <div className='container'>
                <div className='col-md-8 col-md-offset-2 section-title'>
                    <h2>Meet the Team</h2>
                    <p>
                        Bana ke bona Bahale ba rona.
                    </p>
                </div>
                <div id='row'>
                    <div className='col-md-3 col-sm-6 team'>
                        <div className='portfolio-item'>
                            <div className='hover-bg'>
                                {' '}
                                <a
                                    href='/thabo'
                                    title='Thabo Mponya'
                                    data-lightbox-gallery='gallery1'
                                >
                                    <div className='hover-text'>
                                        <h4>Thabo Mponya</h4>
                                        <p>{"Full-Stack Developer"}</p>
                                    </div>
                                    <img
                                        src='img/team/01.jpg'
                                        className='img-responsive'
                                        alt='loading... Thabo'
                                    />{' '}
                                </a>{' '}
                                <div className="caption">
                                    <p>Thabo Mponya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 team'>
                        <div className='portfolio-item'>
                            <div className='hover-bg'>
                                {' '}
                                <a
                                    href='/thabo'
                                    title='Khethiwe Mthetwa'
                                    data-lightbox-gallery='gallery1'
                                >
                                    <div className='hover-text'>
                                        <h4>Khethiwe Katlego Mthetwa</h4>
                                        <p>{"Junior Developer [Mentorship]"}</p>
                                    </div>
                                    <img
                                        src='img/team/03.jpg'
                                        className='img-responsive'
                                        alt='loading... Khethiwe'
                                    />{' '}
                                </a>{' '}
                                <div className="caption">
                                    <p>Khethiwe Katlego Mthetwa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;