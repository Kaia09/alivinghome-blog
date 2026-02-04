
import React from 'react';
import { TAGS } from '../constants';

interface TagDiscoveryProps {
  onTagClick: (tag: string) => void;
}

const TagDiscovery: React.FC<TagDiscoveryProps> = ({ onTagClick }) => {
  return (
    <div>
      <h4 className="text-lg font-bold mb-6 text-[#2d2a26]">Explore Topics</h4>
      <div className="flex flex-wrap gap-2">
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className="px-4 py-2 rounded-full text-[11px] font-medium border border-gray-100 bg-[#f5f5f5] text-gray-500 hover:border-amber-200 hover:text-amber-800 hover:bg-amber-50 transition-all cursor-pointer whitespace-nowrap"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagDiscovery;
