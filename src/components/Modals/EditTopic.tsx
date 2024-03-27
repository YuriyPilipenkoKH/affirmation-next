import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, Tooltip } from 'antd';
import Btn from '../Button/Button';
import UserContext, { UserContextType } from '@/context/UserContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTopicSchema, createTopicSchemaType } from '@/models/createTopic';
import axios from 'axios';
import toast from 'react-hot-toast';
import {  ErrorWrap } from './Modals.styled';
import { CreateNewForm } from '../Forms/Forms.styled';
import TopicTypes from '@/models/topicTypes';
import { GrEdit } from 'react-icons/gr';

interface EditTopicProps {
    topic:TopicTypes
}


const EditTopic: React.FC<EditTopicProps> = ({topic}) => {
 const { userId, setReRender, reRender} = useContext(UserContext as React.Context<UserContextType>);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [logError, setLogError] = useState('')
  const {
    register, 
    handleSubmit,
    formState,
    watch,
    reset
   } = useForm<createTopicSchemaType>({
    defaultValues: {
        title: topic.title,
        content: topic.content,
       
    },
    mode:'all',
    resolver: zodResolver(createTopicSchema),
})
const {
    errors,
    isDirty,
    isValid ,
    isSubmitting,
    isLoading,
} = formState

const onSubmit = async (data: createTopicSchemaType) => {
    console.log('data', data)

    try {

        const response = await axios.patch("/api/topics/edit", {
            content: data.content,
            title: data.title,
            // userId,
            id: topic._id ,
        })
        .then(response => {
            const updatedData = response.data.updatedTopic;
            reset({
                title: updatedData?.title,
                content: updatedData?.content,
            })

          toast.success(`Another Topic edited`)
          setReRender(!reRender)
          handleCancel();
         
        })
    }
     catch (error:any) {
        console.log("Editing failed",error)
        setLogError(error?.response.data.error)
        toast.error(error.message)
     }

}
const watchedTitle = watch('title')
useEffect(() => {
    setLogError('')
}, [watchedTitle])


  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
    <Tooltip 
      title={"Edit"}
      color={'#f4e91fdd'} >  
        <button  
          className='CreateNewBtn'
          onClick={showModal}>
          <GrEdit />
        </button>
      </Tooltip>
      <Modal
        className='topic-modal '
        open={open}
        title={(isLoading || isSubmitting) 
          ? "Processing" 
          : "Edit topik"}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[ ]}
      >
        <CreateNewForm
          onSubmit={handleSubmit(onSubmit)}
          className='topic-modal-form'
          autoComplete="off"
          noValidate>
                <label className=''>Title
                    <input 
                    {...register('title')}
                     type="text"
                     className='title_field'
                     placeholder="Topic name"
                     />
                </label>
                <label >Content
                    <textarea 
                     {...register('content')}
                    className="text_field resize-none w-full "
                    rows={7}
                    placeholder="Topic conternt here"
                    />
                </label>
           <Btn
          className='topic-submit'
          disabled={isSubmitting || !isDirty || !isValid || !!logError}
          type="submit"  
          >
           {(isSubmitting || !isDirty || !isValid || !!logError) 
           ? "Edit"
           : "Apply changes"} 
          
           </Btn>
              {( errors?.title || errors?.content )&& (
              <ErrorWrap className="autherror">
                {errors.title && <div>{errors.title.message}</div>}
                {!errors.title && errors.content && <div>{errors.content.message}</div>}
              </ErrorWrap>
            )}
            {logError && <ErrorWrap className="autherror">{logError}</ErrorWrap>}
          </CreateNewForm>

      </Modal>
    </>
  );
};



export default EditTopic;