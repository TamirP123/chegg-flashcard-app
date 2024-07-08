import React, { useState, useEffect } from "react";
import { readDeck, createCard } from "../../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import CardCreateNav from "./CardCreateNav";
import CardForm from "../deckCards/CardForm";

export default function CardCreate() {
  const [deck, setDeck] = useState({});
  const deckId = useParams().deckId;
  const initialFormData = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });
  const navigate = useNavigate();

  //handle input changes to update state variables correctly
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //handle submission of form with createCard() function
  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(deckId, formData);
    setFormData({ ...initialFormData });
  };

  //get deck from API
  useEffect(() => {
    async function getDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }
    getDeck();
  }, [deckId]);

  //render breadcrumb nav and card create form
  return (
    <div className="card-new">
      <CardCreateNav deck={deck} />
      <CardForm
        deck={deck}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div>
        <button
          className="btn btn-secondary m-2"
          onClick={() => navigate(`/decks/${deckId}`)}
        >
          Done
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
