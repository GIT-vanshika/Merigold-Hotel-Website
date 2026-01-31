
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MARIGOLD_DETAILS } from '../constants';

const Home: React.FC = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);
  revealRefs.current = [];

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  // Dynamic Greeting based on Hyderabad time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div>
      <style>{`
        .reveal-hidden { opacity: 0; transform: translateY(40px); transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        @keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slowZoom 20s infinite alternate linear; }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://marigold-by-greenpark.hyderabad-hotel.com/data/Pics/OriginalPhoto/15989/1598907/1598907114/marigold-by-greenpark-hotel-hyderabad-pic-4.JPEG" 
            alt="Marigold Hotel Exterior" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-5xl">
          <div className="mb-8 flex justify-center items-center gap-6 animate-fade-in-up">
            <div className="h-[1px] w-12 bg-marigold-500/50"></div>
            <h4 className="text-marigold-400 uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold">
              {getGreeting()} from Marigold
            </h4>
            <div className="h-[1px] w-12 bg-marigold-500/50"></div>
          </div>
          
          <h1 className="text-5xl md:text-9xl font-serif font-bold mb-10 tracking-tight animate-fade-in-up delay-100">
            Marigold <span className="text-marigold-500 italic block md:inline font-normal">Hotels</span>
          </h1>
          
          <p className="text-base md:text-xl font-light mb-16 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 opacity-80">
            A flagship signature by Greenpark Group. Redefining the 5-star business landscape in Hyderabad with urban elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 animate-fade-in-up delay-300">
            <Link to="/rooms" className="relative bg-marigold-600 hover:bg-marigold-700 text-white px-14 py-5 font-bold uppercase tracking-[0.3em] text-[10px] transition-all shadow-[0_20px_50px_-10px_rgba(204,132,0,0.4)] group overflow-hidden">
               <span className="relative z-10">EXPLORE SUITES</span>
               <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
            <Link to="/about" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-14 py-5 font-bold uppercase tracking-[0.3em] text-[10px] transition-all">
              OUR HERITAGE
            </Link>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <div className="w-[1px] h-12 bg-white/50 mx-auto"></div>
        </div>
      </section>

      {/* Innovation Section: Stay Curator */}
      <section className="py-32 bg-marigold-50/50 px-6 border-b border-marigold-100">
        <div ref={addToRefs} className="reveal-hidden max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
                <h4 className="text-marigold-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Exclusive Stay</h4>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 text-luxury-dark leading-tight">Curate Your Own Experience</h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
                  At Marigold, we believe luxury should be personal. Our concierge team is dedicated to tailoring your stay, from room selection to evening cocktails.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                   <div className="p-8 bg-white shadow-xl border-t-4 border-marigold-500">
                      <span className="text-3xl block mb-4">🥂</span>
                      <h4 className="font-bold text-[10px] uppercase tracking-widest mb-2">Bespoke Dining</h4>
                      <p className="text-[10px] text-gray-400">Personalized menus at Saffron Soul.</p>
                   </div>
                   <div className="p-8 bg-white shadow-xl border-t-4 border-marigold-500">
                      <span className="text-3xl block mb-4">💼</span>
                      <h4 className="font-bold text-[10px] uppercase tracking-widest mb-2">Business Excellence</h4>
                      <p className="text-[10px] text-gray-400">Priority hall booking and tech support.</p>
                   </div>
                </div>
                <button 
                  onClick={() => alert("Our concierge team is available 24/7 to personalize your stay. Please contact us via the contact form or phone to arrange bespoke services.")}
                  className="text-marigold-700 font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-4 hover:gap-6 transition-all"
                >
                  CONTACT CONCIERGE <span className="text-lg">→</span>
                </button>
            </div>
            <div className="w-full lg:w-1/2 relative group">
                <div className="relative z-10 overflow-hidden shadow-2xl">
                  <img src="https://r1imghtlak.mmtcdn.com/24705fca81ea11e78e72025f77df004f.jpg" alt="Curated Stay" className="w-full h-[600px] object-cover transition-transform duration-[3s] group-hover:scale-105" />
                </div>
                <div className="absolute -top-10 -right-10 w-60 h-60 bg-marigold-100 -z-0 opacity-50"></div>
                <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-marigold-200 -z-0"></div>
            </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-40 bg-white px-6 overflow-hidden">
        <div ref={addToRefs} className="reveal-hidden max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-1/2 relative">
                <div className="relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
                  <img 
                      src="https://marigold-by-greenpark.hyderabad-hotel.com/data/Pics/OriginalPhoto/12131/1213113/1213113091/marigold-by-greenpark-hotel-hyderabad-pic-70.JPEG" 
                      alt="Luxury Interior" 
                      className="w-full h-[700px] object-cover"
                  />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-marigold-600"></div>
                  <span className="text-marigold-700 font-bold tracking-[0.4em] uppercase text-[10px]">The Signature Philosophy</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight text-luxury-dark">New-Age <br/><span className="italic text-marigold-600">Luxury</span></h2>
                <div className="space-y-10 text-gray-500 leading-relaxed font-light text-xl">
                    <p>Marigold Hotels represents a masterclass in balancing corporate utility with high-end hospitality. Designed for the discerning global traveler, our spaces breathe contemporary elegance.</p>
                    <p className="text-gray-400 text-lg">From the grand halls of Peacock to the intimate vibes of Mystique, every corner is refined for your comfort.</p>
                </div>
                <div className="mt-16 pt-16 border-t border-gray-50 flex items-center gap-12">
                  <div className="text-center group cursor-default">
                    <span className="block text-4xl font-serif text-marigold-600 mb-2 transition-transform group-hover:-translate-y-1">181</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">Residences</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100"></div>
                  <div className="text-center group cursor-default">
                    <span className="block text-4xl font-serif text-marigold-600 mb-2 transition-transform group-hover:-translate-y-1">05</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">Diamond Stars</span>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-40 bg-luxury-dark text-white px-6">
        <div ref={addToRefs} className="reveal-hidden max-w-7xl mx-auto">
            <div className="text-center mb-32">
                <h4 className="text-marigold-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-6">Private Retreats</h4>
                <h2 className="text-5xl md:text-7xl font-serif mb-10">Iconic Spaces</h2>
                <div className="w-20 h-[1px] bg-marigold-500/30 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {MARIGOLD_DETAILS.rooms.slice(0, 3).map((room, idx) => (
                    <Link to="/rooms" key={room.id} className={`group block relative h-[600px] overflow-hidden ${idx === 1 ? 'lg:-translate-y-12' : ''} transition-all duration-700`}>
                        <img src={room.image} alt={room.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700"></div>
                        <div className="absolute bottom-0 left-0 p-12 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                            <span className="text-marigold-400 font-bold uppercase tracking-[0.3em] text-[9px] mb-4 block opacity-0 group-hover:opacity-100 transition-opacity">Discover Category 0{idx+1}</span>
                            <h3 className="text-3xl font-serif mb-6 text-white">{room.name}</h3>
                            <div className="h-[1px] w-0 bg-marigold-500 group-hover:w-full transition-all duration-1000"></div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-32">
               <Link to="/rooms" className="text-marigold-500 font-bold uppercase tracking-[0.4em] text-[11px] border-b border-marigold-500/20 pb-4 hover:text-white hover:border-white transition-all">
                  VIEW ALL ACCOMMODATIONS
               </Link>
            </div>
        </div>
      </section>

      {/* Culinary Section Refined */}
      <section className="py-40 bg-white px-6">
        <div ref={addToRefs} className="reveal-hidden max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
                <div className="aspect-[4/5] overflow-hidden shadow-2xl relative z-10">
                    <img src="https://marigold-by-greenpark.hyderabad-hotel.com/data/Photos/OriginalPhoto/16065/1606565/1606565986.JPEG" className="w-full h-full object-cover" alt="Dining" />
                </div>
                <div className="absolute -bottom-12 -right-12 w-full h-full bg-marigold-50 -z-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-marigold-200 z-20 pointer-events-none"></div>
            </div>
            <div>
                <span className="text-marigold-700 font-bold tracking-[0.4em] uppercase text-[10px]">Gastronomy</span>
                <h2 className="text-5xl md:text-7xl font-serif mt-10 mb-12 leading-tight text-luxury-dark">Art on a <br/><span className="italic">Plate</span></h2>
                <div className="space-y-16">
                    {MARIGOLD_DETAILS.dining.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="group border-b border-gray-50 pb-10">
                            <h3 className="text-2xl font-serif text-luxury-dark mb-4 group-hover:text-marigold-600 transition-colors">{item.name}</h3>
                            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-lg">{item.description}</p>
                        </div>
                    ))}
                </div>
                <Link to="/dining" className="mt-16 inline-block bg-luxury-dark text-white px-12 py-5 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-marigold-700 transition-all shadow-xl">
                  BOOK A TABLE
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
