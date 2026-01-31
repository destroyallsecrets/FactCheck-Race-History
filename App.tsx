
import React, { useState, useMemo } from 'react';
import { FACT_SECTIONS, RESOURCES } from './constants';
import FactCard from './components/FactCard';
import ComparisonTable from './components/ComparisonTable';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSections = useMemo(() => {
    return FACT_SECTIONS.filter(section => {
      const matchesSearch = 
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.myth.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.fact.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = activeCategory ? section.category === activeCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const categories = Array.from(new Set(FACT_SECTIONS.map(s => s.category)));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-stone-900 text-white p-2 rounded-lg rotate-3">
              <i className="fa-solid fa-scroll text-xl"></i>
            </div>
            <span className="text-xl font-bold tracking-tight text-stone-900">
              FactCheck: <span className="text-stone-500 font-medium">Race & History</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#archive" className="text-sm font-semibold text-stone-600 hover:text-stone-900">Fact Archive</a>
            <a href="#comparison" className="text-sm font-semibold text-stone-600 hover:text-stone-900">System Comparison</a>
            <a href="#resources" className="text-sm font-semibold text-stone-600 hover:text-stone-900">Reading List</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="archive-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Knowledge is the first step to <span className="italic text-stone-400">Justice</span>.
          </h1>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            A verified digital record for debunking myths and examining the documented history of systemic race relations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#archive" className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-stone-200 transition-colors">
              Access the Archive
            </a>
            <button 
              onClick={() => document.getElementById('search-input')?.focus()}
              className="bg-stone-800 text-white border border-stone-700 px-8 py-4 rounded-full font-bold hover:bg-stone-700 transition-colors"
            >
              Search Data Points
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Search & Filter Interface */}
        <section id="archive" className="scroll-mt-24 mb-24">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-stone-900 mb-2">Digital Archive Search</h2>
                <p className="text-stone-600">Instantly query historical evidence, legislation, and systemic data points.</p>
              </div>
              <div className="relative flex-grow max-w-lg">
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
                <input 
                  id="search-input"
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. Redlining, Homestead Act, Tulsa..."
                  className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <button 
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === null ? 'bg-stone-900 text-white shadow-md' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                All Records
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat ? 'bg-stone-900 text-white shadow-md' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filteredSections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSections.map((section) => (
                  <FactCard key={section.id} section={section} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200">
                <i className="fa-solid fa-box-open text-4xl text-stone-300 mb-4 block"></i>
                <p className="text-stone-500 font-medium">No archived evidence matching "{searchTerm}"</p>
                <button onClick={() => setSearchTerm('')} className="mt-4 text-stone-900 font-bold underline">Clear all filters</button>
              </div>
            )}
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="scroll-mt-24 mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Chattel vs. Global Slavery Systems</h2>
            <p className="text-stone-600">
              A detailed legal comparison of the specific framework of New World Chattel slavery compared to pre-colonial and ancient models.
            </p>
          </div>
          <ComparisonTable />
        </section>

        {/* Quick Facts / Resilience Highlights */}
        <section className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-400 font-black uppercase text-xs tracking-widest mb-4 block">Documented Resilience</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Wealth Amid Exclusion</h2>
              <p className="text-stone-400 mb-8 leading-relaxed">
                History is often taught as a timeline of oppression alone. However, the archive documents a parallel history of extreme agency: the founding of hundreds of mutual aid societies, the construction of thriving business districts, and the preservation of culture that redefined global music and art.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-stone-800 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <p className="text-stone-500 text-xs">HBCUs founded by Black Americans during legal segregation.</p>
                </div>
                <div className="p-4 bg-stone-800 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">$0</div>
                  <p className="text-stone-500 text-xs">Public dollars granted to 'Black Wall Street' for its development.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-4">Did You Know?</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <i className="fa-solid fa-circle-info text-blue-500 mt-1"></i>
                  <p className="text-sm text-stone-300">The 1862 Homestead Act enabled 1.6 million white families to acquire land, while the formerly enslaved were legally barred from the same opportunity.</p>
                </li>
                <li className="flex gap-4">
                  <i className="fa-solid fa-circle-info text-blue-500 mt-1"></i>
                  <p className="text-sm text-stone-300">Jazz, Blues, and Rock & Roll were birthed from survival—the adaptation of West African rhythms preserved through generations of psychological resilience.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="scroll-mt-24 pb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Verified Reading List</h2>
            <p className="text-stone-600">Academic sources used to verify the data points in this archive.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCES.map((res, idx) => (
              <a 
                key={idx} 
                href={res.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-6 bg-white border border-stone-200 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="mb-4 text-blue-600 opacity-50 group-hover:opacity-100 transition-opacity">
                  <i className="fa-solid fa-book-open text-2xl"></i>
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-1">{res.title}</h4>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">By {res.author}</p>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{res.description}</p>
                <div className="text-sm font-bold text-blue-600 flex items-center gap-2">
                  Verify Record <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-stone-900 text-white p-2 rounded-lg">
                <i className="fa-solid fa-scroll"></i>
              </div>
              <span className="text-lg font-bold tracking-tight text-stone-900">
                FactCheck: Race & History
              </span>
            </div>
            <p className="text-sm text-stone-500">A digital commons dedicated to historical truth and public education.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
            <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><i className="fa-brands fa-github text-xl"></i></a>
            <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><i className="fa-solid fa-envelope text-xl"></i></a>
          </div>
          <p className="text-sm text-stone-400">© 2024 Educational Research Commons.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
