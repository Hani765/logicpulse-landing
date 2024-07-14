"use client"
import { About } from '@/components/About'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Navbar } from '@/components/Navbar'
import { ScrollToTop } from '@/components/ScrollToTop'
import Sponsors from '@/components/Sponsors'
import { Team } from '@/components/Team'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Team />
      <FAQ />
      <Footer />
      <ScrollToTop /></>
  )
}
