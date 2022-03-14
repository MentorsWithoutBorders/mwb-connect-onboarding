import * as React from 'react'
import { NavLink } from 'pages/components/NavLink/navlink.js';
import { LineBreak } from 'common/styles/common-styles.js';
import { LogoContainer, Logo, Text, TrainingExercisesContainer, LinksContainer } from './training-styles.js';
import logo from "images/mwb-logo.png"
import { TrainingExercise } from './training-exercise.js';

export const Training = ({scrollNext, onClickDownload}) => {
  return (
    <div>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <Text>
        <p>Apart from sharing with the students their professional knowledge and skills, the mentors are also teaching them how to <b>set very clear and specific professional goals</b> and how to <b>pursue these goals with a lot of patience, joy, and efficiency</b>.</p>
        <p>For this purpose, we are teaching <b>3 very simple yet extremely powerful exercises</b>:</p>
        <TrainingExercisesContainer>
          <TrainingExercise 
            title = 'Mental process goal/steps'
            text = 'which helps our students generate a continuous stream of ideas, energy, and confidence channeled towards their goals.'/>
          <TrainingExercise 
            title = 'Quick and deep relaxation methods'
            text = 'which allow our students to transition from any negative state (e.g. impatience, frustration, discouragement, worry, stress, etc.) to a very pleasant, relaxed state.'/>
          <TrainingExercise 
            title = 'Super-focus method'
            text = 'which allows our students to immerse themselves more and more in each and every step that they are taking.'/>          
        </TrainingExercisesContainer>
        <p>In order to explain these 3 exercises efficiently to your students, we will kindly ask you to <b>practice them for 1 month</b> in the following way:</p>
      </Text>     
      <LinksContainer>
        <NavLink text="Find out more about accepting lesson requests >>" onClick={scrollNext}/>
        <LineBreak />
        or
        <LineBreak />
        <NavLink text="Download the MWB Connect app >>" onClick={onClickDownload}/>
      </LinksContainer>
    </div>
  )
}