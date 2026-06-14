'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Heart,
  Shield,
  Users,
  Lightbulb,
  Home,
  Brain,
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Foster Care',
      description:
        'Safe, stable, and nurturing homes designed for children aged 8-18 who need specialized support.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Brain,
      title: 'Therapeutic Care',
      description:
        'Therapeutic approach catering to young people facing complex emotional and behavioral challenges.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description:
        'Connecting children with the wider community to promote belonging, citizenship, and mutual support.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Empowerment & Growth',
      description:
        'Building confidence and skills necessary for a successful, independent future.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Heart,
      title: 'Compassionate Support',
      description:
        'Round-the-clock care with emphasis on transparency, trust, and personal development.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Lightbulb,
      title: 'Resilience Building',
      description:
        'Foster resilience and well-being through evidence-based therapeutic practices.',
      color: 'from-yellow-500 to-yellow-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive care solutions designed to support young people's
            growth, confidence, and independence
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
