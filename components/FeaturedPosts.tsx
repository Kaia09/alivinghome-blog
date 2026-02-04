
import React from 'react';
import PostCard from './PostCard';
import { MOCK_POSTS } from '../constants';

interface FeaturedPostsProps {
  onAuthorClick?: (author: string) => void;
  onPostClick?: (id: string) => void;
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ onAuthorClick, onPostClick }) => {
  const featured = MOCK_POSTS[0];
  const sidePosts = MOCK_POSTS.slice(1, 5);

  return (
    <section className="pt-20 pb-0 px-6 md:px-12 lg:px-24 bg-[#FCFBFA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#2d2a26] mb-10 text-center md:text-left">Featured Posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <PostCard post={featured} onAuthorClick={onAuthorClick} onClick={() => onPostClick?.(featured.id)} />
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm space-y-8">
              {sidePosts.map((post) => (
                <PostCard key={post.id} post={post} variant="small" onAuthorClick={onAuthorClick} onClick={() => onPostClick?.(post.id)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
