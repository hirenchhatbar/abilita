import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCode,
  faHeartCircleCheck,
  faUserCheck,
  faUserGraduate,
  faBook,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faApple,
  faGoogle,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';

import Image from 'next/image';

import heroImage from '../../public/about.jpg';

export const metadata = {
  title: process.env.NEXT_PUBLIC_LOGO_TEXT + ' | About',
  description: 'PHP/JavaScript Technical Architect',
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
              alt="Hiren Chhatbar"
            />
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container d-flex flex-column">
          <p className="mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container d-flex justify-content-center flex-column">
          <h2 className="py-5">
            <FontAwesomeIcon icon={faBook} size="1x" className="me-2" />
            Education
          </h2>
          <div className="container rounded d-flex">
            <div className="me-4 mt-3">
              <FontAwesomeIcon icon={faUserGraduate} size="7x" />
            </div>
            <div className="mx-lg-4 mx-xl-4">
              <h3>K.K. Parekh Commerce Collage - Amreli</h3>
              <h5>Bachelor of Commerce (B.Com)</h5>
              <span>2004 - 2006</span>
              <br />
              <span>
                Participated in the research of XXX and published 3 papers.
              </span>
              <ul className="mt-1">
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and a type specimen book.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and a type specimen book.
                </li>
              </ul>
            </div>
          </div>
          <hr className="hr" />
          <div className="container rounded d-flex my-3">
            <div className="me-4 mt-3">
              <FontAwesomeIcon icon={faUserGraduate} size="7x" />
            </div>
            <div className="mx-lg-4 mx-xl-4">
              <h3>K.K. Parekh & Mehta R.P Vidhyalay - Amreli</h3>
              <h5>Higher Secondary</h5>
              <span>2002 - 2003</span>
              <br />
              <span>
                Participated in the research of XXX and published 3 papers.
              </span>
              <ul className="mt-1">
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and a type specimen book.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and a type specimen book.
                </li>
              </ul>
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
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faGoogle} size="6x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h2>DOEACC 'O' Level</h2>
                      <p>Department of Electronics - New Delhi</p>
                      <p>Issued Jan 2008</p>
                      <p>Skills: Web Development - Programming</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-2">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faApple} size="6x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h2>DTP (Desktop Publishing)</h2>
                      <p>Technical Education Board - Gujarat</p>
                      <p>Issued Jul 2007</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-2">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faPaypal} size="6x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h2>
                        COPA (Computer Programmer cum Programming Assistant)
                      </h2>
                      <p>I.T.I - Amreli</p>
                      <p>Issued Aug 2003</p>
                      <p>Skills: Programming</p>
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
          <div className="progress mb-4 rounded-pill">
            <div
              className="progress-bar w-80"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p className="mb-2">Hindi</p>
          <div className="progress mb-4 rounded-pill">
            <div
              className="progress-bar w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p className="mb-2">Gujarati (mother tongue)</p>
          <div className="progress mb-4 rounded-pill">
            <div
              className="progress-bar w-100"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
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
              <div className="p-3 px-4">
                <div>
                  <p className="text-center">
                    "Hiren bhai is Extremely sharp minded, Superb communicator, Quick learner, Very clear when it comes to what Language/Framework to use for any specific project/problem and he knows very well how to use Language/Framework very efficiently. I have learn a lot under him for many projects and problems that we solved. I have very high regards for him as a programmer."
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                  <h5 className="mb-0">Hardik Raval</h5>
                  <span>Senior Web Developer, Fiare India Pvt. Ltd <br />(Source: LinkedIn)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 px-4">
                <div>
                  <p className="text-center">
                    "If you need someone who is passionate about tech, cares about their work and all round great person - Hiren is your guy! I've worked on numerous digital projects with Hiren over the years relying on his expertise, he is always open and honest with a collaborative and growth mindset. I’ve loved my experience working with Hiren, and I know that anyone looking to work with him will, too."
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                  <h5 className="mb-0">Jason Pham</h5>
                  <span>Software Delivery Manager <br />(Source: LinkedIn)</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 px-4">
                <div>
                  <p className="text-center">
                    "I have worked with Hiren remotely from the UK for the last 6 years on numerous different projects within our Business, covering a multitude of design and development projects. <br />He is incredibly efficient with a wealth of experience and knowledge that he is more than willing to share. His ideas and solutions to resolve complex technical challenges has contributed immensely to the success of our brand..."
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                  <h5 className="mb-0">Phillip Horner</h5>
                  <span>UX/UI Designer<br />(Source: LinkedIn)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
