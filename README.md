# Blog Hub Static Embed (WordPress)

This repository now includes a framework-free Blog Hub designed for WordPress embeds.
All output files live in the `static/` folder and require no build tools.

## Files

- `static/index.html` - semantic HTML structure
- `static/styles.css` - all styling in one file
- `static/app.js` - vanilla JavaScript for filtering and optional WordPress REST data

## WordPress Usage

### 1) HTML (Gutenberg)
1. Open the WordPress editor.
2. Add a **Custom HTML** block.
3. Copy and paste the contents of `static/index.html` into that block.

### 2) CSS (Appearance -> Customize -> Additional CSS)
1. Go to **Appearance -> Customize -> Additional CSS**.
2. Paste the contents of `static/styles.css`.
3. Publish the changes.

### 3) JavaScript (enqueue or inline)

**Option A: Enqueue in your theme or plugin**
1. Upload `static/app.js` to your theme, for example:
   `wp-content/themes/your-theme/assets/blog-hub/app.js`
2. Enqueue the script in `functions.php`:

```php
function alivinghome_blog_hub_assets() {
  wp_enqueue_script(
    'alivinghome-blog-hub',
    get_stylesheet_directory_uri() . '/assets/blog-hub/app.js',
    array(),
    '1.0.0',
    true
  );
}
add_action('wp_enqueue_scripts', 'alivinghome_blog_hub_assets');
```

**Option B: Inline (shortcode or template)**
You can also inline the JS by adding the file contents inside a `<script>` tag in a
template or a shortcode output. Keep the script after the HTML markup so the DOM exists.

## Optional: Use WordPress REST API Data

In `static/app.js`, set:

```js
const WORDPRESS = {
  enabled: true,
  apiBase: "/wp-json/wp/v2/"
};
```

When enabled, the script fetches posts, categories, and tags from `/wp-json/wp/v2/`.
If the API is unavailable, it falls back to the local mock data.
