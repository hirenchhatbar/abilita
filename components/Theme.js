'use client';

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Theme() {
    function setTheme(value) {
        return document.querySelector("body").setAttribute("data-bs-theme",value);
    }
    
    return (
        <div className="btn-group dropup">
            <button data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faSun} width={25} height={25}/>
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/" onClick={()=>setTheme('light')}><FontAwesomeIcon icon={faSun} width={20} height={20} className="me-1"/>Light</Link></li>
                <li><Link className="dropdown-item" href="/" onClick={()=>setTheme('dark')}><FontAwesomeIcon icon={faMoon} width={20} height={20} className="me-1"/>Dark</Link></li>
            </ul>
        </div>
    )
}