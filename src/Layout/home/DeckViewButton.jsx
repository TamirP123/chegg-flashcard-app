import React from "react";
import { useNavigate } from "react-router-dom";

export default function DeckViewButton({ deck }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => navigate(`/decks/${deck.id}`)}
    >
      <span className="fa-regular fa-eye" /> View
    </button>
  );
}
