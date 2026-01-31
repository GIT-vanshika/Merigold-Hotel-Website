
import React from 'react';
import { MARIGOLD_DETAILS } from '../constants';

const Careers: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="bg-marigold-50 py-32 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-marigold-900 text-white p-12">
                <h1 className="text-4xl font-serif mb-8 text-marigold-300">Join Our Team</h1>
                <p className="text-marigold-100/70 mb-8 leading-relaxed">
                    Be a part of a 5-star hospitality tradition. At Marigold Hotels, we value service excellence and a passion for luxury hospitality.
                </p>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-marigold-700 rounded-sm flex items-center justify-center font-bold">1</div>
                        <div>
                            <h4 className="font-bold">Growth</h4>
                            <p className="text-sm text-marigold-200">Opportunities for career advancement within Greenpark Group.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-marigold-700 rounded-sm flex items-center justify-center font-bold">2</div>
                        <div>
                            <h4 className="font-bold">Excellence</h4>
                            <p className="text-sm text-marigold-200">Work in an environment that prioritizes world-class standards.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-marigold-100 rounded-full flex items-center justify-center mb-8">
                    <svg className="w-10 h-10 text-marigold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-serif mb-4">Send Your Application</h2>
                <p className="text-gray-600 mb-8">
                    Interested candidates may send their resumes to:
                </p>
                <a 
                    href={`mailto:${MARIGOLD_DETAILS.emails.careers}`} 
                    className="text-2xl font-bold text-marigold-700 hover:text-marigold-900 transition-colors border-b-2 border-marigold-200 hover:border-marigold-700"
                >
                    {MARIGOLD_DETAILS.emails.careers}
                </a>
            </div>
        </div>
      </section>

      {/* Philosophy Brief */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif mb-6 italic">"A mix of contemporary style and new-age luxury."</h3>
            <p className="text-gray-500">We are always looking for well-trained, passionate individuals to join our conventions, events, dining, and meetings staff.</p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
