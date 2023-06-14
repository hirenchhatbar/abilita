import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelope,
  faHandshake, faLocationDot, faMessage, faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithubSquare, faGoogle, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className='mb-4'>Contact</h1>
            <p>Code is my language, and I speak it fluently. Let's have a conversation about your project.</p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <img src="/contact6.svg" className='img-fluid mx-lg-5' alt="Hiren Chhatbar" style={{ width: "350px", height: "350px" }} />
          </div>
        </div>
      </section>

      <section>
        <div className="container d-flex justify-content-center flex-column">
          <h2 className="py-4">
            <FontAwesomeIcon icon={faHandshake} width={40} height={40} className="me-2 mb-1"
            />
            Get In Touch
          </h2>
          <p className="mx-lg-5 mx-xl-5">We'll create high-quality linkable content and build at least 40 high-authority links to each asset, paving the way for you to grow your rankings, improve brand.</p>
          <div>
            <button type="button" className="btn btn-dark px-3 my-3">Say Hello</button>
          </div>
        </div>
      </section>

      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h2 className="py-4">
              <FontAwesomeIcon icon={faMessage} width={30} height={30} className="me-2 mb-1"
              />
              Contact Me
            </h2>
            <p>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.</p>
            <div className="mt-2">
              <span className="me-2"><Link href="/"><FontAwesomeIcon icon={faGithubSquare} width={35} height={35}/></Link></span>
              <span className="me-2"><Link href="/"><FontAwesomeIcon icon={faLinkedin} width={35} height={35} /></Link></span>
              <span className="me-2"><Link href="/"><FontAwesomeIcon icon={faYoutube} width={35} height={35} /></Link></span>
              <span className="me-2"><Link href="/"><FontAwesomeIcon icon={faTwitter} width={35} height={35} /></Link></span>
              <span className="me-2"><Link href="/"><FontAwesomeIcon icon={faGoogle} width={30} height={31} /></Link></span>
              <span className="me-2"><Link href="/"><FontAwesomeIcon icon={faFacebook} width={35} height={33} /></Link></span>
              <span className="me-2"><Link href="/"><FontAwesomeIcon icon={faInstagram} width={35} height={35} /></Link></span>
            </div>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <h2 className="py-4 my-sm-3 my-3 my-xl-0 my-lg-0" >
              <FontAwesomeIcon icon={faAddressBook} width={30} height={30} className="me-2 mb-1"
              />
              Address
            </h2>
            <div className="mx-xl-5 mx-lg-5 px-lg-4 px-xl-5">
              <div>
              <Link href="/"><p>
                <FontAwesomeIcon icon={faLocationDot} width={25} height={25} className="me-3" />
                New York, NY 10012, US
              </p></Link>
              <Link href="mailto:info@example.com"><p>
                <FontAwesomeIcon icon={faEnvelope} width={25} height={25} className="me-3" />
                info@example.com</p>
              </Link>
              <Link href="+01 234 567 88"><p>
                <FontAwesomeIcon icon={faPhone} width={25} height={25} className="me-3" />+01 234 567 88</p>
              </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
