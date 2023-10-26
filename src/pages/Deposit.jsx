import React, { useState } from 'react';

export function Deposit() {
  const [balance, setBalance] = useState(1000);
  const [depositAmount, setDepositAmount] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDepositAmountChange = (event) => {
    const amount = event.target.value;
    setDepositAmount(amount);

    if (/^-?\d+$/.test(amount) ) {
      setIsFormValid(true);
    } else {
      setDepositAmount('');
      setIsFormValid(false);
      alert('Please enter numerical values only.');
    }
  };

  const handleDeposit = () => {
    const deposit = parseInt(depositAmount);

    if (deposit >= 0) {
      const newBalance = balance + deposit;
      setBalance(newBalance);
      setSuccessMessage(`Success! Your new balance is $${newBalance}`);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter positive numbers only');
      setSuccessMessage('');
      alert('Please enter positive numbers only');
    }
  };

  return (
    <div>
      <h2>Deposit</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Account Balance</h5>
          <p className="card-text">Balance: ${balance}</p>
          <form>
            <div className="form-group">
              <label htmlFor="depositAmount">Deposit Amount:</label>
              <input
                type="text"
                id="depositAmount"
                value={depositAmount}
                onChange={handleDepositAmountChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDeposit}
              disabled={!isFormValid}
            >
              Deposit
            </button>
          </form>
          {successMessage && <p className="text-success">{successMessage}</p>}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}