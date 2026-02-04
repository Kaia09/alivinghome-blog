
import React, { useState } from 'react';
import { Post } from '../types';
import PostCard from './PostCard';
import { MOCK_POSTS } from '../constants';

interface BlogPostProps {
  post: Post;
  onHomeClick: () => void;
  onCategoryClick: (cat: string) => void;
  onAuthorClick: (author: string) => void;
  onPostClick: (id: string) => void;
  renderSidebar: () => React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  post, 
  onHomeClick, 
  onCategoryClick, 
  onAuthorClick,
  onPostClick,
  renderSidebar
}) => {
  const [tocOpen, setTocOpen] = useState(true);
  const [reviewOpen, setReviewOpen] = useState(true);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 mb-8">
          <button onClick={onHomeClick} className="hover:text-amber-800 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => onCategoryClick(post.category)} className="hover:text-amber-800 transition-colors">{post.category}</button>
          <span>/</span>
          <span className="text-gray-900 font-bold truncate max-w-[200px]">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <header className="mb-10">
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-[10px] font-bold uppercase rounded mb-4">
                {post.category}
              </span>
              <h1 className="serif text-4xl md:text-6xl text-[#2d2a26] leading-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 py-4 border-y border-gray-100 mb-8">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => onAuthorClick(post.author || '')}>
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Author" />
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Written by</span>{' '}
                  <button onClick={() => onAuthorClick(post.author || '')} className="font-bold hover:text-amber-800 transition-colors">{post.author}</button>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-400">{post.publishDate}</span>
                </div>
                <div className="ml-auto flex gap-3 text-gray-400">
                  <button className="hover:text-black transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></button>
                  <button className="hover:text-black transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg></button>
                </div>
              </div>

              <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
                <img src={post.imageUrl} className="w-full h-full object-cover" alt={post.title} />
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
              <p>
                Choosing the right sleeper sofa is more than just picking a pretty piece of furniture—it's about finding that elusive sweet spot between a comfortable nightly sleep and a stylish day lounge. In 2025, the technology behind reclining and sleeper mechanisms has evolved significantly.
              </p>

              {/* Table of Contents */}
              <div className="bg-[#fcfaf7] border border-amber-100/30 rounded-2xl p-6 mb-12 shadow-sm">
                <button 
                  onClick={() => setTocOpen(!tocOpen)}
                  className="flex items-center justify-between w-full text-left font-bold text-[#2d2a26]"
                >
                  Table of Contents
                  <svg className={`transform transition-transform ${tocOpen ? 'rotate-180' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                {tocOpen && (
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 border-t border-amber-100/50 pt-4 list-decimal pl-5 marker:font-bold">
                    <li><a href="#how-we-tested" className="hover:text-amber-800 transition-colors">How We Tested and Rated the Best Sleeper Sofas in 2025</a></li>
                    <li><a href="#top-picks" className="hover:text-amber-800 transition-colors">Top 1-10 | Best Sleeper Sofa 2025</a></li>
                    <li><a href="#pros-cons" className="hover:text-amber-800 transition-colors">Pros and Cons of Modern Sleepers</a></li>
                    <li><a href="#buyer-guide" className="hover:text-amber-800 transition-colors">Buying Guide: How To Choose The Right Sleeper Sofa</a></li>
                  </ul>
                )}
              </div>

              <h2 id="how-we-tested" className="serif text-3xl text-[#2d2a26] mt-12 mb-6">How We Tested and Rated</h2>
              <p>To build this guide to the best sofa sleepers in 2025, our team combined in-house testing with market research and real-user feedback. Our editors spent time sitting, lounging, and sleeping on each model where possible.</p>
              
              {/* Feature Table */}
              <div className="overflow-x-auto my-10 rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#f9f7f4] text-[#2d2a26] uppercase font-bold tracking-tighter">
                    <tr>
                      <th className="px-6 py-4">Rank</th>
                      <th className="px-6 py-4">Product</th>
                      <th className="px-6 py-4">Overall</th>
                      <th className="px-6 py-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="px-6 py-4 font-bold">1</td>
                      <td className="px-6 py-4">American Leather Sleeper Sofa</td>
                      <td className="px-6 py-4 text-amber-500">★★★★★</td>
                      <td className="px-6 py-4">Best overall sleeper sofa</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold">2</td>
                      <td className="px-6 py-4">POVISON Power Reclining Loveseat</td>
                      <td className="px-6 py-4 text-amber-500">★★★★★</td>
                      <td className="px-6 py-4">Tech-friendly movie nights</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="pros-cons" className="serif text-3xl text-[#2d2a26] mt-12 mb-6">The Real Breakdown</h2>

              {/* Dedicated Pros and Cons Block */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <div className="bg-[#E9FEF3] p-4 text-center rounded-lg mb-6 shadow-sm border border-[#D5F9E4]">
                      <h4 className="font-bold text-[#2d2a26] text-lg">What We Like:</h4>
                    </div>
                    <ul className="space-y-3 px-2">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Spacious deep-seat design</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Water- & scratch-resistant fabric</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Sturdy frame with strong support</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="bg-[#FEE9EC] p-4 text-center rounded-lg mb-6 shadow-sm border border-[#F9D5DB]">
                      <h4 className="font-bold text-[#2d2a26] text-lg">What We Don't Like</h4>
                    </div>
                    <ul className="space-y-3 px-2">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Hard to move</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Manual conversion</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>Firm cushions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* User Review Block */}
                <div className="mt-10 border-t border-gray-100 pt-8">
                  <button 
                    onClick={() => setReviewOpen(!reviewOpen)}
                    className="flex items-center gap-2 font-bold text-[#2d2a26] hover:text-amber-800 transition-colors mb-4"
                  >
                    <svg className={`transform transition-transform ${reviewOpen ? '' : '-rotate-90'}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
                    <span className="text-xl">📝 User Review</span>
                  </button>
                  {reviewOpen && (
                    <div className="pl-6">
                      <p className="text-gray-600 leading-relaxed italic">
                        The Power Sofa Bed blends into our home without much fuss. Still, the material could be softer to enhance comfort.
                      </p>
                      <p className="text-gray-400 text-sm mt-3">(Ian, 2025/6/18)</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced CTA Button Section */}
              <div className="py-12 flex flex-col items-center gap-4">
                <button className="px-12 py-4 bg-[#2d2a26] text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95">
                  Shop Power Sofa Collection
                </button>
                <p className="text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
                  ⭐ 4.9/5 User Rating | 30-Day Money Back | 5-Year Warranty
                </p>
              </div>

              <h2 id="buyer-guide" className="serif text-3xl text-[#2d2a26] mt-12 mb-6">Buying Guide: Tips for a Smart Choice</h2>
              <p>Selecting the best sleeper sofa isn't only about looks. Here's how to make a smart choice based on your room size and lifestyle:</p>
              <div className="space-y-6 pl-4 border-l-2 border-gray-100 ml-2">
                <div>
                  <h4 className="font-bold text-[#2d2a26]">1. Measure Your Space</h4>
                  <p className="text-sm">Allow minimum 90 inches clearance in front of the sofa for pull-outs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2d2a26]">2. Choose The Right Mattress</h4>
                  <p className="text-sm">Memory foam is best for everyday use; Innersprings are great for occasional guests.</p>
                </div>
              </div>
            </div>

            {/* Author Footer Card */}
            <div className="mt-20 border-t border-gray-100 pt-12">
              <div className="bg-[#FCFBFA] p-8 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => onAuthorClick(post.author || '')}>
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Author" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase font-bold tracking-widest text-amber-800 mb-1">About the author</p>
                  <h4 className="serif text-3xl text-[#2d2a26] mb-3">{post.author}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    Kaia is a passionate interior designer and home lifestyle specialist. She curates guides that blend ergonomics with timeless design.
                  </p>
                  <button onClick={() => onAuthorClick(post.author || '')} className="text-xs font-bold uppercase border-b-2 border-[#2d2a26] pb-1 hover:text-amber-800 hover:border-amber-800 transition-all">View all posts</button>
                </div>
              </div>
            </div>

            {/* Related Posts Section */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-[#2d2a26] mb-10 pb-4 border-b border-gray-100">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MOCK_POSTS.slice(0, 3).map(related => (
                  <PostCard key={related.id} post={related} variant="horizontal" onAuthorClick={onAuthorClick} onClick={() => onPostClick(related.id)} />
                ))}
              </div>
            </div>

            {/* Comment Section Placeholder */}
            <div className="mt-20 bg-gray-50/50 p-10 rounded-3xl">
              <h3 className="text-xl font-bold text-[#2d2a26] mb-8">Leave a Comment</h3>
              <form className="space-y-4">
                <textarea placeholder="Your comment here..." className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-amber-500 h-32 focus:outline-none"></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none" />
                  <input type="email" placeholder="Email" className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none" />
                </div>
                <button type="submit" className="bg-[#2d2a26] text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors">Post Comment</button>
              </form>
            </div>
          </article>

          {/* Sidebar */}
          {renderSidebar()}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
