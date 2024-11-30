import React, { useState, useContext } from "react";
import { ContextGlobal } from './utils/global.context';


const Form = () => {
  const { state } = useContext(ContextGlobal);
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.fullName.length <= 5) {
      setError('Por favor verifique su información nuevamente');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor verifique su información nuevamente');
      return;
    }

    console.log('Datos enviados:', formData);
    setSuccess(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail`);
    setError('');
  };

  return (
    <div className={state.theme === 'dark' ? 'dark' : ''}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {success && <p style={{color: 'green'}}>{success}</p>}
    </div>
  );
};

export default Form;
