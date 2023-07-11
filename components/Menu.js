'use client';

import Link from 'next/link';

const closeMenu = () => {
  setTimeout(() => {
    document.getElementById('menu').classList.remove('show');

    document
      .getElementsByClassName('navbar-toggler')[0]
      .classList.add('collapsed');
  }, 500);
};

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-white container-fluid py-3">
      <div className="container-fluid px-2 px-sm-4 px-xl-5 px-md-5 px-lg-5">
        <Link href="/" className="navbar-brand logo-text">
          {process.env.NEXT_PUBLIC_LOGO_TEXT}
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/experience" className="nav-link" onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio" className="nav-link" onClick={closeMenu}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://www.hirenchhatbar.com/blog/"
                className="nav-link"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
