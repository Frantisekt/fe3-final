import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);
  
  return (
    <main className={state.theme === 'dark' ? 'dark' : ''}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map(user => (
          <Card 
            key={user.id}
            name={user.name}
            username={user.username}
            id={user.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Home