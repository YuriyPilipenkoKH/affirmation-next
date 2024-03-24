"use client"

import React, { ReactNode, useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({children} : {children:ReactNode}) {
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null)
    const [reRender, setReRender] = useState(false)

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      userId, 
      setUserId, 
      reRender, 
      setReRender 
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
