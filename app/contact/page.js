import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '{process.env.NEXT_PUBLIC_NEXT_THEME}/contact.webp';
import Aos from '@/components/Aos';

export const metadata = {
  title: process.env.NEXT_PUBLIC_LOGO_TEXT + ' | Contact',
  description: 'Senior Full Stack Developer',
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
          <div
            className="col-md-6 col-12 col-lg-6"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image
              src={heroImage}
              className="img-fluid mx-lg-5"
              alt={process.env.NEXT_PUBLIC_LOGO_TEXT}
              priority={true}
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
                <Link href="https://gitlab.com/hirenchhatbar" target="_blank">
                  <FontAwesomeIcon icon={faGitlab} size="xl" />
                </Link>
              </span>
              <span className="me-3">
                <Link
                  href="https://www.linkedin.com/in/hirenchhatbar"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </Link>
              </span>
              <span className="me-3">
                <Link href="https://twitter.com/ihirenc" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </Link>
              </span>
              <span className="me-3">
                <Link
                  href="https://www.facebook.com/hirennchhatbar"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Aos />
    </main>
  );
}
