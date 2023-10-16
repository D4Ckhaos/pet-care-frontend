import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function PetsLists({ pets }) {
  const [search, setSearch] = useState('');
  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredPets.map(pet => (
          <li key={pet.id}>
            <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Pet</Link>
    </div>
  );
}