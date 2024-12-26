import TopicTypes from '@/models/topicTypes'
import React from 'react'
import { BtnWrap, CardWrap } from './TopicCard.styled'
import ConfirmModal from '../Modals/ConfirmModal'
import EditTopic from '../Modals/EditTopic'
import capitalize from '@/lib/capitalize'
import { Popover } from 'antd'
interface TopicCardProps {
      topic:TopicTypes
    }

  const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {

    const popoverTitle:string = "About " + capitalize(topic?.title)

  return (
    <CardWrap>
      <div className='card_title bg-gradient-to-r from-emerald-950 to-emerald-700'>
        { capitalize(topic?.title) }
        <BtnWrap className='absolute'>
          <EditTopic
          topic={topic} />
          <ConfirmModal
          topic={topic} />
        </BtnWrap>
      </div>
      <Popover 
      className='Card_popover'
      defaultOpen={true}
        content={topic?.content}
         title={popoverTitle} >
      <div 
        className='card_content' 
        style={{ whiteSpace: 'pre', fontFamily: 'monospace' , overflow: 'hidden'}}
        >
        { topic?.content }
      </div>
      </Popover>
    </CardWrap>
  )
}

export default TopicCard
