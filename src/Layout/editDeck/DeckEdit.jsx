import React, { useState, useEffect } from "react";
import { readDeck, updateDeck } from "../../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import DeckEditNav from "./DeckEditNav";
import DeckForm from "../decks/DeckForm";

export default function DeckEdit() {
  const deckId = useParams().deckId;
  const [deck, setDeck] = useState({});
  const navigate = useNavigate();
  //handle changes made to input fields
  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };

  //handle submission of new form using updateDeck from API
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateDeck(deck);
    navigate(`/decks/${deck.id}`);
  };

  //load deck using readDeck function
  useEffect(() => {
    async function getDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }
    getDeck();
  }, [deckId]);

  return (
    <div className="deck-edit">
      <DeckEditNav deck={deck} />
      <DeckForm
        formData={deck}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div>
        <button
          className="btn btn-secondary m-2"
          onClick={() => navigate(`/decks/${deck.id}`)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}
