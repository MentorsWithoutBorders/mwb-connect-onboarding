import * as React from 'react'
import { NavLink } from 'pages/components/NavLink/navlink.js';
import { LineBreak } from 'common/styles/common-styles.js';
import { LogoContainer, Logo, Text, LinksContainer } from './profile-styles.js';
import logo from "images/mwb-logo.png"

export const Profile = ({scrollNext, onClickDownload}) => {
  return (
    <div>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <Text>
        <p>In order to receive lesson requests from the students, you'll have to <b>go to your profile in the MWB Connect app</b> and then do the following:</p>
        <ol>
          <li>Choose your field (e.g. programming, product management, customer support, design, etc.)</li>
          <li>Add at least one subfield (adding skills for each subfield is optional but highly recommended)</li>
          <li>Add your available days and times for the lessons (there will be one lesson per week, approx. 1/1.5 hrs long).</li>
        </ol>          
      </Text>     
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