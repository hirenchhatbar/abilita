'use client';

import React, { useState, useEffect } from 'react';

import mobile from 'is-mobile';

const AosScript = React.lazy(() => import('./AosScript'));

export default function Aos() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(false == mobile());
  }, []);

  return <>{init && <AosScript />}</>;
}
