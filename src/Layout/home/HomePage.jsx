import { listDecks } from "../../utils/api";
import React, { useState, useEffect } from "react";

import DeckCreateButton from "./DeckCreateButton";
import DeckList from "./DeckList";

export default function HomePage() {
  const [decks, setDecks] = useState([]);

  //get decks from API using imported listDecks()
  useEffect(() => {
    async function getDecks() {
      const response = listDecks();
      const decksFromAPI = await response;
      setDecks(decksFromAPI);
    }
    getDecks();
  }, []);

  return (
    <div className="home">
      <DeckCreateButton />
      <DeckList decks={decks} />
    </div>
  );
}
