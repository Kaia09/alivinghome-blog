
import React from 'react';
import { Post } from '../types';
import PostCard from './PostCard';

interface CategoryBlockProps {
  title: string;
  posts: Post[];
  onViewMore: () => void;
  onAuthorClick?: (author: string) => void;
  onPostClick?: (id: string) => void;
}

const CategoryBlock: React.FC<CategoryBlockProps> = ({ title, posts, onViewMore, onAuthorClick, onPostClick }) => {
  return (
    <div className="mb-20">
      <div className="flex items-end justify-between mb-8 border-b border-gray-100 pb-4">
        <h3 className="text-2xl font-bold text-[#2d2a26]">{title}</h3>
        <button 
          onClick={onViewMore}
          className="text-sm font-medium text-amber-800 hover:text-amber-600 flex items-center gap-1 transition-colors"
        >
          View More 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} variant="horizontal" onAuthorClick={onAuthorClick} onClick={() => onPostClick?.(post.id)} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBlock;
