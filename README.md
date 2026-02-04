# Blog Hub Static Embed

This repository now provides a static HTML, CSS, and vanilla JavaScript build of
the Blog Hub for direct embedding in WordPress. No frameworks or build tools are
required.

## Output files

- `static/index.html`
- `static/styles.css`
- `static/app.js`

## WordPress usage

1. **Gutenberg HTML block**
   - Add a **Custom HTML** block and paste the markup from
     `static/index.html` (the body content is usually enough).
2. **Additional CSS**
   - Go to **Appearance -> Customize -> Additional CSS** and paste the
     contents of `static/styles.css`.
3. **JavaScript**
   - Enqueue `static/app.js` in your theme, or inline the script.

### Enqueue example (functions.php)

```php
function alivinghome_bloghub_assets() {
  wp_enqueue_style(
    'alivinghome-bloghub',
    get_stylesheet_directory_uri() . '/bloghub/styles.css',
    array(),
    null
  );

  wp_enqueue_script(
    'alivinghome-bloghub',
    get_stylesheet_directory_uri() . '/bloghub/app.js',
    array(),
    null,
    true
  );
}
add_action('wp_enqueue_scripts', 'alivinghome_bloghub_assets');
```

### Inline example

```html
<script>
  /* Paste the contents of static/app.js here */
</script>
```

## Optional: WordPress REST API

`static/app.js` can optionally load posts from the WordPress REST API.
By default it uses local demo data so the layout always renders.

Update the config at the top of `static/app.js`:

```js
const CONFIG = {
  useWpApi: true,
  apiBase: "/wp-json/wp/v2",
  perPage: 20,
};
```

The script uses `window.fetch` and calls:
`/wp-json/wp/v2/posts?per_page=20&_embed`.
