import React, { useState } from 'react';

export function Withdraw() {
  const [balance, setBalance] = useState(1000);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleWithdrawAmountChange = (event) => {
    const amount = event.target.value;
    
    if (/^\d+$/.test(amount) || amount === '') {
      setWithdrawAmount(amount);
      setIsFormValid(true);
    } else {
      setWithdrawAmount('');
      setIsFormValid(false);
      alert('Please enter numerical values only.');
    }
  };

  const handleWithdraw = () => {
    if (isFormValid) {
      const amount = parseInt(withdrawAmount);
      if (amount <= balance) {
        const newBalance = balance - amount;
        setBalance(newBalance);
        setSuccessMessage(`Success! Your new balance is $${newBalance}`);
        setErrorMessage('');
      } else {
        setErrorMessage('Transaction failed: Insufficient funds');
        setSuccessMessage('');
      }
    }
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Account Balance</h5>
          <p className="card-text">Balance: ${balance}</p>
          <form>
            <div className="form-group">
              <label htmlFor="withdrawAmount">Withdrawal Amount:</label>
              <input
                type="text"
                id="withdrawAmount"
                value={withdrawAmount}
                onChange={handleWithdrawAmountChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleWithdraw}
              disabled={!isFormValid}
            >
              Withdraw
            </button>
          </form>
          {successMessage && <p className="text-success">{successMessage}</p>}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}
