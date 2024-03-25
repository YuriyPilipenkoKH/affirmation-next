import TopicTypes from '@/models/topicTypes'
import React from 'react'
import { BtnWrap, CardWrap } from './TopicCard.styled'
import ConfirmModal from '../Modals/ConfirmModal'
import EditTopic from '../Modals/EditTopic'
interface TopicCardProps {
      topic:TopicTypes
    }

  const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {

  return (
    <CardWrap>
      <div className='card_title bg-gradient-to-r from-emerald-950 to-emerald-700'>
        { topic?.title }
        <BtnWrap className='absolute'>
          <EditTopic
          topic={topic} />
          <ConfirmModal
          topic={topic} />
        </BtnWrap>
      </div>
      <div className='card_content'>
        { topic?.content }
      </div>
    </CardWrap>
  )
}

export default TopicCard
