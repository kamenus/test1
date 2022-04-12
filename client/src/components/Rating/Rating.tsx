import React from 'react'
import {
  RatingContainer, RatingLayout,
  RatingResult, FeedbackCountContainer
} from './Rating.styles'

interface IRatingProps {
  rating: number;
  feedbackCount: number
}

function Rating ({ rating, feedbackCount }: IRatingProps) {
  return (
    <RatingContainer>
      <RatingLayout  >
        <RatingResult rating={rating} />
      </RatingLayout>
      <FeedbackCountContainer>
        ({ feedbackCount })
      </FeedbackCountContainer>
    </RatingContainer>
  )
}

export default Rating
