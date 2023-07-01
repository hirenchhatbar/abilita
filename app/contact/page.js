import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
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
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../../public/contact.jpg';

export const metadata = {
  title: process.env.NEXT_PUBLIC_LOGO_TEXT + ' | Contact',
  description: 'PHP/JavaScript Technical Architect',
};

export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
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
      </section>
    </main>
  );
}
