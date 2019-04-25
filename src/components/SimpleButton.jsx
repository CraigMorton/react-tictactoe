import React from 'react';

export default function SimpleButton({ onClick, text }) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}
