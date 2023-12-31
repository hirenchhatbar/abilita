import '../assets/scss/globals.scss';

import { Suspense } from 'react';

import Theme from '../components/Theme';
import GoTop from '../components/GoTop';
import Menu from '../components/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Script from 'next/script';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const GoogleAnalyticsFallback = () => {
  return <></>;
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-5" data-bs-theme={process.env.NEXT_PUBLIC_NEXT_THEME}>
        <header>
          <div className="d-flex justify-content-around align-items-center fixed-top">
            <Menu />
          </div>
        </header>

        {children}

        <GoTop />

        <footer className="text-lg-start pt-5 pb-4">
          <div className="container text-md-start">
            <div className="row text-start text-md-left">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
                <Link href="/" className="mb-4 logo-text">
                  {process.env.NEXT_PUBLIC_LOGO_TEXT}
                </Link>
                <p className="mt-2">
                  "The function of good software is to make the complex appear
                  to be simple." - Grady Booch
                </p>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-2">
                <h5 className="text-uppercase mb-3">Useful links</h5>
                <p>
                  <Link href="/">Home</Link>
                </p>
                <p>
                  <Link href="/about">About</Link>
                </p>
                <p>
                  <Link href="/experience">Experience</Link>
                </p>
                <p>
                  <Link href="/portfolio">Portfolio</Link>
                </p>
                <p>
                  <Link href="/contact">Contact</Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h5 className="text-uppercase mb-3">Contact</h5>
                <p>
                  <Link href="tel:+919924337418">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="xl"
                      className="me-3"
                    />
                    +91 99 24 33 74 18
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
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="xl"
                    className="me-3"
                  />
                  Rajkot, 360005, Gujarat, India
                </p>
                <div className="pt-4">
                  <Link
                    href="https://gitlab.com/hirenchhatbar"
                    target="_blank"
                    className="me-2"
                  >
                    <FontAwesomeIcon icon={faGitlab} size="xl" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/hirenchhatbar"
                    target="_blank"
                    className="me-2"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  </Link>
                  <Link
                    href="https://twitter.com/ihirenc"
                    target="_blank"
                    className="me-2"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/hirennchhatbar"
                    target="_blank"
                    className="me-2"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 border-top">
            <div className="d-flex align-items-start">
              <p className="mx-auto">
                Copyright © 2023
                <Link className="mx-1 logo-text" href="/">
                  {process.env.NEXT_PUBLIC_LOGO_TEXT} (v1.0.0)
                </Link>
                All rights reserved.
              </p>
              <Theme />
            </div>
          </div>
        </footer>
      </body>

      <Script src="/bootstrap.bundle.min.js" />

      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <Suspense fallback={<GoogleAnalyticsFallback />}>
          <GoogleAnalytics />
        </Suspense>
      )}
    </html>
  );
}
