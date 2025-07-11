import React from 'react';

export function CustomDocSearchButton({ onTouchStart, onFocus, onMouseOver, onClick, ref, translations }) {
  return (
    <button
      type="button"
      className="DocSearch DocSearch-Button"
      onTouchStart={onTouchStart}
      onFocus={onFocus}
      onMouseOver={onMouseOver}
      onClick={onClick}
      ref={ref}
      aria-label={translations.buttonAriaLabel}
    >
      <span className="DocSearch-Button-Container">
        <svg
          className="DocSearch-Search-Icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m19 19-3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="8"
            cy="8"
            r="7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="DocSearch-Button-Placeholder">
          {translations.buttonText}
        </span>
        <span className="DocSearch-Button-Keys">
          <span className="DocSearch-Button-Key">/</span>
        </span>
      </span>
    </button>
  );
}