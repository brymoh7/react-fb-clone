import React from 'react';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const StoryContainer = styled.div`
  position: relative;
  width: 120px;
  height: 200px;
  box-shadow: 0 5px 17px -7px rgba(0, 0, 0, 0.75); 
  border-radius: 10px;
  margin-right: 10px;
  transition: transform 100ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }

  .story__avatar {
    margin: 10px;
    border: 5px solid #2e81f4;
  }

  h4 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
  }
`;

const Story = ({ image, profileSrc, title }) => {
  return (
    <StoryContainer style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </StoryContainer>
  );
}

export default Story;