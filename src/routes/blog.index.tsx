import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Global Hosiery" },
      { name: "description", content: "Guides, tutorials and stories from Global Hosiery." },
      { property: "og:title", content: "Blog — Global Hosiery" },
      { property: "og:description", content: "Guides, tutorials and stories from Global Hosiery." },
    ],
  }),
  component: BlogIndex,
});

const posts = [
  {
    slug: "convert-static-site-to-wordpress-theme-2025",
    title: "How to Convert a Static Website into a WordPress Theme (2025 Guide)",
    excerpt:
      "A complete step-by-step guide to turning your existing HTML/CSS design into a fully functional WordPress theme — template files, dynamic PHP, menus, widgets, responsiveness, SEO and speed.",
    date: "May 24, 2026",
    readTime: "12 min read",
    category: "Web Development",
  },
];

function BlogIndex() {
  return (
    <div style={{ background: "#FAF6EF", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 880, margin: "auto", padding: "80px 24px" }}>
        <Link to="/" style={{ color: "#8B6520", textDecoration: "none", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#1A1208", margin: "16px 0 12px" }}>
          The Journal
        </h1>
        <p style={{ color: "#7A6E5F", fontSize: 16, marginBottom: 48 }}>
          Stories, guides and tutorials from our team.
        </p>
        <div style={{ display: "grid", gap: 24 }}>
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              style={{
                display: "block",
                background: "white",
                border: "1px solid #F0D9A8",
                borderRadius: 8,
                padding: 32,
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div style={{ color: "#C8973A", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                {p.category} · {p.date} · {p.readTime}
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#1A1208", marginBottom: 10, lineHeight: 1.25 }}>
                {p.title}
              </h2>
              <p style={{ color: "#7A6E5F", fontSize: 15, lineHeight: 1.65 }}>{p.excerpt}</p>
              <div style={{ marginTop: 16, color: "#C8973A", fontSize: 13, fontWeight: 500 }}>Read article →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
