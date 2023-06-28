'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const toggleRead = (container) => {
  const element = document.getElementById(container);
  element.classList.remove('read-more');
};

export default function ReadMore({ container }) {
  return (
    <>
      <span>
        <button className="btn btn-link p-0 z-5">
          <FontAwesomeIcon
            icon={faAnglesDown}
            size="2x"
            onClick={() => {
              toggleRead(container);
            }}
          />
        </button>
      </span>
    </>
  );
}
