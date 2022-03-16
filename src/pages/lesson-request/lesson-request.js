import * as React from 'react'
import { NavLink } from 'components/NavLink/navlink.js';
import { UpRightArrow, UpLeftArrow } from 'common/styles/common-styles.js';
import { Text, LessonRequestContainer, RequestContainer, RequestScreen, RequestRight, RequestArrowContainer, Request, AcceptRequestContainer, AcceptRequestLeft, AcceptRequest, AcceptRequestArrowContainer, AcceptRequestScreen, LinksContainer } from './lesson-request-styles.js';
import LessonRequestImg from 'images/mentor-lesson-request.png';
import AcceptLessonRequestImg from 'images/mentor-accept-lesson-request.png';
import DesktopArrowImg from 'images/desktop-arrow.png';

export const LessonRequest = ({onClickDownload}) => {
  return (
    <div>
      <Text>
        <p>After you complete the first month of training, the lesson requests that you'll receive from the students will look like this:</p>
        <LessonRequestContainer>
          <RequestContainer>
            <RequestScreen src={LessonRequestImg} alt="Lesson request"/>
            <RequestRight>
              <RequestArrowContainer>
                <UpLeftArrow src={DesktopArrowImg} alt=""/>
              </RequestArrowContainer>
              <Request>This is the lesson request</Request>        
            </RequestRight>
          </RequestContainer>
          <AcceptRequestContainer>
            <AcceptRequestLeft>
              <AcceptRequestArrowContainer>
                <UpRightArrow src={DesktopArrowImg} alt=""/>
              </AcceptRequestArrowContainer>
              <AcceptRequest>When accepting the lesson request, add the Google Meet/Zoom link and the number of lessons</AcceptRequest>
            </AcceptRequestLeft>
            <AcceptRequestScreen src={AcceptLessonRequestImg} alt="Accept lesson request"/>            
          </AcceptRequestContainer>       
        </LessonRequestContainer> 
      </Text>
      <LinksContainer>
        <NavLink text="Download the MWB Connect app >>" onClick={onClickDownload}/>
      </LinksContainer>
    </div>
  )
}