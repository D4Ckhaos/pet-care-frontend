import React from "react";
import { useParams } from "react-router-dom";
import { getPetById } from '../services/main/pets';


 export function PetDetails({ pets }) {
    const { id } = useParams();
    const pet = pets.find(p => p.id === id);

    if(!pet) {
        return <div>Pet not found</div>;
    }

    return (
        <div>
            <h2>{pet.name}</h2>
            <p>Date of birth: {pet.dateOfBirth}</p>
            <p>Breed: {pet.breed}</p>
            <button onClick={handleEditClick} className="btn btn-primary">Edit pet</button>
            <button onClick={handleDeleteClick} className="btn btn-danger">Delete pet</button>
        </div>
    );
}