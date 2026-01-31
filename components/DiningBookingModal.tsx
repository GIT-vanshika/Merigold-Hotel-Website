
import React from 'react';

interface DiningBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
}

const DiningBookingModal: React.FC<DiningBookingModalProps> = ({ isOpen, onClose, restaurantName }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Table request at ${restaurantName} submitted. Our maître d' will contact you shortly to confirm your reservation.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg shadow-2xl animate-fade-in-up">
        <div className="bg-luxury-dark text-white p-8">
          <h3 className="font-serif text-2xl tracking-widest uppercase mb-2">Reserve a Table</h3>
          <p className="text-[10px] text-marigold-400 font-bold uppercase tracking-[0.2em]">{restaurantName}</p>
        </div>
        
        <div className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Date</label>
                <input required type="date" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Time</label>
                <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm bg-white">
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Guests</label>
                <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm bg-white">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>4 People</option>
                  <option>6+ People</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Occasion</label>
                <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm bg-white">
                  <option>General Dining</option>
                  <option>Business Lunch</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Full Name</label>
              <input required type="text" placeholder="GUEST NAME" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-marigold-600 transition-colors text-sm" />
            </div>

            <button type="submit" className="w-full bg-marigold-600 text-white py-4 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-marigold-700 transition-all shadow-xl">
              CONFIRM TABLE REQUEST
            </button>
            
            <button type="button" onClick={onClose} className="w-full text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2 hover:text-luxury-dark transition-colors">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiningBookingModal;
