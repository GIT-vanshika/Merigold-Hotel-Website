
import React from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, restaurantName }) => {
  if (!isOpen) return null;

  const menus: Record<string, { items: { name: string, price: string, desc: string }[] }> = {
    "Saffron Soul – World Café": {
      items: [
        { name: "Saffron Infused Risotto", price: "₹850", desc: "Creamy arborio rice with premium Persian saffron and gold leaf." },
        { name: "Truffle Mushroom Soup", price: "₹450", desc: "Wild forest mushrooms drizzled with white truffle oil." },
        { name: "Marigold Special Thali", price: "₹1200", desc: "A curated selection of regional delicacies with luxury pairings." },
        { name: "Grilled Atlantic Salmon", price: "₹1450", desc: "Pan-seared salmon with lemon-herb butter and seasonal greens." }
      ]
    },
    "Mekong – Pan Asian Speciality Restaurant": {
      items: [
        { name: "Dim Sum Platter", price: "₹750", desc: "Assorted handmade dumplings with traditional dipping sauces." },
        { name: "Mekong Red Curry", price: "₹950", desc: "Traditional Thai red curry with coconut milk and choice of protein." },
        { name: "Beijing Duck", price: "₹1800", desc: "Authentic roasted duck served with pancakes and hoisin sauce." },
        { name: "Matcha Lava Cake", price: "₹450", desc: "Warm green tea cake with a decadent melting center." }
      ]
    },
    "Mystique – Lounge & Bar": {
      items: [
        { name: "The Gold Old Fashioned", price: "₹1200", desc: "Premium bourbon, aromatic bitters, and a twist of orange peel." },
        { name: "Artisanal Cheese Board", price: "₹950", desc: "Selection of imported cheeses served with honey and nuts." },
        { name: "Signature Tapas Platter", price: "₹850", desc: "Small bites inspired by Mediterranean and local flavors." },
        { name: "Spiced Marigold Martini", price: "₹1100", desc: "Vodka based cocktail with a hint of floral marigold essence." }
      ]
    }
  };

  const menu = menus[restaurantName] || { items: [] };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-luxury-dark/90 backdrop-blur-xl" onClick={onClose} />
      <div className="relative bg-white w-full max-w-2xl shadow-2xl animate-fade-in-up">
        <div className="p-8 md:p-12 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h4 className="text-marigold-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Dining Collection</h4>
            <h3 className="font-serif text-3xl text-luxury-dark">{restaurantName} Menu</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-marigold-600 transition-colors p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8 md:p-12 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="space-y-10">
            {menu.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start gap-6 border-b border-dashed border-gray-100 pb-6 last:border-0">
                <div className="flex-1">
                  <h5 className="font-bold text-luxury-dark uppercase tracking-widest text-sm mb-2">{item.name}</h5>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-marigold-700 font-serif font-bold text-lg">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 bg-marigold-50 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Pricing is exclusive of applicable luxury taxes.</p>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
