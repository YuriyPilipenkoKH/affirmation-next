import React, { useContext, useState } from 'react';
import { Modal, Tooltip } from 'antd';
import { TfiTrash } from 'react-icons/tfi';
import TopicTypes from '@/models/topicTypes';
import axios from 'axios';
import toast from 'react-hot-toast';
import capitalize from '@/lib/capitalize';
import UserContext, { UserContextType } from '@/context/UserContext';
import { Btn, BtnDelete } from '../Button/Button';

interface ConfirmModalProps {
    topic:TopicTypes
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({topic}) => {
 const {  setReRender, reRender} = useContext(UserContext as React.Context<UserContextType>);
 const [loading, setLoading] = useState(false);
 const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    removeTopic(topic?._id)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
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
    <Tooltip
      title={"Delete"} 
      color={'#f43f5e'} 
      placement="top">
      <button 
        onClick={showModal}>
          <TfiTrash /> 
      </button>
    </Tooltip>
    <Modal 
      className='ConfirmModal topic-modal removal_modal'
      title={modalTitle} 
      open={open}
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={[
        <Btn
          key="back" 
          onClick={handleCancel}>
          Cancel
        </Btn>,
        <BtnDelete
          key="submit" 
          onClick={handleOk}>
          Delete
        </BtnDelete>,
      ]}
      >
        <p>there will be no return...</p>
    </Modal>
  </>
  );
};

export default ConfirmModal;