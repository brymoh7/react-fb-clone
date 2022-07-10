import React from 'react';
import Story from './Story';
import styled from 'styled-components';

const StoryReelContainer = styled.div`
  display: flex;
`;

const StoryReel = () => {
  return (
    <StoryReelContainer>
      <Story className="storyReel__story" image="https://images.pexels.com/photos/1068340/pexels-photo-1068340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" profileSrc="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Alex Graham" />
      <Story className="storyReel__story" image="https://images.pexels.com/photos/7283618/pexels-photo-7283618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" profileSrc="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Lily Fortuna" />
      <Story className="storyReel__story" image="https://images.pexels.com/photos/7235676/pexels-photo-7235676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" profileSrc="https://images.pexels.com/photos/962784/pexels-photo-962784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Marybeth Johnsson" />
      <Story className="storyReel__story" image="https://images.pexels.com/photos/6613569/pexels-photo-6613569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" profileSrc="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Derek Corbin" />
      <Story className="storyReel__story" image="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" profileSrc="https://images.pexels.com/photos/788567/pexels-photo-788567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Susan Sarandon" />
    </StoryReelContainer>
  );
}

export default StoryReel;