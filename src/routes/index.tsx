import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Hosiery – Premium Clothing from Etawah, UP" },
      {
        name: "description",
        content:
          "Premium hosiery, tracksuits, blankets and apparel from Etawah, Uttar Pradesh. Earn loyalty rewards on every purchase.",
      },
      { property: "og:title", content: "Global Hosiery – Premium Clothing" },
      {
        property: "og:description",
        content: "Premium hosiery, tracksuits, blankets and apparel. Trusted by thousands across India.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const fontsHref =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap";

const css = `
:root {
  --gold: #C8973A; --gold-light: #F0D9A8; --gold-dark: #8B6520;
  --ink: #1A1208; --cream: #FAF6EF; --warm-gray: #F0EBE0;
  --muted: #7A6E5F; --white: #FFFFFF; --accent: #2D4A2D; --accent-light: #E8F0E8;
}
.gh * { margin: 0; padding: 0; box-sizing: border-box; }
.gh { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--ink); overflow-x: hidden; }
.gh .topbar { background: var(--ink); color: var(--gold-light); text-align: center; padding: 8px; font-size: 13px; letter-spacing: 0.05em; }
.gh .topbar span { margin: 0 12px; }
.gh nav { background: var(--white); border-bottom: 1px solid var(--gold-light); position: sticky; top: 0; z-index: 100; }
.gh .nav-inner { max-width: 1200px; margin: auto; display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; }
.gh .logo { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: var(--ink); text-decoration: none; }
.gh .logo span { color: var(--gold); }
.gh .nav-links { display: flex; gap: 28px; list-style: none; }
.gh .nav-links a { text-decoration: none; color: var(--muted); font-size: 14px; font-weight: 500; letter-spacing: 0.03em; transition: color 0.2s; }
.gh .nav-links a:hover { color: var(--gold); }
.gh .nav-actions { display: flex; align-items: center; gap: 16px; }
.gh .btn-loyalty { background: var(--gold); color: var(--white); border: none; padding: 8px 16px; border-radius: 4px; font-size: 13px; font-weight: 500; cursor: pointer; font-family: inherit; transition: background 0.2s; }
.gh .btn-loyalty:hover { background: var(--gold-dark); }
.gh .cart-icon { font-size: 20px; cursor: pointer; position: relative; }
.gh .cart-badge { position: absolute; top: -6px; right: -6px; background: var(--gold); color: white; border-radius: 50%; width: 16px; height: 16px; font-size: 10px; display: flex; align-items: center; justify-content: center; }
.gh .hero { background: linear-gradient(135deg, var(--ink) 0%, #2C1F0A 60%, #3D2D10 100%); min-height: 92vh; display: flex; align-items: center; position: relative; overflow: hidden; }
.gh .hero-pattern { position: absolute; inset: 0; opacity: 0.04; background-image: repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%); background-size: 20px 20px; }
.gh .hero-inner { max-width: 1200px; margin: auto; padding: 80px 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; position: relative; z-index: 1; }
.gh .hero-badge { display: inline-block; background: rgba(200,151,58,0.15); border: 1px solid rgba(200,151,58,0.4); color: var(--gold-light); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 14px; border-radius: 2px; margin-bottom: 24px; }
.gh .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(36px, 5vw, 60px); font-weight: 700; color: var(--white); line-height: 1.15; margin-bottom: 20px; }
.gh .hero h1 em { color: var(--gold); font-style: normal; }
.gh .hero p { color: rgba(255,255,255,0.65); font-size: 16px; line-height: 1.7; margin-bottom: 36px; max-width: 440px; }
.gh .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }
.gh .btn-primary { background: var(--gold); color: var(--ink); padding: 14px 28px; border: none; font-family: inherit; font-size: 14px; font-weight: 500; letter-spacing: 0.05em; cursor: pointer; border-radius: 3px; transition: all 0.2s; }
.gh .btn-primary:hover { background: var(--gold-light); }
.gh .btn-outline { background: transparent; color: var(--white); padding: 14px 28px; border: 1px solid rgba(255,255,255,0.3); font-family: inherit; font-size: 14px; cursor: pointer; border-radius: 3px; transition: all 0.2s; }
.gh .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
.gh .hero-stats { display: flex; gap: 36px; margin-top: 48px; }
.gh .stat { border-left: 2px solid var(--gold); padding-left: 16px; }
.gh .stat-num { font-family: 'Playfair Display', serif; font-size: 28px; color: var(--white); font-weight: 700; }
.gh .stat-label { font-size: 12px; color: rgba(255,255,255,0.5); letter-spacing: 0.05em; margin-top: 2px; }
.gh .hero-visual { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.gh .hero-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(200,151,58,0.2); border-radius: 8px; padding: 20px; text-align: center; transition: transform 0.3s; cursor: pointer; }
.gh .hero-card:hover { transform: translateY(-4px); border-color: rgba(200,151,58,0.5); }
.gh .hero-card-icon { font-size: 36px; margin-bottom: 10px; }
.gh .hero-card h3 { font-family: 'Playfair Display', serif; color: var(--white); font-size: 15px; margin-bottom: 4px; }
.gh .hero-card p { font-size: 12px; color: rgba(255,255,255,0.5); }
.gh .hero-card .price { color: var(--gold); font-weight: 500; font-size: 14px; margin-top: 8px; }
.gh .loyalty-strip { background: var(--gold); padding: 18px 24px; }
.gh .loyalty-inner { max-width: 1200px; margin: auto; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
.gh .loyalty-text { color: var(--ink); }
.gh .loyalty-text strong { font-family: 'Playfair Display', serif; font-size: 18px; display: block; }
.gh .loyalty-text span { font-size: 13px; opacity: 0.8; }
.gh .loyalty-points { display: flex; gap: 24px; }
.gh .lp-item { text-align: center; background: rgba(0,0,0,0.12); padding: 10px 20px; border-radius: 4px; }
.gh .lp-item .num { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: var(--ink); }
.gh .lp-item .label { font-size: 11px; color: var(--ink); opacity: 0.7; letter-spacing: 0.05em; }
.gh .btn-join { background: var(--ink); color: var(--gold); padding: 12px 24px; border: none; font-family: inherit; font-weight: 500; cursor: pointer; border-radius: 3px; white-space: nowrap; transition: background 0.2s; }
.gh .btn-join:hover { background: #2C1F0A; }
.gh section { max-width: 1200px; margin: auto; padding: 72px 24px; }
.gh .section-label { font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); font-weight: 500; margin-bottom: 10px; }
.gh .section-title { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: var(--ink); margin-bottom: 12px; }
.gh .section-sub { color: var(--muted); font-size: 15px; max-width: 500px; line-height: 1.65; }
.gh .cat-controls { display: flex; gap: 10px; flex-wrap: wrap; margin: 32px 0 28px; }
.gh .cat-btn { padding: 8px 20px; border: 1px solid var(--gold-light); background: transparent; border-radius: 20px; font-family: inherit; font-size: 13px; cursor: pointer; transition: all 0.2s; color: var(--muted); }
.gh .cat-btn.active, .gh .cat-btn:hover { background: var(--gold); border-color: var(--gold); color: var(--white); }
.gh .filter-row { display: flex; gap: 12px; align-items: center; margin-bottom: 28px; flex-wrap: wrap; }
.gh .filter-select { padding: 8px 14px; border: 1px solid var(--gold-light); border-radius: 4px; font-family: inherit; font-size: 13px; background: var(--white); color: var(--ink); cursor: pointer; }
.gh .filter-search { flex: 1; min-width: 200px; padding: 8px 14px; border: 1px solid var(--gold-light); border-radius: 4px; font-family: inherit; font-size: 13px; }
.gh .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }
.gh .product-card { background: var(--white); border-radius: 8px; overflow: hidden; border: 1px solid var(--warm-gray); transition: transform 0.25s, box-shadow 0.25s; cursor: pointer; }
.gh .product-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
.gh .product-img { height: 220px; display: flex; align-items: center; justify-content: center; font-size: 64px; position: relative; overflow: hidden; }
.gh .product-img.blanket { background: linear-gradient(135deg, #E8D5B7, #C4A882); }
.gh .product-img.tracksuit { background: linear-gradient(135deg, #C8D8E8, #8AAAC8); }
.gh .product-img.tshirt { background: linear-gradient(135deg, #D4C8E0, #A890C0); }
.gh .product-img.sadri { background: linear-gradient(135deg, #D8E8D4, #9EC89A); }
.gh .product-badge { position: absolute; top: 12px; left: 12px; background: var(--gold); color: white; font-size: 11px; font-weight: 500; padding: 4px 10px; border-radius: 2px; letter-spacing: 0.04em; }
.gh .product-badge.new { background: var(--accent); }
.gh .wishlist-btn { position: absolute; top: 12px; right: 12px; background: white; border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.gh .product-info { padding: 16px; }
.gh .product-cat { font-size: 11px; color: var(--gold); letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; }
.gh .product-name { font-family: 'Playfair Display', serif; font-size: 16px; color: var(--ink); margin: 4px 0 8px; }
.gh .product-sizes { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }
.gh .size-pill { padding: 3px 10px; border: 1px solid var(--warm-gray); border-radius: 2px; font-size: 11px; color: var(--muted); }
.gh .product-footer { display: flex; align-items: center; justify-content: space-between; }
.gh .price-block .original { text-decoration: line-through; color: var(--muted); font-size: 12px; }
.gh .price-block .current { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: var(--ink); }
.gh .add-cart-btn { background: var(--ink); color: var(--white); border: none; padding: 8px 14px; font-family: inherit; font-size: 12px; cursor: pointer; border-radius: 3px; transition: background 0.2s; }
.gh .add-cart-btn:hover { background: var(--gold); }
.gh .loyalty-section { background: var(--ink); padding: 72px 24px; }
.gh .loyalty-content { max-width: 1200px; margin: auto; }
.gh .loyalty-content .section-title { color: var(--white); }
.gh .loyalty-content .section-sub { color: rgba(255,255,255,0.55); }
.gh .loyalty-tiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 40px; }
.gh .tier-card { border: 1px solid; border-radius: 8px; padding: 24px; text-align: center; position: relative; overflow: hidden; }
.gh .tier-card.bronze { border-color: #CD7F32; background: rgba(205,127,50,0.08); }
.gh .tier-card.silver { border-color: #A8A9AD; background: rgba(168,169,173,0.08); }
.gh .tier-card.gold { border-color: var(--gold); background: rgba(200,151,58,0.12); }
.gh .tier-card.platinum { border-color: #E5E4E2; background: rgba(229,228,226,0.08); }
.gh .tier-icon { font-size: 36px; margin-bottom: 12px; }
.gh .tier-name { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--white); margin-bottom: 4px; }
.gh .tier-pts { font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 16px; }
.gh .tier-perks { list-style: none; text-align: left; }
.gh .tier-perks li { font-size: 13px; color: rgba(255,255,255,0.7); padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
.gh .tier-perks li::before { content: '✓ '; color: var(--gold); }
.gh .loyalty-tracker { background: rgba(255,255,255,0.05); border: 1px solid rgba(200,151,58,0.2); border-radius: 8px; padding: 28px; margin-top: 32px; }
.gh .tracker-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px; }
.gh .tracker-top h3 { font-family: 'Playfair Display', serif; color: var(--white); font-size: 18px; }
.gh .tracker-top p { color: rgba(255,255,255,0.5); font-size: 13px; }
.gh .tracker-pts { color: var(--gold); font-size: 24px; font-weight: 700; }
.gh .progress-bar { height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; }
.gh .progress-fill { height: 100%; background: linear-gradient(90deg, var(--gold-dark), var(--gold)); border-radius: 4px; width: 65%; transition: width 1s; }
.gh .tracker-labels { display: flex; justify-content: space-between; margin-top: 6px; font-size: 12px; color: rgba(255,255,255,0.4); }
.gh .crm-section { background: var(--warm-gray); padding: 72px 24px; }
.gh .crm-inner { max-width: 1200px; margin: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
.gh .crm-form { background: var(--white); border-radius: 10px; padding: 32px; border: 1px solid var(--gold-light); }
.gh .crm-form h3 { font-family: 'Playfair Display', serif; font-size: 22px; margin-bottom: 6px; }
.gh .crm-form > p { color: var(--muted); font-size: 14px; margin-bottom: 24px; }
.gh .form-group { margin-bottom: 16px; }
.gh .form-group label { display: block; font-size: 13px; font-weight: 500; color: var(--ink); margin-bottom: 6px; }
.gh .form-group input, .gh .form-group select, .gh .form-group textarea { width: 100%; padding: 10px 14px; border: 1px solid var(--warm-gray); border-radius: 4px; font-family: inherit; font-size: 14px; transition: border-color 0.2s; color: var(--ink); background: var(--white); }
.gh .form-group input:focus, .gh .form-group select:focus, .gh .form-group textarea:focus { outline: none; border-color: var(--gold); }
.gh .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.gh .btn-submit { width: 100%; background: var(--ink); color: var(--white); padding: 13px; border: none; font-family: inherit; font-size: 14px; font-weight: 500; cursor: pointer; border-radius: 4px; margin-top: 8px; transition: background 0.2s; }
.gh .btn-submit:hover { background: var(--gold); }
.gh .crm-benefits { margin-top: 28px; }
.gh .benefit-item { display: flex; gap: 16px; margin-bottom: 24px; align-items: flex-start; }
.gh .benefit-icon { font-size: 28px; flex-shrink: 0; }
.gh .benefit-item h4 { font-weight: 500; margin-bottom: 4px; font-size: 15px; }
.gh .benefit-item p { font-size: 13px; color: var(--muted); line-height: 1.55; }
.gh .testimonials { padding: 72px 24px; background: var(--cream); }
.gh .test-inner { max-width: 1200px; margin: auto; }
.gh .test-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 36px; }
.gh .test-card { background: var(--white); border: 1px solid var(--warm-gray); border-radius: 8px; padding: 24px; position: relative; }
.gh .test-card::before { content: '"'; font-family: 'Playfair Display', serif; font-size: 80px; color: var(--gold-light); position: absolute; top: 8px; left: 20px; line-height: 1; }
.gh .test-text { font-size: 14px; color: var(--muted); line-height: 1.7; margin-bottom: 16px; margin-top: 24px; }
.gh .test-author { display: flex; align-items: center; gap: 12px; }
.gh .test-avatar { width: 38px; height: 38px; border-radius: 50%; background: var(--gold-light); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--gold-dark); font-size: 14px; }
.gh .test-name { font-weight: 500; font-size: 14px; }
.gh .test-stars { color: var(--gold); font-size: 12px; }
.gh .newsletter { background: var(--accent); padding: 56px 24px; }
.gh .newsletter-inner { max-width: 600px; margin: auto; text-align: center; }
.gh .newsletter h2 { font-family: 'Playfair Display', serif; font-size: 30px; color: var(--white); margin-bottom: 10px; }
.gh .newsletter p { color: rgba(255,255,255,0.65); font-size: 15px; margin-bottom: 28px; }
.gh .newsletter-form { display: flex; gap: 10px; }
.gh .newsletter-form input { flex: 1; padding: 12px 16px; border: none; border-radius: 4px; font-family: inherit; font-size: 14px; }
.gh .newsletter-form button { background: var(--gold); color: var(--ink); padding: 12px 24px; border: none; border-radius: 4px; font-family: inherit; font-weight: 500; cursor: pointer; white-space: nowrap; transition: background 0.2s; }
.gh .newsletter-form button:hover { background: var(--gold-light); }
.gh footer { background: var(--ink); color: rgba(255,255,255,0.6); padding: 56px 24px 24px; }
.gh .footer-inner { max-width: 1200px; margin: auto; }
.gh .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
.gh .footer-brand .logo { color: var(--white); display: block; margin-bottom: 12px; }
.gh .footer-brand > p { font-size: 13px; line-height: 1.7; max-width: 240px; }
.gh .footer-contact { margin-top: 16px; font-size: 13px; }
.gh .footer-contact p { margin-bottom: 4px; }
.gh .footer-col h4 { font-family: 'Playfair Display', serif; color: var(--white); font-size: 15px; margin-bottom: 16px; }
.gh .footer-col ul { list-style: none; }
.gh .footer-col ul li { margin-bottom: 8px; }
.gh .footer-col ul li a { color: rgba(255,255,255,0.55); text-decoration: none; font-size: 13px; transition: color 0.2s; }
.gh .footer-col ul li a:hover { color: var(--gold); }
.gh .footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 12px; }
.gh .social-links { display: flex; gap: 12px; margin-top: 12px; }
.gh .social-links a { color: rgba(255,255,255,0.5); font-size: 16px; text-decoration: none; width: 32px; height: 32px; border: 1px solid rgba(255,255,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
.gh .social-links a:hover { border-color: var(--gold); color: var(--gold); }
.gh .modal-bg { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 200; align-items: center; justify-content: center; }
.gh .modal-bg.open { display: flex; }
.gh .modal { background: var(--white); border-radius: 10px; padding: 36px; max-width: 480px; width: 90%; position: relative; animation: ghFadeUp 0.3s ease; }
@keyframes ghFadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.gh .modal-close { position: absolute; top: 14px; right: 18px; font-size: 22px; cursor: pointer; color: var(--muted); background: none; border: none; }
.gh .modal h3 { font-family: 'Playfair Display', serif; font-size: 22px; margin-bottom: 8px; }
.gh .modal p { color: var(--muted); font-size: 14px; margin-bottom: 20px; }
.gh .modal-points { background: var(--gold-light); border-radius: 6px; padding: 14px; text-align: center; margin-bottom: 20px; }
.gh .modal-points .big { font-family: 'Playfair Display', serif; font-size: 36px; color: var(--gold-dark); }
.gh .modal-points .label { font-size: 13px; color: var(--gold-dark); }
.gh .toast { position: fixed; bottom: 24px; right: 24px; background: var(--ink); color: var(--white); padding: 14px 20px; border-radius: 6px; font-size: 14px; z-index: 300; transform: translateY(80px); opacity: 0; transition: all 0.3s; border-left: 3px solid var(--gold); }
.gh .toast.show { transform: translateY(0); opacity: 1; }
@media (max-width: 768px) {
  .gh .hero-inner { grid-template-columns: 1fr; gap: 40px; }
  .gh .hero-visual { display: none; }
  .gh .nav-links { display: none; }
  .gh .crm-inner { grid-template-columns: 1fr; }
  .gh .footer-grid { grid-template-columns: 1fr 1fr; }
  .gh .loyalty-inner { justify-content: center; text-align: center; }
}
`;

type Product = {
  id: number;
  name: string;
  cat: "blanket" | "tracksuit" | "tshirt" | "sadri";
  catLabel: string;
  icon: string;
  price: number;
  original?: number;
  sizes: string[];
  badge?: string;
  badgeType?: "new" | "sale";
};

const products: Product[] = [
  { id: 1, name: "Double Bed Warm Blanket", cat: "blanket", catLabel: "Blankets", icon: "🛏️", price: 1299, original: 1599, sizes: ["Double"], badge: "-19%", badgeType: "sale" },
  { id: 2, name: "Single Bed Cozy Blanket", cat: "blanket", catLabel: "Blankets", icon: "🛏️", price: 735, sizes: ["Single"], badge: "Bestseller" },
  { id: 3, name: "Premium Athletic Tracksuit", cat: "tracksuit", catLabel: "Tracksuits", icon: "🏃", price: 1312, original: 1599, sizes: ["S", "M", "L", "XL"], badge: "New", badgeType: "new" },
  { id: 4, name: "Sports Performance Set", cat: "tracksuit", catLabel: "Tracksuits", icon: "🏃", price: 1499, sizes: ["M", "L", "XL", "XXL"] },
  { id: 5, name: "Classic Cotton T-Shirt", cat: "tshirt", catLabel: "T-Shirts", icon: "👕", price: 472, original: 599, sizes: ["S", "M", "L", "XL"], badge: "-21%", badgeType: "sale" },
  { id: 6, name: "Premium Polo T-Shirt", cat: "tshirt", catLabel: "T-Shirts", icon: "👕", price: 649, sizes: ["M", "L", "XL"] },
  { id: 7, name: "Woolen Sadri Vest", cat: "sadri", catLabel: "Sadri", icon: "🧥", price: 735, sizes: ["M", "L", "XL"], badge: "New", badgeType: "new" },
  { id: 8, name: "Traditional Sadri Jacket", cat: "sadri", catLabel: "Sadri", icon: "🧥", price: 899, sizes: ["L", "XL", "XXL"] },
];

function Index() {
  const [activeCat, setActiveCat] = useState<string>("all");
  const [sort, setSort] = useState("default");
  const [size, setSize] = useState("all");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  let filtered = products.filter(
    (p) =>
      (activeCat === "all" || p.cat === activeCat) &&
      (size === "all" || p.sizes.includes(size)) &&
      (search === "" || p.name.toLowerCase().includes(search.toLowerCase())),
  );
  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "name") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <link href={fontsHref} rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="gh">
        <div className="topbar">
          <span>📦 Free shipping on orders above ₹999</span>
          <span>📞 +91 8690410131</span>
          <span>🌟 Earn loyalty points on every purchase</span>
        </div>

        <nav>
          <div className="nav-inner">
            <a href="#" className="logo">Global <span>Hosiery</span></a>
            <ul className="nav-links">
              <li><a href="#catalogue">Catalogue</a></li>
              <li><a href="#loyalty">Loyalty</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#testimonials">Reviews</a></li>
            </ul>
            <div className="nav-actions">
              <button className="btn-loyalty" onClick={() => setModalOpen(true)}>🏅 My Points</button>
              <div className="cart-icon">🛒<span className="cart-badge">{cartCount}</span></div>
            </div>
          </div>
        </nav>

        <header className="hero">
          <div className="hero-pattern" />
          <div className="hero-inner">
            <div>
              <span className="hero-badge">Est. Etawah, Uttar Pradesh</span>
              <h1>Wear the <em>Thread</em> of Quality</h1>
              <p>Premium hosiery, tracksuits, blankets, and apparel — crafted for comfort, designed for life. Trusted by thousands across India.</p>
              <div className="hero-cta">
                <a href="#catalogue" className="btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>Shop Collection</a>
                <button className="btn-outline" onClick={() => setModalOpen(true)}>Join Loyalty Club</button>
              </div>
              <div className="hero-stats">
                <div className="stat"><div className="stat-num">5000+</div><div className="stat-label">Happy Customers</div></div>
                <div className="stat"><div className="stat-num">100+</div><div className="stat-label">Products</div></div>
                <div className="stat"><div className="stat-num">3+</div><div className="stat-label">Years Trusted</div></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card"><div className="hero-card-icon">🛏️</div><h3>Blankets</h3><p>Warm & cozy</p><div className="price">From ₹735</div></div>
              <div className="hero-card"><div className="hero-card-icon">🏃</div><h3>Tracksuits</h3><p>Athletic wear</p><div className="price">From ₹1,312</div></div>
              <div className="hero-card"><div className="hero-card-icon">👕</div><h3>T-Shirts</h3><p>Daily essentials</p><div className="price">From ₹472</div></div>
              <div className="hero-card"><div className="hero-card-icon">🧥</div><h3>Sadri</h3><p>Woolen comfort</p><div className="price">From ₹735</div></div>
            </div>
          </div>
        </header>

        <div className="loyalty-strip">
          <div className="loyalty-inner">
            <div className="loyalty-text"><strong>Global Rewards Club</strong><span>Earn points on every purchase. Redeem for discounts.</span></div>
            <div className="loyalty-points">
              <div className="lp-item"><div className="num">1x</div><div className="label">Bronze</div></div>
              <div className="lp-item"><div className="num">1.5x</div><div className="label">Silver</div></div>
              <div className="lp-item"><div className="num">2x</div><div className="label">Gold</div></div>
              <div className="lp-item"><div className="num">3x</div><div className="label">Platinum</div></div>
            </div>
            <button className="btn-join" onClick={() => setModalOpen(true)}>Join Free →</button>
          </div>
        </div>

        <section id="catalogue">
          <div className="section-label">Product Catalogue</div>
          <h2 className="section-title">Our Collections</h2>
          <p className="section-sub">Filter by category, size, or price. Authentic quality, every item.</p>

          <div className="cat-controls">
            {[
              ["all", "All Products"],
              ["blanket", "🛏️ Blankets"],
              ["tracksuit", "🏃 Tracksuits"],
              ["tshirt", "👕 T-Shirts"],
              ["sadri", "🧥 Sadri"],
            ].map(([k, l]) => (
              <button key={k} className={`cat-btn ${activeCat === k ? "active" : ""}`} onClick={() => setActiveCat(k)}>{l}</button>
            ))}
          </div>

          <div className="filter-row">
            <input className="filter-search" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <select className="filter-select" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="default">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
            <select className="filter-select" value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="all">All Sizes</option>
              <option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option>
            </select>
          </div>

          <div className="product-grid">
            {filtered.map((p) => (
              <div key={p.id} className="product-card">
                <div className={`product-img ${p.cat}`}>
                  {p.badge && <span className={`product-badge ${p.badgeType === "new" ? "new" : ""}`}>{p.badge}</span>}
                  <button className="wishlist-btn" onClick={(e) => { e.stopPropagation(); showToast("Added to wishlist ♥"); }}>♡</button>
                  {p.icon}
                </div>
                <div className="product-info">
                  <div className="product-cat">{p.catLabel}</div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-sizes">{p.sizes.map((s) => <span key={s} className="size-pill">{s}</span>)}</div>
                  <div className="product-footer">
                    <div className="price-block">
                      {p.original && <div className="original">₹{p.original}</div>}
                      <div className="current">₹{p.price}</div>
                    </div>
                    <button className="add-cart-btn" onClick={() => { setCartCount((c) => c + 1); showToast(`${p.name} added to cart`); }}>+ Cart</button>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && <p style={{ color: "var(--muted)", gridColumn: "1/-1" }}>No products match your filters.</p>}
          </div>
        </section>

        <div id="loyalty" className="loyalty-section">
          <div className="loyalty-content">
            <div className="section-label">Rewards Program</div>
            <h2 className="section-title">Global Rewards Club</h2>
            <p className="section-sub">Every rupee spent earns you points. The more you shop, the more you save.</p>

            <div className="loyalty-tiers">
              {[
                { c: "bronze", i: "🥉", n: "Bronze", p: "0 – 999 points", perks: ["1 point per ₹10", "Birthday discount 5%", "Early access to sales"] },
                { c: "silver", i: "🥈", n: "Silver", p: "1,000 – 4,999 points", perks: ["1.5 points per ₹10", "Birthday discount 10%", "Free shipping always", "Priority support"] },
                { c: "gold", i: "🥇", n: "Gold", p: "5,000 – 14,999 points", perks: ["2 points per ₹10", "Birthday discount 15%", "Exclusive member sales", "Free returns", "Personal stylist chat"] },
                { c: "platinum", i: "💎", n: "Platinum", p: "15,000+ points", perks: ["3 points per ₹10", "Birthday discount 20%", "VIP early access", "Dedicated manager", "Annual gift voucher"] },
              ].map((t) => (
                <div key={t.c} className={`tier-card ${t.c}`}>
                  <div className="tier-icon">{t.i}</div>
                  <div className="tier-name">{t.n}</div>
                  <div className="tier-pts">{t.p}</div>
                  <ul className="tier-perks">{t.perks.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
            </div>

            <div className="loyalty-tracker">
              <div className="tracker-top">
                <div>
                  <h3>Your Rewards Progress</h3>
                  <p>You're on your way to Silver tier!</p>
                </div>
                <div className="tracker-pts">650 pts</div>
              </div>
              <div className="progress-bar"><div className="progress-fill" /></div>
              <div className="tracker-labels"><span>Bronze (0)</span><span>Silver (1,000)</span></div>
            </div>
          </div>
        </div>

        <div id="contact" className="crm-section">
          <div className="crm-inner">
            <div className="crm-info">
              <div className="section-label">Customer Relationship</div>
              <h2 className="section-title">We're Here for You</h2>
              <p className="section-sub">Our CRM team personally follows up on every inquiry. Expect a response within 24 hours.</p>
              <div className="crm-benefits">
                {[
                  ["💬", "Personalised Follow-up", "Every message is tracked and responded to by our dedicated team — no generic auto-replies."],
                  ["📧", "Email & WhatsApp Support", "Reach us on info@globalhosiery.in or WhatsApp at +91 8690410131 for instant help."],
                  ["🎁", "Exclusive Offers for Members", "CRM-enrolled customers receive personalised discounts, restocking alerts, and early access."],
                  ["📍", "Visit Us", "148, Sabitganj, Etawah, Uttar Pradesh — wholesale & retail inquiries welcome."],
                ].map(([i, h, d]) => (
                  <div key={h} className="benefit-item">
                    <div className="benefit-icon">{i}</div>
                    <div><h4>{h}</h4><p>{d}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <form className="crm-form" onSubmit={(e) => { e.preventDefault(); showToast("Message sent! We'll respond within 24 hours."); (e.target as HTMLFormElement).reset(); }}>
              <h3>Send Us a Message</h3>
              <p>Fill in your details and we'll get back to you shortly.</p>
              <div className="form-row">
                <div className="form-group"><label>First Name</label><input required /></div>
                <div className="form-group"><label>Last Name</label><input required /></div>
              </div>
              <div className="form-group"><label>Email Address</label><input type="email" required placeholder="you@example.com" /></div>
              <div className="form-group"><label>Phone Number</label><input type="tel" required /></div>
              <div className="form-group">
                <label>Inquiry Type</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Wholesale / Bulk Order</option>
                  <option>Returns & Refunds</option>
                  <option>Loyalty Program</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group"><label>Message</label><textarea rows={4} required /></div>
              <button type="submit" className="btn-submit">Send Message →</button>
            </form>
          </div>
        </div>

        <div id="testimonials" className="testimonials">
          <div className="test-inner">
            <div className="section-label">Customer Reviews</div>
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="test-grid">
              {[
                ["The blankets are incredibly warm. Ordered for the whole family and everyone loves them. Delivery was fast too!", "AK", "Ankit Kumar", "★★★★★"],
                ["Great quality tracksuits at an unbeatable price. I'm a Gold member now and the loyalty perks are amazing.", "PS", "Priya Singh", "★★★★★"],
                ["Ordered in bulk for our sports club. The team was very helpful and the quality of the T-shirts is excellent.", "RV", "Rohit Verma", "★★★★☆"],
              ].map(([t, a, n, s]) => (
                <div key={n} className="test-card">
                  <p className="test-text">{t}</p>
                  <div className="test-author">
                    <div className="test-avatar">{a}</div>
                    <div><div className="test-name">{n}</div><div className="test-stars">{s}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="newsletter">
          <div className="newsletter-inner">
            <h2>Stay in the Loop</h2>
            <p>Get exclusive deals, new arrivals, and loyalty bonus offers straight to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); showToast("Subscribed! Check your inbox."); (e.target as HTMLFormElement).reset(); }}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <footer>
          <div className="footer-inner">
            <div className="footer-grid">
              <div className="footer-brand">
                <a href="#" className="logo">Global <span>Hosiery</span></a>
                <p>Premium hosiery and clothing from Etawah, Uttar Pradesh. Quality you can feel, prices you'll love.</p>
                <div className="footer-contact">
                  <p>📞 +91 8690410131</p>
                  <p>✉️ info@globalhosiery.in</p>
                  <p>📍 148, Sabitganj, Etawah, UP</p>
                </div>
              </div>
              <div className="footer-col">
                <h4>Collections</h4>
                <ul>
                  <li><a href="#catalogue">Blankets</a></li>
                  <li><a href="#catalogue">Double Bed Blanket</a></li>
                  <li><a href="#catalogue">Single Bed Blanket</a></li>
                  <li><a href="#catalogue">Tracksuits</a></li>
                  <li><a href="#catalogue">T-Shirts</a></li>
                  <li><a href="#catalogue">Sadri</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">Cancellation & Refund</a></li>
                  <li><a href="#contact">Customer Support</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Shop On</h4>
                <ul>
                  <li><a href="#">Meesho</a></li>
                  <li><a href="#">Flipkart</a></li>
                  <li><a href="#">WhatsApp Order</a></li>
                </ul>
                <div className="social-links">
                  <a href="#" aria-label="Facebook">f</a>
                  <a href="#" aria-label="Instagram">in</a>
                  <a href="#" aria-label="WhatsApp">W</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div>© 2024 Global Hosiery. All rights reserved.</div>
              <div>Made with ❤️ in Etawah, UP</div>
            </div>
          </div>
        </footer>

        <div className={`modal-bg ${modalOpen ? "open" : ""}`} onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
            <h3>🏅 Global Rewards Club</h3>
            <p>Join free and start earning points on every purchase!</p>
            <div className="modal-points">
              <div className="big">650</div>
              <div className="label">Your Current Points</div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setModalOpen(false); showToast("Account activated! Welcome to the club."); }}>
              <div className="form-group"><label>Email Address</label><input type="email" required placeholder="you@example.com" /></div>
              <div className="form-group"><label>Phone Number</label><input type="tel" required /></div>
              <button type="submit" className="btn-submit">Activate My Account →</button>
            </form>
          </div>
        </div>

        <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
      </div>
    </>
  );
}
