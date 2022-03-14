import * as React from 'react'
import { NavLink } from 'pages/components/NavLink/navlink.js';
import { LineBreak } from 'common/styles/common-styles.js';
import { LogoContainer, Logo, Content, ProfileContainer, ProfileScreen, ProfileLeft, ProfileRight, DownRightArrow, UpRightArrow, DownLeftArrow, UpLeftArrow, ChooseField, ChooseFieldArrowContainer,  AddSkills, AddSkillsArrowContainer, AddSubfieldsArrowContainer, AddSubfields, AddAvailabilities, AddAvailabilitiesArrowContainer, LinksContainer } from './profile-styles.js';
import LogoImg from 'images/mwb-logo.png';
import ProfileImg from 'images/mentor-profile.png';
import DesktopArrowImg from 'images/desktop-arrow.png';

export const Profile = ({scrollNext, onClickDownload}) => {
  return (
    <div>
      <LogoContainer>
        <Logo src={LogoImg} alt="Logo" />
      </LogoContainer>
      <Content>
        <p>In order to receive lesson requests from the students, you'll have to <b>go to your profile in the MWB Connect app</b> and then do the following:</p>
        <ProfileContainer>
          <ProfileLeft>
            <ChooseField>Choose your field</ChooseField>
            <ChooseFieldArrowContainer>
              <DownRightArrow src={DesktopArrowImg} alt=""/>
            </ChooseFieldArrowContainer>
            <AddSkillsArrowContainer>
              <UpRightArrow src={DesktopArrowImg} alt=""/>
            </AddSkillsArrowContainer>            
            <AddSkills>Add skills (optional but recommended)</AddSkills>
          </ProfileLeft>
          <ProfileScreen src={ProfileImg} alt="Profile"/>
          <ProfileRight>
            <AddSubfieldsArrowContainer>
              <UpLeftArrow src={DesktopArrowImg} alt=""/>
            </AddSubfieldsArrowContainer>
            <AddSubfields>Add subfield/s</AddSubfields>
            <AddAvailabilities>Add your available days and times for the lessons</AddAvailabilities>            
            <AddAvailabilitiesArrowContainer>
              <DownLeftArrow src={DesktopArrowImg} alt=""/>
            </AddAvailabilitiesArrowContainer>            
          </ProfileRight>
        </ProfileContainer>       
      </Content>     
      <LinksContainer>
        <NavLink text="Find out more about the first month of training >>" onClick={scrollNext}/>
        <LineBreak />
        or
        <LineBreak />
        <NavLink text="Download the MWB Connect app >>" onClick={onClickDownload}/>
      </LinksContainer>
    </div>
  )
}