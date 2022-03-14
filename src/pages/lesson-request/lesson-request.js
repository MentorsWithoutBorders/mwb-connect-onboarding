import * as React from 'react'
import { NavLink } from 'pages/components/NavLink/navlink.js';
import { LogoContainer, Logo, Text, LinksContainer } from './lesson-request-styles.js';
import LogoImg from 'images/mwb-logo.png';

export const LessonRequest = ({onClickDownload}) => {
  return (
    <div>
      <LogoContainer>
        <Logo src={LogoImg} alt="Logo" />
      </LogoContainer>
      <Text>
        <p>The lesson requests that you'll receive from the students will look like this:</p>        
      </Text>
      <LinksContainer>
        <NavLink text="Download the MWB Connect app >>" onClick={onClickDownload}/>
      </LinksContainer>
    </div>
  )
}