import * as React from 'react'
import { Box, Title, Text } from './training-exercise-styles.js';

export const TrainingExercise = ({title, text}) => {
  return (
    <div>
      <Box>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Box>    
    </div>
  )
}