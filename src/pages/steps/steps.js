import * as React from 'react'
import { Main, LogoContainer, Logo, StepsContainer, ProfileContainer, TrainingContainer, LessonRequestContainer, DownloadAppContainer, Icon } from './steps-styles.js';
import { StepText } from './step-text.js';
import * as constants from 'utils/constants.js';
import LogoImg from 'images/mwb-logo.png';
import ProfileIcon from 'images/profile-icon.png';
import TrainingIcon from 'images/training-icon.png';
import LessonRequestIcon from 'images/lesson-request-icon.png';
import DownloadAppIcon from 'images/download-app-icon.png';

export const Steps = ({activeStep, goToProfile, goToTraining, goToLessonRequest, goToDownload}) => {
  return (
    <Main>
      <LogoContainer>
        <Logo src={LogoImg} alt="Logo" />
      </LogoContainer>
      <StepsContainer>
        <ProfileContainer onClick={goToProfile}>
          <StepText number='1' text='Profile' isActive={activeStep === constants.MENTOR_PROFILE}/>
          <Icon src={ProfileIcon} alt="Profile"/>
        </ProfileContainer>
        <TrainingContainer onClick={goToTraining}>
          <Icon src={TrainingIcon} alt="Training"/>
          <StepText number='2' text='Training' isActive={activeStep === constants.MENTOR_TRAINING}/>
        </TrainingContainer>
        <LessonRequestContainer onClick={goToLessonRequest}>
          <StepText number='3' text='Lesson request' isActive={activeStep === constants.MENTOR_LESSON_REQUEST}/>
          <Icon src={LessonRequestIcon} alt="Lesson request"/>
        </LessonRequestContainer>
        <DownloadAppContainer onClick={goToDownload}>
          <Icon src={DownloadAppIcon} alt="Download app"/>
          <StepText number='4' text='Download app' isActive={activeStep === constants.MENTOR_DOWNLOAD_APP}/>
        </DownloadAppContainer>
      </StepsContainer>    
    </Main>
  )
}