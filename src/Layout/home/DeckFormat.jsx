import React from "react";
import DeckViewButton from "./DeckViewButton";
import DeckStudyButton from "./DeckStudyButton";
import DeckDeleteButton from "./DeckDeleteButton";

export default function DeckFormat({ deck }) {
  return (
    <div className="list-group-item">
      <div className="d-flex justify-content-between">
        <h5 className="list-group-item-heading font-weight-bold">
          {deck.name}
        </h5>
        <h6 className="card-subtitle text-muted">{deck.cards.length} cards</h6>
      </div>
      <p className="list-group-item-text">{deck.description}</p>
      <div className="d-flex">
        <div className="mr-auto">
          <DeckViewButton deck={deck} />
          <DeckStudyButton deck={deck} />
        </div>
        <DeckDeleteButton deck={deck} />
      </div>
    </div>
  );
}
