import UserContext, { UserContextType } from '@/context/UserContext';
import TopicTypes from '@/models/topicTypes';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import TopicCard from '../TopicCard/TopicCard';
import { ListMessage, ListWrap } from './TopicsList.styled';
import Image from 'next/image';

function TopicsList() {
    const [list, setList] = useState<TopicTypes[]>([]);
    const [loading, setLoading] = useState(false);
    const { 
          empty,
          query,
          reRender, 
          userId,  
          setEmpty,
          affirmations, 
          setAffirmations
      } = useContext(UserContext as React.Context<UserContextType>);
    console.log(list)

    const filteredTopics = list.filter(item => 
      item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query))

      if (list?.length === 0) {
        setEmpty(true)
      } 
      else {
        setEmpty(false)
      }

    const grabUsersTopics = async (id: string | null ) => {
          setLoading(true);
        try {

          // const response = await axios.get("/api/topics/grab");
          const response = await axios.get(`/api/topics/get/${id}`)
          .then(response => {
            
            if (response.data && response.data.topics) {
              setList(response.data.topics);
              setAffirmations(response.data.topics);
            }
            // setReRender(!reRender)
          })

        } catch (error) {
          console.log("Getting failed", error);
        }
        finally{
          setLoading(false);
        }
      };
    
      useEffect(() => {
        if (userId) { // Check if userId is not null
            grabUsersTopics(userId);
        }
    }, [reRender, userId]);

     
      if (filteredTopics?.length === 0  && userId) {
        return(
          <ListWrap >
          {loading
          ?  (
              <ListMessage className=''>
                  Loading ....
               </ListMessage>
            )
          : (!empty)  
          ?   (
            <ListMessage className=''>
            Notthing was found
              <Image src='/Wile-Coyote-Shocking.png' alt='icon' width={200} height={200}/>
            </ListMessage>
            )
          :  (
            <ListMessage className=''>
            No topics here
            <Image src='/wile-coyote-angry.png' alt='icon' width={200} height={200}/>
            </ListMessage>
           )
        }
      </ListWrap>
        )
      }else

  return (
    < >
      {userId  &&
      (
        <ListWrap>
          {filteredTopics.map((topic) => (
            <TopicCard
            key={topic?._id}
            topic={topic}
            />
                ))
                }
        </ListWrap>
      )
    }
    </>
  )
}

export default TopicsList
