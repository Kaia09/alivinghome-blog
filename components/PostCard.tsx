
import React from 'react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  variant?: 'horizontal' | 'vertical' | 'small';
  onAuthorClick?: (author: string) => void;
  onClick?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, variant = 'vertical', onAuthorClick, onClick }) => {
  const authorDisplay = post.author ? `By ${post.author}` : '';

  const handleAuthorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAuthorClick && post.author) {
      onAuthorClick(post.author);
    }
  };

  const handleClick = () => {
    if (onClick) onClick();
  };

  if (variant === 'small') {
    return (
      <div className="flex gap-4 group cursor-pointer" onClick={handleClick}>
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
            {post.category} {post.author && (
              <>
                • <button onClick={handleAuthorClick} className="hover:text-amber-700 transition-colors uppercase">{authorDisplay}</button>
              </>
            )}
          </span>
          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-amber-700 transition-colors">
            {post.title}
          </h4>
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className="flex flex-col gap-3 group cursor-pointer" onClick={handleClick}>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div>
          <span className="text-xs text-gray-400 mb-1 block">
            <button onClick={handleAuthorClick} className="hover:text-amber-800 font-medium">{authorDisplay}</button> {post.author && post.publishDate && '•'} {post.publishDate}
          </span>
          <h3 className="text-lg font-semibold leading-snug group-hover:text-amber-800 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm mt-2 line-clamp-2 font-light">
            {post.excerpt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300" onClick={handleClick}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-amber-50 text-amber-800 text-[10px] font-bold uppercase rounded">
            {post.category}
          </span>
          <span className="text-xs text-gray-400">
            <button onClick={handleAuthorClick} className="hover:text-amber-800 font-medium">{authorDisplay}</button> {post.author && post.publishDate && '•'} {post.publishDate}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-amber-800">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 font-light">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
