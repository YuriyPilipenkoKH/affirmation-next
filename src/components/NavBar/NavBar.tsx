"use client"

import Logo from '../Logo'
import { UserButton } from '@clerk/nextjs'
import { NavWrap } from './NavBar.styled'
import Button from '../Button/Button'
import UserContext, { UserContextType } from '@/context/UserContext'
import { useContext } from 'react'
import CreateNewTopik from '../Modals/CreateNewTopic'


function NavBar()  {
    const { userId } = useContext(UserContext as React.Context<UserContextType>);

  return (
    <NavWrap>
        <div className='flex gap-2'>
            <Logo/>
        </div>
        <div className='flex gap-5'>
            {userId && (
                <CreateNewTopik/>
            )}
            <UserButton afterSignOutUrl="/"/>
        </div>
      
    </NavWrap>
  )
}

export default NavBar
