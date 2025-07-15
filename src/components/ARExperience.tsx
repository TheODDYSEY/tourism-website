'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ARExperienceProps {
  tourId: string;
  tourTitle: string;
  onClose: () => void;
}

// Google Street View locations for each tour
const tourLocations = {
  'maasai-culture': {
    lat: -1.2921,
    lng: 36.8219,
    heading: 34,
    pitch: 10,
    description: 'Maasai Mara National Reserve'
  },
  'wildlife-safari': {
    lat: -2.6527,
    lng: 37.2606,
    heading: 120,
    pitch: 0,
    description: 'Amboseli National Park with Mount Kilimanjaro view'
  },
  'mount-kenya': {
    lat: -0.1521,
    lng: 37.3084,
    heading: 180,
    pitch: 15,
    description: 'Mount Kenya National Park'
  },
  'lamu-heritage': {
    lat: -2.2717,
    lng: 40.9020,
    heading: 90,
    pitch: 0,
    description: 'Lamu Old Town UNESCO World Heritage Site'
  },
  'coral-reef': {
    lat: -3.3614,
    lng: 40.1748,
    heading: 60,
    pitch: -10,
    description: 'Watamu Marine National Park'
  },
  'great-rift-valley': {
    lat: -0.3031,
    lng: 36.0800,
    heading: 270,
    pitch: 5,
    description: 'Lake Nakuru National Park'
  }
};

export default function ARExperience({ tourId, tourTitle, onClose }: ARExperienceProps) {
  const streetViewRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [streetViewPanorama, setStreetViewPanorama] = useState<google.maps.StreetViewPanorama | null>(null);
  const [currentLocation, setCurrentLocation] = useState(tourLocations[tourId as keyof typeof tourLocations] || tourLocations['maasai-culture']);

  useEffect(() => {
    const initAndCleanup = async () => {
      await initializeStreetView();
    };

    initAndCleanup();

    return () => {
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourId]);

  const initializeStreetView = async () => {
    if (!streetViewRef.current) return;

    try {
      // Check if Google Maps is loaded
      if (typeof google === 'undefined' || !google.maps) {
        await loadGoogleMapsScript();
      }

      const location = tourLocations[tourId as keyof typeof tourLocations] || tourLocations['maasai-culture'];
      setCurrentLocation(location);

      // Initialize Street View
      const panorama = new google.maps.StreetViewPanorama(streetViewRef.current, {
        position: { lat: location.lat, lng: location.lng },
        pov: {
          heading: location.heading,
          pitch: location.pitch
        },
        zoom: 1,
        addressControl: false,
        panControl: true,
        zoomControl: true,
        fullscreenControl: false,
        enableCloseButton: false
      });

      setStreetViewPanorama(panorama);
      setIsLoading(false);
    } catch (err) {
      console.error('Street View initialization failed:', err);
      setError('Failed to initialize Street View experience');
      setIsLoading(false);
    }
  };

  const loadGoogleMapsScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (typeof google !== 'undefined' && google.maps) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=geometry`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Maps script'));
      
      document.head.appendChild(script);
    });
  };

  const cleanup = () => {
    if (streetViewPanorama) {
      // Clean up Street View panorama
      setStreetViewPanorama(null);
    }
  };

  const changeLocation = (newTourId: string) => {
    const newLocation = tourLocations[newTourId as keyof typeof tourLocations];
    if (newLocation && streetViewPanorama) {
      setCurrentLocation(newLocation);
      streetViewPanorama.setPosition({ lat: newLocation.lat, lng: newLocation.lng });
      streetViewPanorama.setPov({
        heading: newLocation.heading,
        pitch: newLocation.pitch
      });
    }
  };

  const resetView = () => {
    if (streetViewPanorama && currentLocation) {
      streetViewPanorama.setPov({
        heading: currentLocation.heading,
        pitch: currentLocation.pitch
      });
      streetViewPanorama.setZoom(1);
    }
  };

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-lg p-8 max-w-md text-center">
          <h3 className="text-xl font-bold text-red-600 mb-4">Error</h3>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={onClose}
            className="bg-kenya-green text-white px-6 py-2 rounded-lg hover:bg-kenya-green/90"
          >
            Close
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black z-50"
    >
      {/* Street View Viewport */}
      <div ref={streetViewRef} className="w-full h-full" />

      {/* UI Overlay */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="flex justify-between items-center">
          <div className="bg-black/70 text-white px-4 py-3 rounded-lg backdrop-blur-sm max-w-md">
            <h3 className="font-bold text-lg">{tourTitle}</h3>
            <p className="text-sm opacity-90 font-medium">
              📍 {currentLocation.description}
            </p>
            <p className="text-xs opacity-75 mt-1">
              Virtual Street View Experience
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600 text-xl font-bold shadow-lg"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Location Quick Switch */}
      <div className="absolute top-24 left-4 z-10">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
          <h4 className="text-white font-bold text-sm mb-2">🌍 Quick Switch:</h4>
          <div className="space-y-1">
            {Object.entries(tourLocations).map(([id, location]) => (
              <button
                key={id}
                onClick={() => changeLocation(id)}
                className={`block w-full text-left px-3 py-2 rounded text-xs font-medium transition-all ${
                  id === tourId 
                    ? 'bg-kenya-green text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {location.description}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="flex justify-center space-x-4">
          <button
            onClick={resetView}
            className="bg-white/20 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/30 backdrop-blur-sm flex items-center space-x-2"
          >
            <span>🔄</span>
            <span>Reset View</span>
          </button>
          <button
            onClick={onClose}
            className="bg-kenya-green text-white px-6 py-3 rounded-lg font-bold hover:bg-kenya-green/90 flex items-center space-x-2"
          >
            <span>🏠</span>
            <span>Exit Tour</span>
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-kenya-green border-t-transparent mx-auto mb-6"></div>
            <p className="text-xl font-semibold mb-2">Loading Street View...</p>
            <p className="text-sm opacity-75">Preparing immersive experience</p>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!isLoading && (
        <div className="absolute bottom-20 left-4 right-4 z-10">
          <div className="bg-gradient-to-r from-orange-500/90 to-pink-600/90 text-white px-4 py-3 rounded-lg text-center backdrop-blur-sm">
            <p className="font-semibold text-sm">
              🎮 Use mouse to look around • Scroll to zoom • Click arrows to move
            </p>
            <p className="text-xs opacity-90 mt-1">
              Experience Kenya&apos;s destinations in high-quality Street View
            </p>
          </div>
        </div>
      )}

      {/* Tour Info Panel */}
      <div className="absolute top-4 right-4 z-10 max-w-xs">
        <div className="bg-gradient-to-br from-kenya-green/90 to-orange-500/90 text-white p-4 rounded-lg backdrop-blur-sm">
          <h4 className="font-bold mb-2">🗺️ About This Location</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Coordinates:</strong> {currentLocation.lat.toFixed(4)}, {currentLocation.lng.toFixed(4)}</p>
            <p><strong>Heading:</strong> {currentLocation.heading}°</p>
            <p><strong>Experience:</strong> Virtual Tour</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
