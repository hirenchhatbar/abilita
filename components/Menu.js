'use client';
import Link from 'next/link';

// const navitems = document.querySelectorAll(".nav-item");
// const element = document.getElementById("menu");
// navitems.forEach((e) => {
//     e.addEventListener('click', () => element.classList.remove('show'));
// })

const element = document.getElementById("menu");
// const element = document.getElementsByClassName("navbar");
const toggleMenu = () => {
    // element.classList.remove("collapsed");
    element.classList.remove("show");
}

export default function Menu() {
    return (
        <header>
            <div className="d-flex justify-content-around align-items-center fixed-top">
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
                                <li className="nav-item" onClick={toggleMenu}>
                                    <Link href="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={toggleMenu}>
                                    <Link href="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={toggleMenu}>
                                    <Link href="/experience" className="nav-link">
                                        Experience
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={toggleMenu}>
                                    <Link href="/portfolio" className="nav-link">
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={toggleMenu}>
                                    <Link href="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

