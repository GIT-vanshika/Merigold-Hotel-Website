
import React from 'react';
import { MARIGOLD_DETAILS } from '../constants';

const Attractions: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="bg-marigold-100 py-24 px-4 text-center">
        <h1 className="text-5xl font-serif mb-6 text-marigold-900">Around the Hotel</h1>
        <p className="max-w-2xl mx-auto text-luxury-charcoal text-lg">
            Discover the rich culture and heritage of Hyderabad. We are conveniently located near the city's most iconic attractions.
        </p>
      </section>

      {/* Attractions Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MARIGOLD_DETAILS.attractions.map((attraction, idx) => (
                <div key={idx} className="group relative h-[400px] overflow-hidden rounded-sm shadow-xl">
                    <img 
                        src={`https://picsum.photos/seed/attraction${idx}/600/800`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                        alt={attraction} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <span className="text-marigold-400 font-bold text-xs uppercase tracking-widest block mb-2">Iconic Landmark</span>
                        <h3 className="text-2xl font-serif text-white">{attraction}</h3>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-luxury-dark text-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-serif mb-6 text-marigold-500">Prime Location</h2>
                <p className="text-gray-300 mb-8 text-lg">
                    Greenlands, Begumpet, Hyderabad – 500016, Telangana, India.
                </p>
                <div className="space-y-4">
                    <p className="flex items-center gap-4">
                        <span className="w-10 h-10 bg-marigold-800 rounded-full flex items-center justify-center">📍</span>
                        Easy access to commercial districts.
                    </p>
                    <p className="flex items-center gap-4">
                        <span className="w-10 h-10 bg-marigold-800 rounded-full flex items-center justify-center">✈️</span>
                        Airport shuttle service available (paid).
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-[400px] bg-marigold-900/10 rounded-sm border border-marigold-700/30 flex items-center justify-center text-gray-500 italic">
                {/* Map Placeholder */}
                <div className="text-center p-8">
                    <p className="mb-4 text-marigold-400 not-italic font-bold uppercase tracking-widest">Google Maps Integration</p>
                    <p>Begumpet, Hyderabad, Telangana</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;
