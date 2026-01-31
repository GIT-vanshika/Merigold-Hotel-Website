
import React from 'react';
import { MARIGOLD_DETAILS } from '../constants';

const Events: React.FC = () => {
  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your event inquiry. Our events planning team will review your requirements and contact you within 24 hours.");
  };

  const checkHallAvailability = (name: string) => {
    alert(`Checking real-time availability for ${name}. Please wait a moment... (Inquiry recorded)`);
  };

  return (
    <div className="pt-24">
      <section className="bg-luxury-beige py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <img src="https://media.weddingz.in/images/92581bb39518443d5fc987bb711f00ee/mgfha.jpg" className="w-full h-full object-cover" alt="Marigold" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <h4 className="text-marigold-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Unforgettable Gatherings</h4>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-luxury-dark">Meetings, Events & Banquets</h1>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg font-light leading-relaxed">
                The preferred destination for conventions, weddings, and corporate gatherings in Hyderabad. Our diverse range of halls caters to events of all sizes with state-of-the-art infrastructure.
            </p>
        </div>
      </section>

      {/* Halls Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-4xl font-serif mb-6 text-luxury-dark">Our Grand Venues</h2>
           <div className="w-20 h-[1px] bg-marigold-500/50 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {MARIGOLD_DETAILS.eventHalls.map((hall, idx) => (
                <div key={idx} className="bg-white border border-gray-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all p-12 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-marigold-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-marigold-600 group-hover:scale-110 transition-all duration-500">
                        <svg className="w-10 h-10 text-marigold-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-serif mb-4 text-luxury-dark">{hall.name}</h3>
                    <p className="text-marigold-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">Capacity: {hall.capacity}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light flex-grow">State-of-the-art facilities designed for premium events, professional meetings, and grand conventions.</p>
                    <button 
                      onClick={() => checkHallAvailability(hall.name)}
                      className="text-luxury-dark font-bold text-[10px] uppercase tracking-[0.2em] border-b border-marigold-200 hover:border-marigold-700 pb-2 transition-all"
                    >
                      CHECK AVAILABILITY
                    </button>
                </div>
            ))}
        </div>
      </section>

      {/* Facilities & Inquiry Section */}
      <section className="py-32 bg-luxury-dark text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
                <h4 className="text-marigold-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Professional Services</h4>
                <h2 className="text-4xl md:text-5xl font-serif mb-12">Event Facilities</h2>
                <div className="space-y-8">
                    {["Full AV and conferencing technology", "Corporate meetings & Workshops", "Royal Weddings & Banquets", "High-profile Social events", "Global Business Conventions"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-6 group">
                            <div className="w-10 h-10 border border-marigold-800 rounded-full flex items-center justify-center group-hover:bg-marigold-800 transition-all">
                               <span className="text-marigold-500 font-serif">0{idx+1}</span>
                            </div>
                            <span className="text-xl font-light text-gray-300">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl p-12 lg:p-16 border border-white/10 shadow-2xl relative">
                <h3 className="text-3xl font-serif mb-10 text-marigold-100">Plan Your Event</h3>
                <form className="space-y-8" onSubmit={handleEventSubmit}>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-marigold-400">Your Full Name</label>
                        <input required type="text" placeholder="GUEST NAME" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-marigold-500 text-sm" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-marigold-400">Email Address</label>
                        <input required type="email" placeholder="YOUR@EMAIL.COM" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-marigold-500 text-sm" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-marigold-400">Event Type</label>
                        <select className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-marigold-500 text-sm text-gray-400 appearance-none">
                            <option className="bg-luxury-dark">Corporate Seminar</option>
                            <option className="bg-luxury-dark">Grand Wedding</option>
                            <option className="bg-luxury-dark">Social Gathering</option>
                            <option className="bg-luxury-dark">Press Conference</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-marigold-400">Additional Details</label>
                        <textarea required placeholder="BRIEF DESCRIPTION OF YOUR EVENT..." rows={3} className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-marigold-500 text-sm resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-marigold-600 py-6 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-marigold-500 transition-all shadow-2xl active:translate-y-1">
                      SUBMIT EVENT INQUIRY
                    </button>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
