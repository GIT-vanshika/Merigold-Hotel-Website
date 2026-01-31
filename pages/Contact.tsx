
import React from 'react';
import { MARIGOLD_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message received! A Marigold Hotels representative will get back to you shortly.");
  };

  return (
    <div className="pt-24 bg-white">
      <section className="bg-marigold-900 text-white py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="https://media.weddingz.in/images/92581bb39518443d5fc987bb711f00ee/mgfha.jpg" className="w-full h-full object-cover scale-110 blur-sm" alt="Hotel" />
        </div>
        <div className="relative z-10">
          <h4 className="text-marigold-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Always At Your Service</h4>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Contact Us</h1>
          <div className="w-20 h-[1px] bg-marigold-500/50 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-marigold-100/70 text-lg font-light leading-relaxed">
            We are here to assist you with your reservations, event inquiries, and any questions about our 5-star services.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div className="space-y-16">
                <div>
                    <h2 className="text-4xl font-serif mb-12 text-luxury-dark">Get in Touch</h2>
                    <div className="space-y-12">
                        <div className="flex gap-8 group">
                            <div className="w-16 h-16 bg-marigold-50 border border-marigold-100 flex items-center justify-center shrink-0 group-hover:bg-marigold-600 transition-all duration-500">
                               <span className="text-2xl group-hover:scale-125 transition-transform">📍</span>
                            </div>
                            <div>
                                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-marigold-600 mb-2">Location</h4>
                                <p className="text-luxury-dark font-medium leading-relaxed max-w-xs">{MARIGOLD_DETAILS.location}</p>
                            </div>
                        </div>
                        <div className="flex gap-8 group">
                            <div className="w-16 h-16 bg-marigold-50 border border-marigold-100 flex items-center justify-center shrink-0 group-hover:bg-marigold-600 transition-all duration-500">
                               <span className="text-2xl group-hover:scale-125 transition-transform">📞</span>
                            </div>
                            <div>
                                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-marigold-600 mb-2">Phone</h4>
                                <p className="text-luxury-dark font-bold text-lg">{MARIGOLD_DETAILS.phones[0]}</p>
                                <p className="text-luxury-dark font-medium text-lg">{MARIGOLD_DETAILS.phones[1]}</p>
                            </div>
                        </div>
                        <div className="flex gap-8 group">
                            <div className="w-16 h-16 bg-marigold-50 border border-marigold-100 flex items-center justify-center shrink-0 group-hover:bg-marigold-600 transition-all duration-500">
                               <span className="text-2xl group-hover:scale-125 transition-transform">✉️</span>
                            </div>
                            <div>
                                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-marigold-600 mb-2">Email Channels</h4>
                                <p className="text-luxury-dark font-medium"><span className="text-marigold-700 font-bold uppercase text-[9px] mr-2">RESERVATIONS:</span> {MARIGOLD_DETAILS.emails.reservations}</p>
                                <p className="text-luxury-dark font-medium mt-1"><span className="text-marigold-700 font-bold uppercase text-[9px] mr-2">GENERAL:</span> {MARIGOLD_DETAILS.emails.info}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-marigold-50 p-12 border-l-4 border-marigold-500 shadow-sm">
                    <h3 className="font-serif text-2xl mb-6 text-luxury-dark italic">Excellence by Commitment</h3>
                    <p className="text-gray-600 leading-relaxed font-light italic">"Focused on service excellence, dining, meetings, and comfort. We are committed to providing an unparalleled luxury experience for every guest."</p>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-12 lg:p-16 border-t-[6px] border-marigold-700">
                <h3 className="text-3xl font-serif mb-12 text-luxury-dark">Send a Message</h3>
                <form className="space-y-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-2 group">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-marigold-600 transition-colors">Full Name</label>
                            <input required type="text" className="w-full border-b border-gray-100 p-3 focus:outline-none focus:border-marigold-700 transition-colors text-sm font-medium" placeholder="GUEST NAME" />
                        </div>
                        <div className="space-y-2 group">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-marigold-600 transition-colors">Email Address</label>
                            <input required type="email" className="w-full border-b border-gray-100 p-3 focus:outline-none focus:border-marigold-700 transition-colors text-sm font-medium" placeholder="GUEST@EMAIL.COM" />
                        </div>
                    </div>
                    <div className="space-y-2 group">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-marigold-600 transition-colors">Inquiry Type</label>
                        <select className="w-full border-b border-gray-100 p-3 focus:outline-none focus:border-marigold-700 transition-colors bg-white text-sm font-bold tracking-widest uppercase">
                            <option>Room Reservation</option>
                            <option>Event Booking</option>
                            <option>Dining Reservation</option>
                            <option>General Inquiry</option>
                        </select>
                    </div>
                    <div className="space-y-2 group">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-marigold-600 transition-colors">Message</label>
                        <textarea required rows={5} className="w-full border border-gray-100 p-6 focus:outline-none focus:border-marigold-700 transition-colors text-sm font-light resize-none bg-gray-50/30" placeholder="HOW CAN WE ASSIST YOU TODAY?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-luxury-dark text-white py-6 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-marigold-700 transition-all shadow-2xl active:translate-y-1">
                      SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
