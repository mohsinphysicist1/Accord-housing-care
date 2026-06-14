'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Social Worker',
      text: 'Accord has been instrumental in transforming the lives of children in my care. Their compassionate approach and professional staff create a safe environment where children truly thrive.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Parent',
      text: 'We are grateful for the exceptional care and support our child receives at Accord. The team goes above and beyond to ensure every child feels valued and supported.',
      rating: 5,
    },
    {
      name: 'Emma Roberts',
      role: 'Referral Officer',
      text: 'Working with Accord Housing & Care has been a pleasure. Their dedication to child welfare and transparent communication makes them stand out in the industry.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
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
            What People Say About <span className="gradient-text">Accord</span>
          </h2>
          <p className="text-xl text-gray-600">
            Hear from families, social workers, and professionals
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
