'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Theme() {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        let theme = 'light' === document.querySelector("body").getAttribute("data-bs-theme") ? "dark" : "light";

        document.querySelector("body").setAttribute("data-bs-theme", theme);

        setTheme(theme);
    }

    return (
        <div className="btn-group dropup">
            <button className="dropdown-item" onClick={switchTheme}>
                {'light' === theme
                    ? <FontAwesomeIcon icon={faMoon} width={20} height={20} />
                    : <FontAwesomeIcon icon={faSun} width={20} height={20} />
                }
            </button>
        </div>
    )
}