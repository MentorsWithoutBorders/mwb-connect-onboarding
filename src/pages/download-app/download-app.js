import * as React from 'react'
import { LogoContainer, Logo, Text } from './download-app-styles.js';
import logo from "images/mwb-logo.png"

export const DownloadApp = () => {
  return (
    <div>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <Text>
        You can download the MWB Connect app using the following links:        
      </Text>   
    </div>
  )
}