import React from 'react';
import { ActionButton } from 'components/ActionButton/action-button.js';
import { Text, ButtonsContainer } from './introduction-styles.js';

export const Introduction = ({scrollNext}) => {
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
      </Text>
      <ButtonsContainer>
        <ActionButton text="Find out how to connect with a mentor >>" onClick={scrollNext}/>
      </ButtonsContainer>
    </div>
  )
}