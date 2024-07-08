import React from "react";
import CardFormat from "./CardFormat";

export default function CardList({ cards, deckId, url }) {
  //render each card to a Bootstrap card and add edit and delete buttons
  if (cards.length) {
    return (
      <div>
        {cards.map((card, index) => (
          <CardFormat key={index} url={url} deckId={deckId} card={card} />
        ))}
      </div>
    );
  } else {
    return "There are no cards in this deck yet!";
  }
}
