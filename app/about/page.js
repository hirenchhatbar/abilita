import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCode,
  faHeartCircleCheck,
  faUserCheck,
  faUserGraduate,
  faBook,
  faTrophy,
  faUser,
  faCertificate,
  faBuildingColumns,
} from '@fortawesome/free-solid-svg-icons';
import {
  faApple,
  faGoogle,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';

import Image from 'next/image';

import heroImage from '../../public/about.jpg';
import Aos from '@/components/Aos';

export const metadata = {
  title: process.env.NEXT_PUBLIC_LOGO_TEXT + ' | About',
  description: 'Senior JavaScript/PHP Developer (Technical Lead)',
};

export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className="mb-4">About</h1>
            <p>
              Debugging is like solving a puzzle, but with one crucial
              difference: all the pieces are in your head.
            </p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <Image
              src={heroImage}
              className="img-fluid mx-lg-5 animate__animated animate__headShake animate__delay-2s"
              alt={process.env.NEXT_PUBLIC_LOGO_TEXT}
            />
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container d-flex flex-column">
          <p>
            I am a tech-savvy individual residing in the vibrant city of Rajkot,
            Gujarat, India. I am happily married and have been blessed with a
            beautiful child who brings joy and laughter to my life. My
            dedication to my family is unwavering, and I cherish every moment
            spent with my loved ones.
          </p>
          <p>
            My passion for technology is evident in my everyday life. I have a
            deep-rooted love for Linux and embrace its open-source philosophy. I
            immerse myself in the world of technology, constantly learning,
            unlearning, and relearning new concepts and skills. With each
            passing day, I embrace the ever-evolving nature of the tech industry
            and enthusiastically keep up with the latest advancements.
          </p>
          <p>
            Beyond my tech interests, I have a diverse range of hobbies that
            keep me engaged and well-rounded. I find solace in the beauty of
            nature, often taking the time to appreciate its wonders. Whether
            it's a leisurely walk in the park or an adventurous trek in the
            mountains, I feel a deep connection to the natural world.
          </p>
          <p>
            Yoga is not only a physical practice for me but also a source of
            mental and spiritual well-being. I recognize the importance of
            maintaining a balanced lifestyle and dedicate time to nurture my
            mind, body, and soul through yoga and meditation.
          </p>
          <p>
            Music, movies, and cricket are my go-to sources of entertainment. I
            find joy in exploring different genres of music, from soulful
            melodies to foot-tapping beats. Movies allow me to immerse myself in
            captivating stories, transporting me to different worlds and
            expanding my horizons. Cricket, a popular sport in India, fills me
            with excitement and passion, and I closely follow the matches,
            celebrating the triumphs and agonizing over the defeats.
          </p>
          <p>
            I am also an avid reader, delving into a diverse range of subjects.
            I have a particular interest in history, as it provides valuable
            insights into the past and helps me better understand the present.
            World news keeps me informed about current affairs, enabling me to
            broaden my perspective and engage in meaningful conversations.
            Psychology fascinates me, as I enjoy unraveling the intricacies of
            the human mind and behavior.
          </p>
          <p>
            In all aspects of my life, I exhibit a curious and open-minded
            approach. I am driven by a desire to learn, grow, and make a
            positive impact on the world around me. With my versatile interests
            and unwavering enthusiasm, I am a well-rounded individual who
            embraces life's opportunities with zest and determination.
          </p>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container d-flex justify-content-center flex-column">
          <h2 className="py-5">
            <FontAwesomeIcon
              icon={faBuildingColumns}
              size="1x"
              className="me-2"
            />
            Education
          </h2>
          <div className="container rounded d-flex" data-aos="flip-up">
            <div className="me-4">
              <FontAwesomeIcon icon={faUserGraduate} size="5x" />
            </div>
            <div className="mx-lg-4 mx-xl-4">
              <h3>Bachelor of Commerce (B.Com)</h3>
              <h5>K.K. Parekh Commerce Collage - Amreli</h5>
              <span>2004 - 2006</span>
            </div>
          </div>
          <hr className="hr" />
          <div className="container rounded d-flex my-3" data-aos="flip-up">
            <div className="me-4">
              <FontAwesomeIcon icon={faUserGraduate} size="5x" />
            </div>
            <div className="mx-lg-4 mx-xl-4">
              <h3>
                Higher Secondary (12<sup>th</sup> Standard)
              </h3>
              <h5>K.K. Parekh & Mehta R.P Vidhyalay - Amreli</h5>
              <span>2002 - 2003</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container d-flex justify-content-center flex-column">
          <h2 className="py-5">
            <FontAwesomeIcon icon={faTrophy} size="1x" className="me-2 mb-1" />
            Achievements & Certifications
          </h2>
          <div className="row mb-5">
            <div className="container d-flex justify-content-center mt-50 mb-50">
              <div className="row">
                <div className="col-md-4 mt-2">
                  <div className="card shadow h-100" data-aos="flip-left" data-aos-duration="2000">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faCertificate} size="6x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h4>DOEACC 'O' Level</h4>
                      <p>
                        Department of Electronics - New Delhi <br /> Issued Jan
                        2008
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-2">
                  <div className="card shadow h-100" data-aos="flip-left" data-aos-duration="2000">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faCertificate} size="6x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h4>DTP (Desktop Publishing)</h4>
                      <p>
                        Technical Education Board - Gujarat <br /> Issued Jul
                        2007
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-2">
                  <div className="card shadow h-100" data-aos="flip-left" data-aos-duration="2000">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faCertificate} size="6x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h4>
                        COPA (Computer Programmer cum Programming Assistant)
                      </h4>
                      <p>
                        I.T.I - Amreli <br /> Issued Aug 2003
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="mt-3 container d-flex justify-content-center flex-column">
          <h2 className="py-4">
            <FontAwesomeIcon icon={faCode} size="1x" className="me-2" />
            Languages
          </h2>
          <p className="mb-2">English</p>
          <div
            className="progress mb-4 rounded-pill"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: 80 + '%' }}></div>
          </div>
          <p className="mb-2">Hindi</p>
          <div
            className="progress mb-4 rounded-pill"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: 70 + '%' }}></div>
          </div>
          <p className="mb-2">Gujarati (mother tongue)</p>
          <div
            className="progress mb-4 rounded-pill"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: 100 + '%' }}></div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="mt-3 container d-flex justify-content-center flex-column">
          <h2 className="py-4">
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              size="1x"
              className="me-2"
            />
            Hobbies
          </h2>
          <div>
            <span className="p-2 mx-2 mb-3 badge text-bg-dark">Nature</span>
            <span className="p-2 mx-2 mb-3 badge text-bg-dark">Yoga</span>
            <span className="p-2 mx-2 mb-3 badge text-bg-dark">Music</span>
            <span className="p-2 mx-2 mb-3 badge text-bg-dark">Movies</span>
            <span className="p-2 mx-2 mb-3 badge text-bg-dark">Cricket</span>
            <span className="p-2 mx-2 mb-3 badge text-bg-dark">Reading</span>
            <span className="p-2 mx-2 mb-3 badge text-bg-dark">History</span>
            <span className="p-2 mx-2 mb-3 badge text-bg-dark">World News</span>
            <span className="p-2 mx-2 mb-3 badge text-bg-dark">Psychology</span>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="mt-3 container d-flex justify-content-center flex-column">
          <h2 className="py-4">
            <FontAwesomeIcon icon={faUserCheck} size="1x" className="me-2" />
            Testimonials
          </h2>
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="p-3 px-4" data-aos="flip-up" data-aos-duration="2000">
                <div>
                  <p className="text-center">
                    "Hiren bhai is Extremely sharp minded, Superb communicator,
                    Quick learner, Very clear when it comes to what
                    Language/Framework to use for any specific project/problem
                    and he knows very well how to use Language/Framework very
                    efficiently. I have learn a lot under him for many projects
                    and problems that we solved. I have very high regards for
                    him as a programmer."
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                  <h5 className="mb-0">Hardik Raval</h5>
                  <span>
                    Senior Web Developer, Fiare India Pvt. Ltd <br />
                    (Source: LinkedIn)
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 px-4" data-aos="flip-up" data-aos-duration="2000">
                <div>
                  <p className="text-center">
                    "If you need someone who is passionate about tech, cares
                    about their work and all round great person - Hiren is your
                    guy! I've worked on numerous digital projects with Hiren
                    over the years relying on his expertise, he is always open
                    and honest with a collaborative and growth mindset. I’ve
                    loved my experience working with Hiren, and I know that
                    anyone looking to work with him will, too."
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                  <h5 className="mb-0">Jason Pham</h5>
                  <span>
                    Software Delivery Manager <br />
                    (Source: LinkedIn)
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 px-4" data-aos="flip-up" data-aos-duration="2000">
                <div>
                  <p className="text-center">
                    "I have worked with Hiren remotely from the UK for the last
                    6 years on numerous different projects within our Business,
                    covering a multitude of design and development projects.{' '}
                    <br />
                    He is incredibly efficient with a wealth of experience and
                    knowledge that he is more than willing to share. His ideas
                    and solutions to resolve complex technical challenges has
                    contributed immensely to the success of our brand..."
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                  <h5 className="mb-0">Phillip Horner</h5>
                  <span>
                    UX/UI Designer
                    <br />
                    (Source: LinkedIn)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Aos />
    </main>
  );
}
