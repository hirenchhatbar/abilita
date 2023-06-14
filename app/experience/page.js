import '../../assets/scss/timeline.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faArchive, faBriefcase, faDesktop, faIdCard, faImage, faUser, faUsersGear } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
    return (
        <main>
            <section className="container-fluid px-lg-0 px-xl-0 my-5">
                <div className="row container mx-auto">
                    <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
                        <h1 className='fw-bold mb-4'>Experience</h1>
                        <p className='fs-4 mb-0'>Turning complex problems into elegant solutions, one line of code at a time</p>
                    </div>
                    <div className="col-md-6 col-12 col-lg-6">
                        <img src="/experience4.svg" className='img-fluid mx-lg-5' alt="Hiren Chhatbar" style={{width: "350px", height: "350px"}}/>
                    </div>
                </div>
            </section>

            {/* TimeLine section */}
            <section className="timeline-area mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6 mb-2">
                            <div className="text-center">
                                <h2 className='text-center fw-bold mb-5 text-decoration-underline'>
                                    <FontAwesomeIcon icon={faUsersGear} width={40} height={30} className='me-2' />Experience
                                </h2>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="apland-timeline-area">
                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animatioName: "fadeInLeft" }}>
                                        <p>Near Future</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faAddressCard} width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 5.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faArchive} width={22} height={25} /></div>
                                                <div className="timeline-text">
                                                    <h6>Fixed bug</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faAddressBook} width={22} height={25} /></div>
                                                <div className="timeline-text">
                                                    <h6>Reach 1k Users</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInLeft" }}>
                                        <p>2020</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faBriefcase}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 4.4.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faDesktop}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Fixed bug</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInLeft" }}>
                                        <p>2019</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faIdCard} width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 4.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faDesktop}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Fixed bug</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faImage}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Reach 500 Users</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInLeft" }}>
                                        <p>2018</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faIdCard}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 4.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faDesktop}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Fixed bug</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faImage}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Reach 500 Users</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-timeline-area">
                                    <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInLeft" }}>
                                        <p>2017</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faIdCard}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 4.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faDesktop}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Fixed bug</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faImage}  width={22} height={25}/></div>
                                                <div className="timeline-text">
                                                    <h6>Reach 500 Users</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}