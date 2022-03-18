import React from 'react';
import { ActionButton } from 'components/ActionButton/action-button.js';
import { OrganizationsContainer, OrganizationContainer, Organization, Text, ButtonsContainer } from './introduction-styles.js';

export const Introduction = ({partners, testimonials, scrollNext, toggleModal}) => {
  partners.sort((a,b) => {
    const reverseCompare = (a.position < b.position) ? -1 : 0;
    return a.position > b.position ? 1 : reverseCompare;
  }); 
  return (
    <div>
      <Text>
        We are mentoring underprivileged young people from our partner NGOs shown below, helping them to become passionate professionals. We are focusing primarily on those who are 18+ years old, speak English well and have access to computers/smartphones and internet connections (thanks to the support from the organizations that they belong to). After a while, our students become mentors themselves and thus our impact grows exponentially.
        <p>If you would like to see the feedback from some of our students, please click here.</p>
        <button onClick={toggleModal}>Open modal</button>
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