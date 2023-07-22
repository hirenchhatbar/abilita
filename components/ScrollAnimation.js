'use client';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { useEffect } from 'react';

export default function ScrollAnimation({ containerId }) {
  useEffect(() => {
    const element = document.getElementById(containerId);
    
    const scrollAnimation = AOS.init(element,{duration: 2000});

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      scrollAnimation.destroy();
    };
  }, [containerId]);
}
