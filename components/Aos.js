'use client';

import 'aos/src/sass/aos.scss';

import AOS from 'aos';

import { useEffect } from 'react';

export default function Aos() {
  useEffect(() => {
    AOS.init();
  }, []);
}