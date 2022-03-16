import * as React from 'react'
import { TextContainer, NumberContainer, Number, Text } from './step-text-styles.js';

export const StepText = ({number, text, isActive}) => {
  return (
    <TextContainer>
      <NumberContainer active={isActive}>
        <Number active={isActive}>{number}</Number>
      </NumberContainer>
      <Text active={isActive}>{text}</Text>
    </TextContainer>
  )
}