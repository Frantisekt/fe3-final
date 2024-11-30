import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Card = ({ name, username, id }) => {
  const { state } = useContext(ContextGlobal);
  

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const isAlreadyFav = favs.some(fav => fav.id === id);
    
    if (!isAlreadyFav) {
      localStorage.setItem('favs', JSON.stringify([...favs, { name, username, id }]));
    }
  }

  return (
    <div className={`card ${state.theme === 'dark' ? 'dark' : ''}`}>
      <Link to={`/detail/${id}`}>
        
        <h3>{name}</h3>
        <p>{username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
