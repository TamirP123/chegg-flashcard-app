import React from "react";
import { Link } from "react-router-dom";

export default function CardEditNav({ card, deckId, deck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <span className="fa-solid fa-home" />
            Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li className="breadcrumb-item active">Edit Card {card.id}</li>
      </ol>
    </nav>
  );
}
