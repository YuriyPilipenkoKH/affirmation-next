import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href='/'>
      {/* <h1 className='text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>
        Affirmation</h1> */}
        <Image src='/fav-coyote.png' alt='icon' width={40} height={40}/>
    </Link>
  )
}

export default Logo