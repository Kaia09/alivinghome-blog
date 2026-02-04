
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PopularCategories from './components/PopularCategories';
import FeaturedPosts from './components/FeaturedPosts';
import CategoryBlock from './components/CategoryBlock';
import TagDiscovery from './components/TagDiscovery';
import PostCard from './components/PostCard';
import BlogPost from './components/BlogPost';
import { MOCK_POSTS, TAGS } from './constants';

type Page = {
  type: 'home' | 'category' | 'tag' | 'author' | 'post';
  id: string;
  name: string;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>({ type: 'home', id: 'home', name: 'Home' });

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateToCategory = (catId: string, catName: string) => {
    setCurrentPage({ type: 'category', id: catId, name: catName });
  };

  const navigateToTag = (tag: string) => {
    setCurrentPage({ type: 'tag', id: tag, name: tag });
  };

  const navigateToAuthor = (authorName: string) => {
    setCurrentPage({ type: 'author', id: authorName.toLowerCase(), name: authorName });
  };

  const navigateToPost = (postId: string) => {
    const post = MOCK_POSTS.find(p => p.id === postId);
    if (post) {
      setCurrentPage({ type: 'post', id: postId, name: post.title });
    }
  };

  const navigateToHome = () => {
    setCurrentPage({ type: 'home', id: 'home', name: 'Home' });
  };

  const getPostsByCat = (catName: string) => 
    MOCK_POSTS.filter(p => p.category.toLowerCase() === catName.toLowerCase());

  const getPostsByTag = (tag: string) => {
    return MOCK_POSTS.filter((_, idx) => (idx + tag.length) % 2 === 0);
  };

  const getPostsByAuthor = (authorName: string) => {
    return MOCK_POSTS.filter(p => p.author?.toLowerCase() === authorName.toLowerCase());
  };

  const renderSidebar = () => (
    <div className="lg:col-span-4 relative">
      <div className="sticky top-24 space-y-12">
        {/* Promotion Ad */}
        <div className="rounded-3xl overflow-hidden shadow-sm aspect-[4/5] relative">
          <img 
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" 
            alt="Promotion" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
            <h5 className="text-2xl serif mb-2">Modern Haven Collection</h5>
            <p className="text-sm opacity-90 mb-4">Transform your living room with our best-selling cloud recliners.</p>
            <button className="w-full py-4 bg-white text-[#2d2a26] rounded-xl font-bold text-sm hover:bg-amber-50 transition-colors uppercase tracking-widest">Shop The Collection</button>
          </div>
        </div>

        {/* Recent Posts Widget */}
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h4 className="text-lg font-bold mb-6 text-[#2d2a26] pb-3 border-b border-gray-100">Recent Posts</h4>
          <div className="space-y-6">
            {MOCK_POSTS.slice(0, 4).map(post => (
              <div key={post.id} className="flex gap-4 group cursor-pointer" onClick={() => navigateToPost(post.id)}>
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-1">{post.publishDate}</h5>
                  <h4 className="text-sm font-semibold line-clamp-2 leading-tight group-hover:text-amber-800">{post.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-8 bg-[#fdfaf5] rounded-3xl border border-amber-100/50">
          <h4 className="text-lg font-bold mb-4 text-[#2d2a26]">Join the newsletter</h4>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">Stay updated with our latest guides and stories for real living comfort.</p>
          <div className="space-y-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
            />
            <button className="w-full py-3 bg-[#2d2a26] text-white rounded-xl font-bold text-sm hover:bg-black transition-colors">Subscribe</button>
          </div>
        </div>

        <TagDiscovery onTagClick={navigateToTag} />
      </div>
    </div>
  );

  const renderHome = () => (
    <>
      <Hero />
      <PopularCategories onCategoryClick={navigateToCategory} />
      <FeaturedPosts onAuthorClick={navigateToAuthor} onPostClick={navigateToPost} />

      <main className="pb-20 pt-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <CategoryBlock 
              title="Buying Guide" 
              posts={getPostsByCat("Buying Guide")} 
              onViewMore={() => navigateToCategory('buying-guide', 'Buying Guide')} 
              onAuthorClick={navigateToAuthor}
              onPostClick={navigateToPost}
            />
            <CategoryBlock 
              title="Inspiration" 
              posts={getPostsByCat("Inspiration")} 
              onViewMore={() => navigateToCategory('inspiration', 'Inspiration')}
              onAuthorClick={navigateToAuthor}
              onPostClick={navigateToPost}
            />
            <CategoryBlock 
              title="Get The Style" 
              posts={getPostsByCat("Get The Style")} 
              onViewMore={() => navigateToCategory('get-the-style', 'Get The Style')}
              onAuthorClick={navigateToAuthor}
              onPostClick={navigateToPost}
            />
            <CategoryBlock 
              title="Home Improvement" 
              posts={getPostsByCat("Home Improvement")} 
              onViewMore={() => navigateToCategory('home-improvement', 'Home Improvement')}
              onAuthorClick={navigateToAuthor}
              onPostClick={navigateToPost}
            />
            <CategoryBlock 
              title="Top Reviews" 
              posts={getPostsByCat("Top Reviews")} 
              onViewMore={() => navigateToCategory('top-reviews', 'Top Reviews')}
              onAuthorClick={navigateToAuthor}
              onPostClick={navigateToPost}
            />
          </div>
          {renderSidebar()}
        </div>
      </main>
    </>
  );

  const renderAggregatorPage = () => {
    let posts = [];
    if (currentPage.type === 'category') posts = getPostsByCat(currentPage.name);
    else if (currentPage.type === 'tag') posts = getPostsByTag(currentPage.id);
    else if (currentPage.type === 'author') posts = getPostsByAuthor(currentPage.name);

    return (
      <main className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 mb-8">
            <button onClick={navigateToHome} className="hover:text-amber-800 transition-colors">Home</button>
            <span>/</span>
            {currentPage.type === 'author' && <><span className="hover:text-amber-800">Authors</span><span>/</span></>}
            <span className="text-gray-900 font-bold">{currentPage.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              {currentPage.type === 'author' ? (
                <div className="mb-16 bg-[#fdfaf5] p-10 rounded-[2.5rem] border border-amber-100/30 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" 
                      alt={currentPage.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="serif text-4xl md:text-5xl text-[#2d2a26] mb-3">{currentPage.name}</h1>
                    <p className="text-amber-800 font-semibold text-sm uppercase tracking-widest mb-4">Lead Editorial Contributor</p>
                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                      Kaia is a passionate interior designer and home lifestyle specialist with over a decade of experience in residential aesthetics. 
                      At AlivingHome, she curates guides that blend ergonomics with timeless design, helping you create spaces that are as functional as they are beautiful.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                      <button className="text-gray-400 hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></button>
                      <button className="text-gray-400 hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></button>
                      <button className="text-gray-400 hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-12">
                  <h1 className="text-4xl font-bold text-[#2d2a26] mb-4">{currentPage.name}</h1>
                  <p className="text-gray-500 max-w-2xl leading-relaxed">
                    Exploring the best of {currentPage.name.toLowerCase()}. From expert advice to curated collections, discover everything you need for your modern home.
                  </p>
                </div>
              )}

              <h2 className="text-xl font-bold text-[#2d2a26] mb-8 pb-4 border-b border-gray-100 flex items-center gap-3">
                Latest Posts {currentPage.type === 'author' && `by ${currentPage.name}`}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} variant="horizontal" onAuthorClick={navigateToAuthor} onClick={() => navigateToPost(post.id)} />
                ))}
                {/* Simulated pagination - duplicate posts for grid density */}
                {posts.length > 0 && posts.map((post) => (
                  <PostCard key={`dup-${post.id}`} post={post} variant="horizontal" onAuthorClick={navigateToAuthor} onClick={() => navigateToPost(post.id)} />
                ))}
              </div>
            </div>
            {renderSidebar()}
          </div>
        </div>
      </main>
    );
  };

  const renderPostPage = () => {
    const post = MOCK_POSTS.find(p => p.id === currentPage.id) || MOCK_POSTS[0];
    return (
      <BlogPost 
        post={post} 
        onHomeClick={navigateToHome} 
        onCategoryClick={(cat) => navigateToCategory(cat.toLowerCase().replace(' ', '-'), cat)}
        onAuthorClick={navigateToAuthor}
        onPostClick={navigateToPost}
        renderSidebar={renderSidebar}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#FCFBFA]">
      {/* Header */}
      <nav className="h-16 flex items-center justify-between px-6 md:px-12 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <button onClick={navigateToHome} className="text-2xl font-black tracking-tighter text-[#2d2a26]">
          ALIVINGHOME
        </button>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Foundation</a>
          <a href="#" className="hover:text-black">Skincare</a>
          <button onClick={navigateToHome} className={`${currentPage.type === 'home' || currentPage.type === 'post' ? 'text-black font-bold' : 'hover:text-black'}`}>Blog</button>
          <a href="#" className="hover:text-black">Reviews</a>
        </div>
        <button className="bg-[#2d2a26] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
          Shop Now
        </button>
      </nav>

      {currentPage.type === 'home' ? renderHome() : 
       currentPage.type === 'post' ? renderPostPage() :
       renderAggregatorPage()}

      <footer className="bg-[#2d2a26] text-white py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-3xl font-black mb-6">ALIVINGHOME</div>
            <p className="text-gray-400 max-w-sm mb-8">
              Crafting comfortable modern living spaces with precision engineering and premium materials.
            </p>
          </div>
          <div>
            <h6 className="font-bold mb-4">Company</h6>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>About Us</li>
              <li>Brand Story</li>
              <li>Sustainability</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-4">Support</h6>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Shipping Policy</li>
              <li>Returns & Exchanges</li>
              <li>Warranty</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-20 pt-10 text-center text-xs text-gray-500">
          &copy; 2023 AlivingHome.com. All Rights Reserved. Editorial & Real Living.
        </div>
      </footer>
    </div>
  );
};

export default App;
