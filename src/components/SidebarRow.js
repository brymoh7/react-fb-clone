import React from 'react';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const SidebarRowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  &:hover {
    background-color: lightgray;
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h4 {
    margin-left: 20px;
  }

  .MuiSvgIcon-root {
    font-size: xx-large;
    color: #2e81f4;
  }
`;

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <SidebarRowContainer>
      <Wrapper>
       {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
      </Wrapper>
    </SidebarRowContainer>
  )
}

export default SidebarRow;