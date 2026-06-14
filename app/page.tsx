'use client'

import React from 'react'
import { Heart, Shield, Users, Smile, ArrowRight, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Carers from '@/components/Carers'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Carers />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
