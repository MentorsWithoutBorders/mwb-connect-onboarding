import React from 'react';
import { ActionButton } from 'components/ActionButton/action-button.js';
import { Text, TestimonialsLink, OrganizationsContainer, OrganizationContainer, Organization, ButtonsContainer } from './introduction-styles.js';

export const Introduction = ({partners, scrollNext, toggleModal}) => {
  partners.sort((a,b) => {
    const reverseCompare = (a.position < b.position) ? -1 : 0;
    return a.position > b.position ? 1 : reverseCompare;
  }); 
  return (
    <div>
      <Text>
        Thank you for your interest in mentoring underprivileged young people from our partner NGOs shown below. These are organizations that are providing support to youth from rural areas, orphans, refugees, and various other disadvantaged backgrounds.
        <p>Here are a few details regarding our mentoring program:</p>
        <ul>
          <li>the mentees are from African and Asian countries, they are 18+ years old, speak English well, and have access to computers / smartphones and internet connections (thanks to the support from the organizations that they belong to)</li>
          <li>the mentors teach what they know best, according to their area of expertise (e.g. programming, product management, customer support, design, human resources, etc.)</li>
          <li>each mentor connects with 1 or 2 students on Zoom or Google Meet, once a week, and the duration of each lesson is 1 / 1.5 hours</li>
          <li>most of our mentors didn't have any teaching experience before joining us, but their impact has been tremendously positive</li>
          <li>for any questions or doubts, the founder of MWB can always be reached at: edmond@mentorswithoutborders.net</li>
        </ul>
        <p>Apart from pursuing their own professional goals, our students also become mentors themselves after a while, and thus our impact grows exponentially.</p>
        <p>If you would like to see the testimonials from some of our students, <TestimonialsLink onClick={toggleModal}>please click here</TestimonialsLink>.</p>
      </Text>
      <ButtonsContainer>
        <ActionButton text="Find out how to connect with students >>" onClick={scrollNext}/>
      </ButtonsContainer>        
      <OrganizationsContainer>
        {partners.map(partner => {
          const logo = 'https://mentorswithoutborders.net/images/partners/' + partner.logo + '.png';
          return <OrganizationContainer key={partner.position} href={partner.url} target="_blank" rel="noreferrer">
            <Organization src={logo} title={partner.name} alt={partner.name}/>
          </OrganizationContainer>
        })}
      </OrganizationsContainer>    
    </div>
  )
}