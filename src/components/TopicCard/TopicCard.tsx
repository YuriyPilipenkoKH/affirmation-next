import TopicTypes from '@/models/topicTypes'
import React from 'react'
import { CardWrap } from './TopicCard.styled'

interface TopicCardProps {
      topic:TopicTypes
    }


  const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {

  return (
    <CardWrap>
      <div className='card_title'>
        { topic?.title }
      </div>
      <div className='card_content'>
        { topic?.content }
      </div>
    </CardWrap>
  )
}

export default TopicCard
