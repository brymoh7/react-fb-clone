import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import styled from 'styled-components';

const MessageSenderContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
  width: 100%;
`;

const MessageSenderTop = styled.div`
  display: flex;
  border-bottom: 1px solid #eff2f5;
  padding: 15px;

  form {
    flex: 1;
    display: flex;
  }

  input {
    outline: none;
    border: none;
    padding: 5px 20px;
    margin: 0 10px;
    border-radius: 999px;
    background-color: #eff2f5;
  }

  .messageSender__input {
    flex: 1;
  }

  button {
    display: none;
  }
`;

const MessageSenderBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const MessageSenderOption = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  color: gray;
  margin: 5px;

  h3 {
    font-size: medium;
    margin-left: 10px;
    cursor: pointer;
  }

  &:hover {
    background-color: #eff2f5;
    border-radius: 20px;
  }
`;

const MessageSender = () => {
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    //some clever db stuff

    setInput('');
    setImageURL('');
  }

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleImageURL = e => {
    setImageURL(e.target.value);
  }

  return (
    <MessageSenderContainer>
      <MessageSenderTop>
        <Avatar />
        <form>
          <input className="messageSender__input" placeholder="What's on your mind?" value={input} onChange={handleChange}/>
          <input placeholder="Image URL (Optional)" value={imageURL} onChange={handleImageURL}/>

          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </MessageSenderTop>

      <MessageSenderBottom>
        <MessageSenderOption>
          <VideocamIcon style={{color: 'red'}} />
          <h3>Live Video</h3>
        </MessageSenderOption>
        <MessageSenderOption>
          <PhotoLibraryIcon style={{color: 'green'}} />
          <h3>Photo/Video</h3>
        </MessageSenderOption>
        <MessageSenderOption>
          <InsertEmoticonIcon style={{color: 'orange'}} />
          <h3>Feeling/Activity</h3>
        </MessageSenderOption>
      </MessageSenderBottom>
    </MessageSenderContainer>
  );
}

export default MessageSender;