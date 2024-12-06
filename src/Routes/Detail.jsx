import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context';


const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setDentist(data));
  }, [id]);

  return (
    <div className={state.theme === 'dark' ? 'dark' : ''}>
      <h1>Detail Dentist {id}</h1>
      {dentist && (
        <div className='dentistInfo'>
          <img className="profile-img" src="/images/doctor.jpg"/>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>

        </div>
      )}
    </div>
  );
}

export default Detail