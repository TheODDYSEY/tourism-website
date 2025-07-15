'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { motion } from 'framer-motion';

interface Destination {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  image: string;
  category: 'safari' | 'beach' | 'mountain' | 'culture' | 'adventure';
  highlights: string[];
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Maasai Mara National Reserve',
    description: 'World-famous for the Great Migration and incredible wildlife viewing.',
    lat: -1.5060,
    lng: 35.1432,
    image: '/api/placeholder/400/300',
    category: 'safari',
    highlights: ['Great Migration', 'Big Five', 'Maasai Culture', 'Hot Air Balloons']
  },
  {
    id: '2',
    name: 'Mount Kenya National Park',
    description: 'Africa\'s second-highest peak with diverse ecosystems and climbing routes.',
    lat: -0.1521,
    lng: 37.3084,
    image: '/api/placeholder/400/300',
    category: 'mountain',
    highlights: ['Mountain Climbing', 'Unique Flora', 'Rock Climbing', 'Pristine Lakes']
  },
  {
    id: '3',
    name: 'Diani Beach',
    description: 'Pristine white sand beaches with crystal clear waters and coral reefs.',
    lat: -4.3167,
    lng: 39.5833,
    image: '/api/placeholder/400/300',
    category: 'beach',
    highlights: ['White Sand Beaches', 'Coral Reefs', 'Water Sports', 'Luxury Resorts']
  },
  {
    id: '4',
    name: 'Amboseli National Park',
    description: 'Spectacular views of Mount Kilimanjaro and large elephant herds.',
    lat: -2.6527,
    lng: 37.2606,
    image: '/api/placeholder/400/300',
    category: 'safari',
    highlights: ['Mount Kilimanjaro Views', 'Elephant Herds', 'Maasai Communities', 'Bird Watching']
  },
  {
    id: '5',
    name: 'Lamu Old Town',
    description: 'UNESCO World Heritage site showcasing Swahili architecture and culture.',
    lat: -2.2717,
    lng: 40.9020,
    image: '/api/placeholder/400/300',
    category: 'culture',
    highlights: ['Swahili Architecture', 'UNESCO Heritage', 'Traditional Dhows', 'Cultural Festivals']
  },
];

const categoryColors = {
  safari: 'text-orange-600 bg-orange-100',
  beach: 'text-blue-600 bg-blue-100',
  mountain: 'text-green-600 bg-green-100',
  culture: 'text-purple-600 bg-purple-100',
  adventure: 'text-red-600 bg-red-100',
};

export default function DestinationsMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      try {
        await loader.load();
        
        if (mapRef.current) {
          const mapInstance = new google.maps.Map(mapRef.current, {
            center: { lat: -1.2921, lng: 36.8219 }, // Nairobi center
            zoom: 6,
            styles: [
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#007A33' }, { lightness: 80 }],
              },
              {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#fdf8f0' }],
              },
            ],
          });

          setMap(mapInstance);

          // Add markers for destinations
          destinations.forEach((destination) => {
            const marker = new google.maps.Marker({
              position: { lat: destination.lat, lng: destination.lng },
              map: mapInstance,
              title: destination.name,
              icon: {
                url: `data:image/svg+xml,${encodeURIComponent(`
                  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#007A33" stroke="#fff" stroke-width="2"/>
                    <text x="20" y="25" text-anchor="middle" fill="white" font-size="16">📍</text>
                  </svg>
                `)}`,
                scaledSize: new google.maps.Size(40, 40),
              },
            });

            marker.addListener('click', () => {
              setSelectedDestination(destination);
            });
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, []);

  const filteredDestinations = activeCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeCategory);

  const categories = ['all', 'safari', 'beach', 'mountain', 'culture', 'adventure'];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-red-600 text-kenya-red px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Explore Kenya
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Discover Amazing Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From the vast savannas of Maasai Mara to the pristine beaches of the coast, 
            explore Kenya&apos;s diverse landscapes and rich cultural heritage.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-kenya-green text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div 
              ref={mapRef} 
              className="w-full h-96 lg:h-[600px] rounded-2xl shadow-lg border border-gray-200"
            />
          </motion.div>

          {/* Destinations List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setSelectedDestination(destination);
                  if (map) {
                    map.setCenter({ lat: destination.lat, lng: destination.lng });
                    map.setZoom(10);
                  }
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {destination.name}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[destination.category]}`}>
                      {destination.category}
                    </span>
                  </div>
                  <button className="text-kenya-green hover:text-kenya-green/80 transition-colors duration-200">
                    📍
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {destination.highlights.slice(0, 3).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                  {destination.highlights.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{destination.highlights.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Selected Destination Modal */}
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedDestination.name}
                </h3>
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[selectedDestination.category]} mb-4`}>
                  {selectedDestination.category}
                </span>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedDestination.description}
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedDestination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-kenya-green rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 border-2 border-black bg-green-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-900 hover:text-white transition-colors duration-200">
                  Plan Visit
                </button>
                <button className="flex-1 border-2 border-black bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-200">
                  VR Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
