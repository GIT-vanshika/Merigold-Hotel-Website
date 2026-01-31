
import React from 'react';
import { MARIGOLD_DETAILS } from '../constants';

const Facilities: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img src="https://marigold-by-greenpark.hyderabad-hotel.com/data/Pics/OriginalPhoto/12131/1213113/1213113091/marigold-by-greenpark-hotel-hyderabad-pic-70.JPEG" className="w-full h-full object-cover" alt="Facilities Header" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-serif mb-4">Well-Being & Facilities</h1>
            <p className="text-marigold-200 text-xl font-light">Elevating your stay with premium services and rejuvenating wellness.</p>
        </div>
      </section>

      {/* Wellness Highlights */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
                <div className="w-20 h-20 bg-marigold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-marigold-700 transition-all duration-500">
                    <span className="text-marigold-700 group-hover:text-white transition-colors">SPA</span>
                </div>
                <h3 className="text-2xl font-serif mb-4">Soul Spa</h3>
                <p className="text-gray-500">Complete relaxation and therapeutic treatments designed to rejuvenate your senses.</p>
            </div>
            <div className="text-center group">
                <div className="w-20 h-20 bg-marigold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-marigold-700 transition-all duration-500">
                    <span className="text-marigold-700 group-hover:text-white transition-colors">GYM</span>
                </div>
                <h3 className="text-2xl font-serif mb-4">Fitness Center</h3>
                <p className="text-gray-500">State-of-the-art gymnasium equipped with everything you need for a full workout.</p>
            </div>
            <div className="text-center group">
                <div className="w-20 h-20 bg-marigold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-marigold-700 transition-all duration-500">
                    <span className="text-marigold-700 group-hover:text-white transition-colors">POOL</span>
                </div>
                <h3 className="text-2xl font-serif mb-4">Rooftop Pool</h3>
                <p className="text-gray-500">A serene swimming pool area offering leisure and recreational relaxation.</p>
            </div>
        </div>
      </section>

      {/* Facilities List */}
      <section className="py-24 bg-marigold-50 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif mb-4">Full List of Facilities</h2>
                <div className="w-24 h-1 bg-marigold-500 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                {MARIGOLD_DETAILS.facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-4 shadow-sm rounded-sm">
                        <div className="w-2 h-2 bg-marigold-400 rounded-full"></div>
                        <span className="text-luxury-charcoal font-medium">{facility}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif mb-4">Guest Amenities</h2>
                <p className="text-gray-500 italic">Complimentary items provided for your comfort</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {MARIGOLD_DETAILS.amenities.map((amenity, idx) => (
                    <div key={idx} className="border border-marigold-100 p-6 rounded-sm text-center hover:bg-marigold-50 transition-colors">
                        <p className="text-xs font-bold uppercase tracking-widest text-marigold-800">{amenity}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
