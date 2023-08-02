import { useState } from 'react';

const ImportExport = () => {
  const heroes = [
    {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    },
    {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
    },
    {
      id: 3,
      name: 'Superman',
      owner: 'DC'
    },
    {
      id: 4,
      name: 'Flash',
      owner: 'DC'
    },
    {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel'
    },
  ];

  const [searchId, setSearchId] = useState('');
  const [foundHero, setFoundHero] = useState(null);

  const handleSearchChange = (event) => {
    setSearchId(event.target.value);
  }

  const handleSearchClick = () => {
    const id = parseInt(searchId);
    const hero = heroeById(id);
    setFoundHero(hero);
  }

  const heroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
  }

  return (
    <div className="componente">
      <h4 className="pagination">6</h4>
      <h1 className="titulos">Import, export y funciones comunes de arreglos</h1>

      <div className='heroes'>
        <label htmlFor="searchId">Ingrese el ID del héroe:</label>
        <input className='input-heroes'
          type="number"
          id="searchId"
          value={searchId}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick} className='button-heroes'>Buscar</button>
      </div>

      {foundHero ? (
        <div>
          <h2>Información del Héroe:</h2>
          <p>Nombre: {foundHero.name}</p>
          <p>Dueño: {foundHero.owner}</p>
        </div>
      ) : (
        <p>No se encontró ningún héroe con el ID ingresado.</p>
      )}
    </div>
  )
}

export default ImportExport;
