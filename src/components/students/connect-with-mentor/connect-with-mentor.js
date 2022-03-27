import * as React from 'react'
import { ActionButton } from 'components/ActionButton/action-button.js';
import { LineBreak, UpRightArrow, UpLeftArrow } from 'common/styles/common-styles.js';
import { Text, TopText, ConnectWithMentorContainer, FindMentorContainer, FindMentorScreen, FindMentorRight, FindMentorArrowContainer, FindMentor, SelectFieldContainer, SelectFieldLeft, SelectField, SelectFieldArrowContainer, SelectFieldScreen, SelectMentorContainer, SelectMentorScreen, SelectMentorRight, SelectMentorArrowContainer, SelectMentor, ButtonsContainer } from './connect-with-mentor-styles.js';
import FindMentorImg from 'images/student-find-mentor.png';
import SelectFieldImg from 'images/student-select-field.png';
import SelectMentorImg from 'images/student-select-mentor.png';
import DesktopArrowImg from 'images/desktop-arrow.png';

export const ConnectWithMentor = ({scrollNext, onClickDownload}) => {
  return (
    <div>
      <Text>
        <TopText>In order to connect with a mentor, you'll have to install the MWB Connect app and then do the following:</TopText>
        <ConnectWithMentorContainer>
          <FindMentorContainer>
            <FindMentorScreen src={FindMentorImg} alt="Find mentor"/>
            <FindMentorRight>
              <FindMentorArrowContainer>
                <UpLeftArrow src={DesktopArrowImg} alt=""/>
              </FindMentorArrowContainer>
              <FindMentor>Press this button on the home screen</FindMentor>        
            </FindMentorRight>
          </FindMentorContainer>
          <SelectFieldContainer>
            <SelectFieldLeft>
              <SelectFieldArrowContainer>
                <UpRightArrow src={DesktopArrowImg} alt=""/>
              </SelectFieldArrowContainer>
              <SelectField>Select your preferred field</SelectField>
            </SelectFieldLeft>
            <SelectFieldScreen src={SelectFieldImg} alt="Select field"/>            
          </SelectFieldContainer>
          <SelectMentorContainer>
            <SelectMentorScreen src={SelectMentorImg} alt="Select mentor"/>
            <SelectMentorRight>
              <SelectMentorArrowContainer>
                <UpLeftArrow src={DesktopArrowImg} alt=""/>
              </SelectMentorArrowContainer>
              <SelectMentor>Choose a mentor with your preferred subfield and availability and then send the lesson request</SelectMentor>        
            </SelectMentorRight>
          </SelectMentorContainer>        
        </ConnectWithMentorContainer> 
      </Text>
      <ButtonsContainer>
        <ActionButton text="Find out more about the MWB training >>" onClick={scrollNext}/>
        <LineBreak />
        or
        <LineBreak />
        <ActionButton text="Download the MWB Connect app >>" onClick={onClickDownload}/>
      </ButtonsContainer>
    </div>
  )
}