
import React from 'react';
import { POPULAR_CATEGORIES } from '../constants';

interface PopularCategoriesProps {
  onCategoryClick: (id: string, name: string) => void;
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({ onCategoryClick }) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold text-[#2d2a26]">Popular Categories</h2>
          <div className="flex gap-2">
            <button className="p-2 border rounded-full hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x scrollbar-hide no-scrollbar">
          {POPULAR_CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="flex-shrink-0 w-44 md:w-52 group cursor-pointer snap-start"
              onClick={() => onCategoryClick(cat.id, cat.name)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md mb-4 group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={cat.imageUrl} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                  <span className="text-white font-medium text-sm md:text-base drop-shadow-md">
                    {cat.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
