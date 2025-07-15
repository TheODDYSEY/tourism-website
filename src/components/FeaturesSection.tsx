'use client';

import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  EyeIcon, 
  CubeIcon, 
  ChatBubbleLeftRightIcon,
  HeartIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CpuChipIcon,
    title: 'AI Itinerary Planning',
    description: 'Emotion-aware AI crafts personalized itineraries based on your preferences and real-time data, with instant chatbot support for seamless planning.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    benefits: ['Personalized recommendations', 'Real-time updates', '24/7 AI support']
  },
  {
    icon: EyeIcon,
    title: 'AR Cultural Tours',
    description: 'Experience landmarks like Fort Jesus with interactive AR overlays and engage in gamified quests to discover Kenya&apos;s rich heritage.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    benefits: ['Interactive experiences', 'Gamified learning', 'Cultural immersion']
  },
  {
    icon: CubeIcon,
    title: 'VR Pre-Trip Immersion',
    description: 'Virtual previews of destinations like Amboseli enhance booking confidence and allow you to customize your adventure before arrival.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    benefits: ['Virtual previews', 'Booking confidence', 'Customizable experiences']
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Digital Concierge',
    description: '24/7 AI support for bookings, transport, and emergencies, partnering with local businesses for seamless reservations.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    benefits: ['24/7 availability', 'Local partnerships', 'Emergency support']
  },
  {
    icon: HeartIcon,
    title: 'Community Empowerment',
    description: 'Co-creating content with local communities, ensuring profit-sharing and authentic cultural showcases that benefit everyone.',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    benefits: ['Community partnerships', 'Profit sharing', 'Authentic experiences']
  },
  {
    icon: GlobeAltIcon,
    title: 'Sustainability Focus',
    description: 'Promoting eco-friendly lodges and carbon footprint tracking for responsible tourism that protects Kenya&apos;s natural beauty.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    benefits: ['Eco-friendly options', 'Carbon tracking', 'Conservation support']
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-500 text-black px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Innovative Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Unforgettable Trip Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience Kenya like never before with our cutting-edge platform that seamlessly 
            blends AI, AR, and VR technologies with authentic cultural immersion.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-8 h-8 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-kenya-green transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (benefitIndex * 0.05), duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-kenya-green rounded-full mr-2">* </div>
                      {benefit}
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (index * 0.1) + 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-6"
                >
                  <button className="text-pink-600 font-semibold text-sm hover:text-kenya-green/80 transition-colors duration-200 group-hover:underline">
                    Learn more →
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-kenya-green to-kenya-red p-8 rounded-2xl text-black">
            <h3 className="text-2xl font-bold mb-4">Special Feature: 2G Integration</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We&apos;ve considered 2G connectivity and will integrate USSD with AI to streamline 
              the tourism experience for travelers in areas with limited internet access.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
