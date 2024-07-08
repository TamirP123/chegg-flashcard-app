import React from "react";

export default function CardFlip({ setIsFrontSide }) {
  return (
    <button
      className="btn btn-secondary mr-auto m-2"
      type="button"
      onClick={() => setIsFrontSide((currentSide) => !currentSide)}
    >
      Flip
    </button>
  );
}
