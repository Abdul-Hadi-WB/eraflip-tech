import Home from './Home'
import React from 'react'

// Static meta title and description
export const metadata = {
  title: 'Eraflip Tech',
  description: 'This is a static meta description for my website homepage. Explore our services and features.',
}

const page = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default page
