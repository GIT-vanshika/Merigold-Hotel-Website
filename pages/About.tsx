
import React from 'react';
import { MARIGOLD_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-marigold-100 py-20 px-4 text-center">
        <h1 className="text-5xl font-serif mb-6 text-marigold-900">About Marigold Hotels</h1>
        <p className="max-w-2xl mx-auto text-luxury-charcoal text-lg leading-relaxed">
          Founded around 2012, Marigold Hotels stands as the flagship luxury business destination of the esteemed Greenpark Group.
        </p>
      </section>

      {/* Detailed Info */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
                <h2 className="text-3xl font-serif text-marigold-800">Hospitality Philosophy</h2>
                <p className="text-gray-600 leading-relaxed">
                    Marigold Hotels is a 5-star business-focused luxury hotel offering contemporary style and new-age hospitality. We cater to business travelers and leisure guests with spacious interiors, premium services, dining, events, and modern facilities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Our philosophy centers on a seamless mix of contemporary style and new-age luxury. We place a profound focus on service excellence, high-quality dining, effective meetings, and unparalleled guest comfort.
                </p>
                <div className="bg-white p-6 shadow-sm border-l-4 border-marigold-500 italic text-gray-700">
                    "Designed for business travelers and discerning guests, providing easy access to commercial districts and well-trained staff for every need."
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/hotel1/400/500" className="rounded-sm shadow-md" alt="Hotel Detail" />
                <img src="https://picsum.photos/seed/hotel2/400/500" className="mt-8 rounded-sm shadow-md" alt="Hotel Detail" />
            </div>
        </div>

        <div className="bg-luxury-dark text-white p-12 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <span className="block text-4xl font-serif text-marigold-500 mb-2">181</span>
                    <span className="text-sm uppercase tracking-widest text-gray-400">Spacious Rooms</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-marigold-500 mb-2">5-Star</span>
                    <span className="text-sm uppercase tracking-widest text-gray-400">Luxury Rating</span>
                </div>
                <div>
                    <span className="block text-4xl font-serif text-marigold-500 mb-2">2012</span>
                    <span className="text-sm uppercase tracking-widest text-gray-400">Year Founded</span>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-marigold-500/5 rounded-full -mr-32 -mt-32"></div>
        </div>
      </section>

      {/* Brand Identity Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl font-serif">Brand Identity & Market Position</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                <div className="p-8 bg-marigold-50 border border-marigold-100 rounded-sm">
                    <h4 className="font-bold text-marigold-800 mb-4 uppercase text-sm tracking-widest">Industry</h4>
                    <p className="text-gray-700">Hospitality (Luxury Business Hotel)</p>
                </div>
                <div className="p-8 bg-marigold-50 border border-marigold-100 rounded-sm">
                    <h4 className="font-bold text-marigold-800 mb-4 uppercase text-sm tracking-widest">Company Type</h4>
                    <p className="text-gray-700">Privately held hospitality business</p>
                </div>
                <div className="p-8 bg-marigold-50 border border-marigold-100 rounded-sm">
                    <h4 className="font-bold text-marigold-800 mb-4 uppercase text-sm tracking-widest">Parent Group</h4>
                    <p className="text-gray-700">Greenpark Group of Hotels & Resorts</p>
                </div>
                <div className="p-8 bg-marigold-50 border border-marigold-100 rounded-sm">
                    <h4 className="font-bold text-marigold-800 mb-4 uppercase text-sm tracking-widest">Market Focus</h4>
                    <p className="text-gray-700">Corporate Utility & Luxury Hospitality for conferences, weddings, and business travelers.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
