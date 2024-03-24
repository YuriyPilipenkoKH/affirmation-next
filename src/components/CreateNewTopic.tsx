import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import Btn from './Button/Button';
import UserContext, { UserContextType } from '@/context/UserContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTopicSchema, createTopicSchemaType } from '@/models/createTopic';
import axios from 'axios';
import toast from 'react-hot-toast';


const CreateNewTopik: React.FC = () => {
    const { userId, setReRender, reRender} = useContext(UserContext as React.Context<UserContextType>);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [logError, setLogError] = useState('')
  const {
    register, 
    handleSubmit,
    formState,
    reset
   } = useForm<createTopicSchemaType>({
    defaultValues: {
        title: '',
        content: '',
       
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

        const response = await axios.post("/api/topics/add", {
            content: data.content,
            title: data.title,
            userId,
        })
        .then(response => {
          toast.success(`Another Topic created`)
          reset()
          setReRender(!reRender)
          handleCancel();
         
        })
    }
     catch (error:any) {
        console.log("Creation failed",error)
        setLogError(error?.response.data.error)
        toast.error(error.message)
     }

}


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
      <Btn  onClick={showModal}>
        New
      </Btn>
      <Modal
        open={open}
        title="Add new topik"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[ ]}
      >
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className='modal-form'
            autoComplete="off"
            noValidate>
                <label className='flex flex-col gap-2 h-[60px]'>Title
                    <input 
                    {...register('title')}
                     type="text"
                     className='expiry'
                     />
                </label>
                <label >Content
                    <textarea 
                     {...register('content')}
                    className="text_field resize-none w-full "
                    rows={5}
                    placeholder="Task conternt here"
                    />
                </label>
          <button 
          className='authbtn task-create'
          disabled={isSubmitting || !isDirty || !isValid}
          type="submit"  
          >
           Create
           </button>
           {( errors?.title || errors?.content )&& (
              <div className="autherror">
                {errors.title && <div>{errors.title.message}</div>}
                {!errors.title && errors.content && <div>{errors.content.message}</div>}
              </div>
            )}
            {logError && <div className="autherror">{logError}</div>}
          </form>

      </Modal>
    </>
  );
};



export default CreateNewTopik;