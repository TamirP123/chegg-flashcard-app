import React from "react";
import { deleteDeck } from "../../utils/api";

export default function DeckDeleteButton({ deck }) {
  const handleDelete = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deck.id);
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>
      <a href="/" className="text-white">
        <span className="fa-solid fa-trash" />
      </a>
    </button>
  );
}
