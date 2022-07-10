import React from 'react';
import SidebarRow from './SidebarRow'; 
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  flex: 0.33;
  padding: 25px 10px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarRow src="https://pbs.twimg.com/profile_images/1177407777012178944/lblGWz6q_400x400.jpg" title="Isaiah Wesley"/>  
      <SidebarRow src="" Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
      <SidebarRow src="" Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow src="" Icon={PeopleIcon} title="Friends"/>
      <SidebarRow src="" Icon={ChatIcon} title="Messenger"/>
      <SidebarRow src="" Icon={StorefrontIcon} title="Marketplace"/>
      <SidebarRow src="" Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow src="" Icon={ExpandMoreOutlined} title="Marketplace"/> 
    </SidebarContainer>
  );
}

export default Sidebar;