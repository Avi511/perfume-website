import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

const filterData = [
  {
    id: 'gender',
    label: 'By Gender',
    options: [
      { label: 'Men', value: 'Men' },
      { label: 'Women', value: 'Women' },
    ],
  },
  {
    id: 'fragranceFamily',
    label: 'By Fragrance Family',
    options: [
      { label: 'Floral', value: 'Floral' },
      { label: 'Woody', value: 'Woody' },
      { label: 'Fresh / Citrus', value: 'Fresh / Citrus' },
      { label: 'Oriental / Spicy', value: 'Oriental / Spicy' },
      { label: 'Gourmand', value: 'Gourmand' },
    ],
  },
  {
    id: 'occasion',
    label: 'By Occasion',
    options: [
      { label: 'Everyday / Office', value: 'Everyday / Office' },
      { label: 'Date Night', value: 'Date Night' },
      { label: 'Party / Night Out', value: 'Party / Night Out' },
      { label: 'Formal / Luxury', value: 'Formal / Luxury' },
      { label: 'Sport / Fresh wear', value: 'Sport / Fresh wear' },
    ],
  },
  {
    id: 'season',
    label: 'By Season',
    options: [
      { label: 'Summer / Fresh', value: 'Summer / Fresh' },
      { label: 'Winter / Warm & Spicy', value: 'Winter / Warm & Spicy' },
      { label: 'All-season', value: 'All-season' },
    ],
  },
  {
    id: 'priceRange',
    label: 'By Price Range',
    options: [
      { label: 'Budget', value: 'Budget' },
      { label: 'Mid-range', value: 'Mid-range' },
      { label: 'Premium / Luxury', value: 'Premium / Luxury' },
    ],
  },
  {
    id: 'longevity',
    label: 'By Longevity / Strength',
    options: [
      { label: 'Light & Fresh', value: 'Light & Fresh' },
      { label: 'Moderate', value: 'Moderate' },
      { label: 'Long-lasting / Strong', value: 'Long-lasting / Strong' },
    ],
  },
  {
    id: 'trending',
    label: 'By New & Trending',
    options: [
      { label: 'New Arrivals', value: 'isNewArrival' },
      { label: 'Best Sellers', value: 'isBestSeller' },
      { label: 'Trending Now', value: 'isTrending' },
    ],
  },
];

const FilterSection = ({ section, activeFilters, onFilterChange, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-zinc-800 py-4">
      <button
        onClick={() => toggleOpen(section.id)}
        className="flex items-center justify-between w-full text-left group"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-amber-500 transition-colors">
          {section.label}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-zinc-500 group-hover:text-amber-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-amber-500" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-3">
              {section.options.map((option) => {
                const isActive = activeFilters[section.id] === option.value ||
                  (section.id === 'trending' && activeFilters[option.value] === 'true');

                return (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-sm border transition-all duration-300 flex items-center justify-center
                        ${isActive
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-zinc-700 bg-transparent group-hover:border-zinc-500'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onFilterChange(section.id, option.value);
                      }}
                    >
                      {isActive && <div className="w-1.5 h-1.5 bg-amber-500 rounded-[1px]" />}
                    </div>
                    <span
                      className={`text-sm transition-colors duration-300
                        ${isActive ? 'text-white font-medium' : 'text-zinc-500 group-hover:text-zinc-300'}`}
                      onClick={() => onFilterChange(section.id, option.value)}
                    >
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductFilters = ({ activeFilters, onFilterChange, onClearFilters, isMobile, setIsOpen }) => {
  const [openSections, setOpenSections] = React.useState({
    gender: true,
    fragranceFamily: true
  });

  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const content = (
    <div className={`flex flex-col h-full ${isMobile ? 'bg-zinc-950 p-6' : 'pr-8 sticky top-32'}`}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-serif text-white uppercase tracking-widest">Filters</h3>
        {isMobile && (
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar no-scrollbar pr-2">
        {filterData.map((section) => (
          <FilterSection
            key={section.id}
            section={section}
            activeFilters={activeFilters}
            onFilterChange={onFilterChange}
            isOpen={openSections[section.id]}
            toggleOpen={toggleSection}
          />
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-800">
        <button
          onClick={onClearFilters}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500 hover:text-white transition-colors"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[100] bg-zinc-950"
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default ProductFilters;
