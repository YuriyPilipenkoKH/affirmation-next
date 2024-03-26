"use client"

import Logo from '../Logo'
import { UserButton } from '@clerk/nextjs'
import { NavWrap } from './NavBar.styled'
import UserContext, { UserContextType } from '@/context/UserContext'
import { useContext } from 'react'
import CreateNewTopic from '../Modals/CreateNewTopic'
import { LiaSignInAltSolid } from "react-icons/lia";
import SearchingForm from '../Forms/SearchingForm'
import Link from 'next/link'


function NavBar()  {
    const { userId, empty } = useContext(UserContext as React.Context<UserContextType>);

  return (
    <NavWrap>
        <div className='flex gap-5'>
            <Logo/>
            <SearchingForm/>
        </div>
        <div className='flex gap-5'>
        {userId && empty &&(
                <CreateNewTopic/>
            )}
            <UserButton afterSignOutUrl="/"/>
        {!userId && (
            <Link href='/sign-in'>
            <LiaSignInAltSolid size={30} className='text-slate-100 hover:text-yellow-500' />
            </Link>
            )}
        </div>
      
    </NavWrap>
  )
}

export default NavBar
