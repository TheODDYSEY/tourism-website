'use client';

import { motion } from 'framer-motion';
import { 
  TrophyIcon, 
  HeartIcon, 
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const sustainabilityMetrics = [
  {
    icon: TrophyIcon,
    title: 'Carbon Footprint Tracking',
    value: '30%',
    description: 'Average reduction in carbon emissions through eco-friendly options',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: UserGroupIcon,
    title: 'Community Impact',
    value: '85%',
    description: 'Of tourism revenue directly benefits local communities',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: GlobeAltIcon,
    title: 'Conservation Projects',
    value: '$50K',
    description: 'Donated to wildlife and environment conservation in Year 1',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: HeartIcon,
    title: 'Eco-Friendly Stays',
    value: '1,000+',
    description: 'Sustainable accommodations and eco-lodges promoted',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
];

const communityProjects = [
  {
    title: 'Maasai Cultural Center',
    description: 'Supporting traditional craft making and cultural preservation in Maasai Mara.',
    image: '🏛️',
    impact: '150 families benefited',
    location: 'Maasai Mara'
  },
  {
    title: 'Coastal Conservation',
    description: 'Marine turtle protection and coral reef restoration along the Kenyan coast.',
    image: '🐢',
    impact: '5 turtle nests protected',
    location: 'Diani & Watamu'
  },
  {
    title: 'Mountain Reforestation',
    description: 'Tree planting initiatives to combat deforestation around Mount Kenya.',
    image: '🌳',
    impact: '2,000 trees planted',
    location: 'Mount Kenya Region'
  },
  {
    title: 'Women Artisan Groups',
    description: 'Empowering women through traditional beadwork and textile production.',
    image: '👩‍🎨',
    impact: '75 women trained',
    location: 'Samburu County'
  }
];

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            🌱 Sustainable Tourism
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Empowering Locals &<br />Sustaining Kenya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment goes beyond tourism. We&apos;re building a sustainable ecosystem that 
            protects Kenya&apos;s natural beauty while empowering local communities to thrive.
          </p>
        </motion.div>

        {/* Sustainability Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {sustainabilityMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {metric.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Community Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Community Impact Projects
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real projects making a difference in local communities across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h4>
                      <span className="text-xs bg-kenya-green text-white px-2 py-1 rounded-full">
                        {project.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-small text-green-500">
                        Impact: {project.impact}
                      </span>
                      <button className="text-sm text-red-300 hover:text-red-500 font-semibold">
                        Learn more →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conservation Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-kenya-green to-kenya-red rounded-2xl p-8 lg:p-12 text-black text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Our 2025 Conservation Goals</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">$100K</div>
              <div className="text-lg opacity-90">Conservation Donations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000</div>
              <div className="text-lg opacity-90">Eco-Friendly Bookings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-lg opacity-90">Carbon Reduction</div>
            </div>
          </div>

          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            Join us in setting a new standard for sustainable tourism in Kenya. 
            Every booking contributes to conservation efforts and community development.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              backgroundColor: [
                "#ffffff",
                "#FFD100", 
                "#ffffff",
                "#007A33",
                "#ffffff"
              ],
              color: [
                "#007A33",
                "#000000",
                "#007A33", 
                "#ffffff",
                "#007A33"
              ],
              boxShadow: [
                "0 0 0 0 rgba(255, 209, 0, 0)",
                "0 0 0 8px rgba(255, 209, 0, 0.3)",
                "0 0 0 16px rgba(255, 209, 0, 0)",
                "0 0 0 8px rgba(0, 122, 51, 0.3)",
                "0 0 0 0 rgba(0, 122, 51, 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative px-8 py-4 rounded-full font-bold text-lg border-2 border-white shadow-lg transform transition-all duration-200 overflow-hidden"
          >
            <motion.span
              animate={{
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              ✨ Join Our Mission ✨
            </motion.span>
            
            {/* Animated background gradient */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)",
                  "linear-gradient(45deg, transparent, rgba(255,209,0,0.3), transparent)",
                  "linear-gradient(45deg, transparent, rgba(0,122,51,0.3), transparent)"
                ],
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 w-full h-full"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
