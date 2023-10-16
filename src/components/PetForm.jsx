import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPet } from '../services/main/pets';

export function PetForms({ mode, pets, setPets }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!name || !dateOfBirth || !breed) {
      alert('Please fill out all fields');
      return;
    }

    try {
      if (mode === 'add') {
        const newPet = await createPet({ name, dateOfBirth, breed });
        setPets([...pets, newPet]);
      }
      navigate.push('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Date of Birth:
        <input type="text" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
      </label>
      <label>
        Breed:
        <input type="text" value={breed} onChange={e => setBreed(e.target.value)} />
      </label>
      <button type="submit">{mode === 'add' ? 'Add' : 'Edit'} Pet</button>
    </form>
  );
}