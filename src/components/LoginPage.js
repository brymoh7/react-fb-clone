import React from 'react';
import Login from './Login';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  
`;

const LoginPage = ({ setUser }) => {
  return (
    <LoginPageContainer>
      <Login setUser={setUser} />
    </LoginPageContainer>
  );
}

export default LoginPage;