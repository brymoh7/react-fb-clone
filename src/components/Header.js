import React from 'react';
import SearchIcon from '@material-ui/icons/Search'; 
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  position: sticky;
  background-color: #fff;
  overflow: scroll;
  z-index: 100;
  top: 0;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderLeft = styled.div`
  display: flex;

  img {
    height: 40px;
  }
`;

const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 999px;

  input {
    border: none;
    background-color: transparent;
    outline: none;
  }
`;

const HeaderMiddle = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderOption = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;
  
  .MuiSvgIcon-root {
    color: gray;
  }

  .MuiSvgIcon-root:hover {
    color: #2e81f4;
  }

  &:hover:not(.active) {
    background-color: #eff2f5;
    border-radius: 10px;
    align-items: center;
    padding: 0 30px;
    border-bottom: none;
  }

  &.active .MuiSvgIcon-root {
    color: #2e81f4;
  }

  &.active {
    border-bottom: 4px solid #2e81f4;
  }
`;  

const HeaderRight = styled.div`
  display: flex;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 10px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook Logo"/>

        <HeaderInput>
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </HeaderInput>
      </HeaderLeft>

      <HeaderMiddle>
        <HeaderOption className="active">
          <HomeIcon fontSize="large"/>
        </HeaderOption>
        <HeaderOption>
          <FlagIcon fontSize="large"/>
        </HeaderOption>
        <HeaderOption>
          <SubscriptionsOutlinedIcon fontSize="large"/>
        </HeaderOption>
        <HeaderOption>
          <StorefrontOutlinedIcon fontSize="large"/>
        </HeaderOption>
        <HeaderOption>
          <SupervisedUserCircleIcon fontSize="large"/>
        </HeaderOption>
      </HeaderMiddle>

      <HeaderRight>
        <HeaderInfo>
          <Avatar src="" />
          <h4>Isaiah Wesley</h4>
        </HeaderInfo>

        <IconButton>
          <AddIcon />
          <ForumIcon />
          <NotificationsActiveIcon />
          <ExpandMoreIcon />
        </IconButton>
      </HeaderRight>
    </HeaderContainer>
  )
};

export default Header;