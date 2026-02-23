import React from 'react'
import AboutUs from './AboutUs'
// Static meta title and description
export const metadata = {
  title: 'Welcome to My Website',
  description: 'This is a static meta description for my website homepage. Explore our services and features.',
}
const page = () => {
  return (
    <div>
 <AboutUs/>
    </div>
  )
}

export default page
