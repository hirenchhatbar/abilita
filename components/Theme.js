'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

export default function Theme() {
  const [theme, setTheme] = useState('white');

  useEffect(() => {
    // the cook runs when page loads, reads cookie
    const theme = Cookies.get('theme') ?? 'white';

    // it sets the theme
    document.querySelector('body').setAttribute('data-bs-theme', theme);

    // display proper icon in footer
    setTheme(theme);
  }, []);

  const switchTheme = () => {
    let theme =
      'white' === document.querySelector('body').getAttribute('data-bs-theme')
        ? 'dark'
        : 'white' ;
    document.querySelector('body').setAttribute('data-bs-theme', theme);

    // display proper icon in footer
    setTheme(theme);

    // the cookie is set for later use
    Cookies.set('theme', theme, { expires: 365 });
  };

  return (
    <div className="btn-group">
      <button onClick={switchTheme} className="btn btn-link">
        {'white' === theme ? (
          <FontAwesomeIcon icon={faMoon} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faSun} size="lg" />
        )}
      </button>
    </div>
  );
}
