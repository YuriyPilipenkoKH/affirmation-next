"use client"

import Logo from '../Logo'
import { UserButton } from '@clerk/nextjs'
import { NavWrap } from './NavBar.styled'
import UserContext, { UserContextType } from '@/context/UserContext'
import { useContext } from 'react'
import CreateNewTopic from '../Modals/CreateNewTopic'
import { LiaSignInAltSolid } from "react-icons/lia";
import SearchingForm from '../Forms/SearchingForm'
import { useRouter } from 'next/navigation'


function NavBar()  {
    const { 
         userId,  
         affirmations, 
         empty
    } = useContext(UserContext as React.Context<UserContextType>);
    const router  = useRouter()

    const signIn = () => {
        router.push('/sign-up')
     }

  return (
    <NavWrap>
        <div className='flex gap-5'>
            <Logo/>
        {affirmations && !empty && (
            <SearchingForm/>
            )}
        </div>
        <div className='flex gap-5'>
        {userId && (
                <CreateNewTopic/>
            )}
            <UserButton afterSignOutUrl="/sign-in"/>
        {!userId && (
            <button
            onClick={signIn}
             >
            <LiaSignInAltSolid size={30} className='text-slate-100 hover:text-yellow-500' />
            </button>
            )}
        </div>
      
    </NavWrap>
  )
}

export default NavBar
