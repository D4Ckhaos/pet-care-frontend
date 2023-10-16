import { useState, useEffect } from "react"
import { createOrUpdatePet, deletePet, getAllPets, getPetById } from "./services/main/pets"
import { PetsLists } from './components/PetsList'
import { PetForms } from './components/PetForm'
import { PetDetails } from './components/PetDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetsLists />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/add" element={<PetForms />} />
        <Route path="/edit/:id" element={<PetForms />} />
      </Routes>
    </Router>
  );
}

export default App
