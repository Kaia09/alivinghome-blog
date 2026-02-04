const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern tan leather reclining sofa"
  },
  {
    url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200",
    alt: "Cream colored designer swivel recliner"
  },
  {
    url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200",
    alt: "Premium modern sectional sofa"
  }
];

const POPULAR_CATEGORIES = [
  {
    id: "brand-story",
    name: "Brand Story",
    imageUrl: "https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "buying-guide",
    name: "Buying Guide",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "decoration-ideas",
    name: "Decoration Ideas",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "get-the-style",
    name: "Get The Style",
    imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "home-improvement",
    name: "Home Improvement",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "inspiration",
    name: "Inspiration",
    imageUrl: "https://images.unsplash.com/photo-1616489953149-8079777de885?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "top-reviews",
    name: "Top Reviews",
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400"
  }
];

const TAGS = [
  "#Bedroom",
  "#Coffee Table",
  "#Deep Sofa",
  "#Dining Room",
  "#Dining Table",
  "#Earth Day",
  "#Entryway",
  "#Fully Assembled Living",
  "#Holiday",
  "#Home Improvement",
  "#Home Tips",
  "#Leather Sofa",
  "#Life Style",
  "#Living Room",
  "#NYC Design Festival",
  "#Reclining Sofa",
  "#Sectional Sofa",
  "#Sleeper Sofa",
  "#Sofa Beds",
  "#Trending",
  "#TV Stand"
];

const MOCK_POSTS = [
  {
    id: "1",
    title: "Ultimate Guide to Choosing the Perfect Reclining Sofa",
    excerpt: "Find the ideal balance of comfort and style for your living room with our comprehensive buyer guide.",
    category: "Buying Guide",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 12, 2023",
    author: "Kaia",
    tags: ["#Reclining Sofa", "#Sleeper Sofa"],
    url: "#"
  },
  {
    id: "8",
    title: "Small Space Solutions: The Power of Sectional Sofas",
    excerpt: "Think sectionals are only for big rooms? Think again.",
    category: "Buying Guide",
    imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
    publishDate: "Sep 25, 2023",
    author: "Kaia",
    tags: ["#Sectional Sofa", "#Living Room"],
    url: "#"
  },
  {
    id: "10",
    title: "Top 10 Recliner Chairs for Lower Back Support",
    excerpt: "Our editors ranked the best ergonomic recliners available in 2024.",
    category: "Buying Guide",
    imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800",
    publishDate: "Aug 15, 2023",
    author: "Kaia",
    tags: ["#Reclining Sofa", "#Home Tips"],
    url: "#"
  },
  {
    id: "2",
    title: "5 Minimalist Decor Ideas for Modern Sectionals",
    excerpt: "Transform your space with these simple yet effective decoration tips.",
    category: "Inspiration",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 10, 2023",
    author: "Kaia",
    tags: ["#Living Room", "#Trending"],
    url: "#"
  },
  {
    id: "7",
    title: "Creating a Cozy Reading Nook with Recliner Chairs",
    excerpt: "Design the ultimate relaxation spot in your home with these layout ideas.",
    category: "Inspiration",
    imageUrl: "https://images.unsplash.com/photo-1544450558-d39d67ba7d33?auto=format&fit=crop&q=80&w=800",
    publishDate: "Sep 28, 2023",
    author: "Kaia",
    tags: ["#Home Tips", "#Living Room"],
    url: "#"
  },
  {
    id: "9",
    title: "Autumn Colors: Trending Palettes for Your Living Space",
    excerpt: "Warm up your home this season with our favorite upholstery picks.",
    category: "Inspiration",
    imageUrl: "https://images.unsplash.com/photo-1523755231516-eb43fd2188ad?auto=format&fit=crop&q=80&w=800",
    publishDate: "Sep 22, 2023",
    author: "Kaia",
    tags: ["#Trending", "#Life Style"],
    url: "#"
  },
  {
    id: "4",
    title: "The Mid-Century Modern Revamp: Living Room Edition",
    excerpt: "How to mix classic silhouettes with modern reclining features.",
    category: "Get The Style",
    imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 05, 2023",
    author: "Kaia",
    tags: ["#Life Style", "#Trending"],
    url: "#"
  },
  {
    id: "11",
    title: "Industrial Loft Vibes: Leather and Steel Pairings",
    excerpt: "Get that raw, urban look with our curated selection of leather recliners.",
    category: "Get The Style",
    imageUrl: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800",
    publishDate: "Jul 20, 2023",
    author: "Kaia",
    tags: ["#Leather Sofa", "#Trending"],
    url: "#"
  },
  {
    id: "12",
    title: "Parisian Chic: Soft Textures and Elegant Frames",
    excerpt: "Bring a touch of French sophistication to your living room setup.",
    category: "Get The Style",
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
    publishDate: "Jun 12, 2023",
    author: "Kaia",
    tags: ["#Life Style", "#Living Room"],
    url: "#"
  },
  {
    id: "5",
    title: "Maintenance 101: Keeping Your Leather Sofa Like New",
    excerpt: "Pro tips on cleaning and conditioning your leather furniture for longevity.",
    category: "Home Improvement",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 02, 2023",
    author: "Kaia",
    tags: ["#Home Improvement", "#Leather Sofa"],
    url: "#"
  },
  {
    id: "13",
    title: "How to Properly Position Your Recliner for Ergonomics",
    excerpt: "Avoid neck strain with these simple furniture placement rules.",
    category: "Home Improvement",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800",
    publishDate: "May 30, 2023",
    author: "Kaia",
    tags: ["#Home Tips", "#Reclining Sofa"],
    url: "#"
  },
  {
    id: "14",
    title: "Fixing Squeaky Mechanisms: A Quick DIY Guide",
    excerpt: "Dont let a noisy recliner ruin your peace. Here is how to fix it.",
    category: "Home Improvement",
    imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800",
    publishDate: "May 05, 2023",
    author: "Kaia",
    tags: ["#Home Improvement", "#Home Tips"],
    url: "#"
  },
  {
    id: "6",
    title: "AlivingHome Cloud Recliner Review: Worth the Hype?",
    excerpt: "An honest breakdown of the comfort, mechanics, and design of our best-seller.",
    category: "Top Reviews",
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    publishDate: "Sep 30, 2023",
    author: "Kaia",
    tags: ["#Reclining Sofa", "#Trending"],
    url: "#"
  },
  {
    id: "15",
    title: "2024 Sleeper Sofa Comparison: Top 3 Market Leaders",
    excerpt: "We tested the leading sleeper sofas on comfort and mechanism durability.",
    category: "Top Reviews",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    publishDate: "Apr 25, 2023",
    author: "Kaia",
    tags: ["#Sleeper Sofa", "#Reclining Sofa"],
    url: "#"
  },
  {
    id: "16",
    title: "Leather vs Fabric Recliners: The 5-Year Wear Test",
    excerpt: "See which material stood up best to pets, kids, and daily lounging.",
    category: "Top Reviews",
    imageUrl: "https://images.unsplash.com/photo-1616489953149-8079777de885?auto=format&fit=crop&q=80&w=800",
    publishDate: "Mar 10, 2023",
    author: "Kaia",
    tags: ["#Leather Sofa", "#Reclining Sofa"],
    url: "#"
  },
  {
    id: "3",
    title: "Sustainable Living: Why Earth-Friendly Materials Matter",
    excerpt: "Explore our journey towards sustainable furniture manufacturing.",
    category: "Brand Story",
    imageUrl: "https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 08, 2023",
    author: "Kaia",
    tags: ["#Earth Day", "#Life Style"],
    url: "#"
  }
];

const CATEGORY_BLOCK_ORDER = [
  "Buying Guide",
  "Inspiration",
  "Get The Style",
  "Home Improvement",
  "Top Reviews"
];

const WORDPRESS = {
  enabled: false,
  apiBase: "/wp-json/wp/v2/"
};

const state = {
  filterType: "all",
  filterValue: "",
  data: {
    posts: MOCK_POSTS,
    categories: POPULAR_CATEGORIES,
    tags: TAGS
  }
};

const dom = {};

function cacheDom() {
  dom.categoryList = document.querySelector("[data-category-list]");
  dom.featuredPrimary = document.querySelector("[data-featured-primary]");
  dom.featuredSide = document.querySelector("[data-featured-side]");
  dom.categoryBlocks = document.querySelector("[data-category-blocks]");
  dom.recentList = document.querySelector("[data-recent-list]");
  dom.tagList = document.querySelector("[data-tag-list]");
  dom.latestGrid = document.querySelector("[data-latest-grid]");
  dom.latestTitle = document.querySelector("[data-latest-title]");
  dom.filterLabel = document.querySelector("[data-filter-label]");
  dom.filterClear = document.querySelector("[data-filter-clear]");
  dom.latestEmpty = document.querySelector("[data-latest-empty]");
}

async function init() {
  cacheDom();
  setupHeroSlider();
  setupCategoryCarousel();
  setupFilterControls();
  const data = await loadData();
  state.data = normalizeData(data);
  renderAll();
  setFilter("all", "", { scroll: false });
}

document.addEventListener("DOMContentLoaded", init);

async function loadData() {
  if (!WORDPRESS.enabled) {
    return {
      posts: MOCK_POSTS,
      categories: POPULAR_CATEGORIES,
      tags: TAGS
    };
  }

  try {
    return await loadFromWordPress();
  } catch (error) {
    console.warn("WordPress data failed, using mock data.", error);
    return {
      posts: MOCK_POSTS,
      categories: POPULAR_CATEGORIES,
      tags: TAGS
    };
  }
}

function normalizeData(data) {
  const posts = Array.isArray(data.posts) ? data.posts : [];
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const tags = Array.isArray(data.tags) && data.tags.length ? data.tags : extractTagsFromPosts(posts);

  return { posts, categories, tags };
}

function renderAll() {
  renderCategories(state.data.categories);
  renderFeatured(state.data.posts);
  renderCategoryBlocks(state.data.posts);
  renderRecent(state.data.posts);
  renderTags(state.data.tags);
  renderLatestPosts();
}

function renderCategories(categories) {
  if (!dom.categoryList) return;
  dom.categoryList.innerHTML = "";

  categories.forEach((category) => {
    dom.categoryList.appendChild(createCategoryCard(category));
  });
}

function createCategoryCard(category) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "category-card";
  button.dataset.category = category.name;
  button.setAttribute("aria-pressed", "false");

  const media = document.createElement("div");
  media.className = "category-card__image";

  const img = document.createElement("img");
  img.src = category.imageUrl || POPULAR_CATEGORIES[0].imageUrl;
  img.alt = category.name;

  const overlay = document.createElement("div");
  overlay.className = "category-card__overlay";

  const label = document.createElement("div");
  label.className = "category-card__label";
  label.textContent = category.name;

  media.appendChild(img);
  media.appendChild(overlay);
  media.appendChild(label);
  button.appendChild(media);

  return button;
}

function renderFeatured(posts) {
  if (!dom.featuredPrimary || !dom.featuredSide) return;
  dom.featuredPrimary.innerHTML = "";
  dom.featuredSide.innerHTML = "";

  const featured = posts[0];
  const sidePosts = posts.slice(1, 4);

  if (featured) {
    dom.featuredPrimary.appendChild(createPostCard(featured, "vertical"));
  }

  sidePosts.forEach((post) => {
    dom.featuredSide.appendChild(createPostCard(post, "small"));
  });
}

function renderCategoryBlocks(posts) {
  if (!dom.categoryBlocks) return;
  dom.categoryBlocks.innerHTML = "";

  CATEGORY_BLOCK_ORDER.forEach((categoryName) => {
    const categoryPosts = posts.filter((post) => matchValue(post.category, categoryName));
    if (!categoryPosts.length) return;

    const section = document.createElement("section");
    section.className = "category-block";

    const header = document.createElement("div");
    header.className = "category-block__header";

    const title = document.createElement("h3");
    title.className = "category-block__title";
    title.textContent = categoryName;

    const viewMore = document.createElement("button");
    viewMore.type = "button";
    viewMore.className = "category-block__link";
    viewMore.dataset.category = categoryName;
    viewMore.textContent = "View More";

    const icon = document.createElement("span");
    icon.className = "category-block__icon";
    icon.textContent = ">";

    viewMore.appendChild(icon);
    header.appendChild(title);
    header.appendChild(viewMore);

    const grid = document.createElement("div");
    grid.className = "category-block__grid";

    categoryPosts.slice(0, 3).forEach((post) => {
      grid.appendChild(createPostCard(post, "horizontal"));
    });

    section.appendChild(header);
    section.appendChild(grid);
    dom.categoryBlocks.appendChild(section);
  });
}

function renderRecent(posts) {
  if (!dom.recentList) return;
  dom.recentList.innerHTML = "";

  posts.slice(0, 4).forEach((post) => {
    dom.recentList.appendChild(createRecentItem(post));
  });
}

function renderTags(tags) {
  if (!dom.tagList) return;
  dom.tagList.innerHTML = "";

  tags.forEach((tag) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tag-button";
    button.dataset.tag = tag;
    button.textContent = tag;
    button.setAttribute("aria-pressed", "false");
    dom.tagList.appendChild(button);
  });
}

function renderLatestPosts() {
  if (!dom.latestGrid) return;

  const posts = getFilteredPosts();
  dom.latestGrid.innerHTML = "";

  posts.forEach((post) => {
    dom.latestGrid.appendChild(createPostCard(post, "horizontal"));
  });

  if (dom.latestEmpty) {
    dom.latestEmpty.classList.toggle("is-hidden", posts.length > 0);
  }
}

function getFilteredPosts() {
  const posts = state.data.posts || [];

  if (state.filterType === "category") {
    return posts.filter((post) => matchValue(post.category, state.filterValue));
  }

  if (state.filterType === "tag") {
    return posts.filter((post) => (post.tags || []).some((tag) => matchValue(tag, state.filterValue)));
  }

  return posts;
}

function setFilter(type, value, options = {}) {
  state.filterType = type;
  state.filterValue = value;

  renderLatestPosts();
  updateFilterLabel();
  updateActiveButtons();
  toggleClearButton();

  if (options.scroll !== false) {
    scrollToLatest();
  }
}

function updateFilterLabel() {
  if (!dom.filterLabel) return;

  const count = getFilteredPosts().length;
  let label = `Showing all posts (${count})`;

  if (state.filterType === "category") {
    label = `Showing ${count} posts in ${state.filterValue}`;
  }

  if (state.filterType === "tag") {
    label = `Showing ${count} posts tagged ${state.filterValue}`;
  }

  dom.filterLabel.textContent = label;
}

function toggleClearButton() {
  if (!dom.filterClear) return;
  dom.filterClear.classList.toggle("is-hidden", state.filterType === "all");
}

function updateActiveButtons() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    const isActive =
      state.filterType === "category" && matchValue(button.dataset.category, state.filterValue);
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  document.querySelectorAll("[data-tag]").forEach((button) => {
    const isActive = state.filterType === "tag" && matchValue(button.dataset.tag, state.filterValue);
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function setupFilterControls() {
  document.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      setFilter("category", categoryButton.dataset.category);
      return;
    }

    const tagButton = event.target.closest("[data-tag]");
    if (tagButton) {
      setFilter("tag", tagButton.dataset.tag);
      return;
    }

    if (event.target.closest("[data-filter-clear]")) {
      setFilter("all", "");
    }
  });
}

function setupCategoryCarousel() {
  const list = document.querySelector("[data-category-list]");
  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");

  if (!list || !prev || !next) return;

  const scrollAmount = 260;

  prev.addEventListener("click", () => {
    list.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    list.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}

function setupHeroSlider() {
  const slidesContainer = document.querySelector("[data-hero-slides]");
  const dotsContainer = document.querySelector("[data-hero-dots]");
  const prev = document.querySelector("[data-hero-prev]");
  const next = document.querySelector("[data-hero-next]");

  if (!slidesContainer || !dotsContainer) return;

  if (!slidesContainer.children.length) {
    HERO_IMAGES.forEach((image) => {
      slidesContainer.appendChild(createHeroSlide(image));
    });
  }

  if (!dotsContainer.children.length) {
    HERO_IMAGES.forEach((_, index) => {
      dotsContainer.appendChild(createHeroDot(index));
    });
  }

  const slides = Array.from(slidesContainer.querySelectorAll("[data-hero-slide]"));
  const dots = Array.from(dotsContainer.querySelectorAll("[data-hero-dot]"));

  if (!slides.length || !dots.length) return;

  let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (index < 0) index = 0;

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === index;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", isActive ? "false" : "true");
  });

  dots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === index;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  const setIndex = (nextIndex) => {
    const nextSafe = (nextIndex + slides.length) % slides.length;
    slides[index].classList.remove("is-active");
    dots[index].classList.remove("is-active");
    slides[index].setAttribute("aria-hidden", "true");
    dots[index].setAttribute("aria-pressed", "false");

    index = nextSafe;

    slides[index].classList.add("is-active");
    dots[index].classList.add("is-active");
    slides[index].setAttribute("aria-hidden", "false");
    dots[index].setAttribute("aria-pressed", "true");
  };

  let timer = window.setInterval(() => {
    setIndex(index + 1);
  }, 5000);

  const restartTimer = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => {
      setIndex(index + 1);
    }, 5000);
  };

  if (prev) {
    prev.addEventListener("click", () => {
      setIndex(index - 1);
      restartTimer();
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      setIndex(index + 1);
      restartTimer();
    });
  }

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      setIndex(dotIndex);
      restartTimer();
    });
  });
}

function createHeroSlide(image) {
  const slide = document.createElement("div");
  slide.className = "hero-slide";
  slide.dataset.heroSlide = "";

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;

  slide.appendChild(img);
  return slide;
}

function createHeroDot(index) {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "hero-dot";
  dot.dataset.heroDot = "";
  dot.dataset.index = String(index);
  dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
  return dot;
}

function createPostCard(post, variant) {
  const article = document.createElement("article");
  article.className = `post-card post-card--${variant}`;

  const imageLink = document.createElement("a");
  imageLink.href = post.url || "#";
  imageLink.setAttribute("aria-label", post.title);

  if (variant === "small") {
    imageLink.className = "post-card__thumb";
  } else {
    imageLink.className = "post-card__image-link";
  }

  const img = document.createElement("img");
  img.src = post.imageUrl || POPULAR_CATEGORIES[0].imageUrl;
  img.alt = post.title;
  imageLink.appendChild(img);

  const body = document.createElement("div");
  body.className = "post-card__body";

  const metaText = variant === "small" ? formatSmallMeta(post) : formatMeta(post);

  if (variant === "vertical") {
    const metaRow = document.createElement("div");
    metaRow.className = "post-card__meta-row";

    const category = document.createElement("span");
    category.className = "post-card__category";
    category.textContent = post.category || "Uncategorized";

    metaRow.appendChild(category);

    if (metaText) {
      const meta = document.createElement("span");
      meta.className = "post-card__meta";
      meta.textContent = metaText;
      metaRow.appendChild(meta);
    }

    body.appendChild(metaRow);
  } else if (metaText) {
    const meta = document.createElement("span");
    meta.className = "post-card__meta";
    meta.textContent = metaText;
    body.appendChild(meta);
  }

  const title = document.createElement("h3");
  title.className = "post-card__title";

  const titleLink = document.createElement("a");
  titleLink.href = post.url || "#";
  titleLink.textContent = post.title;

  title.appendChild(titleLink);
  body.appendChild(title);

  if (variant !== "small") {
    const excerpt = document.createElement("p");
    excerpt.className = "post-card__excerpt line-clamp-2";
    excerpt.textContent = post.excerpt;
    body.appendChild(excerpt);
  }

  article.appendChild(imageLink);
  article.appendChild(body);
  return article;
}

function createRecentItem(post) {
  const item = document.createElement("div");
  item.className = "recent-item";

  const thumbLink = document.createElement("a");
  thumbLink.href = post.url || "#";
  thumbLink.className = "recent-thumb";
  thumbLink.setAttribute("aria-label", post.title);

  const img = document.createElement("img");
  img.src = post.imageUrl || POPULAR_CATEGORIES[0].imageUrl;
  img.alt = post.title;
  thumbLink.appendChild(img);

  const text = document.createElement("div");

  const meta = document.createElement("div");
  meta.className = "recent-meta";
  meta.textContent = post.publishDate;

  const title = document.createElement("h4");
  title.className = "recent-title line-clamp-2";
  title.textContent = post.title;

  text.appendChild(meta);
  text.appendChild(title);
  item.appendChild(thumbLink);
  item.appendChild(text);

  return item;
}

function formatMeta(post) {
  const parts = [];
  if (post.author) parts.push(`By ${post.author}`);
  if (post.publishDate) parts.push(post.publishDate);
  return parts.join(" | ");
}

function formatSmallMeta(post) {
  const parts = [];
  if (post.category) parts.push(post.category);
  if (post.author) parts.push(`By ${post.author}`);
  return parts.join(" | ");
}

function matchValue(value, target) {
  return String(value || "").toLowerCase() === String(target || "").toLowerCase();
}

function extractTagsFromPosts(posts) {
  const tags = new Set();
  posts.forEach((post) => {
    (post.tags || []).forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}

function scrollToLatest() {
  const section = document.querySelector("#latest");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

async function loadFromWordPress() {
  const base = ensureTrailingSlash(WORDPRESS.apiBase);
  const [postsResponse, categoriesResponse, tagsResponse] = await Promise.all([
    window.fetch(`${base}posts?per_page=12&_embed=1`),
    window.fetch(`${base}categories?per_page=50`),
    window.fetch(`${base}tags?per_page=50`)
  ]);

  if (!postsResponse.ok) {
    throw new Error("Failed to fetch posts from WordPress.");
  }

  const postsData = await postsResponse.json();
  const categoriesData = categoriesResponse.ok ? await categoriesResponse.json() : [];
  const tagsData = tagsResponse.ok ? await tagsResponse.json() : [];

  const categoryMap = new Map(categoriesData.map((category) => [category.id, category.name]));
  const tagMap = new Map(tagsData.map((tag) => [tag.id, tag.name]));
  const categoryImageMap = new Map(POPULAR_CATEGORIES.map((cat) => [cat.name, cat.imageUrl]));

  const posts = postsData.map((post) => {
    const categoryName = (post.categories || [])
      .map((id) => categoryMap.get(id))
      .find(Boolean) || "Uncategorized";

    const tagNames = (post.tags || [])
      .map((id) => formatTagName(tagMap.get(id) || `Tag-${id}`))
      .filter(Boolean);

    const imageUrl =
      post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      categoryImageMap.get(categoryName) ||
      POPULAR_CATEGORIES[0].imageUrl;

    const authorName = post?._embedded?.author?.[0]?.name || "";
    const title = stripHtml(post?.title?.rendered || "");
    const excerpt = truncate(stripHtml(post?.excerpt?.rendered || ""), 140);

    return {
      id: String(post.id),
      title,
      excerpt,
      category: categoryName,
      imageUrl,
      publishDate: formatDate(post?.date),
      author: authorName,
      tags: tagNames,
      url: post.link || "#"
    };
  });

  const categories = categoriesData.length
    ? categoriesData.map((category) => ({
        id: String(category.id),
        name: category.name,
        imageUrl: categoryImageMap.get(category.name) || POPULAR_CATEGORIES[0].imageUrl
      }))
    : POPULAR_CATEGORIES;

  const tags = tagsData.length
    ? tagsData.map((tag) => formatTagName(tag.name)).filter(Boolean)
    : extractTagsFromPosts(posts);

  return { posts, categories, tags };
}

function ensureTrailingSlash(url) {
  if (!url.endsWith("/")) {
    return `${url}/`;
  }
  return url;
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function stripHtml(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  return container.textContent || "";
}

function truncate(text, length) {
  if (!text || text.length <= length) return text;
  return `${text.slice(0, length - 1).trim()}...`;
}

function formatTagName(tagName) {
  if (!tagName) return "";
  return tagName.startsWith("#") ? tagName : `#${tagName}`;
}
