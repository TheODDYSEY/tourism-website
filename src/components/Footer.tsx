'use client';

import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const footerSections = [
  {
    title: 'Explore Kenya',
    links: [
      { name: 'Destinations', href: '#destinations' },
      { name: 'Safari Tours', href: '#safari' },
      { name: 'Cultural Experiences', href: '#culture' },
      { name: 'Beach Holidays', href: '#beaches' },
      { name: 'Adventure Activities', href: '#adventure' },
    ]
  },
  {
    title: 'Plan Your Trip',
    links: [
      { name: 'AI Itinerary Planner', href: '#ai-planner' },
      { name: 'VR Previews', href: '#vr-previews' },
      { name: 'AR Tours', href: '#ar-tours' },
      { name: 'Digital Concierge', href: '#concierge' },
      { name: 'Travel Guide', href: '#guide' },
    ]
  },
  {
    title: 'Sustainability',
    links: [
      { name: 'Eco-Friendly Stays', href: '#eco-stays' },
      { name: 'Conservation Projects', href: '#conservation' },
      { name: 'Community Impact', href: '#community' },
      { name: 'Carbon Tracking', href: '#carbon' },
      { name: 'Local Partnerships', href: '#partnerships' },
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Emergency Support', href: '#emergency' },
      { name: 'Travel Insurance', href: '#insurance' },
      { name: 'Terms & Conditions', href: '#terms' },
    ]
  }
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'YouTube', href: '#', icon: '📺' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-kenya-green to-kenya-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KA</span>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold">Kenya Astra Hub</div>
                <div className="text-sm text-gray-400">Redefining Tourism</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Transform your Kenyan adventure with cutting-edge AI, AR cultural tours, 
              and immersive VR experiences. Join us in sustainable tourism that empowers 
              local communities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPinIcon className="w-4 h-4 text-kenya-green" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <PhoneIcon className="w-4 h-4 text-kenya-green" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <EnvelopeIcon className="w-4 h-4 text-kenya-green" />
                <span>hello@kenyaastra.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <GlobeAltIcon className="w-4 h-4 text-kenya-green" />
                <span>www.kenyaastra.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-kenya-green transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest travel tips, destination guides, and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-kenya-green"
              />
              <button className="bg-kenya-green hover:bg-kenya-green/90 px-6 py-2 rounded-r-full font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 mb-4 md:mb-0"
            >
              © 2025 Kenya Astra Hub. All rights reserved. Made with ❤️ for sustainable tourism.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-kenya-green rounded-full flex items-center justify-center transition-colors duration-200 group"
                  title={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
