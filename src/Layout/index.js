import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import DeckCreate from "./newDeck/DeckCreate";
import CardCreate from "./newDeckCards/CardCreate";
import CardEdit from "./deckCards/CardEdit";
import DeckEdit from "./editDeck/DeckEdit";
import StudyView from "./studyDeck/StudyView";
import DeckView from "./decks/DeckView";
import HomePage from "./home/HomePage";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/decks/new" element={<DeckCreate />} />
          
          <Route path="/decks/:deckId/cards/new" element={<CardCreate />} />
          
          <Route path="/decks/:deckId/cards/:cardId/edit" element={<CardEdit />} />

          <Route path="/decks/:deckId/edit" element={<DeckEdit />} />

         <Route path="/decks/:deckId/study" element={<StudyView />} />

          <Route path="/decks/:deckId" element={<DeckView />} />

         <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </div>
  );
}

export default Layout;
