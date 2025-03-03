import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const [credentials, setcredentials] = useState({ email: "",password: ""});
let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();    
    console.log(JSON.stringify({email:credentials.email,password:credentials.password}));
    
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      
        email: credentials.email,
        password: credentials.password,
      
      }),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if(json.success){
      localStorage.setItem("userEmail", credentials.email )
      localStorage.setItem("authToken",json.authToken )
     console.log( localStorage.getItem("authToken"));
      navigate('/');
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };



  return  (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
            autoComplete="email" // Added autocomplete
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
            autoComplete="current-password" // Added autocomplete
          />
        </div>
        <button type="submit" className="btn m-3 btn-success">
          Login
        </button>
        <Link to="/createuser" className="m-3 btn btn-danger">
          Create an Account
        </Link>
      </form>
    </div>
  );
}