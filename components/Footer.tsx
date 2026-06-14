'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">Accord</span>
            </div>
            <p className="text-gray-400">
              Providing safe, nurturing residential care for children aged 8-18.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Residential Care',
                'Therapeutic Care',
                'Community Engagement',
                'Support Services',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-green-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>+44 (0) 1234 567890</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-green-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>info@accordhousing.co.uk</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Accord Housing & Care. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
