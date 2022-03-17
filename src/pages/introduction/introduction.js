import * as React from 'react'
import { ActionButton } from 'components/ActionButton/action-button.js';
import { OrganizationsContainer, Organization, Text, ButtonsContainer } from './introduction-styles.js';
import AppStoreImg from 'images/download-app-store.png';
import GooglePlayImg from 'images/download-google-play.png';

export const Introduction = ({scrollNext}) => {
  return (
    <div>
      <Text>
        You can download the MWB Connect app using the following links:        
      </Text>
      <OrganizationsContainer>
        <Organization src={AppStoreImg} alt="App Store" />
        <Organization src={GooglePlayImg} alt="Google Play" />
      </OrganizationsContainer>
      <ButtonsContainer>
        <ActionButton text="Find out how to connect with students >>" onClick={scrollNext}/>
      </ButtonsContainer>      
    </div>
  )
}