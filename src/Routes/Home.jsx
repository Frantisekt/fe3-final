import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';


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
            image="..\images\doctor.jpg"
          />
        ))}
      </div>
    </main>
  )
}

export default Home