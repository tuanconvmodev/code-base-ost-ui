import React from 'react';
import './Spinner.scss';
export default function Spinner() {
  return (
    <div className="spinner-container pt-3 pb-3">
      <svg
        className="spinner"
        width="35px"
        height="35px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  );
}
