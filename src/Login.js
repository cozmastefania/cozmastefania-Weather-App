import React, { useState} from "react";
import {useNavigate} from 'react-router-dom';

const Login = (handleData) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandle = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

 const navigate = useNavigate();
  const redirectHandle=() => {
    if(isSubmitted) {
   navigate('/Home'); }
  }

  return (
    <div>
      <h1> Sign in page </h1>
      <form onSubmit={submitHandle}>
        <label> Email: </label>
        <input type="email" required />
        <div className="logbutton" onClick={data=>handleData(data)}>
          <input type="submit"
          onClick={redirectHandle}/>
        </div>
      </form>
    </div>
  );
};

export default Login;
