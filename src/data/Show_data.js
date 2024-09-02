import React, { useState } from 'react';
import axios from 'axios';

const Show_data = ({ id, email: Email, password : Password }) => {
  const [email, setEmail] = useState(Email);
  const [password, setPassword] = useState(Password);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:4001/v1/user-linking/user-end/${id}`, {
        email,
        password
      });
      console.log('Updated:', response.data);
     
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4001/v1/user-linking/user-end/${id}`,);
      console.log('Deleted:', response.data);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Submitted Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th>Feature</th>
            <th>Feature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{email}</td>
            <td>{password}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Update
              </button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={deleteHandler}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Data</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
                <div className="mb-3">
                  <label htmlFor="modalEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    id="modalEmail"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="modalPassword" className="form-label">Password</label>
                  <input
                    type="text"
                    id="modalPassword"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show_data;
