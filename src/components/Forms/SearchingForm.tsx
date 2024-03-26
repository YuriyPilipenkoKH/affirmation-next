import { searchSchema, searchSchemaType } from '@/models/searchSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { BiSearchAlt } from "react-icons/bi";
import { StyledSearchingForm } from './Forms.styled';
import { IoCloseCircleOutline } from "react-icons/io5";
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
        isValid ,
    } = formState
    const onSubmit = async (data: searchSchemaType) => {
        console.log('data', data)
    }

  //   useEffect(() => {
  //     const handleClickOutside = (event: MouseEvent) => {
       
   
  //         if (formRef.current && !formRef.current.contains(event.currentTarget as Node)) {
  //             // Clicked outside the form, so close it
  //             setOpen(false);
  //         }
  //     };

  //     const handleEscKey = (event: KeyboardEvent) => {
  //         if (event.key === 'Escape') {
  //             // Pressed ESC key, so close the form
  //             setOpen(false);
  //         }
  //     };

  //     // Add event listeners when the form is open
  //     if (open) {
  //         document.addEventListener('mousedown', handleClickOutside);
  //         document.addEventListener('keydown', handleEscKey);
  //     }

  //     // Remove event listeners when the component is unmounted
  //     return () => {
  //         document.removeEventListener('mousedown', handleClickOutside);
  //         document.removeEventListener('keydown', handleEscKey);
  //     };
  // }, [open]);

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
