import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faAddressCard,
  faEnvelope,
  faHandshake,
  faLocationDot,
  faMessage,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithubSquare,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import ReadMore from '@/components/ReadMore';
import '../../assets/scss/timeline.scss';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../../public/contact.jpg';

export default function Page() {
  return (
    <main>
      <section className="timeline-area mb-5 pt-5">
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
                    <div className="col-12 read-more" id="experience-1">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faAddressCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h5>
                            <Link
                              href="https://www.weignyte.com"
                              target="_blank"
                            >
                              Weignyte Limited (Liverpool, UK)
                            </Link>
                          </h5>
                          <h4>PHP/JavaScript Technical Architect</h4>
                          <h6 className="d-lg-none d-xl-none d-sm-none">
                            APRIL 2023 - PRESENT
                          </h6>
                          <ul>
                            <li>
                              Develop comprehensive design and structure for
                              PHP/JavaScript applications, selecting appropriate
                              frameworks, libraries, and other tools to ensure a
                              robust, scalable, and maintainable product.
                            </li>
                            <li>
                              Establish and enforce coding standards,
                              guidelines, and best practices to promote
                              consistency and maintainability throughout the
                              codebase.
                            </li>
                            <li>
                              Integrate web applications with various systems
                              and services by collaborating with APIs,
                              databases, and third-party services
                            </li>
                            <li>
                              Enhance web application performance by optimising
                              code, reducing HTTP requests, and improving page
                              load times.
                            </li>
                            <li>
                              Identify and troubleshoot technical issues related
                              to scalability, security, and performance during
                              the development process.
                            </li>
                            <li>
                              Ensure that web applications are thoroughly tested
                              by creating automated tests, writing test cases,
                              and coordinating with the testing team.
                            </li>
                            <li>
                              Review development team's code to ensure adherence
                              to established standards and guidelines and
                              provide constructive feedback and recommendations
                              for improvement.
                            </li>
                            <li>
                              Offer mentorship and support to junior developers,
                              fostering their growth and development of skills.
                            </li>
                            <li>
                              Document web application design, architecture, and
                              code through creation of technical documentation,
                              user guides, and other relevant materials.
                            </li>
                            <li>
                              Keep up-to-date with the latest trends,
                              technologies, and best practices in PHP/JavaScript
                              development and apply this knowledge to improve
                              the application development process.
                            </li>
                          </ul>
                          <ReadMore  container="experience-1"/>
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
      {/* <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className="mb-4">Contact</h1>
            <p>
              Code is my language, and I speak it fluently. Let's have a
              conversation about your project.
            </p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <Image
              src={heroImage}
              className="img-fluid mx-lg-5 animate__animated animate__headShake animate__delay-2s"
              alt="Hiren Chhatbar"
            />
          </div>
        </div>
      </section>

      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto ">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <div>
              <p>
                <Link href="/">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="xl"
                    className="me-3"
                  />
                  Rajkot, 360005, Gujarat, India
                </Link>
              </p>
              <p>
                <Link href="mailto:hc.rajkot@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    className="me-3"
                  />
                  hc.rajkot@gmail.com
                </Link>
              </p>
              <p>
                <Link href="tel:+919924337418">
                  <FontAwesomeIcon icon={faPhone} size="xl" className="me-3" />
                  +91 99 24 33 74 18
                </Link>
              </p>
            </div>
            <div className="mt-2">
              <span className="me-3">
                <Link href="/">
                  <FontAwesomeIcon icon={faGithubSquare} size="xl" />
                </Link>
              </span>
              <span className="me-3">
                <Link href="/">
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </Link>
              </span>
              <span className="me-3">
                <Link href="/">
                  <FontAwesomeIcon icon={faYoutube} size="xl" />
                </Link>
              </span>
              <span className="me-3">
                <Link href="/">
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </Link>
              </span>
              <span className="me-3">
                <Link href="/">
                  <FontAwesomeIcon icon={faGoogle} size="xl" />
                </Link>
              </span>
              <span className="me-3">
                <Link href="/">
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </Link>
              </span>
              <span className="me-3">
                <Link href="/">
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
