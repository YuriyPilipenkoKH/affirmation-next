import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href='/'>
        <Image 
          src='/fav-coyote.png' 
          alt='icon' 
          width={40} 
          height={40}/>
    </Link>
  )
}

export default Logo