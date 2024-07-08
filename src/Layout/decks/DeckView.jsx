import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams, useLocation } from "react-router-dom";
import DeckViewNav from "./DeckViewNav";
import DeckViewCard from "./DeckViewCard";
import CardList from "./CardList";

export default function DeckView() {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState({});
  const deckId = useParams().deckId;
  const location  = useLocation();

  //use imported readDeck to set deck and cards
  useEffect(() => {
    async function getDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setCards(deckFromAPI.cards);
      setDeck(deckFromAPI);
    }
    getDeck();
  }, [deckId]);
  if (deck.name) {
    return (
      <div className="deck-view">
        <DeckViewNav deck={deck} />
        <DeckViewCard deck={deck} deckId={deckId} />
        <h2>Cards</h2>
        <CardList cards={cards} deckId={deckId} url={location} />
      </div>
    );
  }
  return "Loading...";
}
