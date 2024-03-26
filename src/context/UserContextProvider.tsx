"use client"

import React, { ReactNode, useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({children} : {children:ReactNode}) {
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState<string | null>(null)
    const [reRender, setReRender] = useState(false)
    const [query, setQuery] = useState('')
    const [empty, setEmpty] = useState(true)
    const [affirmations, setAffirmations] = useState(null)

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      userId, 
      setUserId, 
      reRender, 
      setReRender ,
      query,
      setQuery,
      empty,
      setEmpty,
      affirmations,
      setAffirmations
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
