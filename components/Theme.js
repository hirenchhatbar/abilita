'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Theme() {
    // function squareOfNumber(number) {
    //     return number * number;
    // }
    // console.log(squareOfNumber(5));
    // console.log(squareOfNumber(14));
    // console.log(squareOfNumber(19));
    function setTheme(value) {
        return document.querySelector("body").setAttribute("data-bs-theme",value);
    }
    
    return (
        <div className="btn-group dropup">
            <button data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faSun} width={25} height={25}/>
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/" onClick={()=>setTheme(light)}><FontAwesomeIcon icon={faSun} width={20} height={20} className="me-1"/>Light</Link></li>
                <li><Link className="dropdown-item" href="/" onClick={()=>setTheme(dark)}><FontAwesomeIcon icon={faMoon} width={20} height={20} className="me-1"/>Dark</Link></li>
            </ul>
        </div>
    )
}
