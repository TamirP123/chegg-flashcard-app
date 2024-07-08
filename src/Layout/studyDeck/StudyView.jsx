import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom";
import StudyNav from "./StudyNav";
import StudyCard from "./StudyCard";

export default function StudyView() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const deckId = useParams().deckId;
  const [deck, setDeck] = useState({});
  console.log("deckId:", deckId);

  useEffect(() => {
    async function getDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCards(deckFromAPI.cards);
      setCurrentCard(deckFromAPI.cards[0]);
    }
    getDeck();
  }, [deckId]);
  console.log("deck:", deck);

  return (
    <div className="study">
      <StudyNav deckId={deckId} deck={deck} />
      <h2 className="text-center h1">Study: {deck.name}</h2>
      <StudyCard
        cards={cards}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        deckId={deckId}
      />
    </div>
  );
}
