import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelope,
  faHandshake, faLocationDot, faMessage, faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithubSquare, faGoogle, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className="mb-4">Contact</h1>
            <p>Code is my language, and I speak it fluently. Let's have a conversation about your project.</p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <img src="/contact6.svg" className="img-fluid mx-lg-5" alt="Hiren Chhatbar" style={{ width: "350px", height: "350px" }} />
          </div>
        </div>
      </section>

      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto ">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <div>
              <p><Link href="/">
                <FontAwesomeIcon icon={faLocationDot} size="xl" className="me-3" />
                New York, NY 10012, US
              </Link></p>
              <p><Link href="mailto:info@example.com">
                <FontAwesomeIcon icon={faEnvelope} size="xl" className="me-3" />
                info@example.com
              </Link></p>
              <p><Link href="+01 234 567 88">
                <FontAwesomeIcon icon={faPhone} size="xl" className="me-3" />+01 234 567 88
              </Link></p>
            </div>
            <div className="mt-2">
              <span className="me-3"><Link href="/"><FontAwesomeIcon icon={faGithubSquare} size="xl" /></Link></span>
              <span className="me-3"><Link href="/"><FontAwesomeIcon icon={faLinkedin} size="xl" /></Link></span>
              <span className="me-3"><Link href="/"><FontAwesomeIcon icon={faYoutube} size="xl" /></Link></span>
              <span className="me-3"><Link href="/"><FontAwesomeIcon icon={faTwitter} size="xl" /></Link></span>
              <span className="me-3"><Link href="/"><FontAwesomeIcon icon={faGoogle} size="xl" /></Link></span>
              <span className="me-3"><Link href="/"><FontAwesomeIcon icon={faFacebook} size="xl" /></Link></span>
              <span className="me-3"><Link href="/"><FontAwesomeIcon icon={faInstagram} size="xl" /></Link></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
