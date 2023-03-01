import React from 'react'
import EngineeringSystems from '../components/HomeComponents/EngineeringSystems'
import Slider from '../components/HomeComponents/Slider'
import TopScrollButton from '../utils/TopScrollButton'

export default function Home() {
  return (
    <>
      <Slider />
      <EngineeringSystems />
      <TopScrollButton />
    </>
  )
}
