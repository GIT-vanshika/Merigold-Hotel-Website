
import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  roomImage?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, roomName, roomImage }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservation request for ${roomName} submitted. Our concierge will contact you shortly to confirm your booking at Marigold Hotels.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden animate-fade-in-up">
        {/* Left Side: Visual */}
        <div className="hidden md:block w-1/3 relative bg-luxury-dark">
          <img 
            src={roomImage || "https://r1imghtlak.mmtcdn.com/24705fca81ea11e78e72025f77df004f.jpg"} 
            className="w-full h-full object-cover opacity-60" 
            alt={roomName} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marigold-900/80 to-transparent flex items-end p-8">
            <div className="text-white">
              <h4 className="font-serif text-2xl mb-2">{roomName}</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-marigold-400 font-bold">Luxury Redefined</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1">
          <div className="p-6 md:p-10">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-serif text-2xl text-luxury-dark uppercase tracking-widest">Reservation Inquiry</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-marigold-700 transition-colors p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-marigold-600 transition-colors">Check-In Date</label>
                  <input required type="date" className="w-full border-b border-gray-100 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm bg-transparent" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-marigold-600 transition-colors">Check-Out Date</label>
                  <input required type="date" className="w-full border-b border-gray-100 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm bg-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-marigold-600 transition-colors">Full Name</label>
                  <input required type="text" placeholder="GUEST NAME" className="w-full border-b border-gray-100 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm placeholder:text-gray-200" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-marigold-600 transition-colors">Email Address</label>
                  <input required type="email" placeholder="YOUR EMAIL" className="w-full border-b border-gray-100 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm placeholder:text-gray-200" />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-marigold-600 transition-colors">Special Requests</label>
                <textarea rows={2} placeholder="ANY PREFERENCES..." className="w-full border-b border-gray-100 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm placeholder:text-gray-200 bg-transparent"></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-luxury-dark text-white py-5 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-marigold-700 transition-all shadow-xl active:scale-[0.98]"
              >
                REQUEST CONFIRMATION
              </button>
            </form>
            
            <div className="mt-8 flex items-center gap-3 justify-center opacity-40">
              <div className="h-[1px] w-8 bg-gray-400"></div>
              <p className="text-[9px] uppercase tracking-widest text-gray-500 font-medium">A Premium Service by Greenpark Group</p>
              <div className="h-[1px] w-8 bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
