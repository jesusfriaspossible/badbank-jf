


import React from 'react';

const users = [
  { name: 'Jesús Frías', email: 'jesusfriasmx@hotmail.com', password: '123456' },
  { name: 'Jane Smith', email: 'jane@example.com', password: 'password2' },
  // Add more user data as needed
];

export function AllData() {
  return (
    <div>
      <h2>All Data</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">User Information</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead class="table-primary">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
