'use client';

import { motion } from 'framer-motion';
import DestinationsSection from '@/components/DestinationsSection'

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-safari-50 via-white to-kenya-green/10">
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6"
            >
              Discover{' '}
              <span className="text-kenya-green">Kenya&apos;s</span>{' '}
              <span className="text-kenya-red">Destinations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white max-w-3xl mx-auto"
            >
              From the vast savannas of Maasai Mara to the pristine beaches of the coast, 
              explore Kenya&apos;s diverse landscapes and rich cultural heritage.
            </motion.p>
          </div>
        </motion.div>
        
        <DestinationsSection />
      </div>
    </main>
  );
}
