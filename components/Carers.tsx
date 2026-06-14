'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Briefcase, Heart } from 'lucide-react'

export default function Carers() {
  const carers = [
    {
      icon: Heart,
      title: 'Compassionate Team Members',
      description: 'Our staff are trained, passionate, and dedicated to providing the highest quality care.',
    },
    {
      icon: Briefcase,
      title: 'Professional Development',
      description: 'Continuous training and development opportunities to enhance care quality.',
    },
    {
      icon: Users,
      title: 'Team Support Network',
      description: 'Strong team culture with peer support and professional supervision.',
    },
  ]

  return (
    <section id="carers" className="py-20 bg-white">
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
            Our <span className="gradient-text">Dedicated Carers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A team of qualified, compassionate professionals committed to making
            a positive difference in every child's life
          </p>
        </motion.div>

        {/* Carers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {carers.map((carer, idx) => {
            const Icon = carer.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <motion.div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {carer.title}
                </h3>
                <p className="text-gray-600">{carer.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Carers Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-green-50 p-12 rounded-2xl border-2 border-blue-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Our Carers?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '✓ Fully qualified and background checked',
              '✓ Ongoing professional training',
              '✓ Child safeguarding specialists',
              '✓ Therapeutic care trained',
              '✓ Emergency response capability',
              '✓ Community integrated approach',
            ].map((item, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="text-gray-700 font-medium"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
