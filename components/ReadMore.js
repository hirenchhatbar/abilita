'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ReadMore({ container }) {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleRead = (container) => {
    const element = document.getElementById(container);
    element.classList.toggle('read-more');
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <span className="d-flex justify-content-center mt-2">
        <button className="btn btn-link p-0 z-5" title="Read more">
          <FontAwesomeIcon
            icon={isReadMore ? faAnglesDown : faAnglesUp}
            size="1x"
            onClick={() => {
              toggleRead(container);
            }}
            className="animate__animated animate__tada animate__infinite animate__delay-2s"
          />
        </button>
      </span>
    </>
  );
}
