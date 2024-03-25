import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import { TfiTrash } from 'react-icons/tfi';
import TopicTypes from '@/models/topicTypes';
import axios from 'axios';
import toast from 'react-hot-toast';
import capitalize from '@/lib/capitalize';
import UserContext, { UserContextType } from '@/context/UserContext';

interface ConfirmModalProps {
    topic:TopicTypes
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({topic}) => {
 const {  setReRender, reRender} = useContext(UserContext as React.Context<UserContextType>);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    removeTopic(topic?._id)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const removeTopic = async (id:string) => {
    try {
        const response = await axios.delete(`/api/topics/remove/${id}`)
        .then(response => {

          toast.success(`Topic ${capitalize(topic?.title)} deleted`)
          setReRender(!reRender)
        })
    }
     catch (error:any) {
        console.log("Trashing failed",error)
        toast.error(error.message)
     }
    
  }
  const modalTitle = `Are you sure deleting ${topic?.title} ?`

  return (
    <>

      <button onClick={showModal}>
      <TfiTrash /> 
      </button>
      <Modal className='ConfirmModal'
        title={modalTitle} 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
            <p>there will be no return...</p>

      </Modal>
    </>
  );
};

export default ConfirmModal;