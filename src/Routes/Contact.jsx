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
      <div className='formulario'>
        <h2>¿Quieres saber más?</h2>
        <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
        <button className='contactButton' onClick={handleShowForm}>Contacto</button>
        {showForm && <Form/>}
      </div>
    </div>
  )
}

export default Contact