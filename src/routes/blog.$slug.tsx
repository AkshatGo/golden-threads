import { createFileRoute, Link, notFound } from "@tanstack/react-router";

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] }
    | { type: "code"; text: string }
    | { type: "quote"; text: string }
  >;
};

const posts: Record<string, Post> = {
  "convert-static-site-to-wordpress-theme-2025": {
    slug: "convert-static-site-to-wordpress-theme-2025",
    title: "How to Convert a Static Website into a WordPress Theme (2025 Guide)",
    description:
      "Step-by-step guide to turning your static HTML/CSS site into a fully functional, responsive WordPress theme in 2025.",
    date: "May 24, 2026",
    readTime: "12 min read",
    category: "Web Development",
    body: [
      {
        type: "p",
        text: "Want to turn your existing static or custom-designed website into a fully functional WordPress theme in 2025? This complete step-by-step guide covers everything: exporting HTML & CSS, creating WordPress template files, adding dynamic PHP, integrating menus & widgets, making your theme responsive, and testing for speed and SEO. Perfect for designers, developers, and site owners who love their current look but want the flexibility of WordPress.",
      },
      { type: "h2", text: "Why convert your static site to WordPress?" },
      {
        type: "p",
        text: "Static sites are fast and easy to design, but they get painful the moment you want to publish content regularly, manage menus, accept comments, or hand the site off to a non-technical owner. WordPress gives you a battle-tested CMS, thousands of plugins, and a familiar dashboard — without forcing you to abandon the design you already love.",
      },
      { type: "h2", text: "What you'll need before you start" },
      {
        type: "ul",
        items: [
          "Your existing HTML, CSS, JS, and image assets",
          "A local WordPress install (LocalWP, XAMPP, MAMP, or Docker)",
          "A code editor (VS Code recommended)",
          "Basic familiarity with PHP — enough to read it",
        ],
      },
      { type: "h2", text: "Step 1 — Prepare your static files" },
      {
        type: "p",
        text: "Open your existing site and audit it. Make sure your HTML is clean and semantic, your CSS is consolidated into as few files as possible, and your images are optimized (WebP or AVIF where possible). Remove inline styles you don't need and move any critical JavaScript into separate files.",
      },
      { type: "h2", text: "Step 2 — Create the theme folder" },
      {
        type: "p",
        text: "Inside your WordPress install, go to wp-content/themes/ and create a new folder, e.g. my-theme/. Then create the minimum files WordPress requires for a theme:",
      },
      {
        type: "ul",
        items: [
          "style.css — with the theme header comment",
          "index.php — the fallback template",
          "functions.php — your theme's logic and asset loading",
          "screenshot.png — 1200×900 preview image",
        ],
      },
      { type: "h3", text: "The style.css header" },
      {
        type: "code",
        text: `/*
Theme Name: My Custom Theme
Theme URI: https://example.com
Author: Your Name
Description: Converted from a static HTML/CSS design.
Version: 1.0
License: GPL v2 or later
Text Domain: my-theme
*/`,
      },
      { type: "h2", text: "Step 3 — Split your HTML into template parts" },
      {
        type: "p",
        text: "WordPress themes are composed of partials. Take your single index.html and split it into reusable files:",
      },
      {
        type: "ul",
        items: [
          "header.php — everything from <!DOCTYPE html> down through your navigation",
          "footer.php — your footer markup and the closing tags",
          "sidebar.php — any widget area",
          "front-page.php — your home page layout",
          "page.php — the default page template",
          "single.php — the single blog post template",
          "archive.php — for categories, tags, and archives",
          "404.php — your not-found page",
        ],
      },
      { type: "h2", text: "Step 4 — Enqueue styles and scripts properly" },
      {
        type: "p",
        text: "Never hardcode <link> or <script> tags. Use wp_enqueue_style and wp_enqueue_script inside functions.php so WordPress can manage dependencies, versions, and caching.",
      },
      {
        type: "code",
        text: `function mytheme_assets() {
  wp_enqueue_style('mytheme-main', get_stylesheet_uri(), [], '1.0');
  wp_enqueue_script('mytheme-app', get_template_directory_uri() . '/assets/app.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'mytheme_assets');`,
      },
      { type: "h2", text: "Step 5 — Add dynamic PHP to your templates" },
      {
        type: "p",
        text: "Replace static content with WordPress template tags. A few essentials:",
      },
      {
        type: "ul",
        items: [
          "<?php bloginfo('name'); ?> — site title",
          "<?php the_title(); ?> — current post or page title",
          "<?php the_content(); ?> — the post body",
          "<?php the_post_thumbnail('large'); ?> — featured image",
          "<?php wp_head(); ?> in <head> and <?php wp_footer(); ?> before </body> — required for plugins to work",
        ],
      },
      { type: "h2", text: "Step 6 — Register menus and widgets" },
      {
        type: "p",
        text: "Add navigation menu and widget support in functions.php so site owners can manage them from the WP dashboard.",
      },
      {
        type: "code",
        text: `function mytheme_setup() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', ['search-form', 'gallery', 'caption']);
  register_nav_menus([
    'primary' => __('Primary Menu', 'my-theme'),
    'footer'  => __('Footer Menu', 'my-theme'),
  ]);
}
add_action('after_setup_theme', 'mytheme_setup');

function mytheme_widgets() {
  register_sidebar([
    'name' => 'Sidebar',
    'id'   => 'sidebar-1',
    'before_widget' => '<section class="widget %2$s">',
    'after_widget'  => '</section>',
  ]);
}
add_action('widgets_init', 'mytheme_widgets');`,
      },
      { type: "h2", text: "Step 7 — Build The Loop" },
      {
        type: "p",
        text: "The Loop is how WordPress renders posts. Drop this inside index.php, archive.php, or wherever you list posts:",
      },
      {
        type: "code",
        text: `<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <div class="meta"><?php the_date(); ?> · <?php the_author(); ?></div>
    <div class="excerpt"><?php the_excerpt(); ?></div>
  </article>
<?php endwhile; the_posts_pagination(); else : ?>
  <p>No posts found.</p>
<?php endif; ?>`,
      },
      { type: "h2", text: "Step 8 — Make it responsive" },
      {
        type: "p",
        text: "If your static site was already responsive, you're mostly done. If not, add a mobile-first stylesheet using CSS Grid and Flexbox, use clamp() for fluid typography, and test on real devices, not just devtools. Add the viewport meta tag in header.php:",
      },
      {
        type: "code",
        text: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
      },
      { type: "h2", text: "Step 9 — Test for speed and SEO" },
      {
        type: "ul",
        items: [
          "Run PageSpeed Insights and aim for 90+ on mobile",
          "Install a caching plugin (WP Rocket, LiteSpeed Cache, or W3 Total Cache)",
          "Use an SEO plugin (Rank Math or Yoast) for meta titles, descriptions, and sitemaps",
          "Compress images on upload with a plugin like ShortPixel or Imagify",
          "Validate your HTML with the W3C validator",
          "Test accessibility with Lighthouse or axe DevTools",
        ],
      },
      { type: "h2", text: "Step 10 — Ship it" },
      {
        type: "p",
        text: "Zip your theme folder, upload it through Appearance → Themes → Add New → Upload, activate it, and configure menus, widgets, and the homepage. You now have a flexible, content-managed WordPress site that looks exactly like your original design.",
      },
      {
        type: "quote",
        text: "The best theme is the one that gives the editor freedom without breaking the designer's vision.",
      },
      { type: "h2", text: "Wrapping up" },
      {
        type: "p",
        text: "Converting a static site to WordPress in 2025 is more straightforward than ever. Stick to the template hierarchy, keep your PHP minimal, enqueue assets properly, and you'll end up with a fast, SEO-friendly, easy-to-maintain site that retains every pixel of your original design.",
      },
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Post not found" }] };
    return {
      meta: [
        { title: `${post.title} — Global Hosiery` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div style={{ padding: 80, textAlign: "center", fontFamily: "'DM Sans', sans-serif" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif" }}>Post not found</h1>
      <Link to="/blog" style={{ color: "#C8973A" }}>← Back to blog</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div style={{ padding: 80, textAlign: "center" }}>
      <p>Something went wrong.</p>
      <button onClick={reset}>Try again</button>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <div style={{ background: "#FAF6EF", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#1A1208" }}>
      <article style={{ maxWidth: 760, margin: "auto", padding: "80px 24px" }}>
        <Link to="/blog" style={{ color: "#8B6520", textDecoration: "none", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          ← All articles
        </Link>
        <div style={{ color: "#C8973A", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: "32px 0 12px" }}>
          {post.category} · {post.date} · {post.readTime}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.2, marginBottom: 24 }}>
          {post.title}
        </h1>
        <div style={{ height: 1, background: "#F0D9A8", margin: "32px 0" }} />
        <div style={{ fontSize: 17, lineHeight: 1.75, color: "#2B2010" }}>
          {post.body.map((block: Post["body"][number], i: number) => {
            switch (block.type) {
              case "p":
                return <p key={i} style={{ marginBottom: 20 }}>{block.text}</p>;
              case "h2":
                return (
                  <h2 key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, marginTop: 40, marginBottom: 14, color: "#1A1208" }}>
                    {block.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: 21, marginTop: 28, marginBottom: 10, color: "#1A1208" }}>
                    {block.text}
                  </h3>
                );
              case "ul":
                return (
                  <ul key={i} style={{ paddingLeft: 22, marginBottom: 20 }}>
                    {block.items.map((it: string, j: number) => (
                      <li key={j} style={{ marginBottom: 8 }}>{it}</li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol key={i} style={{ paddingLeft: 22, marginBottom: 20 }}>
                    {block.items.map((it: string, j: number) => (
                      <li key={j} style={{ marginBottom: 8 }}>{it}</li>
                    ))}
                  </ol>
                );
              case "code":
                return (
                  <pre key={i} style={{ background: "#1A1208", color: "#F0D9A8", padding: 20, borderRadius: 6, overflowX: "auto", fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>
                    <code>{block.text}</code>
                  </pre>
                );
              case "quote":
                return (
                  <blockquote key={i} style={{ borderLeft: "3px solid #C8973A", paddingLeft: 20, margin: "28px 0", fontStyle: "italic", color: "#7A6E5F", fontSize: 18 }}>
                    {block.text}
                  </blockquote>
                );
            }
          })}
        </div>
        <div style={{ height: 1, background: "#F0D9A8", margin: "48px 0 24px" }} />
        <Link to="/blog" style={{ color: "#C8973A", textDecoration: "none", fontWeight: 500 }}>
          ← Back to all articles
        </Link>
      </article>
    </div>
  );
}
