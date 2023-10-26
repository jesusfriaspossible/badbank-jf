import React, { useState } from 'react';

export function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
    validateForm();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateForm();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(name && email && password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage('Success');
    alert('Success');
  };

  return (
    <div>
      <h2>Create Account</h2>
      <div className='card account-card'>

        {successMessage && <p>{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button class="btn btn-primary" type="submit" disabled={!isFormValid}>Submit</button>
        </form>
        {successMessage && <button class="btn btn-success" onClick={()=> setSuccessMessage('')}>Add Another
          Account</button>}
      </div>

    </div>
    
  );
}
