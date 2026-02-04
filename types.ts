
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  publishDate: string;
  author?: string;
  content?: string; // HTML or structured content
  tags?: string[];
}

export interface CategoryNav {
  id: string;
  name: string;
  imageUrl: string;
}
