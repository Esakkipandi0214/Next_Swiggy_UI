import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h2 className=' text-black'>About</h2>
      <Link href="/"><h3 className=' text-black'>Home</h3></Link>
      <p className=' text-black'>This is the About page.</p>
    </div>
  )
}

export default page