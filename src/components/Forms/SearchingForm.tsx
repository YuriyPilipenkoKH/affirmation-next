import { searchSchema, searchSchemaType } from '@/models/searchSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext,  useState } from 'react'
import { useForm } from 'react-hook-form';
import { BiSearchAlt } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { StyledSearchingForm } from './Forms.styled';
import UserContext, { UserContextType } from '@/context/UserContext';

function SearchingForm() {
  const {  userId, setQuery } = useContext(UserContext as React.Context<UserContextType>);
    const [open, setOpen] = useState(false);
    // const formRef  = useRef<HTMLDivElement>(null); // Reference to the form div element
    const {
        register, 
        handleSubmit,
        formState,
        reset
       } = useForm<searchSchemaType>({
        defaultValues: {
            query: '',
       },
        mode:'all',
        resolver: zodResolver(searchSchema),
    })
    const {
        errors,
        isDirty,
      } = formState
    const onSubmit = async (data: searchSchemaType) => {
        console.log('data', data)
    }



  const cleaner =() => {
    reset()
    setQuery('')
  }
  const shut =() => {
    reset()
    setQuery('')
    setOpen(false)
  }


  return (
    <>
      { !open && userId &&  (      
        <button 
        className='search_icon_btn'
        onClick={() => setOpen(true)}
        type='button'>
           <BiSearchAlt size={25} className='fill-slate-50'/>
        </button>
      )}
       { open &&  (    
        <StyledSearchingForm
        onSubmit={handleSubmit(onSubmit)}
        className='search-form'
        autoComplete="off"
        noValidate>
            <label >
                <input
                 {...register('query', { onChange: (e) => setQuery(e.target.value) })} // Register onChange event
                type="text" />
            </label>
            <div className='search_btn_wrap absolute'>
              {isDirty && (
              <button 
              onClick={cleaner}
              type='button'>
                <IoCloseCircleOutline size={25} className='text-violet-950'/>
              </button>
              )}
              <button type='submit'>
                <BiSearchAlt size={25} />
              </button>
            </div>
            <button 
            onClick={shut}
            className='shut'>

            </button>
        </StyledSearchingForm>
       )}
    </>
  )
}

export default SearchingForm
