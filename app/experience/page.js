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
import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className="mb-4">Experience</h1>
            <p className="mb-0">
              Turning complex problems into elegant solutions, one line of code
              at a time
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
                    <p>Near Future</p>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faAddressCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Updated 5.0</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicingelit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicingelit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicingelit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faArchive} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Fixed bug</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.7s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faAddressBook} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Reach 1k Users</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
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
                    <p>2020</p>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faBriefcase} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Updated 4.4.0</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faDesktop} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Fixed bug</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
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
                    <p>2019</p>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faIdCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Updated 4.0</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faDesktop} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Fixed bug</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.7s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faImage} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Reach 500 Users</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
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
                    <p>2018</p>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faIdCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Updated 4.0</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faDesktop} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Fixed bug</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.7s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faImage} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Reach 500 Users</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
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
                    <p>2017</p>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faIdCard} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Updated 4.0</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faDesktop} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Fixed bug</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="single-timeline-content d-flex wow fadeInLeft"
                        data-wow-delay="0.7s"
                      >
                        <div className="timeline-icon">
                          <FontAwesomeIcon icon={faImage} size="1x" />
                        </div>
                        <div className="timeline-text">
                          <h6>Reach 500 Users</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
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
