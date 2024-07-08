import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardAddButton({ deckId }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => navigate(`/decks/${deckId}/cards/new`)}
    >
      <span className="fa-solid fa-plus" />
      Add Cards
    </button>
  );
}
