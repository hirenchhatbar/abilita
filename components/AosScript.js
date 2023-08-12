'use client';

import { useEffect } from 'react';

import 'aos/src/sass/aos.scss';

import AOS from 'aos';

const AosScript = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <></>;
};

export default AosScript;
