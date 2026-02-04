
import { Post, CategoryNav } from './types';

export const POPULAR_CATEGORIES: CategoryNav[] = [
  { id: 'brand-story', name: 'Brand Story', imageUrl: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=400' },
  { id: 'buying-guide', name: 'Buying Guide', imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400' },
  { id: 'decoration-ideas', name: 'Decoration Ideas', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400' },
  { id: 'get-the-style', name: 'Get The Style', imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=400' },
  { id: 'home-improvement', name: 'Home Improvement', imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=400' },
  { id: 'inspiration', name: 'Inspiration', imageUrl: 'https://images.unsplash.com/photo-1616489953149-8079777de885?auto=format&fit=crop&q=80&w=400' },
  { id: 'top-reviews', name: 'Top Reviews', imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400' },
];

export const MOCK_POSTS: Post[] = [
  // Buying Guide
  {
    id: '1',
    title: 'Ultimate Guide to Choosing the Perfect Reclining Sofa',
    excerpt: 'Find the ideal balance of comfort and style for your living room with our comprehensive buyer guide.',
    category: 'Buying Guide',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Oct 12, 2023',
    author: 'Kaia'
  },
  {
    id: '8',
    title: 'Small Space Solutions: The Power of Sectional Sofas',
    excerpt: 'Think sectionals are only for big rooms? Think again.',
    category: 'Buying Guide',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Sep 25, 2023',
    author: 'Kaia'
  },
  {
    id: '10',
    title: 'Top 10 Recliner Chairs for Lower Back Support',
    excerpt: 'Our editors ranked the best ergonomic recliners available in 2024.',
    category: 'Buying Guide',
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Aug 15, 2023',
    author: 'Kaia'
  },

  // Inspiration
  {
    id: '2',
    title: '5 Minimalist Decor Ideas for Modern Sectionals',
    excerpt: 'Transform your space with these simple yet effective decoration tips.',
    category: 'Inspiration',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Oct 10, 2023',
    author: 'Kaia'
  },
  {
    id: '7',
    title: 'Creating a Cozy Reading Nook with Recliner Chairs',
    excerpt: 'Design the ultimate relaxation spot in your home with these layout ideas.',
    category: 'Inspiration',
    imageUrl: 'https://images.unsplash.com/photo-1544450558-d39d67ba7d33?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Sep 28, 2023',
    author: 'Kaia'
  },
  {
    id: '9',
    title: 'Autumn Colors: Trending Palettes for Your Living Space',
    excerpt: 'Warm up your home this season with our favorite upholstery picks.',
    category: 'Inspiration',
    imageUrl: 'https://images.unsplash.com/photo-1523755231516-eb43fd2188ad?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Sep 22, 2023',
    author: 'Kaia'
  },

  // Get The Style
  {
    id: '4',
    title: 'The Mid-Century Modern Revamp: Living Room Edition',
    excerpt: 'How to mix classic silhouettes with modern reclining features.',
    category: 'Get The Style',
    imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Oct 05, 2023',
    author: 'Kaia'
  },
  {
    id: '11',
    title: 'Industrial Loft Vibes: Leather and Steel Pairings',
    excerpt: 'Get that raw, urban look with our curated selection of leather recliners.',
    category: 'Get The Style',
    imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Jul 20, 2023',
    author: 'Kaia'
  },
  {
    id: '12',
    title: 'Parisian Chic: Soft Textures and Elegant Frames',
    excerpt: 'Bring a touch of French sophistication to your living room setup.',
    category: 'Get The Style',
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Jun 12, 2023',
    author: 'Kaia'
  },

  // Home Improvement
  {
    id: '5',
    title: 'Maintenance 101: Keeping Your Leather Sofa Like New',
    excerpt: 'Pro tips on cleaning and conditioning your leather furniture for longevity.',
    category: 'Home Improvement',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Oct 02, 2023',
    author: 'Kaia'
  },
  {
    id: '13',
    title: 'How to Properly Position Your Recliner for Ergonomics',
    excerpt: 'Avoid neck strain with these simple furniture placement rules.',
    category: 'Home Improvement',
    imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800',
    publishDate: 'May 30, 2023',
    author: 'Kaia'
  },
  {
    id: '14',
    title: 'Fixing Squeaky Mechanisms: A Quick DIY Guide',
    excerpt: 'Dont let a noisy recliner ruin your peace. Here is how to fix it.',
    category: 'Home Improvement',
    imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800',
    publishDate: 'May 05, 2023',
    author: 'Kaia'
  },

  // Top Reviews
  {
    id: '6',
    title: 'AlivingHome Cloud Recliner Review: Worth the Hype?',
    excerpt: 'An honest breakdown of the comfort, mechanics, and design of our best-seller.',
    category: 'Top Reviews',
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Sep 30, 2023',
    author: 'Kaia'
  },
  {
    id: '15',
    title: '2024 Sleeper Sofa Comparison: Top 3 Market Leaders',
    excerpt: 'We tested the leading sleeper sofas on comfort and mechanism durability.',
    category: 'Top Reviews',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Apr 25, 2023',
    author: 'Kaia'
  },
  {
    id: '16',
    title: 'Leather vs Fabric Recliners: The 5-Year Wear Test',
    excerpt: 'See which material stood up best to pets, kids, and daily lounging.',
    category: 'Top Reviews',
    imageUrl: 'https://images.unsplash.com/photo-1616489953149-8079777de885?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Mar 10, 2023',
    author: 'Kaia'
  },

  // Brand Story
  {
    id: '3',
    title: 'Sustainable Living: Why Earth-Friendly Materials Matter',
    excerpt: 'Explore our journey towards sustainable furniture manufacturing.',
    category: 'Brand Story',
    imageUrl: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800',
    publishDate: 'Oct 08, 2023',
    author: 'Kaia'
  }
];

export const TAGS = [
  '#Bedroom', '#Coffee Table', '#Deep Sofa', '#Dining Room', '#Dining Table', 
  '#Earth Day', '#Entryway', '#Fully Assembled Living', '#Holiday', 
  '#Home Improvement', '#Home Tips', '#Leather Sofa', '#Life Style', 
  '#Living Room', '#NYC Design Festival', '#Reclining Sofa', '#Sectional Sofa', 
  '#Sleeper Sofa', '#Sofa Beds', '#Trending', '#TV Stand'
];
