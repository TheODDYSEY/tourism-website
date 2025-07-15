'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { DevicePhoneMobileIcon, CameraIcon, MapIcon, EyeIcon } from '@heroicons/react/24/outline';
import ARExperience from '@/components/ARExperience';

export default function ARTours() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);
  const [activeARTour, setActiveARTour] = useState<{id: string, title: string} | null>(null);

  const arTours = [
    {
      id: 'maasai-culture',
      title: 'Maasai Cultural Experience',
      location: 'Maasai Mara',
      duration: '45 minutes',
      difficulty: 'Easy',
      description: 'Immerse yourself in traditional Maasai culture through AR storytelling, traditional dances, and virtual interactions with community elders.',
      features: ['Traditional Dance Overlay', 'Cultural Artifacts Recognition', 'Language Translation', 'Historical Timeline'],
      image: '🏕️',
      preview: 'Experience traditional Maasai ceremonies and learn about their rich cultural heritage through interactive AR elements.'
    },
    {
      id: 'wildlife-safari',
      title: 'Virtual Wildlife Safari',
      location: 'Amboseli National Park',
      duration: '60 minutes',
      difficulty: 'Easy',
      description: 'Get up close with Kenya&apos;s Big Five through AR technology. See detailed information about animals, their behaviors, and conservation efforts.',
      features: ['Animal Behavior Analysis', '3D Animal Models', 'Conservation Stories', 'Migration Patterns'],
      image: '🦁',
      preview: 'Watch elephants, lions, and rhinos in their natural habitat with enhanced AR information overlays.'
    },
    {
      id: 'mount-kenya',
      title: 'Mount Kenya Climbing Adventure',
      location: 'Mount Kenya National Park',
      duration: '90 minutes',
      difficulty: 'Moderate',
      description: 'Experience the thrill of climbing Mount Kenya through AR simulation, complete with weather conditions and route planning.',
      features: ['Route Visualization', 'Weather Simulation', 'Equipment Guide', 'Safety Training'],
      image: '🏔️',
      preview: 'Navigate through different climbing routes and experience changing weather conditions safely.'
    },
    {
      id: 'lamu-heritage',
      title: 'Lamu Old Town Heritage Walk',
      location: 'Lamu Island',
      duration: '75 minutes',
      difficulty: 'Easy',
      description: 'Explore the UNESCO World Heritage site of Lamu Old Town with AR reconstructions of historical buildings and stories.',
      features: ['Historical Reconstructions', 'Architecture Analysis', 'Swahili Culture', 'Trade Route History'],
      image: '🏛️',
      preview: 'Walk through centuries of history with AR overlays showing how the town evolved over time.'
    },
    {
      id: 'coral-reef',
      title: 'Coral Reef Underwater Experience',
      location: 'Watamu Marine Park',
      duration: '50 minutes',
      difficulty: 'Easy',
      description: 'Dive into Kenya&apos;s marine world through AR simulation, exploring coral reefs and marine life conservation.',
      features: ['Marine Life Identification', 'Coral Health Monitoring', 'Conservation Education', 'Virtual Diving'],
      image: '🐠',
      preview: 'Explore vibrant coral reefs and learn about marine conservation efforts along the Kenyan coast.'
    },
    {
      id: 'great-rift-valley',
      title: 'Great Rift Valley Formation',
      location: 'Lake Nakuru',
      duration: '40 minutes',
      difficulty: 'Moderate',
      description: 'Witness the geological formation of the Great Rift Valley through time-lapse AR visualization and learn about its significance.',
      features: ['Geological Timeline', 'Tectonic Visualization', 'Lake Formation', 'Wildlife Evolution'],
      image: '🌋',
      preview: 'See millions of years of geological history unfold before your eyes through AR technology.'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-safari-50 via-white to-kenya-green/10">
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl lg:text-6xl font-serif font-bold text-black mb-6"
            >
              Virtual Reality{' '}
              <span className="text-kenya-green">Street View</span>{' '}
              <span className="text-orange-500">Tours</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-black max-w-3xl mx-auto mb-8 font-semibold"
            >
              Immerse yourself in Kenya&apos;s rich culture and wildlife through Google Street View 
              technology. Experience interactive virtual tours and educational content.
            </motion.p>

            {/* AR Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 max-w-2xl mx-auto border-2 border-blue-300"
            >
              <div className="flex items-center justify-center space-x-4 text-blue-900">
                <DevicePhoneMobileIcon className="w-8 h-8" />
                <div className="text-left">
                  <h3 className="font-bold">Street View Experience</h3>
                  <p className="text-sm font-medium">Powered by Google Maps - explore Kenya from your browser</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* AR Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {arTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-6xl text-center mb-4">{tour.image}</div>
                  <h3 className="text-xl font-bold text-black mb-2">{tour.title}</h3>
                  <div className="flex items-center text-sm text-pink-600 mb-3 space-x-4 font-semibold">
                    <span className="flex items-center">
                      <MapIcon className="w-4 h-4 mr-1" />
                      {tour.location}
                    </span>
                    <span>{tour.duration}</span>
                  </div>
                  <p className="text-black mb-4 text-sm leading-relaxed font-medium">{tour.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <motion.h4 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + 0.3, duration: 0.5 }}
                      className="font-bold text-orange-600 mb-4 text-lg"
                    >
                      🔮 AR Features:
                    </motion.h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.features.map((feature, featureIndex) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            delay: (index * 0.1) + 0.4 + (featureIndex * 0.1), 
                            duration: 0.4,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="bg-gradient-to-r from-kenya-green to-orange-500 text-black text-sm px-4 py-2 rounded-full font-bold shadow-lg border-2 border-black cursor-pointer"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Difficulty */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-pink-600 font-bold">Difficulty:</span>
                    <span className={`text-sm px-3 py-1 rounded-full font-bold ${
                      tour.difficulty === 'Easy' 
                        ? 'bg-green-500 text-white'
                        : 'bg-orange-500 text-white'
                    }`}>
                      {tour.difficulty}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedTour(selectedTour === tour.id ? null : tour.id)}
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2 font-bold shadow-lg"
                    >
                      <EyeIcon className="w-5 h-5" />
                      <span>{selectedTour === tour.id ? 'Hide Preview' : 'Preview Tour'}</span>
                    </button>
                    <button 
                      onClick={() => setActiveARTour({ id: tour.id, title: tour.title })}
                      className="w-full border-3 border-kenya-green bg-black text-kenya-green py-3 px-4 rounded-lg hover:bg-kenya-green hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-bold shadow-lg"
                    >
                      <CameraIcon className="w-5 h-5" />
                      <span>Start Street View Tour</span>
                    </button>
                  </div>

                  {/* Preview Content */}
                  {selectedTour === tour.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg border-2 border-orange-200"
                    >
                      <h4 className="font-bold text-pink-600 mb-2">Preview:</h4>
                      <p className="text-sm text-black font-medium">{tour.preview}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* AR Technology Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-r from-kenya-green to-kenya-red text-white rounded-xl p-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">How Street View Tours Work</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <DevicePhoneMobileIcon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">1. Choose Location</h3>
                  <p className="text-sm opacity-90">Select from our curated Kenya destinations with real Street View imagery</p>
                </div>
                <div className="text-center">
                  <MapIcon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">2. Explore Virtually</h3>
                  <p className="text-sm opacity-90">Navigate through authentic locations using Google Street View technology</p>
                </div>
                <div className="text-center">
                  <CameraIcon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">3. Learn & Discover</h3>
                  <p className="text-sm opacity-90">Enjoy immersive 360° views with cultural and educational information</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* AR Experience Modal */}
      {activeARTour && (
        <ARExperience
          tourId={activeARTour.id}
          tourTitle={activeARTour.title}
          onClose={() => setActiveARTour(null)}
        />
      )}
    </main>
  );
}
