import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div className={state.theme === 'dark' ? 'dark' : ''}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length === 0 ? (
          <p>No hay dentistas favoritos</p>
        ) : (
          favs.map(dentist => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favs;
