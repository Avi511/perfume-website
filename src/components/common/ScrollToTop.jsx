import React from 'react';

const ScrollToTop = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      onClick={handleScroll}
      className="fixed bottom-4 right-4 p-3 bg-black text-white rounded-full hover:opacity-90 transition z-40"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
