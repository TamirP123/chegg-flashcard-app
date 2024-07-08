import React from "react";
import DeckFormat from "./DeckFormat";

export default function DeckList({ decks }) {
  return decks.map((deck, index) => (
    <div className="list-group mt-2" key={index}>
      <DeckFormat deck={deck} />
    </div>
  ));
}
