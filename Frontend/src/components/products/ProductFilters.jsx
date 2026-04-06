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
        className="flex items-center justify-between w-full text-left py-2 group"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-100 group-hover:text-amber-500 transition-all duration-300">
          {section.label}
        </span>
        <div className="p-1 rounded-full group-hover:bg-zinc-800/50 transition-colors">
          {isOpen ? (
            <ChevronUp className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-500" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-500" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 space-y-4">
              {section.options.map((option) => {
                const isActive = activeFilters[section.id] === option.value ||
                  (section.id === 'trending' && activeFilters[option.value] === 'true');

                return (
                  <label
                    key={option.value}
                    className="flex items-center gap-4 cursor-pointer group/item select-none"
                    onClick={(e) => {
                      e.preventDefault();
                      onFilterChange(section.id, option.value);
                    }}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border transition-all duration-500 flex items-center justify-center relative overflow-hidden
                        ${isActive
                          ? 'border-amber-500 bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                          : 'border-zinc-700 bg-zinc-900/50 group-hover/item:border-zinc-500 group-hover/item:bg-zinc-800/50'}`}
                    >
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="w-2 h-2 bg-amber-500 rounded-[2px] shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                        />
                      )}

                      {/* Subtle hover pulse */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <span
                      className={`text-[13px] tracking-wide transition-all duration-300
                        ${isActive
                          ? 'text-white font-medium transform translate-x-1'
                          : 'text-zinc-400 group-hover/item:text-zinc-200'}`}
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
    <div className={`flex flex-col h-full ${isMobile ? 'bg-zinc-950 p-8' : 'pr-6 sticky top-32'}`}>
      <div className={`flex flex-col ${!isMobile && 'bg-zinc-900/20 rounded-2xl border border-zinc-800/30 p-8 shadow-2xl backdrop-blur-sm'}`}>
        <div className="flex items-center justify-between mb-10">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif text-white uppercase tracking-[0.1em]">Filters</h3>
            <div className="h-px w-8 bg-amber-500/50" />
          </div>
          {isMobile && (
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar no-scrollbar pr-4 space-y-2">
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

        <div className="mt-8 pt-8 border-t border-zinc-900">
          <button
            onClick={onClearFilters}
            className="w-full py-4 text-[11px] uppercase tracking-[0.25em] font-extrabold text-zinc-300 border border-zinc-800 hover:border-amber-500/50 hover:text-amber-500 hover:bg-amber-500/5 transition-all duration-500 rounded-xl bg-zinc-900/50"
          >
            Reset All Filters
          </button>
        </div>
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
