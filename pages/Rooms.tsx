
import React, { useState } from 'react';
import { MARIGOLD_DETAILS } from '../constants';
import BookingModal from '../components/BookingModal';

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<{name: string, image: string} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookRoom = (name: string, image: string) => {
    setSelectedRoom({ name, image });
    setIsModalOpen(true);
  };

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted. Our reservation team will reach out to you within the hour.");
  };

  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-luxury-dark text-white py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://media.weddingz.in/images/92581bb39518443d5fc987bb711f00ee/mgfha.jpg" className="w-full h-full object-cover opacity-30 blur-[2px] scale-110" alt="Marigold Exterior" />
        </div>
        <div className="relative z-10">
            <h4 className="text-marigold-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Unrivaled Comfort</h4>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">Rooms & Suites</h1>
            <div className="w-20 h-[1px] bg-marigold-500/50 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg font-light leading-relaxed">
                Step into a sanctuary of urban elegance. Every suite at Marigold is crafted to balance the rigorous demands of business with the restorative calm of luxury hospitality.
            </p>
        </div>
      </section>

      {/* Room Listing */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="space-y-40">
            {MARIGOLD_DETAILS.rooms.map((room, idx) => (
                <div key={room.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center group`}>
                    <div className="w-full lg:w-3/5 relative">
                        <div className="overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
                            <img src={room.image} alt={room.name} className="w-full h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-105" />
                        </div>
                        {/* Elegant floating label */}
                        <div className={`absolute -bottom-10 ${idx % 2 === 0 ? '-right-10' : '-left-10'} bg-white p-8 shadow-2xl hidden xl:block border border-gray-50`}>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-marigold-600 mb-2">Signature Series</p>
                            <h3 className="font-serif text-2xl text-luxury-dark">{room.name}</h3>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 space-y-8">
                        <div>
                          <span className="text-marigold-700 font-bold uppercase tracking-[0.2em] text-[10px] block mb-4">Suite Category {idx + 1}</span>
                          <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-6">{room.name}</h2>
                          <div className="h-[2px] w-12 bg-marigold-500/30"></div>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed font-light">{room.description}</p>
                        <div className="py-6">
                            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-luxury-dark">Premium Amenities</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xs text-gray-400 font-medium">
                                {MARIGOLD_DETAILS.roomFeatures.slice(0, 6).map((f, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-marigold-500/50 rounded-full shrink-0"></div>
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-4">
                          <button 
                            onClick={() => handleBookRoom(room.name, room.image)}
                            className="group relative inline-flex items-center gap-4 bg-marigold-600 text-white px-10 py-5 hover:bg-marigold-700 transition-all font-bold uppercase text-[10px] tracking-[0.3em] shadow-[0_20px_40px_-10px_rgba(230,149,0,0.3)]"
                          >
                            BOOK THIS SUITE
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                          </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Standard Features Section */}
      <section className="py-32 bg-marigold-50/50 px-6 border-y border-marigold-100">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h4 className="text-marigold-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Marigold Standard</h4>
                <h2 className="text-4xl font-serif mb-6 text-luxury-dark">Every Room Includes</h2>
                <div className="w-20 h-[1px] bg-marigold-500/50 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {MARIGOLD_DETAILS.roomFeatures.map((feature, i) => (
                    <div key={i} className="bg-white p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-marigold-300 transition-all duration-500">
                        <div className="w-10 h-10 bg-marigold-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <div className="w-2 h-2 bg-marigold-500 rounded-full"></div>
                        </div>
                        <p className="text-luxury-dark font-semibold text-[11px] uppercase tracking-widest">{feature}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Direct Booking Form Section */}
      <section id="fast-reservation" className="py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 bg-white shadow-2xl border border-gray-50 overflow-hidden">
          <div className="w-full lg:w-1/2 relative bg-luxury-dark overflow-hidden">
             <img 
              src="https://marigold-by-greenpark.hyderabad-hotel.com/data/Pics/OriginalPhoto/12131/1213113/1213113091/marigold-by-greenpark-hotel-hyderabad-pic-70.JPEG" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 group-hover:scale-100 transition-transform duration-[3s]" 
              alt="Luxury Stay"
             />
             <div className="absolute inset-0 bg-marigold-900/10"></div>
             <div className="relative z-10 p-16 h-full flex flex-col justify-center text-white">
                <h4 className="text-marigold-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Seamless Experience</h4>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Direct Booking & Inquiries</h2>
                <p className="text-gray-300 font-light leading-relaxed mb-10 max-w-md">
                  Prefer a personal touch? Use this form for quick availability checks or specific requests for your upcoming stay in Hyderabad.
                </p>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest font-bold flex items-center gap-4">
                    <span className="text-marigold-500">PH:</span> {MARIGOLD_DETAILS.phones[0]}
                  </p>
                  <p className="text-xs uppercase tracking-widest font-bold flex items-center gap-4">
                    <span className="text-marigold-500">EM:</span> {MARIGOLD_DETAILS.emails.reservations}
                  </p>
                </div>
             </div>
          </div>
          <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <form onSubmit={handleQuickInquiry} className="space-y-10">
              <div className="space-y-2 group">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-marigold-600 transition-colors">Select Room Type</label>
                <select className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-marigold-600 transition-colors text-xs font-bold uppercase tracking-widest appearance-none bg-white">
                  <option>CHOOSE YOUR SUITE</option>
                  {MARIGOLD_DETAILS.rooms.map(r => <option key={r.id}>{r.name.toUpperCase()}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-marigold-600 transition-colors">Arriving</label>
                  <input required type="date" className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-marigold-600 transition-colors text-xs font-bold" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-marigold-600 transition-colors">Departing</label>
                  <input required type="date" className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-marigold-600 transition-colors text-xs font-bold" />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-marigold-600 transition-colors">Full Name</label>
                <input required type="text" placeholder="YOUR NAME" className="w-full border-b border-gray-100 py-3 focus:outline-none focus:border-marigold-600 transition-colors text-xs font-bold placeholder:text-gray-200" />
              </div>

              <button 
                type="submit" 
                className="w-full bg-luxury-dark text-white py-6 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-marigold-700 transition-all shadow-2xl active:translate-y-1"
              >
                CHECK AVAILABILITY
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Booking Modal Integration */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        roomName={selectedRoom?.name || ''} 
        roomImage={selectedRoom?.image}
      />
    </div>
  );
};

export default Rooms;
