const CONFIG = {
  useWpApi: false,
  apiBase: "/wp-json/wp/v2",
  perPage: 20,
};

const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern tan leather reclining sofa",
  },
  {
    url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200",
    alt: "Cream colored designer swivel recliner",
  },
  {
    url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200",
    alt: "Premium modern sectional sofa",
  },
];

const POPULAR_CATEGORIES = [
  {
    id: "brand-story",
    name: "Brand Story",
    imageUrl:
      "https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "buying-guide",
    name: "Buying Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "decoration-ideas",
    name: "Decoration Ideas",
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "get-the-style",
    name: "Get The Style",
    imageUrl:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "home-improvement",
    name: "Home Improvement",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "inspiration",
    name: "Inspiration",
    imageUrl:
      "https://images.unsplash.com/photo-1616489953149-8079777de885?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "top-reviews",
    name: "Top Reviews",
    imageUrl:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400",
  },
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
  "#TV Stand",
];

const LOCAL_POSTS = [
  {
    id: "1",
    title: "Ultimate Guide to Choosing the Perfect Reclining Sofa",
    excerpt:
      "Find the ideal balance of comfort and style for your living room with our comprehensive buyer guide.",
    category: "Buying Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 12, 2023",
    author: "Kaia",
  },
  {
    id: "8",
    title: "Small Space Solutions: The Power of Sectional Sofas",
    excerpt: "Think sectionals are only for big rooms? Think again.",
    category: "Buying Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
    publishDate: "Sep 25, 2023",
    author: "Kaia",
  },
  {
    id: "10",
    title: "Top 10 Recliner Chairs for Lower Back Support",
    excerpt: "Our editors ranked the best ergonomic recliners available in 2024.",
    category: "Buying Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800",
    publishDate: "Aug 15, 2023",
    author: "Kaia",
  },
  {
    id: "2",
    title: "5 Minimalist Decor Ideas for Modern Sectionals",
    excerpt:
      "Transform your space with these simple yet effective decoration tips.",
    category: "Inspiration",
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 10, 2023",
    author: "Kaia",
  },
  {
    id: "7",
    title: "Creating a Cozy Reading Nook with Recliner Chairs",
    excerpt:
      "Design the ultimate relaxation spot in your home with these layout ideas.",
    category: "Inspiration",
    imageUrl:
      "https://images.unsplash.com/photo-1544450558-d39d67ba7d33?auto=format&fit=crop&q=80&w=800",
    publishDate: "Sep 28, 2023",
    author: "Kaia",
  },
  {
    id: "9",
    title: "Autumn Colors: Trending Palettes for Your Living Space",
    excerpt:
      "Warm up your home this season with our favorite upholstery picks.",
    category: "Inspiration",
    imageUrl:
      "https://images.unsplash.com/photo-1523755231516-eb43fd2188ad?auto=format&fit=crop&q=80&w=800",
    publishDate: "Sep 22, 2023",
    author: "Kaia",
  },
  {
    id: "4",
    title: "The Mid-Century Modern Revamp: Living Room Edition",
    excerpt: "How to mix classic silhouettes with modern reclining features.",
    category: "Get The Style",
    imageUrl:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 05, 2023",
    author: "Kaia",
  },
  {
    id: "11",
    title: "Industrial Loft Vibes: Leather and Steel Pairings",
    excerpt:
      "Get that raw, urban look with our curated selection of leather recliners.",
    category: "Get The Style",
    imageUrl:
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800",
    publishDate: "Jul 20, 2023",
    author: "Kaia",
  },
  {
    id: "12",
    title: "Parisian Chic: Soft Textures and Elegant Frames",
    excerpt:
      "Bring a touch of French sophistication to your living room setup.",
    category: "Get The Style",
    imageUrl:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
    publishDate: "Jun 12, 2023",
    author: "Kaia",
  },
  {
    id: "5",
    title: "Maintenance 101: Keeping Your Leather Sofa Like New",
    excerpt:
      "Pro tips on cleaning and conditioning your leather furniture for longevity.",
    category: "Home Improvement",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 02, 2023",
    author: "Kaia",
  },
  {
    id: "13",
    title: "How to Properly Position Your Recliner for Ergonomics",
    excerpt: "Avoid neck strain with these simple furniture placement rules.",
    category: "Home Improvement",
    imageUrl:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800",
    publishDate: "May 30, 2023",
    author: "Kaia",
  },
  {
    id: "14",
    title: "Fixing Squeaky Mechanisms: A Quick DIY Guide",
    excerpt: "Dont let a noisy recliner ruin your peace. Here is how to fix it.",
    category: "Home Improvement",
    imageUrl:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800",
    publishDate: "May 05, 2023",
    author: "Kaia",
  },
  {
    id: "6",
    title: "AlivingHome Cloud Recliner Review: Worth the Hype?",
    excerpt:
      "An honest breakdown of the comfort, mechanics, and design of our best-seller.",
    category: "Top Reviews",
    imageUrl:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    publishDate: "Sep 30, 2023",
    author: "Kaia",
  },
  {
    id: "15",
    title: "2024 Sleeper Sofa Comparison: Top 3 Market Leaders",
    excerpt:
      "We tested the leading sleeper sofas on comfort and mechanism durability.",
    category: "Top Reviews",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    publishDate: "Apr 25, 2023",
    author: "Kaia",
  },
  {
    id: "16",
    title: "Leather vs Fabric Recliners: The 5-Year Wear Test",
    excerpt: "See which material stood up best to pets, kids, and daily lounging.",
    category: "Top Reviews",
    imageUrl:
      "https://images.unsplash.com/photo-1616489953149-8079777de885?auto=format&fit=crop&q=80&w=800",
    publishDate: "Mar 10, 2023",
    author: "Kaia",
  },
  {
    id: "3",
    title: "Sustainable Living: Why Earth-Friendly Materials Matter",
    excerpt: "Explore our journey towards sustainable furniture manufacturing.",
    category: "Brand Story",
    imageUrl:
      "https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800",
    publishDate: "Oct 08, 2023",
    author: "Kaia",
  },
];

const state = {
  posts: [],
  activeFilter: null,
};

document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  loadPosts().then((posts) => {
    state.posts = posts;
    renderAll();
    setupInteractions();
  });
});

async function loadPosts() {
  if (!CONFIG.useWpApi) {
    return LOCAL_POSTS.slice();
  }

  try {
    const response = await window.fetch(
      `${CONFIG.apiBase}/posts?per_page=${CONFIG.perPage}&_embed`
    );
    if (!response.ok) {
      throw new Error("WP API request failed.");
    }
    const data = await response.json();
    const mapped = data.map(mapWpPost).filter(Boolean);
    return mapped.length ? mapped : LOCAL_POSTS.slice();
  } catch (error) {
    console.warn("Falling back to local posts.", error);
    return LOCAL_POSTS.slice();
  }
}

function mapWpPost(post) {
  if (!post) {
    return null;
  }
  const title = decodeHtml(post.title && post.title.rendered);
  const excerpt = stripHtml(post.excerpt && post.excerpt.rendered);
  const imageUrl = getFeaturedImage(post);
  const author = getAuthorName(post);
  const category = getCategoryName(post) || "Latest";
  const publishDate = formatDate(post.date);

  return {
    id: String(post.id),
    title: title || "Untitled post",
    excerpt: excerpt || "No summary available.",
    category,
    imageUrl:
      imageUrl ||
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800",
    publishDate,
    author,
  };
}

function renderAll() {
  renderCategories();
  renderFeatured();
  renderCategoryBlocks();
  renderRecentPosts();
  renderTags();
  clearFilter();
}

function setupInteractions() {
  document.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      setFilter("category", categoryButton.getAttribute("data-category"));
      return;
    }

    const viewMoreButton = event.target.closest("[data-view-more]");
    if (viewMoreButton) {
      setFilter("category", viewMoreButton.getAttribute("data-view-more"));
      return;
    }

    const tagButton = event.target.closest("[data-tag]");
    if (tagButton) {
      setFilter("tag", tagButton.getAttribute("data-tag"));
      return;
    }

    if (event.target.closest("[data-clear-filter]")) {
      clearFilter();
      return;
    }

    if (event.target.closest("[data-nav-home]")) {
      clearFilter();
      return;
    }

    const scrollLeft = event.target.closest("[data-scroll-left]");
    if (scrollLeft) {
      scrollCategoryNav(-240);
    }

    const scrollRight = event.target.closest("[data-scroll-right]");
    if (scrollRight) {
      scrollCategoryNav(240);
    }
  });
}

function initHeroSlider() {
  const slider = document.querySelector("[data-hero-slider]");
  const dots = document.querySelector("[data-hero-dots]");
  const prev = document.querySelector("[data-hero-prev]");
  const next = document.querySelector("[data-hero-next]");

  if (!slider || !dots) {
    return;
  }

  slider.innerHTML = HERO_IMAGES.map((image, index) => {
    return `
      <div class="hero__slide" data-hero-slide="${index}">
        <img src="${image.url}" alt="${escapeHtml(image.alt)}" />
      </div>
    `;
  }).join("");

  dots.innerHTML = HERO_IMAGES.map((_, index) => {
    return `<button class="hero__dot" type="button" data-hero-dot="${index}" aria-label="Go to slide ${
      index + 1
    }"></button>`;
  }).join("");

  let activeIndex = 0;
  let timer = null;

  const setActive = (index) => {
    activeIndex = index;
    slider
      .querySelectorAll("[data-hero-slide]")
      .forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === index);
      });
    dots.querySelectorAll("[data-hero-dot]").forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  };

  const nextSlide = () => {
    setActive((activeIndex + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setActive(
      activeIndex === 0 ? HERO_IMAGES.length - 1 : activeIndex - 1
    );
  };

  dots.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-hero-dot]");
    if (!dot) {
      return;
    }
    const index = Number(dot.getAttribute("data-hero-dot"));
    if (!Number.isNaN(index)) {
      setActive(index);
      resetTimer();
    }
  });

  if (prev) {
    prev.addEventListener("click", () => {
      prevSlide();
      resetTimer();
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      nextSlide();
      resetTimer();
    });
  }

  const resetTimer = () => {
    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(nextSlide, 5000);
  };

  setActive(0);
  resetTimer();
}

function renderCategories() {
  const container = document.querySelector("[data-category-list]");
  if (!container) {
    return;
  }

  container.innerHTML = POPULAR_CATEGORIES.map((cat) => {
    const name = escapeHtml(cat.name);
    return `
      <button class="category-card" type="button" data-category="${name}">
        <div class="category-card__image">
          <img src="${cat.imageUrl}" alt="${name}" />
          <div class="category-card__label">${name}</div>
        </div>
      </button>
    `;
  }).join("");
}

function renderFeatured() {
  const featuredMain = document.getElementById("featured-main");
  const featuredSide = document.getElementById("featured-side");

  if (!featuredMain || !featuredSide) {
    return;
  }

  const featured = state.posts[0];
  const sidePosts = state.posts.slice(1, 5);

  featuredMain.innerHTML = featured
    ? renderPostCard(featured, "vertical")
    : "";
  featuredSide.innerHTML = sidePosts.map((post) => renderPostCard(post, "small")).join("");
}

function renderCategoryBlocks() {
  const blocks = document.querySelectorAll("[data-category-block]");
  blocks.forEach((block) => {
    const category = block.getAttribute("data-category-block");
    const postContainer = block.querySelector("[data-category-posts]");
    if (!category || !postContainer) {
      return;
    }
    const posts = state.posts
      .filter((post) => post.category.toLowerCase() === category.toLowerCase())
      .slice(0, 3);
    postContainer.innerHTML = posts.map((post) => renderPostCard(post, "horizontal")).join("");
  });
}

function renderRecentPosts() {
  const container = document.getElementById("recent-posts");
  if (!container) {
    return;
  }
  const posts = state.posts.slice(0, 4);
  container.innerHTML = posts.map(renderRecentItem).join("");
}

function renderTags() {
  const container = document.getElementById("tag-list");
  if (!container) {
    return;
  }
  container.innerHTML = TAGS.map((tag) => {
    const safeTag = escapeHtml(tag);
    return `<button class="tag-btn" type="button" data-tag="${safeTag}">${safeTag}</button>`;
  }).join("");
}

function setFilter(type, value) {
  if (!value) {
    return;
  }
  state.activeFilter = { type, value };
  document.body.classList.add("is-filtered");
  const filteredSection = document.getElementById("filtered-section");
  if (filteredSection) {
    filteredSection.hidden = false;
  }

  const posts =
    type === "category"
      ? filterByCategory(value)
      : filterByTag(value);

  renderFilteredPosts(type, value, posts);
  updateActiveButtons(type, value);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clearFilter() {
  state.activeFilter = null;
  document.body.classList.remove("is-filtered");
  const filteredSection = document.getElementById("filtered-section");
  if (filteredSection) {
    filteredSection.hidden = true;
  }
  updateActiveButtons(null, null);
}

function renderFilteredPosts(type, value, posts) {
  const nameEl = document.getElementById("filter-name");
  const titleEl = document.getElementById("filter-title");
  const descEl = document.getElementById("filter-description");
  const grid = document.getElementById("filtered-posts");

  const displayValue = type === "tag" ? value.replace("#", "") : value;
  if (nameEl) {
    nameEl.textContent = displayValue;
  }
  if (titleEl) {
    titleEl.textContent = `${displayValue} Articles`;
  }
  if (descEl) {
    descEl.textContent =
      type === "category"
        ? `Exploring the best of ${displayValue}. Discover guides, inspiration, and curated collections.`
        : `Curated picks tagged with ${displayValue}.`;
  }
  if (!grid) {
    return;
  }

  if (!posts.length) {
    grid.innerHTML = `<div class="empty-state">No posts found yet. Try another topic.</div>`;
    return;
  }

  grid.innerHTML = posts.map((post) => renderPostCard(post, "horizontal")).join("");
}

function updateActiveButtons(type, value) {
  document.querySelectorAll("[data-category]").forEach((button) => {
    const isActive =
      type === "category" && button.getAttribute("data-category") === value;
    button.classList.toggle("is-active", isActive);
  });
  document.querySelectorAll("[data-tag]").forEach((button) => {
    const isActive =
      type === "tag" && button.getAttribute("data-tag") === value;
    button.classList.toggle("is-active", isActive);
  });
}

function filterByCategory(category) {
  return state.posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

function filterByTag(tag) {
  return state.posts.filter((_, index) => (index + tag.length) % 2 === 0);
}

function renderPostCard(post, variant) {
  const title = escapeHtml(post.title);
  const excerpt = escapeHtml(post.excerpt || "");
  const category = escapeHtml(post.category || "");
  const author = post.author ? `By ${escapeHtml(post.author)}` : "";
  const date = post.publishDate ? escapeHtml(post.publishDate) : "";
  const imageUrl = escapeHtml(post.imageUrl || "");

  if (variant === "small") {
    return `
      <article class="post-card post-card--small">
        <div class="post-card__image">
          <img src="${imageUrl}" alt="${title}" />
        </div>
        <div class="post-card__body">
          <div class="post-card__meta">${category} ${
      author ? `&#8226; ${author}` : ""
    }</div>
          <h3 class="post-card__title line-clamp-2">${title}</h3>
        </div>
      </article>
    `;
  }

  if (variant === "horizontal") {
    return `
      <article class="post-card post-card--horizontal">
        <div class="post-card__image">
          <img src="${imageUrl}" alt="${title}" />
        </div>
        <div class="post-card__body">
          <div class="post-card__meta">
            <span>${author}</span>
            ${author && date ? "<span>&#8226;</span>" : ""}
            <span>${date}</span>
          </div>
          <h3 class="post-card__title line-clamp-2">${title}</h3>
          <p class="post-card__excerpt line-clamp-2">${excerpt}</p>
        </div>
      </article>
    `;
  }

  return `
    <article class="post-card post-card--vertical">
      <div class="post-card__image">
        <img src="${imageUrl}" alt="${title}" />
      </div>
      <div class="post-card__body">
        <div class="post-card__meta">
          <span class="post-card__badge">${category}</span>
          <span>${author}</span>
          ${author && date ? "<span>&#8226;</span>" : ""}
          <span>${date}</span>
        </div>
        <h3 class="post-card__title">${title}</h3>
        <p class="post-card__excerpt line-clamp-2">${excerpt}</p>
      </div>
    </article>
  `;
}

function renderRecentItem(post) {
  const title = escapeHtml(post.title);
  const imageUrl = escapeHtml(post.imageUrl || "");
  return `
    <div class="recent-item">
      <div class="recent-item__image">
        <img src="${imageUrl}" alt="${title}" />
      </div>
      <div class="recent-item__body">
        <span class="recent-item__meta">${escapeHtml(
          post.publishDate || ""
        )}</span>
        <p class="recent-item__title line-clamp-2">${title}</p>
      </div>
    </div>
  `;
}

function scrollCategoryNav(offset) {
  const container = document.querySelector("[data-category-list]");
  if (container) {
    container.scrollBy({ left: offset, behavior: "smooth" });
  }
}

function stripHtml(html) {
  if (!html) {
    return "";
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent || "").trim();
}

function decodeHtml(html) {
  return stripHtml(html);
}

function escapeHtml(text) {
  if (!text) {
    return "";
  }
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getFeaturedImage(post) {
  const media = post._embedded && post._embedded["wp:featuredmedia"];
  if (Array.isArray(media) && media[0] && media[0].source_url) {
    return media[0].source_url;
  }
  return "";
}

function getAuthorName(post) {
  const author = post._embedded && post._embedded.author;
  if (Array.isArray(author) && author[0] && author[0].name) {
    return author[0].name;
  }
  return post.author_name || "";
}

function getCategoryName(post) {
  const terms = post._embedded && post._embedded["wp:term"];
  if (!Array.isArray(terms)) {
    return "";
  }
  const flatTerms = terms.flat();
  const category = flatTerms.find((term) => term.taxonomy === "category");
  return category && category.name ? category.name : "";
}

function formatDate(dateString) {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
