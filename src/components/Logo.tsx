import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href='/'>
        <Image 
          src='https://res.cloudinary.com/dwdkw1a4j/image/upload/v1711559726/affirmation/coyote/tbyxjytkwoqa8bpwdmgt.png' 
          alt='icon' 
          width={40} 
          height={40}/>
    </Link>
  )
}

export default Logo