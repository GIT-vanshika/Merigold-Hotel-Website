
import React, { useState } from 'react';
import { MARIGOLD_DETAILS } from '../constants';
import MenuModal from '../components/MenuModal';
import DiningBookingModal from '../components/DiningBookingModal';

const Dining: React.FC = () => {
  const [activeRestaurant, setActiveRestaurant] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenMenu = (name: string) => {
    setActiveRestaurant(name);
    setIsMenuOpen(true);
  };

  const handleOpenBooking = (name: string) => {
    setActiveRestaurant(name);
    setIsBookingOpen(true);
  };

  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-marigold-900 text-white py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://marigold-by-greenpark.hyderabad-hotel.com/data/Photos/OriginalPhoto/16065/1606565/1606565986.JPEG" className="w-full h-full object-cover opacity-20 scale-110 blur-sm" alt="Dining Ambience" />
        </div>
        <div className="relative z-10">
          <h4 className="text-marigold-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Epicurean Journey</h4>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Wine, Dine & Be Merry</h1>
          <div className="w-20 h-[1px] bg-marigold-500/50 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-marigold-100/80 text-lg font-light leading-relaxed">
            Global flavors and exquisite culinary craftsmanship come together in the heart of Hyderabad. Explore our award-winning signature restaurants.
          </p>
        </div>
      </section>

      {/* Outlets */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {MARIGOLD_DETAILS.dining.map((outlet, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center group">
              <div className={`${idx % 2 === 0 ? "order-1" : "order-1 lg:order-2"} relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]`}>
                <img 
                  src={outlet.image} 
                  className="w-full h-[550px] object-cover transition-transform duration-[2s] group-hover:scale-105"
                  alt={outlet.name}
                />
                <div className="absolute inset-0 bg-marigold-900/10" />
              </div>
              <div className={idx % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                <span className="text-marigold-700 font-bold uppercase tracking-[0.2em] text-[10px] block mb-6 italic">Experience Perfection</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 text-luxury-dark">{outlet.name}</h2>
                <h4 className="text-lg text-marigold-600 font-medium mb-8 uppercase tracking-widest text-[11px]">{outlet.type}</h4>
                <p className="text-gray-600 leading-relaxed mb-12 font-light text-lg">{outlet.description}</p>
                <div className="flex flex-wrap gap-6">
                  <button 
                    onClick={() => handleOpenMenu(outlet.name)}
                    className="group border border-marigold-700 text-marigold-700 px-10 py-4 hover:bg-marigold-700 hover:text-white transition-all font-bold uppercase text-[10px] tracking-[0.3em]"
                  >
                    VIEW MENU
                  </button>
                  <button 
                    onClick={() => handleOpenBooking(outlet.name)}
                    className="bg-marigold-700 text-white px-10 py-4 hover:bg-marigold-800 transition-all font-bold uppercase text-[10px] tracking-[0.3em] shadow-lg"
                  >
                    RESERVE TABLE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-marigold-50 py-32 px-6 border-t border-marigold-100">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-marigold-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Exclusive Gatherings</h4>
          <h2 className="text-4xl font-serif mb-8 text-luxury-dark">Private Dining & Events</h2>
          <p className="text-gray-500 mb-12 font-light leading-relaxed text-lg italic">
            "Whether it's a corporate dinner or a family celebration, our dining venues provide the perfect luxury backdrop with bespoke menus."
          </p>
          <button 
            onClick={() => window.location.hash = '#/contact'}
            className="bg-luxury-dark text-white px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-marigold-700 transition-all shadow-2xl"
          >
            INQUIRE ABOUT EVENTS
          </button>
        </div>
      </section>

      {/* Modals */}
      <MenuModal 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        restaurantName={activeRestaurant || ''} 
      />
      <DiningBookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        restaurantName={activeRestaurant || ''} 
      />
    </div>
  );
};

export default Dining;
