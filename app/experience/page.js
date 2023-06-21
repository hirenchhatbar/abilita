import '../../assets/scss/timeline.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressBook,
  faAddressCard,
  faArchive,
  faBriefcase,
  faDesktop,
  faIdCard,
  faImage,
  faUser,
  faUsersGear,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className="mb-4">Experience</h1>
            <p className="mb-0">
              Turning complex problems into elegant solutions, one line of code
              at a time.
            </p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <Image
              src="/experience.jpg"
              width={500}
              height={500}
              className="img-fluid mx-lg-5"
              alt="Hiren Chhatbar"
            />
          </div>
        </div>
      </section>

      {/* TimeLine section */}
      <section className="timeline-area mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="apland-timeline-area">
                <div className="single-timeline-area">
                  <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <p>Present</p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faAddressCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h5><Link href="https://www.weignyte.com" target="_blank">Weignyte</Link></h5>
                          <h4>Senior Symfony/PHP Developer</h4>
                            <ul>
                              <li>Develop comprehensive design and structure for PHP/JavaScript applications, selecting appropriate frameworks, libraries, and other tools to ensure a robust, scalable, and maintainable product.</li>
                              <li>Establish and enforce coding standards, guidelines, and best practices to promote consistency and maintainability throughout the codebase.</li>
                              <li>Integrate web applications with various systems and services by collaborating with APIs, databases, and third-party services.</li>
                              <li>Enhance web application performance by optimizing code, reducing HTTP requests, and improving page load times.</li>
                              <li>Identify and troubleshoot technical issues related to scalability, security, and performance during the development process.</li>
                              <li>Ensure that web applications are thoroughly tested by creating automated tests, writing test cases, and coordinating with the testing team.</li>
                              <li>Review development team's code to ensure adherence to established standards and guidelines and provide constructive feedback and recommendations for improvement.</li>
                              <li>Offer mentorship and support to junior developers, fostering their growth and development of skills.</li>
                              <li>Document web application design, architecture, and code through creation of technical documentation, user guides, and other relevant materials.</li>
                              <li>Keep up-to-date with the latest trends, technologies, and best practices in PHP/JavaScript development and apply this knowledge to improve the application development process.</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-timeline-area">
                  <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <p>February 2020</p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faBriefcase} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h5><Link href="https://www.weignyte.com" target="_blank">Weignyte</Link></h5>
                          <h4>Senior Symfony/PHP Developer cum Technical Architect</h4>
                          <ul>
                            <li>Develop solutions utilizing Symfony 5/6, PHP 8, and LEMP stack for diverse industries such as interior design, education, real estate, and healthcare.</li>
                            <li>Formulate architectural solutions using design patterns in Symfony.</li>
                            <li>Manage projects, their environments (DTAP), and execute releases and server upgrades.</li>
                            <li>Establish front-end development architectures using Webpack and Nodejs.</li>
                            <li>Adhere to an Agile/Scrum framework-based software development life cycle.</li>
                            <li>Collaborate effectively with team members through clear communication.</li>
                            <li>Conduct feasibility studies to assist project managers and stakeholders in identifying suitable solutions.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-timeline-area">
                  <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <p>January 2012</p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faIdCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h5><Link href="https://aspl.in/" target="_blank">ASPL</Link></h5>
                          <h4>Senior Symfony/PHP Developer</h4>
                          <ul>
                            <li>Utilize proprietary platforms built on Symfony and the LEMP stack to construct solutions within the classified marketplace domain.</li>
                            <li>Create and maintain custom requirements for clients.</li>
                            <li>Adhere to an Agile/Scrum framework for software development life cycle (SDLC).</li>
                            <li>Engage in effective team communication and collaboration.</li>
                            <li>Manage projects and execute releases.</li>
                            <li>Conduct feasibility studies to assist project managers and stakeholders in arriving at solutions.</li>
                            <li>Perform peer code review, retrospectives, and ideation sessions.</li>
                            <li>Provide guidance to junior developers in resolving issues.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-timeline-area">
                  <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <p>January 2010</p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faIdCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h5><Link href="https://www.aceinfoway.com/" target="_blank">Ace</Link></h5>
                          <h4>PHP Developer </h4>
                          <ul>
                            <li>Develop web applications and websites using core PHP programming language.</li>
                            <li>Collaborate with project managers to define UI/UX requirements and develop comprehensive solutions.</li>
                            <li>Create CMS websites using WordPress and Joomla platforms.</li>
                            <li>Perform website and web application maintenance in core PHP, including bug fixing, feature extension, and server updates.</li>
                            <li>Assist designers with PHP templates to ensure effective implementation of website designs.</li>
                            <li>Provide guidance and mentorship to junior team members, including bug fixing, problem resolution, and skill development.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-timeline-area">
                  <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <p>January 2009</p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faIdCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h5>LCC</h5>
                          <h4>PHP Developer</h4>
                          <ul>
                            <li>Instruct individuals in programming languages such as PHP, JavaScript, C, and C++.</li>
                            <li>Deliver instructional sessions on software applications including MS-Office, Tally accounting software, and others.</li>
                            <li>Provide comprehensive training to government officials on the fundamentals of CCC.</li>
                            <li>Deliver motivational lectures on the topic of mind power.</li>
                            <li>Provide guidance and mentorship to students seeking to enhance their professional skill set.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-timeline-area">
                  <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <p>May 2006</p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faIdCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h5>Devi</h5>
                          <h4>Service Engineer</h4>
                          <ul>
                            <li>Administer and manage attendance and payroll software created using FoxPro language.</li>
                            <li>Create customized solutions for clients and implement them.</li>
                            <li>Design customized reports to meet clients' needs.</li>
                            <li>Install and configure attendance and payroll software.</li>
                            <li>Provide maintenance and repair services for attendance machines.</li>
                          </ul>
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
