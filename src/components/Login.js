import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  position: relative;

  .signIn__button {
    width: 300px;
    background-color: #2e81f4;
    color: #eff2f5;
    font-weight: 800;
  }

  .signIn__button:hover {
    color: #2e81f4;
    background-color: #fff;
  }
`;

const LoginLogo = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: contain;
    height: 150px;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 145px;

  input {
    padding: 10px;
    margin-bottom: 15px;
    width: 235px;
    outline: none;
  }
`;

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = e => {
    setUsername(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const signIn = () => {
    // Verify password & username with REGEX magic;
    const verifyUser = /^[a-zA-Z]+\s?[a-zA-Z]+$/;
    const verifyPassword = /^[a-zA-Z]{4,}\d{3}@[a-z]+\.[a-z]{3}$/;

    if (username === '' && password === '') return;

    if (!verifyUser.test(username)) alert("Incorrect credentials for username. Please try again.");

    else if (!verifyPassword.test(password)) alert("Incorrect password. Make sure your password has at least four characters, three consecutive numbers, the @ symbol, and a proper domain name.");

    else {
      setUser(username);
      
    }
  };

  return (
    <LoginContainer>
      <LoginLogo>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook Logo" />
        <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="Facebook Logo Title" />
      </LoginLogo>
      <InputField>
        <input placeholder="Enter username..." value={username} onChange={handleUser}/>
        <input type="password" placeholder="Enter password" value={password} onChange={handlePassword}/>
      </InputField>
      <Button className="signIn__button" onClick={signIn}>Sign In</Button>
    </LoginContainer>
  );
}

export default Login;