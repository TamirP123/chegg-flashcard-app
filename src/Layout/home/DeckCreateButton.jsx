import React from "react";
import { useNavigate } from "react-router-dom";

export default function DeckCreateButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => navigate(`/decks/new`)}
    >
      <span className="fa-solid fa-plus" /> Create Deck
    </button>
  );
}
