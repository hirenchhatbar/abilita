'use client';

import Typed from 'typed.js';

import { useEffect } from 'react';

export default function ReadMore({ containerId, strings }) {
  useEffect(() => {
    const element = document.getElementById(containerId);
    const typed = new Typed(element, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 70,
      showCursor: true,
      contentType: null,
      startDelay: 2000,
      onComplete: function (self) {
        self.cursor.remove();
      },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
}
