'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

export default function Theme() {
  const [theme, setTheme] = useState(`${process.env.NEXT_PUBLIC_NEXT_THEME}`);

  useEffect(() => {
    // the cook runs when page loads, reads cookie
    const theme =
      Cookies.get('theme') ?? `${process.env.NEXT_PUBLIC_NEXT_THEME}`;

    // it sets the theme
    document.querySelector('body').setAttribute('data-bs-theme', theme);

    // display proper icon in footer
    setTheme(theme);
  }, []);

  const switchTheme = () => {
    let theme =
      `${process.env.NEXT_PUBLIC_NEXT_THEME}` ===
      document.querySelector('body').getAttribute('data-bs-theme')
        ? 'dark'
        : `${process.env.NEXT_PUBLIC_NEXT_THEME}`;
    document.querySelector('body').setAttribute('data-bs-theme', theme);

    // display proper icon in footer
    setTheme(theme);

    // the cookie is set for later use
    Cookies.set('theme', theme, { expires: 365 });
  };

  return (
    <div className="btn-group">
      <button onClick={switchTheme} className="btn btn-link">
        {`${process.env.NEXT_PUBLIC_NEXT_THEME}` === theme ? (
          <FontAwesomeIcon icon={faMoon} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faSun} size="lg" />
        )}
      </button>
    </div>
  );
}
