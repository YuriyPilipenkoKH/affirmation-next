"use client"

import Logo from '../Logo'
import { UserButton } from '@clerk/nextjs'
import { NavWrap } from './NavBar.styled'
import UserContext, { UserContextType } from '@/context/UserContext'
import { useContext } from 'react'
import CreateNewTopic from '../Modals/CreateNewTopic'

import SearchingForm from '../Forms/SearchingForm'


function NavBar()  {
    const { userId } = useContext(UserContext as React.Context<UserContextType>);

  return (
    <NavWrap>
        <div className='flex gap-5'>
            <Logo/>
            <SearchingForm/>
        </div>
        <div className='flex gap-5'>
            {userId && (
                <CreateNewTopic/>
            )}
            <UserButton afterSignOutUrl="/"/>
        </div>
      
    </NavWrap>
  )
}

export default NavBar
