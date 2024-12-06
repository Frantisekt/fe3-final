import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Card = ({ name, username, id, image, onRemoveFav }) => {
  const { state } = useContext(ContextGlobal);
  const location = useLocation();
  

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const isAlreadyFav = favs.some(fav => fav.id === id);
    
    if (!isAlreadyFav) {
      localStorage.setItem('favs', JSON.stringify([...favs, { name, username, id }]));
    }
  }

  const removeFav = () => {
    onRemoveFav(id);
  }

  return (
    <div className={`card ${state.theme === 'dark' ? 'dark' : ''}`}>
      <Link to={`/dentist/${id}`}>
        <img src={image} alt={`${name}'s avatar`} />
        <h3>{name}</h3>
        <p>{username}</p>
        
      </Link>
      <button onClick={addFav} className="favButton"><img src="/favicon.ico" title='Add to Favorites'style={{ width: '20px', height: '20px' }} /></button>
      {location.pathname === '/favs' && (
     <button onClick={removeFav} className="removeButton"><img src="/images/trash.png" title='Remove' style={{ width: '20px', height: '20px' }} /> </button>
      )}
    </div>
  );
};

export default Card;
