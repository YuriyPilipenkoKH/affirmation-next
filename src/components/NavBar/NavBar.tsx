"use client"

import React from 'react'
import Logo from '../Logo'
import { UserButton } from '@clerk/nextjs'
import { NavWrap } from './NavBar.styled'
import Button from '../Button/Button'


function NavBar() {

  return (
    <NavWrap>
        <div className='flex gap-2'>
            <Logo/>
        </div>
        <div className='flex gap-5'>
            <Button>New</Button>

            <UserButton afterSignOutUrl="/"/>
        </div>
      
    </NavWrap>
  )
}

export default NavBar
