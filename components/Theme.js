'use client';

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Theme() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-bs-theme","dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-bs-theme","light");
    };

    return (
        <div className="btn-group dropup">
            <button data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faSun} width={25} height={25}/>
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/" onClick={setLightMode}><FontAwesomeIcon icon={faSun} width={20} height={20} className="me-1"/>Light</Link></li>
                <li><Link className="dropdown-item" href="/" onClick={setDarkMode}><FontAwesomeIcon icon={faMoon} width={20} height={20} className="me-1"/>Dark</Link></li>
            </ul>
        </div>
    )
}