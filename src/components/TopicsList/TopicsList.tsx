import UserContext, { UserContextType } from '@/context/UserContext';
import TopicTypes from '@/models/topicTypes';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import TopicCard from '../TopicCard/TopicCard';
import { ListWrap } from './TopicsList.styled';

function TopicsList() {
    const [list, setList] = useState<TopicTypes[]>([]);
    const { query, reRender, userId, } = useContext(UserContext as React.Context<UserContextType>);
    console.log(list)

    const filteredTopics = list.filter(item => 
      item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query))

    const grabUsersTopics = async (id: string | null ) => {
        try {
          // const response = await axios.get("/api/topics/grab");
          const response = await axios.get(`/api/topics/get/${id}`);


          if (response.data && response.data.topics) {
            setList(response.data.topics);
          }
        } catch (error) {
          console.log("Getting failed", error);
        }
      };
    
      useEffect(() => {
        if (userId) { // Check if userId is not null
            grabUsersTopics(userId);
        }
    }, [reRender, userId]);

  return (
    <ListWrap >
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

export default TopicsList
