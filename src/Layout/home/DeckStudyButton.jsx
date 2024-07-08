import React from "react";
import { useNavigate } from "react-router-dom";

export default function DeckStudyButton({ deck }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => navigate(`/decks/${deck.id}/study`)}
    >
      <span className="fa fa-book" /> Study
    </button>
  );
}
