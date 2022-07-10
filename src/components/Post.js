import React from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import styled from 'styled-components';

const PostContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

const PostTop = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 15px;

  .post__avatar {
    margin-right: 10px;
  }
`;

const PostTopInfo = styled.div`
  h3 {
    font-size: medium;
  }

  p {
    font-size: small;
    color: gray;
  }
`;  

const PostBottom = styled.div`
  margin: 10px 0;
  padding: 15px 25px;
`;

const PostImage = styled.div`
  img {
    width: 100%;
  }
`;

const PostOptions = styled.div`
  margin-top: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
  color: gray;
  cursor: pointer;
  padding: 15px;
`;

const PostOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  flex: 1;

  p {
    margin-left: 10px;
  }

  &:hover {
    background-color: #eff2f5;
    border-radius: 10px;
  }
`;

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <PostContainer>
      <PostTop>
        <Avatar src={profilePic} className="post__avatar"/>

        <PostTopInfo>
          <h3>{username}</h3>
          <p>Timestamp...</p>
        </PostTopInfo>
      </PostTop>

      <PostBottom>
        <p>{message}</p>
      </PostBottom>

      <PostImage>
        <img src={image} alt="" />
      </PostImage>

      <PostOptions>
        <PostOption>
          <ThumbUpIcon />
          <p>Like</p>
        </PostOption>

        <PostOption>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </PostOption>

        <PostOption>
          <NearMeIcon />
          <p>Share</p>
        </PostOption>

        <PostOption>
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </PostOption>

      </PostOptions>
    </PostContainer>
  )
}

export default Post;