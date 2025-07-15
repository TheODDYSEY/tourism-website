'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPinIcon, StarIcon, CameraIcon, HeartIcon } from '@heroicons/react/24/solid';
import { ClockIcon, UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const destinations = [
  {
    id: 1,
    name: 'Maasai Mara National Reserve',
    location: 'Narok County',
    description: 'Witness the Great Migration and encounter the Big Five in one of Africa\'s most famous wildlife reserves.',
    image: '🦁',
    rating: 4.9,
    reviews: 2847,
    duration: '3-7 days',
    bestTime: 'July - October',
    highlights: ['Great Migration', 'Big Five', 'Maasai Culture', 'Hot Air Balloon Safari'],
    category: 'Wildlife',
    price: 'From $450/day',
    featured: true
  },
  {
    id: 2,
    name: 'Mount Kenya National Park',
    location: 'Central Kenya',
    description: 'Challenge yourself with Africa\'s second-highest peak and explore diverse ecosystems from forests to glaciers.',
    image: '🏔️',
    rating: 4.7,
    reviews: 1532,
    duration: '4-8 days',
    bestTime: 'January - March, July - October',
    highlights: ['Mountain Climbing', 'Unique Flora', 'Glacial Lakes', 'Wildlife Viewing'],
    category: 'Adventure',
    price: 'From $320/day',
    featured: true
  },
  {
    id: 3,
    name: 'Diani Beach',
    location: 'Kwale County',
    description: 'Relax on pristine white sand beaches with crystal-clear waters and vibrant coral reefs.',
    image: '🏖️',
    rating: 4.8,
    reviews: 1876,
    duration: '2-5 days',
    bestTime: 'December - March, July - October',
    highlights: ['White Sand Beaches', 'Coral Reefs', 'Water Sports', 'Colobus Monkeys'],
    category: 'Beach',
    price: 'From $280/day',
    featured: false
  },
  {
    id: 4,
    name: 'Amboseli National Park',
    location: 'Kajiado County',
    description: 'Marvel at large elephant herds against the backdrop of Mount Kilimanjaro\'s snow-capped peaks.',
    image: '🐘',
    rating: 4.6,
    reviews: 1643,
    duration: '2-4 days',
    bestTime: 'June - October, January - February',
    highlights: ['Elephant Herds', 'Kilimanjaro Views', 'Maasai Culture', 'Bird Watching'],
    category: 'Wildlife',
    price: 'From $380/day',
    featured: true
  },
  {
    id: 5,
    name: 'Lamu Old Town',
    location: 'Lamu County',
    description: 'Step back in time in this UNESCO World Heritage site with centuries-old Swahili architecture.',
    image: '🏛️',
    rating: 4.5,
    reviews: 987,
    duration: '2-3 days',
    bestTime: 'November - March',
    highlights: ['UNESCO Heritage', 'Swahili Architecture', 'Dhow Sailing', 'Cultural Museums'],
    category: 'Culture',
    price: 'From $220/day',
    featured: false
  },
  {
    id: 6,
    name: 'Lake Nakuru National Park',
    location: 'Nakuru County',
    description: 'Witness millions of flamingos and spot both black and white rhinos in this compact park.',
    image: '🦩',
    rating: 4.4,
    reviews: 1234,
    duration: '1-2 days',
    bestTime: 'Year-round',
    highlights: ['Flamingo Flocks', 'Rhino Sanctuary', 'Bird Watching', 'Scenic Views'],
    category: 'Wildlife',
    price: 'From $200/day',
    featured: false
  },
  {
    id: 7,
    name: 'Tsavo National Parks',
    location: 'Taita-Taveta & Tana River Counties',
    description: 'Explore Kenya\'s largest national park system, famous for red elephants and diverse landscapes.',
    image: '🌍',
    rating: 4.3,
    reviews: 876,
    duration: '3-5 days',
    bestTime: 'May - October',
    highlights: ['Red Elephants', 'Diverse Landscapes', 'Mzima Springs', 'Large Game'],
    category: 'Wildlife',
    price: 'From $340/day',
    featured: false
  },
  {
    id: 8,
    name: 'Watamu Marine National Park',
    location: 'Kilifi County',
    description: 'Discover vibrant coral reefs, sea turtles, and pristine marine ecosystems along the coast.',
    image: '🐠',
    rating: 4.6,
    reviews: 1098,
    duration: '2-4 days',
    bestTime: 'October - March',
    highlights: ['Coral Reefs', 'Sea Turtles', 'Snorkeling', 'Marine Life'],
    category: 'Marine',
    price: 'From $250/day',
    featured: false
  },
  {
    id: 9,
    name: 'Hell\'s Gate National Park',
    location: 'Nakuru County',
    description: 'Experience unique landscapes with geothermal features, gorges, and opportunities for cycling and walking.',
    image: '🌋',
    rating: 4.2,
    reviews: 654,
    duration: '1 day',
    bestTime: 'Year-round',
    highlights: ['Geothermal Features', 'Cycling Safari', 'Rock Climbing', 'Gorge Walking'],
    category: 'Adventure',
    price: 'From $150/day',
    featured: false
  }
];

const categories = ['All', 'Wildlife', 'Adventure', 'Beach', 'Culture', 'Marine'];

export default function DestinationsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredDestinations = destinations.filter(destination => 
    selectedCategory === 'All' || destination.category === selectedCategory
  );

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-kenya-green text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Explore Kenya
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Iconic <span className="text-kenya-green">Destinations</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            From wildlife-rich savannas to pristine beaches and cultural heritage sites, 
            discover the diverse beauty that makes Kenya a world-class destination.
          </p>
        </motion.div>

        {/* Category Filter */}
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
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-kenya-green text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-kenya-green hover:text-white shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured <span className="text-kenya-red">Experiences</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredDestinations.filter(dest => dest.featured).map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative p-8 text-center bg-gradient-to-br from-kenya-green/10 to-kenya-red/10">
                  <div className="text-6xl mb-4">{destination.image}</div>
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => toggleFavorite(destination.id)}
                      className={`p-2 rounded-full transition-colors duration-300 ${
                        favorites.includes(destination.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <HeartIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      destination.category === 'Wildlife' ? 'bg-emerald-100 text-emerald-700' :
                      destination.category === 'Adventure' ? 'bg-sky-100 text-sky-700' :
                      destination.category === 'Beach' ? 'bg-cyan-100 text-cyan-700' :
                      destination.category === 'Culture' ? 'bg-purple-100 text-purple-700' :
                      'bg-teal-100 text-teal-700'
                    }`}>
                      {destination.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">{destination.rating}</span>
                      <span className="text-xs text-gray-500">({destination.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-kenya-green transition-colors duration-300">
                    {destination.name}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {destination.location}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {destination.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      Best: {destination.bestTime}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-lime-100 text-lime-700 text-xs px-2 py-1 rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="text-xs text-emerald-600 px-2 py-1 font-medium">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">{destination.price}</span>
                    <button className="bg-kenya-green text-white px-4 py-2 rounded-lg hover:bg-kenya-green/90 transition-colors duration-300 text-sm font-semibold">
                      Explore Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Destinations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All <span className="text-blue">Destinations</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.filter(dest => !dest.featured).map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-4xl mb-2">{destination.image}</div>
                  <button
                    onClick={() => toggleFavorite(destination.id)}
                    className={`absolute top-3 right-3 p-1.5 rounded-full transition-colors duration-300 ${
                      favorites.includes(destination.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <HeartIcon className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      destination.category === 'Wildlife' ? 'bg-emerald-100 text-emerald-700' :
                      destination.category === 'Adventure' ? 'bg-sky-100 text-sky-700' :
                      destination.category === 'Beach' ? 'bg-cyan-100 text-cyan-700' :
                      destination.category === 'Culture' ? 'bg-purple-100 text-purple-700' :
                      'bg-teal-100 text-teal-700'
                    }`}>
                      {destination.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-3 h-3 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-kenya-green transition-colors duration-300 text-sm">
                    {destination.name}
                  </h4>
                  
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <MapPinIcon className="w-3 h-3 mr-1" />
                    {destination.location}
                  </div>
                  
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald-600">{destination.price}</span>
                    <button className="bg-kenya-green text-white px-3 py-1.5 rounded-md hover:bg-kenya-green/90 transition-colors duration-300 text-xs font-semibold flex items-center space-x-1">
                      <CameraIcon className="w-3 h-3" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-kenya-green to-kenya-red p-8 rounded-2xl text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-black">Ready to Explore Kenya?</h3>
            <p className="text-xl font-medium max-w-2xl mx-auto mb-8 text-black">
              Let our AI planner create a personalized itinerary based on your interests, 
              budget, and travel style for an unforgettable Kenyan adventure.
            </p>
            <Link 
              href="/ai-planner"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🚀 Plan My Trip Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
