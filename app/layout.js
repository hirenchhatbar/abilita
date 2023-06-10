import './globals.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen, faBullhorn, faPaperclip, faPaperPlane, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link';

import localFont from 'next/font/local';

import Script from 'next/script'

export const metadata = {
  title: 'Hiren Chhatbar',
  description: 'Generated by create next app',
}

const logoFont = localFont({ src: '../public/fonts/pacifico-regular.ttf' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light">
      <body>
        <header>
          <div className="d-flex justify-content-around align-items-center">
            <nav className='navbar navbar-expand-lg bg-body-tertiary container-fluid py-2 bs-light shadow'>
              <div className='container-fluid px-2 px-sm-4 px-xl-5 px-md-5 px-lg-5'>
                <Link href="/" className={`navbar-brand ${logoFont.className}`} style={{ fontWeight: "bold", fontSize: "2rem", color: "#d6564d" }}>Hiren Chhatbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto fs-5 gap-3 fw-bold" id="menu">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" className="nav-link">
                        <FontAwesomeIcon icon={faHome} width={25} height={25} className='me-1' />
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" className="nav-link">
                        <FontAwesomeIcon icon={faBookOpen} width={25} height={25} className='me-1' />
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/experience" className="nav-link">
                        <FontAwesomeIcon icon={faBullhorn} width={25} height={25} className='me-1' />
                        Experience
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/portfolio" className="nav-link">
                        <FontAwesomeIcon icon={faPaperclip} width={25} height={25} className='me-1' />
                        Portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                      <FontAwesomeIcon icon={faPaperPlane} width={25} height={25} className='me-1' />
                      Contact
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <Navbar.Brand href="/" className={logoFont.className} style={{ fontWeight: "bold", fontSize: "2rem", color: "#0E2431" }}>Hiren Chhatbar</Navbar.Brand> */}
            {/* <Navbar bg="bs-light shadow" expand="lg" className='container-fluid py-2'>
              <Container fluid className='px-2 px-sm-4 px-xl-5 px-md-5 px-lg-5'>
                <Link href="/" className={`navbar-brand ${logoFont.className}`} style={{ fontWeight: "bold", fontSize: "2rem", color: "#d6564d" }}>Hiren Chhatbar</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto fs-5 gap-3 fw-bold">
                    <Link href="/" className="nav-link">
                      <FontAwesomeIcon icon={faHome} width={25} height={25} className='me-1' />
                      Home
                    </Link>

                    <Link href="/about" className="nav-link">
                      <FontAwesomeIcon icon={faBookOpen} width={25} height={25} className='me-1' />
                      About
                    </Link>

                    <Link href="/experience" className="nav-link">
                      <FontAwesomeIcon icon={faBullhorn} width={25} height={25} className='me-1' />
                      Experience
                    </Link>

                    <Link href="/portfolio" className="nav-link">
                      <FontAwesomeIcon icon={faPaperclip} width={25} height={25} className='me-1' />
                      Portfolio
                    </Link>

                    <Link href="/contact" className="nav-link">
                      <FontAwesomeIcon icon={faPaperPlane} width={25} height={25} className='me-1' />
                      Contact
                    </Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar> */}
          </div>
        </header>

        {children}

        <footer className='text-center text-lg-start text-muted pt-3 pb-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <div className='container text-center text-md-start'>
            <div className='row text-start text-md-left'>
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
                <Link href='/' className={`mb-4 fw-bold fs-3 text-reset ${logoFont.className}`}>Hiren Chhatbar</Link>
                <p className='mt-2'>
                  Thank you for visiting my personal portfolio website. Connect with me over socials.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
                <h5 className='text-uppercase fw-bold mb-3'>Useful links</h5>
                <p>
                  <Link href='/' className='text-reset'>
                    Home
                  </Link>
                </p>
                <p>
                  <Link href='/about' className='text-reset'>
                    About
                  </Link>
                </p>
                <p>
                  <Link href='/experience' className='text-reset'>
                    Experience
                  </Link>
                </p>
                <p>
                  <Link href='/portfolio' className='text-reset'>
                    Portfolio
                  </Link>
                </p>
                <p>
                  <Link href='/contact' className='text-reset'>
                    Contact
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h5 className='text-uppercase fw-bold mb-3'>Contact</h5>
                <Link href="+01 234 567 88" className='text-reset'><p>
                  <FontAwesomeIcon icon={faPhone} width={25} height={25} className="me-3" />+01 234 567 88</p>
                </Link>
                <Link href="mailto:info@example.com" className="text-reset"><p>
                  <FontAwesomeIcon icon={faEnvelope} width={25} height={25} className="me-3" />
                  info@example.com</p>
                </Link>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} width={25} height={25} className="me-3" />
                  New York, NY 10012, US
                </p>
                <div className='pt-4'>
                  <Link href='' className='me-3 text-reset fs-4'>
                    <FontAwesomeIcon icon={faLinkedin} width={25} height={25} />
                  </Link>
                  <Link href='' className='me-3 text-reset fs-4'>
                    <FontAwesomeIcon icon={faGithub} width={25} height={25} />
                  </Link>
                  <Link href="mailto:info@example.com" className='me-3 text-reset fs-4'>
                    <FontAwesomeIcon icon={faEnvelope} width={25} height={25} />
                  </Link>
                  <Link href='' className='me-3 text-reset fs-4'>
                    <FontAwesomeIcon icon={faTwitter} width={25} height={25} />
                  </Link>
                  <Link href='' className='me-3 text-reset fs-4'>
                    <FontAwesomeIcon icon={faTelegram} width={25} height={25} />
                  </Link>
                  <Link href='' className='me-3 text-reset fs-4'>
                    <FontAwesomeIcon icon={faFacebook} width={25} height={25} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center p-3 border-top border-2'>
            <p>Copyright © 2023
              <Link className={`text-reset fw-bold mx-1 ${logoFont.className}`} href='/'>
                Hiren Chhatbar
              </Link>
              All rights reserved.
            </p>
          </div>
        </footer>
      </body>
      <Script src="/bootstrap.bundle.min.js" />
    </html>
  )
}