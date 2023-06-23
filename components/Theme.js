'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
import Cookies from 'js-cookie'

const container = document.querySelector('body');

(function(){
    container.setAttribute('data-theme', localStorage.getItem('theme'));    
})();

export default function Theme() {
  const [theme, setTheme] = useState('light')

  const switchTheme = () => {
    let theme =
      'light' === document.querySelector('body').getAttribute('data-bs-theme')
        ? 'dark'
        : 'light'

    document.querySelector('body').setAttribute('data-bs-theme', theme)

    setTheme(theme)
    localStorage.setItem('theme', theme);
    // Cookies.set("theme","true");
  }


  return (
    <div className="btn-group">
      <button onClick={switchTheme} className="btn btn-link">
        {'light' === theme ? (
          <FontAwesomeIcon icon={faMoon} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faSun} size="lg" />
        )}
      </button>
    </div>
  )
}
