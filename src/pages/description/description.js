import * as React from 'react'
import { NavLink } from 'pages/components/NavLink/navlink.js';
import { LineBreak } from 'common/styles/common-styles.js';
import { LogoContainer, Logo, Text, LinksContainer } from './description-styles.js';
import logo from "images/mwb-logo.png"

export const Description = ({scrollNext, onClickDownload}) => {
  return (
    <div>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <Text>
        <p>We are mentoring the underprivileged students from our partner NGOs and our training methodology is made of 2 parts:</p>
        <ol>
          <li>Each mentor is sharing their <b>professional knowledge and skills</b> according to their area of expertise (e.g. programming, product management, customer support, design, etc).</li>
          <li>We are also teaching our students how to <b>set very clear and specific professional goals</b> and how to pursue these goals with a lot of patience, drive, efficiency and joy by using 3 very simple, yet extremely powerful exercises.</li>
        </ol>
      </Text>
      <LinksContainer>
        <NavLink text="Find out how the students send lesson requests >>" onClick={scrollNext}/>
        <LineBreak />
        or
        <LineBreak />
        <NavLink text="Download the MWB Connect app >>" onClick={onClickDownload}/>
      </LinksContainer>
    </div>
  )
}