'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="gradient-text">Accord Housing & Care</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We provide safe, stable, and nurturing home environments specifically
              designed for children aged 8 to 18 who need specialized support. Our
              approach focuses on empowering young people to foster resilience,
              well-being, and the development of their full potential.
            </p>

            <div className="space-y-4">
              {[
                'Bright and spacious living arrangements',
                'Expansive outdoor play areas for recreation',
                'Therapeutic approach to emotional support',
                'Community integration and engagement',
                'Round-the-clock professional care',
                'Evidence-based child development practices',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4">
                <Award className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Our Values
                  </h4>
                  <p className="text-gray-600">
                    Empowerment, Transparency, Trust, and Personal Growth
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-80 bg-gradient-to-br from-blue-200 via-green-200 to-blue-100 rounded-xl shadow-xl flex items-center justify-center"
            >
              <div className="text-7xl">👨‍👩‍👧‍👦</div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '50+', label: 'Children Cared For' },
                { number: '100%', label: 'Qualified Staff' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
