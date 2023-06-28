'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Theme() {
  const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   // the cook runs when page loads, reads cookie
  //   const theme = Cookies.get('theme') ?? 'light';

  //   // it sets the theme
  //   document.querySelector('body').setAttribute('data-bs-theme', theme);

  //   // display proper icon in footer
  //   setTheme(theme);
  // }, []);

  const switchTheme = () => {
    let theme =
      'light' === document.querySelector('body').getAttribute('data-bs-theme')
        ? 'dark'
        : 'light';
    document.querySelector('body').setAttribute('data-bs-theme', theme);

    // display proper icon in footer
    setTheme(theme);

    // the cookie is set for later use
    Cookies().set('theme', theme, { expires: 365 });
  };

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
  );
}
