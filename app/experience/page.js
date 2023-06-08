import Link from 'next/link';
import './timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faArchive, faBookOpen, faBriefcase, faDesktop, faIdCard, faImage, faUser, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';

export default function Page() {
    return (
        <main>
            <section className="container-fluid px-lg-0 px-xl-0 my-5">
                <div className="row container mx-auto">
                    <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
                        <h3 className='fw-bold fs-4 mb-0'>Turning complex problems into</h3>
                        <h2 className='fw-bolder fs-1 my-3' style={{ color: "#d6564d" }}>Elegant solutions,</h2>
                        <h4 className="mb-3">one line of code at a time</h4>
                    </div>
                    <div className="col-md-6 col-12 col-lg-6">
                        <img src="/experience4.svg" className='img-fluid' alt="Hiren Chhatbar" />
                    </div>
                </div>

                <div className="container d-flex justify-content-center flex-column">
                    <h2 className='text-center fw-bold mb-4 pt-2 text-decoration-underline' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faUsersGear} width={40} height={30} className='me-2' />Experience</h2>
                    <div className="container my-2">
                        <h4 className="fw-bold text-center mb-3">Job Title: 1</h4>
                        <h5 className='mb-3'>Employer Name: 1</h5>
                        <h5 className='mb-3'>Job Period: 1</h5>
                        <p className="text-wrap">Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra.</p>
                    </div>
                    <div className="container my-2">
                        <h4 className="fw-bold text-center mb-3">Job Title: 2</h4>
                        <h5 className='mb-3'>Employer Name: 2</h5>
                        <h5 className='mb-3'>Job Period: 2</h5>
                        <p className="text-wrap">Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra.</p>
                    </div>
                    <div className="container my-2">
                        <h4 className="fw-bold text-center mb-3">Job Title: 3</h4>
                        <h5 className='mb-3'>Employer Name: 3</h5>
                        <h5 className='mb-3'>Job Period: 3</h5>
                        <p className="text-wrap">Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra.</p>
                    </div>
                    <div className="container my-2">
                        <h4 className="fw-bold text-center mb-3">Job Title: 4</h4>
                        <h5 className='mb-3'>Employer Name: 4</h5>
                        <h5 className='mb-3'>Job Period: 4</h5>
                        <p className="text-wrap">Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra.</p>
                    </div>
                    <div className="container my-2">
                        <h4 className="fw-bold text-center mb-3">Job Title: 5</h4>
                        <h5 className='mb-3'>Employer Name: 5</h5>
                        <h5 className='mb-3'>Job Period: 5</h5>
                        <p className="text-wrap">Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra.</p>
                    </div>
                    <div className="container my-2">
                        <h4 className="fw-bold text-center mb-3">Job Title: 6</h4>
                        <h5 className='mb-3'>Employer Name: 6</h5>
                        <h5 className='mb-3'>Job Period: 6</h5>
                        <p className="text-wrap">Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra.</p>
                    </div>
                    <div className="container my-2">
                        <h4 className="fw-bold text-center mb-3">Job Title: 7</h4>
                        <h5 className='mb-3'>Employer Name: 7</h5>
                        <h5 className='mb-3'>Job Period: 7</h5>
                        <p className="text-wrap">Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra.</p>
                    </div>
                    <div className="container my-2">
                        <h4 className="fw-bold text-center mb-3">Job Title: 8</h4>
                        <h5 className='mb-3'>Employer Name: 8</h5>
                        <h5 className='mb-3'>Job Period: 8</h5>
                        <p className="text-wrap">Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra. Roles and responsibilities for Job 1 go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sem eu elit tristique pharetra.</p>
                    </div>
                </div>
                
            </section>

            {/* TimeLine section */}
            <section className="timeline_area mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6 mb-2">
                            <div className="text-center">
                                <h2 className='text-center fw-bold mb-5 text-decoration-underline' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faBookOpen} width={40} height={30} className='me-2' />A brief stories of our journey</h2>
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
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faAddressCard} /></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 5.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faArchive} /></div>
                                                <div className="timeline-text">
                                                    <h6>Fixed bug</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faAddressBook} /></div>
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
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faBriefcase} /></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 4.4.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faDesktop} /></div>
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
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faIdCard} /></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 4.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faDesktop} /></div>
                                                <div className="timeline-text">
                                                    <h6>Fixed bug</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faImage} /></div>
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
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faIdCard} /></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 4.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faDesktop} /></div>
                                                <div className="timeline-text">
                                                    <h6>Fixed bug</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faImage} /></div>
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
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faIdCard} /></div>
                                                <div className="timeline-text">
                                                    <h6>Updated 4.0</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faDesktop} /></div>
                                                <div className="timeline-text">
                                                    <h6>Fixed bug</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeInLeft" }}>
                                                <div className="timeline-icon"><FontAwesomeIcon icon={faImage} /></div>
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
