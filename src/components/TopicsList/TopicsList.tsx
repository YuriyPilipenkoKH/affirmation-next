import UserContext, { UserContextType } from '@/context/UserContext';
import TopicTypes from '@/models/topicTypes';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import TopicCard from '../TopicCard/TopicCard';
import { ListWrap } from './TopicsList.styled';

function TopicsList() {
    const [list, setList] = useState<TopicTypes[]>([]);
    const { query, reRender } = useContext(UserContext as React.Context<UserContextType>);
    console.log(list)
    console.log(query)

    const grabUsersTopics = async () => {
        try {
          const response = await axios.get("/api/topics/grab");
          if (response.data && response.data.topics) {
            setList(response.data.topics);
          }
        } catch (error) {
          console.log("Grabbing failed", error);
        }
      };
    
      useEffect(() => {
        grabUsersTopics();
      }, [reRender]);

  return (
    <ListWrap >
        {list.map((topic) => (
            <TopicCard 
            key={topic?._id}
            topic={topic}
            />
        ))
        }

    </ListWrap>
  )
}

export default TopicsList
