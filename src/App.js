import React, { useState } from 'react';
import axios from 'axios';
import Show_data from './data/Show_data';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const submit = async (event) => {
    event.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:4001/v1/user-linking/user-end", {
        email: event.target.email.value,
        password: event.target.pass.value
      });
      console.log(response.data); 

      
      setEmail(event.target.email.value);
      setPassword(event.target.pass.value);

      setIsSubmitted(true); 
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred"); 
    }
  };

  return (
    <div>
      {!isSubmitted ? (
        <form className="w-50 mx-auto" onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="text" required className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="text" required className="form-control" name="pass" id="exampleInputPassword1"></input>
          </div>
          <button type="submit" className="btn btn-primary mx-auto d-block">Submit</button>
        </form>
      ) : (
        <Show_data email={email} password={password} /> 
      )}
    </div>
  );
};

export default App;
