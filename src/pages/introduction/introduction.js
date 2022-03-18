import * as React from 'react';
import { ActionButton } from 'components/ActionButton/action-button.js';
import { OrganizationsContainer, OrganizationContainer, Organization, Text, ButtonsContainer } from './introduction-styles.js';

export const Introduction = ({partners, testimonials, scrollNext}) => {
  partners.sort((a,b) => {
    const reverseCompare = (a.position < b.position) ? -1 : 0;
    return a.position > b.position ? 1 : reverseCompare;
  }); 
  return (
    <div>
      <Text>
        You can download the MWB Connect app using the following links:        
      </Text>
      <OrganizationsContainer>
        {partners.map(partner => {
          const logo = 'https://mentorswithoutborders.net/images/partners/' + partner.logo + '.png';
          return <OrganizationContainer href={partner.url} target="_blank">
            <Organization src={logo} title={partner.name} alt={partner.name}/>
          </OrganizationContainer>
        })}
      </OrganizationsContainer>  
      <ButtonsContainer>
        <ActionButton text="Find out how to connect with students >>" onClick={scrollNext}/>
      </ButtonsContainer>      
    </div>
  )
}