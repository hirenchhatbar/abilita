'use client';

import 'aos/src/sass/aos.scss';

import AOS from 'aos';

import { useEffect } from 'react';

const width = window.innerWidth;

export default function Aos() {
  useEffect(() => {
    {width > 376 ? AOS.init() : AOS.init()};
  }, [width]);
}