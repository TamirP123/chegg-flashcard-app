import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function CardFormat({ card, index, deckId, url }) {
  const navigate = useNavigate();
  //throw popup when user clicks delete card button
  const handleDelete = (id) => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      deleteCard(id);
    }
  };
  return (
    <div className="card mt-2" key={index}>
      <div className="card-body row">
        <div className="col-md-5 p-3">
          <p className="card-text">{card.front}</p>
        </div>
        <div className="col-md-5 ml-auto p-3">
          <p className="card-text">{card.back}</p>
        </div>
      </div>
      <div className="ml-auto m-2">
        <button
          type="button"
          className="btn btn-dark m-2"
          onClick={() => navigate(`/decks/${deckId}/cards/${card.id}/edit`)}
        >
          <span className="fa-solid fa-pencil" />
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(card.id)}
        >
          <a href={url} className="text-white">
            <span className="fa-solid fa-trash" />
          </a>
        </button>
      </div>
    </div>
  );
}
