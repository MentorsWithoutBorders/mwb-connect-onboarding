import * as React from 'react'
import { Main, LogoContainer, Logo, StepsContainer, ProfileContainer, TrainingContainer, LessonRequestContainer, DownloadAppContainer, Icon } from './steps-styles.js';
import { StepText } from './step-text.js';
import LogoImg from 'images/mwb-logo.png';
import ProfileIcon from 'images/profile-icon.png';
import TrainingIcon from 'images/training-icon.png';
import LessonRequestIcon from 'images/lesson-request-icon.png';
import DownloadAppIcon from 'images/download-app-icon.png';

export const Steps = ({goToProfile, goToTraining, goToLessonRequest, goToDownload}) => {
  return (
    <Main>
      <LogoContainer>
        <Logo src={LogoImg} alt="Logo" />
      </LogoContainer>
      <StepsContainer>
        <ProfileContainer onClick={goToProfile}>
          <StepText number={'1'} text={'Profile'}/>
          <Icon src={ProfileIcon} alt="Profile"/>
        </ProfileContainer>
        <TrainingContainer onClick={goToTraining}>
          <Icon src={TrainingIcon} alt="Training"/>
          <StepText number={'2'} text={'Training'}/>
        </TrainingContainer>
        <LessonRequestContainer onClick={goToLessonRequest}>
          <StepText number={'3'} text={'Lesson request'}/>
          <Icon src={LessonRequestIcon} alt="Lesson request"/>
        </LessonRequestContainer>
        <DownloadAppContainer onClick={goToDownload}>
          <Icon src={DownloadAppIcon} alt="Download app"/>
          <StepText number={'4'} text={'Download app'}/>
        </DownloadAppContainer>
      </StepsContainer>    
    </Main>
  )
}