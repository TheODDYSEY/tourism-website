'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CalendarIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function AIPlanner() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [itineraryGenerated, setItineraryGenerated] = useState(false);
  const [preferences, setPreferences] = useState<{
    duration: string;
    budget: string;
    interests: string[];
    groupSize: string;
    accommodation: string;
  }>({
    duration: '',
    budget: '',
    interests: [],
    groupSize: '',
    accommodation: ''
  });

  const interests = [
    'Wildlife Safari', 'Beach & Coast', 'Mountain Hiking', 'Cultural Tours',
    'Adventure Sports', 'Photography', 'Local Cuisine', 'Historical Sites'
  ];

  const toggleInterest = (interest: string) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const generateItinerary = () => {
    setIsGenerating(true);
    // Simulate AI processing time
    setTimeout(() => {
      setIsGenerating(false);
      setItineraryGenerated(true);
    }, 3000);
  };

  const sampleItinerary = {
    title: "Your Perfect Kenya Adventure",
    duration: preferences.duration || "1 week",
    totalCost: preferences.budget || "$1000-2500",
    days: [
      {
        day: 1,
        location: "Nairobi",
        activities: ["Arrive at Jomo Kenyatta Airport", "Visit Giraffe Centre", "Explore Karen Blixen Museum"],
        accommodation: "Nairobi Safari Club"
      },
      {
        day: 2,
        location: "Maasai Mara",
        activities: ["Game drive at dawn", "Visit Maasai village", "Evening safari"],
        accommodation: "Mara Safari Lodge"
      },
      {
        day: 3,
        location: "Maasai Mara",
        activities: ["Great Migration viewing", "Hot air balloon safari", "Bush dinner"],
        accommodation: "Mara Safari Lodge"
      },
      {
        day: 4,
        location: "Lake Nakuru",
        activities: ["Flamingo watching", "Rhino sanctuary visit", "Nature walk"],
        accommodation: "Lake Nakuru Lodge"
      },
      {
        day: 5,
        location: "Amboseli",
        activities: ["Mount Kilimanjaro views", "Elephant herds", "Sunset photography"],
        accommodation: "Amboseli Serena Lodge"
      }
    ]
  };

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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-kenya-green to-kenya-red text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase mb-6 shadow-lg"
            >
              🤖 AI-Powered Planning
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-black mb-6 drop-shadow-sm"
            >
              Smart{' '}
              <span className="text-kenya-green drop-shadow-lg">Trip</span>{' '}
              <span className="text-orange-500 drop-shadow-lg">Planner</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl font-semibold text-black max-w-3xl mx-auto leading-relaxed"
            >
              Let our advanced AI create a <span className="text-kenya-green font-bold">personalized itinerary</span> based on your preferences, 
              budget, and interests for the <span className="text-pink-600 font-bold">perfect Kenyan adventure.</span>
            </motion.p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex flex-col items-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold border-4 transition-all duration-300 ${
                      step >= num
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-orange-500 shadow-xl'
                        : 'bg-white text-black border-kenya-green shadow-lg'
                    }`}
                  >
                    {num}
                  </div>
                  <span className={`mt-3 text-lg font-bold ${
                    step >= num ? 'text-orange-600' : 'text-black'
                  }`}>
                    {num === 1 ? 'Basics' : num === 2 ? 'Interests' : num === 3 ? 'Stay' : 'Plan'}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 shadow-inner">
              <div
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-kenya-green h-4 rounded-full transition-all duration-700 shadow-md"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-orange-200 shadow-2xl">
                  <h2 className="text-4xl font-bold text-black text-center mb-8 drop-shadow-lg">
                    ✈️ Trip <span className="text-orange-500">Basics</span>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xl font-bold text-pink-600 mb-4 drop-shadow-md">
                        <CalendarIcon className="w-7 h-7 inline mr-3 text-kenya-green" />
                        Trip Duration
                      </label>
                      <select
                        className="w-full p-5 border-3 border-kenya-green rounded-xl focus:ring-4 focus:ring-kenya-green/50 bg-white text-black font-semibold text-lg shadow-lg"
                        value={preferences.duration}
                        onChange={(e) => setPreferences(prev => ({ ...prev, duration: e.target.value }))}
                      >
                        <option value="">Select duration</option>
                        <option value="3-5 days">3-5 days</option>
                        <option value="1 week">1 week</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="3+ weeks">3+ weeks</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xl font-bold text-pink-600 mb-4 drop-shadow-md">
                        <UserGroupIcon className="w-7 h-7 inline mr-3 text-kenya-green" />
                        Group Size
                      </label>
                      <select
                        className="w-full p-5 border-3 border-kenya-green rounded-xl focus:ring-4 focus:ring-kenya-green/50 bg-white text-black font-semibold text-lg shadow-lg"
                        value={preferences.groupSize}
                        onChange={(e) => setPreferences(prev => ({ ...prev, groupSize: e.target.value }))}
                      >
                        <option value="">Select group size</option>
                        <option value="Solo traveler">Solo traveler</option>
                        <option value="Couple">Couple</option>
                        <option value="Family (3-5)">Family (3-5)</option>
                        <option value="Group (6+)">Group (6+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl font-bold text-pink-600 mb-4 drop-shadow-md">
                      💰 Budget Range (USD)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['$500-1000', '$1000-2500', '$2500-5000', '$5000+'].map((budget) => (
                        <button
                          key={budget}
                          onClick={() => setPreferences(prev => ({ ...prev, budget }))}
                          className={`p-4 rounded-xl border-3 font-bold text-lg transition-all duration-300 shadow-lg ${
                            preferences.budget === budget
                              ? 'border-orange-500 bg-orange-500 text-white transform scale-105'
                              : 'border-kenya-green/50 bg-white text-black hover:border-orange-500 hover:bg-orange-50'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-orange-200 shadow-2xl">
                  <h2 className="text-4xl font-bold text-black text-center mb-8 drop-shadow-lg">
                    🎯 Your <span className="text-orange-500">Interests</span>
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-4 rounded-xl border-3 font-bold text-lg transition-all duration-300 shadow-lg ${
                          preferences.interests.includes(interest)
                            ? 'border-pink-500 bg-gradient-to-r from-pink-500 to-orange-500 text-white transform scale-105 shadow-xl'
                            : 'border-kenya-green bg-white text-black hover:border-pink-500 hover:bg-pink-50 hover:text-pink-700'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-orange-200 shadow-2xl">
                  <h2 className="text-4xl font-bold text-black text-center mb-8 drop-shadow-lg">
                    🏨 Accommodation <span className="text-orange-500">Preference</span>
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { type: 'Luxury Safari Lodges', desc: 'Premium accommodations with all amenities', emoji: '🌟' },
                      { type: 'Mid-range Hotels', desc: 'Comfortable stays with good facilities', emoji: '🏨' },
                      { type: 'Budget & Eco-friendly', desc: 'Affordable options and eco-lodges', emoji: '🌿' }
                    ].map((option) => (
                      <button
                        key={option.type}
                        onClick={() => setPreferences(prev => ({ ...prev, accommodation: option.type }))}
                        className={`p-6 rounded-xl border-3 text-left transition-all duration-300 shadow-lg ${
                          preferences.accommodation === option.type
                            ? 'border-pink-500 bg-pink-500 text-white transform scale-105'
                            : 'border-kenya-green/50 bg-white text-black hover:border-pink-500 hover:bg-pink-50'
                        }`}
                      >
                        <h3 className="font-bold text-xl mb-3">{option.emoji} {option.type}</h3>
                        <p className={`text-lg ${preferences.accommodation === option.type ? 'text-white' : 'text-gray-700'}`}>
                          {option.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {!itineraryGenerated ? (
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-orange-200 shadow-2xl">
                    <h2 className="text-4xl font-bold text-black text-center mb-8 drop-shadow-lg">
                      <SparklesIcon className="w-10 h-10 inline mr-3 text-orange-500" />
                      {isGenerating ? 'Generating Your' : 'Ready to Generate Your'} <span className="text-orange-500">Perfect Itinerary</span>{isGenerating ? '...' : '!'}
                    </h2>
                    
                    {isGenerating ? (
                      <div className="bg-green-50 rounded-xl p-8 shadow-lg border border-green-200">
                        <div className="animate-pulse space-y-6">
                          <div className="h-6 bg-kenya-green/70 rounded-full w-3/4"></div>
                          <div className="h-6 bg-orange-400/70 rounded-full w-1/2"></div>
                          <div className="h-6 bg-pink-500/70 rounded-full w-5/6"></div>
                          <div className="h-6 bg-kenya-green/70 rounded-full w-2/3"></div>
                        </div>
                        
                        <div className="mt-8 text-center">
                          <div className="inline-flex items-center space-x-3 text-black text-xl font-bold">
                            <div className="animate-spin rounded-full h-8 w-8 border-4 border-orange-500 border-t-transparent"></div>
                            <span>AI is crafting your <span className="text-pink-600">perfect journey</span>...</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-xl p-8 mb-6">
                          <h3 className="text-2xl font-bold text-black mb-4">Your Preferences Summary:</h3>
                          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                            <div className="bg-white p-4 rounded-lg shadow">
                              <span className="font-bold text-pink-600">Duration:</span> <span className="text-black">{preferences.duration || 'Not specified'}</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                              <span className="font-bold text-pink-600">Budget:</span> <span className="text-black">{preferences.budget || 'Not specified'}</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                              <span className="font-bold text-pink-600">Group Size:</span> <span className="text-black">{preferences.groupSize || 'Not specified'}</span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                              <span className="font-bold text-pink-600">Accommodation:</span> <span className="text-black">{preferences.accommodation || 'Not specified'}</span>
                            </div>
                          </div>
                          {preferences.interests.length > 0 && (
                            <div className="mt-4 bg-white p-4 rounded-lg shadow max-w-2xl mx-auto">
                              <span className="font-bold text-pink-600">Interests:</span>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {preferences.interests.map((interest, index) => (
                                  <span key={index} className="bg-kenya-green text-white px-3 py-1 rounded-full text-sm">
                                    {interest}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={generateItinerary}
                          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-12 py-4 rounded-xl font-bold text-xl shadow-lg hover:from-orange-600 hover:to-pink-600 transition-all"
                        >
                          🚀 Generate My Itinerary
                        </motion.button>
                      </div>
                    )}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-8 shadow-2xl border border-green-200"
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-4xl font-bold text-black mb-4">
                        🎉 <span className="text-kenya-green">Your Itinerary</span> is Ready!
                      </h2>
                      <p className="text-xl text-gray-700">Here&apos;s your personalized Kenya adventure</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-gradient-to-r from-kenya-green to-green-600 text-white p-4 rounded-lg text-center">
                        <h4 className="font-bold text-lg">Duration</h4>
                        <p className="text-2xl">{sampleItinerary.duration}</p>
                      </div>
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg text-center">
                        <h4 className="font-bold text-lg">Budget</h4>
                        <p className="text-2xl">{sampleItinerary.totalCost}</p>
                      </div>
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-lg text-center">
                        <h4 className="font-bold text-lg">Days</h4>
                        <p className="text-2xl">{sampleItinerary.days.length}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {sampleItinerary.days.map((day, index) => (
                        <motion.div
                          key={day.day}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-2xl font-bold text-black">Day {day.day}</h4>
                            <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                              {day.location}
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-bold text-pink-600 mb-2">Activities:</h5>
                              <ul className="text-black space-y-1">
                                {day.activities.map((activity, i) => (
                                  <li key={i} className="flex items-center">
                                    <span className="w-2 h-2 bg-kenya-green rounded-full mr-2"></span>
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-bold text-pink-600 mb-2">Accommodation:</h5>
                              <p className="text-black bg-green-50 p-3 rounded-lg">
                                🏨 {day.accommodation}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-kenya-green to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg mr-4"
                      >
                        📧 Email Itinerary
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg"
                      >
                        📱 Save to Phone
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                  step === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-2 border-gray-300'
                    : 'bg-white text-black hover:bg-gray-100 border-2 border-black'
                }`}
              >
                ← Previous
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (step === 3) {
                    generateItinerary();
                  }
                  setStep(Math.min(4, step + 1));
                }}
                disabled={step === 4 && !itineraryGenerated}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                  step === 4 && !itineraryGenerated
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-2 border-gray-300'
                    : 'bg-gradient-to-r from-kenya-green to-orange-500 text-white hover:from-kenya-green/90 hover:to-orange-500/90 border-2 border-pink-500'
                }`}
              >
                {step === 3 ? '✨ Generate Itinerary' : step === 4 && itineraryGenerated ? '🎉 Complete!' : 'Next →'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
