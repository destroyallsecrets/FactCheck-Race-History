
import React, { useState } from 'react';
import { FactSection } from '../types';

interface FactCardProps {
  section: FactSection;
}

const FactCard: React.FC<FactCardProps> = ({ section }) => {
  const [showFact, setShowFact] = useState(false);

  return (
    <div className={`relative group p-6 rounded-2xl border transition-all duration-500 h-full flex flex-col ${
      showFact 
        ? 'bg-white border-blue-200 shadow-lg ring-1 ring-blue-50' 
        : 'bg-stone-100 border-stone-200 hover:border-stone-300'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
          showFact ? 'bg-blue-600 text-white' : 'bg-stone-200 text-stone-500'
        }`}>
          <i className={`fa-solid ${section.icon}`}></i>
        </div>
        <button 
          onClick={() => setShowFact(!showFact)}
          className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors ${
            showFact 
              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
              : 'bg-stone-800 text-white hover:bg-stone-950'
          }`}
        >
          {showFact ? 'View Myth' : 'Reveal Fact'}
        </button>
      </div>

      <h3 className="text-xl font-bold text-stone-900 mb-3">{section.title}</h3>

      <div className="flex-grow">
        {!showFact ? (
          <div className="space-y-2 animate-in fade-in duration-300">
            <span className="text-[10px] font-black uppercase text-red-600 tracking-widest">Common Myth</span>
            <p className="text-stone-600 italic leading-relaxed">"{section.myth}"</p>
          </div>
        ) : (
          <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-300">
            <div>
              <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Documented Fact</span>
              <p className="text-stone-900 font-medium leading-relaxed">{section.fact}</p>
            </div>
            <ul className="space-y-2">
              {section.details.map((detail, idx) => (
                <li key={idx} className="text-sm text-stone-600 flex gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FactCard;
