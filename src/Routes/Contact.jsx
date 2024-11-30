import React, { useContext, useState } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from "../Components/utils/global.context";


const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className={state.theme === 'dark' ? 'dark' : ''}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <button onClick={handleShowForm}>Contacto</button>
      {showForm && <Form/>}
    </div>
  )
}

export default Contact