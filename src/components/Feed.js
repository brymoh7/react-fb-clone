import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import styled from 'styled-components';

const FeedContainer = styled.div`
  flex: 1;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Feed = () => {
  return (
    <FeedContainer>
      <StoryReel />
      <MessageSender />
      <Post profilePic="https://pbs.twimg.com/profile_images/1177407777012178944/lblGWz6q_400x400.jpg" message="WOW! This actually works!" timestamp="This is a timestamp" username="Isaiah Wesley" image="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <Post profilePic="https://pbs.twimg.com/profile_images/1177407777012178944/lblGWz6q_400x400.jpg" message="WOW! This actually works!" timestamp="This is a timestamp" username="Isaiah Wesley" />
      <Post profilePic="" message="" timestamp="" username="" image="" />
    </FeedContainer>
  );
}

export default Feed;