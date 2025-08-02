import React from 'react'
import Hero from '../components/Hero'
import LatestCoollection from '../components/LatestCoollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const home = () => {
  return (
    <div>
      <Hero />
      <LatestCoollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default home
