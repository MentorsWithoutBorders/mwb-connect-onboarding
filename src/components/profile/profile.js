import * as React from 'react'
import { ActionButton } from 'components/ActionButton/action-button.js';
import { LineBreak, DownRightArrow, UpRightArrow, DownLeftArrow, UpLeftArrow, MobileArrow } from 'common/styles/common-styles.js';
import { Content, TopText, ProfileContainerDesktop, ProfileContainerMobile, ProfileScreen, ProfileLeft, ProfileRight, ChooseFieldContainer, ChooseField, ChooseFieldArrowContainer, AddSkillsContainer, AddSkills, AddSkillsArrowContainer, AddSubfieldsContainer, AddSubfieldsArrowContainer, AddSubfields, AddAvailabilitiesContainer, AddAvailabilities, AddAvailabilitiesArrowContainer, ButtonsContainer } from './profile-styles.js';
import ProfileImg from 'images/mentor-profile.png';
import DesktopArrowImg from 'images/desktop-arrow.png';
import MobileArrowImg from 'images/mobile-arrow.png';

export const Profile = ({scrollNext, onClickDownload}) => {
  return (
    <div>
      <Content>
        <TopText>In order to receive lesson requests from the students, you'll have to <b>go to your profile in the MWB Connect app</b> and then do the following:</TopText>
        <ProfileContainerDesktop>
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
        </ProfileContainerDesktop>

        <ProfileContainerMobile>
          <ProfileLeft>
            <ChooseFieldContainer>
              <ChooseField>Choose your field</ChooseField>
              <ChooseFieldArrowContainer>
                <MobileArrow src={MobileArrowImg} alt=""/>
              </ChooseFieldArrowContainer>
            </ChooseFieldContainer>
            <AddSubfieldsContainer>
              <AddSubfields>Add subfield/s</AddSubfields>            
              <AddSubfieldsArrowContainer>
                <MobileArrow src={MobileArrowImg} alt=""/>
              </AddSubfieldsArrowContainer>
            </AddSubfieldsContainer>
            <AddSkillsContainer>
              <AddSkills>Add skills (optional but recommended)</AddSkills>
              <AddSkillsArrowContainer>
                <MobileArrow src={MobileArrowImg} alt=""/>
              </AddSkillsArrowContainer>
            </AddSkillsContainer>
            <AddAvailabilitiesContainer>
              <AddAvailabilities>Add your available days and times for the lessons</AddAvailabilities>            
              <AddAvailabilitiesArrowContainer>
                <MobileArrow src={MobileArrowImg} alt=""/>
              </AddAvailabilitiesArrowContainer>              
            </AddAvailabilitiesContainer>            
          </ProfileLeft>
          <ProfileScreen src={ProfileImg} alt="Profile"/>
        </ProfileContainerMobile>          
      </Content>     
      <ButtonsContainer>
        <ActionButton text="Find out more about the first month of training >>" onClick={scrollNext}/>
        <LineBreak />
        or
        <LineBreak />
        <ActionButton text="Download the MWB Connect app >>" onClick={onClickDownload}/>
      </ButtonsContainer>
    </div>
  )
}