import React from 'react'
import EngineeringSystems from '../components/HomeComponents/EngineeringSystems'
import Slider from '../components/HomeComponents/Slider'
import WhyUs from '../components/HomeComponents/WhyUs'
import TopScrollButton from '../utils/TopScrollButton'

export default function Home() {
  return (
    <>
      <TopScrollButton />
      <Slider />
      <EngineeringSystems />
      <WhyUs />

    </>
  )
}
