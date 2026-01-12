const DEFAULT_CONFIG = {
    storeName: "Digital Premium",
    contact: "https://t.me/Mr_Redbunny",
    favicon: "https://i.postimg.cc/4y0CHYHF/dp.jpg",
    ogImage: "https://i.postimg.cc/4y0CHYHF/dp.jpg",
    ogTitle: "Digital Premium Store",
    ogDesc: "Pusat Produk Digital Termurah & Terpercaya",
    banners: [
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    ],
    cats: ["Semua", "Streaming", "App", "Game"]
  };
  
  // --- ICONS (SVG) ---
  const ICONS = {
    chat: `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
    cart: `<svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
    history: `<svg viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>`,
    wallet: `<svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
    user: `<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    search: `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,
    filter: `<svg viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>`,
    close: `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
    check: `<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
    back: `<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`,
    edit: `<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
    next: `<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,
    help: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>`,
    trash: `<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,
    logout: `<svg viewBox="0 0 24 24"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>`,
    copy: `<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`,
    bag: `<svg viewBox="0 0 24 24"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2H10c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/></svg>`,
    settings: `<svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>`,
    eye: `<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,
    camera: `<svg viewBox="0 0 24 24"><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>`,
    chart: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
    chevronDown: `<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>`,
    ticket: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-1.5c1.93 0 3.5-1.57 3.5-3.5S5.93 9.5 4 9.5V6h16v1.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5V18z"/></svg>`,
    plus: `<svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`,
    box: `<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"/></svg>`,
    arrowLeft: `<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,
    lock: `<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3 3.1-3 1.71 0 3.1 1.29 3.1 3v2z"/></svg>`,
    arrowUp: `<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>`,
    arrowDown: `<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>`,
    share: `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`,
  };
  
  const HTML_PART_1 = `
  <!DOCTYPE html>
  <html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>{{OG_TITLE}}</title>
    <link rel="shortcut icon" href="{{STORE_FAVICON}}">
    
    <meta property="og:title" content="{{OG_TITLE}}">
    <meta property="og:description" content="{{OG_DESC}}">
    <meta property="og:image" content="{{OG_IMAGE}}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{OG_TITLE}}">
    <meta name="twitter:description" content="{{OG_DESC}}">
    <meta name="twitter:image" content="{{OG_IMAGE}}">
    
    <meta name="theme-color" content="#FFFFFF">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
                :root {
            --bg: #F1F5F9; /* Sedikit lebih gelap agar kartu putih lebih kontras */
            --surface: #FFFFFF;
            --primary: #4F46E5; /* Ganti ke Indigo/Violet yang lebih modern daripada Royal Blue standar */
            --primary-dark: #4338CA;
            --primary-gradient: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); /* Gradient baru */
            --text: #0F172A; /* Slate 900 */
            --text-muted: #64748B;
            --border: #E2E8F0;
            --glass: rgba(255, 255, 255, 0.85);
            --danger: #EF4444;
            --success: #10B981;
            --radius-lg: 20px; /* Radius lebih bulat */
            --radius-md: 16px;
            --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            --shadow-float: 0 10px 25px -5px rgba(79, 70, 229, 0.4); /* Shadow berwarna untuk tombol */
            --font-main: 'Plus Jakarta Sans', sans-serif;
            --font-code: 'Fira Code', monospace;
        }

  
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; outline: none; }
        body { background: var(--bg); color: var(--text); font-family: var(--font-main); margin: 0; padding-bottom: 90px; font-size: 14px; line-height: 1.5; }
        svg { width: 20px; height: 20px; fill: currentColor; display: block; }
        
        /* NAVBAR COMPACT */
        .navbar { 
            position: fixed; top: 0; left: 0; right: 0; 
            background: var(--glass); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); 
            z-index: 50; padding: 0 16px; height: 54px;
            display: flex; justify-content: space-between; align-items: center; 
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .nav-brand { font-weight: 800; font-size: 1.1rem; color: var(--primary-dark); letter-spacing: -0.5px; }
        
        .nav-actions { display: flex; gap: 8px; align-items: center; }
        
        /* Search Box in Header */
        .nav-search-wrapper { position: relative; }
        .nav-search-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); width: 14px; height: 14px; color: var(--text-muted); pointer-events: none; }
        .nav-search-box {
            background: #f1f5f9; border: none; padding: 6px 12px 6px 30px; 
            border-radius: 20px; font-size: 0.8rem; color: var(--text);
            width: 120px; transition: width 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
            border: 1px solid transparent;
        }
        .nav-search-box:focus { width: 160px; background: white; border-color: var(--primary); box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1); }
        
        .nav-filter-btn { 
            width: 32px; height: 32px; background: #f1f5f9; border-radius: 50%; 
            display: flex; align-items: center; justify-content: center; 
            color: var(--text-muted); cursor: pointer; transition: 0.2s;
        }
        .nav-filter-btn:active { background: #e2e8f0; transform: scale(0.95); }
  
        /* BANNER (UPDATED POSITION & SIZE) */
        .banner-container { 
            margin-top: 59px; /* 54px header + 5px gap */
            margin-bottom: 5px; /* 5px gap ke kategori */
            padding: 0 4px; /* Sisa 4px kiri-kanan agar lebar */
            max-width: 1200px; 
            margin-left: auto; 
            margin-right: auto; 
            position: relative; 
        }
        .banner-slider { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); scrollbar-width: none; scroll-behavior: smooth; }
        .banner-slider::-webkit-scrollbar { display: none; }
        .banner-slide { min-width: 100%; scroll-snap-align: center; position: relative; }
        
        /* BANNER IMAGE: TALLER/BIGGER */
        .banner-img { 
            width: 100%; 
            aspect-ratio: 2/1; /* Rasio lebih tinggi */
            object-fit: cover; 
            display: block; 
            border-radius: var(--radius-lg);
        }
        
        .banner-dots {
            position: absolute; bottom: 10px; left: 0; right: 0;
            display: flex; justify-content: center; gap: 6px; z-index: 10;
        }
        .banner-dot {
            width: 6px; height: 6px; background: rgba(255, 255, 255, 0.4);
            border-radius: 10px; transition: all 0.3s ease; backdrop-filter: blur(2px);
        }
        .banner-dot.active { background: #fff; width: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
        
        /* CATEGORY (UPDATED SPACING) */
        .cat-scroll { 
            display: flex; gap: 8px; overflow-x: auto; 
            padding: 0 4px 5px 4px; /* Kiri 4px, Bawah 5px */
            scrollbar-width: none; max-width: 1200px; margin: 0 auto; 
        }
        .cat-scroll::-webkit-scrollbar { display: none; }
        .cat-pill { background: white; border: 1px solid var(--border); padding: 8px 18px; border-radius: 100px; font-size: 0.85rem; color: var(--text-muted); white-space: nowrap; cursor: pointer; transition: 0.2s; font-weight: 600; }
        .cat-pill.active { background: var(--primary); color: white; border-color: var(--primary); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); }
        
        /* GRID MARKETPLACE STYLE */
        .container { max-width: 1200px; margin: 0 auto; padding: 0 4px; }
        .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; }
        @media (min-width: 768px) { .grid { grid-template-columns: repeat(5, 1fr); gap: 4px; } }
        
        .card { 
    background: white; 
    border-radius: var(--radius-lg); 
    overflow: hidden; 
    display: flex; 
    flex-direction: column; 
    cursor: pointer; 
    border: none; 
    box-shadow: 0 4px 20px rgba(0,0,0,0.03); 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
    position: relative;
}
.card:active { transform: scale(0.96); }
.prod-img-container { 
    width: 100%; 
    padding-top: 100%; 
    position: relative; 
    background: #f8fafc; 
    overflow: hidden; 
}
.prod-img { 
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
    object-fit: cover; 
    transition: transform 0.5s ease;
}

        .badge-discount { 
            position: absolute; top: 8px; right: 8px; z-index: 10;
            background: rgba(255,255,255, 0.9); backdrop-filter: blur(4px);
            padding: 4px 8px; border-radius: 6px;
            font-size: 0.65rem; font-weight: 700; color: var(--primary);
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .card-content { padding: 12px; flex-grow: 1; display: flex; flex-direction: column; }
        .card h4 { 
            font-size: 0.9rem; font-weight: 600; margin: 0 0 6px 0; color: var(--text); 
            display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; 
            line-height: 1.4; height: 2.8em; 
        }
        
        .price-row { display: flex; align-items: baseline; gap: 4px; margin-top: auto; justify-content: space-between; }
        .price { color: var(--primary-dark); font-weight: 800; font-size: 1rem; }
        .sold-count { font-size: 0.7rem; color: var(--text-muted); }
        
        /* BOTTOM NAV */
        .bottom-nav { 
    position: fixed; bottom: 0; left: 0; right: 0; 
    background: rgba(255,255,255,0.9); 
    backdrop-filter: blur(20px); 
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(0,0,0,0.05); 
    padding: 12px 0 calc(12px + env(safe-area-inset-bottom)); 
    display: flex; justify-content: space-around; 
    z-index: 100; 
    box-shadow: 0 -10px 40px rgba(0,0,0,0.03); 
}
.nav-item { 
    display: flex; flex-direction: column; align-items: center; justify-content: center; 
    flex: 1; color: #94A3B8; cursor: pointer; transition: 0.3s; position: relative; 
}
.nav-item svg { width: 22px; height: 22px; margin-bottom: 6px; transition: 0.3s; stroke-width: 2px; }
.nav-item span { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.3px; }

.nav-item.active { color: var(--primary); }
.nav-item.active svg { 
    transform: translateY(-4px); 
    filter: drop-shadow(0 4px 6px rgba(79, 70, 229, 0.4)); 
}
        
        .admin-float-btn { position: fixed; bottom: 90px; right: 20px; width: 50px; height: 50px; background: var(--text); color: white; border-radius: 50%; display: none; align-items: center; justify-content: center; z-index: 90; box-shadow: var(--shadow-float); cursor: pointer; transition: transform 0.2s; }
        .admin-float-btn:active { transform: scale(0.9); }
        
        /* FULL SCREEN MODAL */
        .fs-modal { position: fixed; inset: 0; background: var(--bg); z-index: 2000; transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; flex-direction: column; }
        .fs-modal.active { transform: translateY(0); }
        .fs-header { padding: 15px 20px; background: white; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; font-weight: 700; font-size: 1.1rem; }
        
        /* PRODUCT DETAIL PAGE */
        .pdp-scroll { flex: 1; overflow-y: auto; padding-bottom: 80px; }
        .pdp-hero { width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block; background: white; }
        .pdp-info { background: white; padding: 20px; margin-bottom: 12px; border-bottom: 1px solid var(--border); }
        .pdp-price { font-size: 1.5rem; color: var(--primary-dark); font-weight: 800; margin-bottom: 8px; }
        .pdp-title { font-size: 1.1rem; font-weight: 600; line-height: 1.4; margin-bottom: 10px; color: var(--text); }
        .pdp-desc-box { background: white; padding: 20px; margin-bottom: 12px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .pdp-section-title { font-weight: 700; font-size: 0.95rem; margin-bottom: 10px; color: var(--text); text-transform: uppercase; letter-spacing: 0.5px; }
        .pdp-desc-text { font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; white-space: pre-wrap; }
        
        .pdp-bottom-bar {
            position: fixed; bottom: 0; left: 0; right: 0;
            background: white; border-top: 1px solid var(--border);
            padding: 12px 20px calc(12px + env(safe-area-inset-bottom));
            display: flex; align-items: center; gap: 12px; z-index: 2050;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.05);
        }
        .pdp-icon-btn {
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            color: var(--text-muted); font-size: 0.75rem; min-width: 50px; cursor: pointer; font-weight: 600;
        }
        .pdp-icon-btn svg { width: 24px; height: 24px; margin-bottom: 4px; }
        .btn-pdp-cart { 
            flex: 1; background: #EFF6FF; color: var(--primary); 
            border: 1px solid #DBEAFE; padding: 14px; border-radius: 12px; 
            font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: 0.2s;
        }
        .btn-pdp-buy { 
            flex: 1; background: var(--primary); color: white; 
            border: none; padding: 14px; border-radius: 12px; 
            font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: 0.2s;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        .btn-pdp-buy:active { transform: scale(0.98); }
  
        /* CART PAGE MODIFIED */
        .cart-item { background: white; padding: 15px; margin-bottom: 12px; display: flex; align-items: center; gap: 15px; border-radius: 12px; border: 1px solid var(--border); box-shadow: var(--shadow-sm); }
        .cart-thumb { width: 70px; height: 70px; object-fit: cover; border-radius: 8px; background: #f1f5f9; }
        .cart-info { flex: 1; }
        .cart-title { font-size: 0.95rem; font-weight: 600; margin-bottom: 5px; line-height: 1.3; }
        .cart-price { color: var(--primary); font-weight: 700; }
        .cart-del { color: var(--danger); padding: 8px; cursor: pointer; background: #FEF2F2; border-radius: 8px; margin-left:5px; }
        
        /* CHECKBOX STYLE */
        .cart-check { width: 22px; height: 22px; border-radius: 50%; border: 2px solid #cbd5e1; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:0.2s; margin-right:5px; flex-shrink:0; }
        .cart-check.active { background: var(--primary); border-color: var(--primary); }
        .cart-check.active::after { content:'✔'; color:white; font-size:12px; }
  
        /* ADMIN - SIDEBAR LAYOUT */
        .admin-container { display: flex; height: 100%; overflow: hidden; }
        .admin-sidebar { width: 70px; background: white; border-right: 1px solid var(--border); display: flex; flex-direction: column; align-items: center; padding: 20px 0; gap: 15px; }
        .sidebar-item { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); transition: 0.2s; cursor: pointer; }
        .sidebar-item.active { background: var(--primary); color: white; box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3); }
        .admin-content { flex: 1; padding: 20px; overflow-y: auto; }
        .admin-section-title { font-size: 1rem; font-weight: 700; margin-bottom: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; font-size: 0.75rem; }
  
        .accordion { background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 12px; overflow: hidden; transition: 0.2s; }
        .accordion-header { padding: 16px; font-weight: 700; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: white; user-select: none; }
        .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.3s cubic-bezier(0, 1, 0, 1); background: #f8fafc; border-top: 1px solid transparent; }
        .accordion.open .accordion-content { max-height: 2000px; border-top-color: var(--border); transition: max-height 0.3s ease-in-out; }
        .accordion.open .accordion-header { color: var(--primary); }
        .accordion.open .accordion-header svg { transform: rotate(180deg); }
        .acc-inner { padding: 20px; }
        
        .input-field { width: 100%; background: white; border: 1px solid var(--border); padding: 12px; border-radius: 10px; margin-bottom: 15px; font-size: 0.9rem; color: var(--text); transition: 0.2s; }
        .input-field:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
        .form-label { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); margin-bottom: 5px; display: block; }
        .btn-primary { 
    width: 100%; 
    background: var(--primary-gradient); 
    color: white; 
    border: none; 
    padding: 16px; 
    border-radius: var(--radius-md); 
    font-weight: 700; 
    font-size: 0.95rem; 
    cursor: pointer; 
    box-shadow: 0 8px 20px -6px rgba(79, 70, 229, 0.5); 
    transition: all 0.2s; 
    letter-spacing: 0.5px;
}
.btn-primary:active { 
    transform: scale(0.97); 
    box-shadow: 0 4px 10px -4px rgba(79, 70, 229, 0.5);
}
        
        .preview-img { width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-top: 5px; background: #f1f5f9; display: none; }
        .preview-favicon { width: 48px; height: 48px; object-fit: contain; border-radius: 8px; margin-top: 5px; background: #f1f5f9; display: none; border: 1px solid var(--border); }
        
        .modal { display: none; position: fixed; inset: 0; z-index: 3000; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; }
        .modal.active { display: flex; opacity: 1; }
        .modal-content { background: white; width: 90%; max-width: 400px; padding: 25px; border-radius: 20px; position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.15); transform: scale(0.9); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .modal.active .modal-content { transform: scale(1); }
        
        .loader { width: 30px; height: 30px; border: 3px solid #e2e8f0; border-top-color: var(--primary); border-radius: 50%; animation: spin 0.8s linear infinite; margin: 20px auto; }
        @keyframes spin { to { transform: rotate(360deg); } }
        
        .toast-container { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none; }
        .toast { pointer-events: auto; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); color: var(--text); padding: 12px 20px; border-radius: 50px; box-shadow: 0 10px 30px -5px rgba(0,0,0,0.15); border: 1px solid rgba(255,255,255,0.5); display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 0.9rem; transform: translateY(-20px); opacity: 0; transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .toast.visible { transform: translateY(0); opacity: 1; }
        
        .bottom-sheet { position: fixed; bottom: 0; left: 0; right: 0; background: white; border-radius: 24px 24px 0 0; padding: 20px 0; z-index: 3500; transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); box-shadow: 0 -10px 40px rgba(0,0,0,0.1); }
        .bottom-sheet.active { transform: translateY(0); }
        .sheet-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.3); z-index: 3400; opacity: 0; pointer-events: none; transition: 0.3s; }
        .sheet-overlay.active { opacity: 1; pointer-events: auto; backdrop-filter: blur(4px); }
        .sheet-option { padding: 16px 24px; font-weight: 600; color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: space-between; }
        .sheet-option.selected { color: var(--primary); background: #EFF6FF; }
        
        /* ADMIN STATS */
        .stats-card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px; }
        .stats-card { background: white; padding: 16px; border-radius: 16px; border: 1px solid var(--border); box-shadow: var(--shadow-sm); display:flex; flex-direction:column; justify-content:center; }
        .stats-label { font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; }
        .stats-val { font-size: 1.2rem; font-weight: 800; color: var(--text); }
        .stats-total { grid-column: span 2; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: white; border: none; }
        .stats-total .stats-label { color: rgba(255,255,255,0.8); }
        .stats-total .stats-val { color: white; font-size: 1.5rem; }
        
        .tx-list { display: flex; flex-direction: column; gap: 10px; }
        .tx-item { background: white; padding: 12px 15px; border-radius: 12px; border: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .tx-left { display: flex; flex-direction: column; gap: 4px; }
        .tx-name { font-weight: 700; font-size: 0.9rem; color: var(--text); }
        .tx-date { font-size: 0.75rem; color: var(--text-muted); }
        .tx-right { font-weight: 700; color: var(--primary); font-family: var(--font-code); }
        
        .pagination { display: flex; justify-content: center; align-items: center; margin-top: 20px; gap: 15px; }
        .page-btn { 
            width: 44px; height: 44px; border-radius: 50%; 
            background: white; border: 1px solid var(--border); color: var(--primary); 
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; transition: 0.2s; box-shadow: var(--shadow-sm);
        }
        .page-btn:active { transform:scale(0.9); }
        .page-btn:disabled { opacity: 0.5; cursor: not-allowed; background: #f1f5f9; color: #999; }
        .page-num { font-size: 1.1rem; font-weight: 800; color: var(--text); min-width: 30px; text-align: center; }
        
        .tag-container { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
        .tag { background: #f1f5f9; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--text-muted); }
        .tag-del { cursor: pointer; color: var(--danger); }
        .stock-item { padding: 10px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; font-family: var(--font-code); font-size: 0.85rem; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
  
        /* AUTH & CAPTCHA */
        .auth-tabs { display:flex; margin-bottom:20px; background:#f1f5f9; padding:4px; border-radius:12px; }
        .auth-tab { flex:1; text-align:center; padding:10px; font-weight:700; font-size:0.9rem; cursor:pointer; border-radius:10px; color:var(--text-muted); transition:0.2s; }
        .auth-tab.active { background:white; color:var(--text); box-shadow:0 2px 5px rgba(0,0,0,0.05); }
        
        .cf-turnstile-fake {
            background: #f9fafb; border: 1px solid #d1d5db; border-radius: 6px;
            padding: 10px 15px; margin-bottom: 15px; display: flex; align-items: center; gap: 12px;
            cursor: pointer; transition:0.2s; user-select: none;
        }
        .cf-turnstile-fake:hover { background:#f3f4f6; }
        .cf-check-box {
            width: 24px; height: 24px; border: 2px solid #d1d5db; border-radius: 4px;
            display: flex; align-items: center; justify-content: center; background: white;
        }
        .cf-check-box.checked { border-color: var(--success); background: var(--success); }
        .cf-check-box.checked svg { color: white; width: 16px; height: 16px; }
        .cf-text { font-size: 0.9rem; color: #374151; font-weight: 500; }
        .cf-logo { margin-left: auto; width: 24px; opacity: 0.5; }
  
        /* BANNER INPUT GROUP (UPDATED) */
        .banner-item { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .banner-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
        .banner-label { font-size:0.75rem; font-weight:700; color:var(--text-muted); }
        .banner-actions { display: flex; gap: 8px; justify-content: flex-end; margin-top:8px; }
        .btn-icon-sm { width: 36px; height: 36px; border-radius: 8px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:0.2s; border:1px solid #e2e8f0; background:white; color:var(--text-muted); }
        .btn-icon-sm:active { transform:scale(0.95); background:#f1f5f9; }
        .btn-del-sm { border-color:#FECACA; background:#FEF2F2; color:#EF4444; }
    </style>
  </head>
  <body>
    <div id="toastContainer" class="toast-container"></div>
    
    <nav class="navbar">
        <div class="nav-brand" id="headerTitle">{{STORE_NAME}}</div>
        <div class="nav-actions">
            <div class="nav-search-wrapper">
                <span class="nav-search-icon">${ICONS.search}</span>
                <input type="text" id="searchInput" class="nav-search-box" placeholder="Cari..." onkeyup="handleSearch(event)">
            </div>
            <div class="nav-filter-btn" onclick="openSheet()">${ICONS.filter}</div>
        </div>
    </nav>
    
    <div id="bannerCarousel" class="banner-container"></div>
  
    <div class="cat-scroll" id="catList"></div>
    
    <div class="container">
        <div id="loading" class="loader"></div>
        <div id="productList" class="grid"></div>
        <div id="noResults" style="display:none; text-align:center; padding:50px; color:#94A3B8;">
            Produk tidak ditemukan.
        </div>
    </div>
  
    <div id="quickAdminBtn" class="admin-float-btn" onclick="openAdminMenu()">${ICONS.settings}</div>
  
    <div class="bottom-nav">
        <div class="nav-item" onclick="openContact()">
            ${ICONS.chat}
            <span>Chat</span>
        </div>
        <div class="nav-item" onclick="openHistory()">
            ${ICONS.history}
            <span>Riwayat</span>
        </div>
        <div class="nav-item" onclick="openAssets()">
            ${ICONS.wallet}
            <span>Aset</span>
        </div>
        <div class="nav-item" onclick="openCart()">
            ${ICONS.cart}
            <span>Keranjang</span>
            <div id="cartBadgeNav" class="cart-badge-nav" style="display:none">0</div>
        </div>
        <div class="nav-item active" onclick="goToHome()" id="navHome">
            ${ICONS.bag}
            <span>Belanja</span>
        </div>
        <div class="nav-item" onclick="openUserMenu()">
            ${ICONS.user}
            <span>Saya</span>
        </div>
    </div>
  
    <div id="productDetailPage" class="fs-modal">
        <div class="fs-header">
            <div onclick="closeProductDetail()" style="cursor:pointer; color:var(--text);">${ICONS.back}</div>
            <span style="flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; text-align:center;" id="pdpTitleHeader">Detail Produk</span>
            <div style="display:flex; gap:15px; align-items:center;">
                <div onclick="shareCurrentProduct()" style="cursor:pointer; color:var(--text);">${ICONS.share}</div>
                <div onclick="openCart()" style="cursor:pointer; color:var(--primary); position:relative;">
                    ${ICONS.cart}
                    <div id="cartBadgePdp" class="cart-badge-nav" style="right:-5px; top:-5px; display:none;">0</div>
                </div>
            </div>
        </div>
        <div class="pdp-scroll">
            <img id="pdpImage" class="pdp-hero" src="">
            <div class="pdp-info">
                <div id="pdpPrice" class="pdp-price">Rp 0</div>
                <div id="pdpName" class="pdp-title">Nama Produk</div>
                <div style="font-size:0.8rem; color:var(--text-muted); font-weight:600;" id="pdpStock">Stok: 0</div>
            </div>
            
            <div class="pdp-desc-box">
                <div class="pdp-section-title">Deskripsi Produk</div>
                <div id="pdpDesc" class="pdp-desc-text"></div>
            </div>
        </div>
        <div class="pdp-bottom-bar">
            <div class="pdp-icon-btn" onclick="openContact()">
                ${ICONS.chat}
                <span>Chat</span>
            </div>
            <div style="width:1px; height:24px; background:#eee;"></div>
            <button class="btn-pdp-cart" onclick="addToCartCurrent()">
                 + Keranjang
            </button>
            <button class="btn-pdp-buy" onclick="buyCurrent()">
                Beli Sekarang
            </button>
        </div>
    </div>
  
    <div id="cartPage" class="fs-modal">
        <div class="fs-header">
            <div onclick="closeModal('cartPage')" style="cursor:pointer; color:var(--text);">${ICONS.back}</div>
            <span>Keranjang Saya</span>
            <div style="width:24px;"></div>
        </div>
        <div id="cartList" style="flex:1; overflow-y:auto; padding:20px; padding-bottom:100px;"></div>
        <div style="position:fixed; bottom:0; left:0; right:0; background:white; padding:20px; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; z-index:20;">
             <div>
                <div style="font-size:0.8rem; color:var(--text-muted);">Total Dipilih</div>
                <div id="cartTotal" style="font-size:1.2rem; font-weight:800; color:var(--primary);">Rp 0</div>
             </div>
             <button class="btn-primary" style="width:auto; padding:12px 30px;" onclick="checkoutCart()">Checkout</button>
        </div>
    </div>
  
    <div id="trxModal" class="modal"><div class="modal-content"><div style="position:absolute; top:10px; right:10px; cursor:pointer;" onclick="closeModal('trxModal')">${ICONS.close}</div><div id="trxBody"></div></div></div>
  
    <div id="adminMenuPage" class="fs-modal">
        <div class="fs-header">
            <div>Admin Panel</div>
            <button style="background:none; border:none; cursor:pointer;" onclick="closeAdminMenu()">${ICONS.close}</button>
        </div>
        <div class="admin-container">
            <div class="admin-sidebar" id="adminSidebar">
                <div class="sidebar-item active" onclick="switchAdminTab('prod')" id="sbProd">${ICONS.box}</div>
                <div class="sidebar-item" onclick="switchAdminTab('vouc')" id="sbVouc">${ICONS.ticket}</div>
                <div class="sidebar-item" onclick="switchAdminTab('stats')" id="sbStats">${ICONS.chart}</div>
                <div class="sidebar-item" onclick="switchAdminTab('conf')" id="sbConf">${ICONS.settings}</div>
                 <div class="sidebar-item" onclick="doLogout()" style="margin-top:auto; color:var(--danger); background: #FEF2F2;">${ICONS.logout}</div>
            </div>
            <div class="admin-content">
                <div id="adminTabProd">
                    <div class="admin-section-title">Manajemen Produk</div>
                    
                    <div class="accordion" id="accCategory">
                        <div class="accordion-header" onclick="toggleAccordion('accCategory')">
                            <span>Kategori Produk</span> ${ICONS.chevronDown}
                        </div>
                        <div class="accordion-content">
                            <div class="acc-inner">
                                <div id="confCatList" class="tag-container"></div>
                                <div style="display:flex; gap:8px; margin-top:10px;">
                                    <input id="newCatInput" class="input-field" placeholder="Kategori Baru" style="margin:0">
                                    <button class="btn-primary" onclick="admAddCat()" style="width:auto; padding: 0 15px;">+</button>
                                </div>
                                <div style="font-size:0.75rem; color:var(--text-muted); margin-top:5px;">*Hapus kategori lama & tambah baru untuk mengedit.</div>
                            </div>
                        </div>
                    </div>
  
                    <button class="btn-primary" onclick="admOpenStockSelector()" style="background:#475569; margin-bottom:12px; display:flex; align-items:center; justify-content:center; gap:8px;">${ICONS.eye} Cek & Kelola Stok</button>
  
                    <div class="accordion" id="accAddProd">
                        <div class="accordion-header" onclick="toggleAccordion('accAddProd')">
                            <span><span style="color:var(--success)">+</span> Tambah Produk</span> ${ICONS.chevronDown}
                        </div>
                        <div class="accordion-content">
                            <div class="acc-inner">
                                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                                    <div><label class="form-label">Kode</label><input id="nCode" class="input-field" placeholder="vps1"></div>
                                    <div><label class="form-label">Harga</label><input id="nPrice" type="number" class="input-field" placeholder="0"></div>
                                </div>
                                <div><label class="form-label">Nama Produk</label><input id="nName" class="input-field"></div>
                                <div><label class="form-label">Kategori</label><select id="nCat" class="input-field"><option value="">Pilih...</option></select></div>
                                <div><label class="form-label">Gambar URL</label><input id="nImg" class="input-field"></div>
                                <div><label class="form-label">Deskripsi</label><textarea id="nDesc" class="input-field" rows="2"></textarea></div>
                                <div><label class="form-label">Stok Awal (Pisahkan ;)</label><textarea id="nStock" class="input-field" rows="3"></textarea></div>
                                <button class="btn-primary" onclick="admAdd()">Simpan Produk</button>
                            </div>
                        </div>
                    </div>
  
                    <div class="accordion" id="accEditProd">
                        <div class="accordion-header" onclick="toggleAccordion('accEditProd')">
                            <span>Edit / Hapus Produk</span> ${ICONS.chevronDown}
                        </div>
                        <div class="accordion-content">
                            <div class="acc-inner">
                                <select id="editProdSelect" class="input-field" onchange="loadEditForm()"></select>
                                <div id="editFormArea" style="display:none;">
                                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                                        <div><label class="form-label">Harga</label><input id="editPrice" type="number" class="input-field"></div>
                                        <div><label class="form-label">Kategori</label><select id="editCat" class="input-field"></select></div>
                                    </div>
                                    <div><label class="form-label">Gambar URL</label><input id="editImg" class="input-field"></div>
                                    <div><label class="form-label">Deskripsi</label><textarea id="editDesc" class="input-field" rows="2"></textarea></div>
                                    <div style="display:flex; gap:10px; margin-top:10px;">
                                        <button class="btn-primary" onclick="admSave()">Update</button>
                                        <button class="btn-danger" onclick="admDelete()">Hapus</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="adminTabVouc" style="display:none;">
                    <div class="admin-section-title">Voucher & Diskon</div>
                    <div class="acc-inner" style="background:white; border-radius:12px; border:1px solid var(--border);">
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                            <div><label class="form-label">Kode</label><input id="vCode" class="input-field" placeholder="KODE"></div>
                            <div><label class="form-label">Potongan (Rp)</label><input id="vAmount" type="number" class="input-field" placeholder="0"></div>
                        </div>
                        <div><label class="form-label">Limit (0=Unlimited)</label><input id="vLimit" type="number" class="input-field" placeholder="0"></div>
                        <div><label class="form-label">Target Produk</label><select id="vTarget" class="input-field"><option value="ALL">Semua Produk</option></select></div>
                        <button class="btn-primary" onclick="admSaveVoucher()">Buat Voucher</button>
                    </div>
                    <div id="voucherListAdmin" style="margin-top:15px;"></div>
                </div>
  
                <div id="adminTabStats" style="display:none;">
                    <div class="admin-section-title">Dashboard Penjualan</div>
                    <div class="stats-card-grid">
                        <div class="stats-card"><div class="stats-label">Hari Ini</div><div id="statDaily" class="stats-val">...</div></div>
                        <div class="stats-card"><div class="stats-label">Bulan Ini</div><div id="statMonthly" class="stats-val">...</div></div>
                        <div class="stats-card stats-total"><div class="stats-label">Total Pendapatan</div><div id="statTotal" class="stats-val">...</div></div>
                    </div>
                    
                    <div class="admin-section-title">Riwayat Transaksi</div>
                    <div style="background:white; border-radius:12px; border:1px solid var(--border); overflow:hidden; padding: 10px;">
                         <div id="salesHistoryList" class="tx-list"></div>
                         <div class="pagination">
                             <button class="page-btn" id="btnPrevPage" onclick="changeStatsPage(-1)">${ICONS.arrowLeft}</button>
                             <span id="pageIndicator" class="page-num">1</span>
                             <button class="page-btn" id="btnNextPage" onclick="changeStatsPage(1)">${ICONS.arrowRight}</button>
                         </div>
                    </div>
                </div>
  
                <div id="adminTabConf" style="display:none;">
                    <div class="admin-section-title">Pengaturan Toko</div>
                    
                    <div class="accordion" id="accGenSettings">
                        <div class="accordion-header" onclick="toggleAccordion('accGenSettings')">
                            <span>Tampilan Utama</span> ${ICONS.chevronDown}
                        </div>
                        <div class="accordion-content">
                            <div class="acc-inner">
                                <label class="form-label">Nama Toko (Header)</label>
                                <input id="confStoreName" class="input-field" placeholder="Nama Toko">
                                
                                <label class="form-label">URL Kontak (Tombol Chat)</label>
                                <input id="confContact" class="input-field" placeholder="https://wa.me/...">
  
                                <label class="form-label">Favicon URL</label>
                                <input id="confFavicon" class="input-field" oninput="previewImg(this, 'prevFav')">
                                <img id="prevFav" class="preview-favicon">
                            </div>
                        </div>
                    </div>
  
                    <div class="accordion" id="accBannerSettings">
                        <div class="accordion-header" onclick="toggleAccordion('accBannerSettings')">
                            <span>Manajemen Banner</span> ${ICONS.chevronDown}
                        </div>
                        <div class="accordion-content">
                            <div class="acc-inner">
                                <div id="bannerListContainer"></div>
                                <button class="btn-primary" onclick="admAddBanner()" style="margin-bottom:15px; background:#475569;">+ Tambah Banner</button>
                                <div class="form-label">Preview:</div>
                                <div id="bannerPreviews" style="display:flex; gap:8px; overflow-x:auto; margin-bottom:15px;"></div>
                            </div>
                        </div>
                    </div>
  
                    <div class="accordion" id="accSeoSettings">
                        <div class="accordion-header" onclick="toggleAccordion('accSeoSettings')">
                            <span>SEO & Metadata</span> ${ICONS.chevronDown}
                        </div>
                        <div class="accordion-content">
                            <div class="acc-inner">
                                <label class="form-label">Judul Web (SEO)</label>
                                <input id="confOgTitle" class="input-field">
                                
                                <label class="form-label">Deskripsi Web (SEO)</label>
                                <textarea id="confOgDesc" class="input-field"></textarea>
                                
                                <label class="form-label">Gambar Share Link (OG Image)</label>
                                <input id="confOgImage" class="input-field" oninput="previewImg(this, 'prevOg')">
                                <img id="prevOg" class="preview-img">
                            </div>
                        </div>
                    </div>
  
                    <button class="btn-primary" onclick="admSaveConfig()" style="margin-top:15px;">Simpan Konfigurasi</button>
                </div>
            </div>
        </div>
    </div>
  
    <div id="selectProductModal" class="modal"><div class="modal-content"><div style="position:absolute;top:10px;right:10px;cursor:pointer" onclick="closeModal('selectProductModal')">${ICONS.close}</div><h3 style="margin-top:0;">Pilih Produk</h3><div id="productSelectList" style="max-height:300px;overflow-y:auto"></div></div></div>
    
    <div id="stockDetailModal" class="modal">
        <div class="modal-content">
            <div style="position:absolute;top:10px;right:10px;cursor:pointer" onclick="closeModal('stockDetailModal')">${ICONS.close}</div>
            <h3 id="stkModalName" style="margin-top:0;">Stok</h3>
            <div id="stockListContainer" style="max-height:200px;overflow-y:auto;text-align:left;margin-bottom:15px;"></div>
            <label class="form-label">Tambah Stok</label>
            <textarea id="newStockDirect" class="input-field" placeholder="Data stok..."></textarea>
            <button class="btn-primary" onclick="admAddStockDirect()">+ Tambah</button>
        </div>
    </div>
    
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <h3 style="margin-top:0;">Admin Area</h3>
            <input type="password" id="adminPass" class="input-field" placeholder="Password">
            <button class="btn-primary" onclick="doLogin()">Masuk</button>
        </div>
    </div>
    
    <div id="userMenuPage" class="fs-modal">
        <div class="fs-header"><button style="background:none; border:none;" onclick="closeUserMenu()">${ICONS.back}</button><span>Profil Saya</span></div>
        <div style="padding:30px; text-align:center;">
             <div style="position:relative; width:80px; height:80px; margin:0 auto 15px;">
                 <div style="width:100%;height:100%;background:var(--primary);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;box-shadow:0 10px 25px -5px rgba(59,130,246,0.4); background-size:cover; background-position:center;" id="profileAvatar">U</div>
                 <div onclick="document.getElementById('newProfImg').click()" style="position:absolute; bottom:0; right:0; background:white; border:1px solid #e2e8f0; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--text); box-shadow:0 2px 5px rgba(0,0,0,0.1);">${ICONS.edit}</div>
             </div>
             <input type="file" id="newProfImg" accept="image/*" style="display:none" onchange="changeProfilePic(this)">
             
             <div style="display:flex; align-items:center; justify-content:center; gap:8px; margin-bottom:5px;">
                 <h2 id="profileName" style="margin:0;">User</h2>
                 <div onclick="editProfileName()" style="cursor:pointer; color:var(--primary); width:24px; height:24px;">${ICONS.edit}</div>
             </div>
             <p style="color:var(--text-muted); margin:0 0 20px;">Member Digital Premium</p>
             
             <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:25px;">
    <div style="background:white; border:none; border-radius:16px; padding:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">Total Belanja</div>
        <div style="font-size:1.2rem; font-weight:800; color:var(--primary); margin-top:5px;" id="uStatSpend">Rp 0</div>
    </div>

    <div style="background:white; border:none; border-radius:16px; padding:15px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">Total Aset</div>
        <div style="font-size:1.2rem; font-weight:800; color:var(--text); margin-top:5px;" id="uStatAssets">0</div>
    </div>
</div>

             <button class="btn-primary" style="margin-bottom:15px; background:var(--danger);" onclick="logoutUser()">Logout</button>
        </div>
    </div>
  
    <div id="authModal" class="modal" style="z-index:9000; background:var(--bg);">
        <div class="modal-content" style="max-width:350px;">
            <h3 style="margin-top:0; text-align:center; margin-bottom:20px; color:var(--primary);">Selamat Datang</h3>
            
            <div class="auth-tabs">
                <div class="auth-tab active" id="tabLogin" onclick="switchAuth('login')">Masuk</div>
                <div class="auth-tab" id="tabRegister" onclick="switchAuth('register')">Daftar</div>
            </div>
  
            <div id="formLogin">
                <input id="loginUser" class="input-field" placeholder="Username">
                <input id="loginPass" type="password" class="input-field" placeholder="Password">
                
                <div class="cf-turnstile-fake" onclick="toggleCaptcha(this)">
                    <div class="cf-check-box" id="captchaBoxLogin">${ICONS.check}</div>
                    <div class="cf-text">Verify you are human</div>
                    <svg class="cf-logo" viewBox="0 0 32 32"><path d="M26.7 13.3c-1.3 0-2.4 1.1-2.4 2.4v2.7h-2.7v-2.7c0-2.8-2.2-5-5-5s-5 2.2-5 5v2.7H8.9v-2.7c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4v13.3c0 1.3 1.1 2.4 2.4 2.4h17.8c1.3 0 2.4-1.1 2.4-2.4V15.7c0-1.3-1.1-2.4-2.4-2.4zm-5.3 10.7h-5.3v-5.3h5.3v5.3z"/></svg>
                </div>
  
                <button class="btn-primary" onclick="loginUser()">Masuk</button>
            </div>
  
            <div id="formRegister" style="display:none;">
                <input id="regUser" class="input-field" placeholder="Username Baru">
                <input id="regPass" type="password" class="input-field" placeholder="Password Baru">
                
                <label for="regImg" style="display:block; text-align:center; padding:10px; border:1px dashed var(--border); border-radius:10px; color:var(--text-muted); cursor:pointer; margin-bottom:15px;">
                    <span id="regImgLabel">+ Foto Profil (Opsional)</span>
                </label>
                <input type="file" id="regImg" accept="image/*" style="display:none" onchange="handleRegImg(this)">
                
                <div class="cf-turnstile-fake" onclick="toggleCaptcha(this)">
                    <div class="cf-check-box" id="captchaBoxReg">${ICONS.check}</div>
                    <div class="cf-text">Verify you are human</div>
                    <svg class="cf-logo" viewBox="0 0 32 32"><path d="M26.7 13.3c-1.3 0-2.4 1.1-2.4 2.4v2.7h-2.7v-2.7c0-2.8-2.2-5-5-5s-5 2.2-5 5v2.7H8.9v-2.7c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4v13.3c0 1.3 1.1 2.4 2.4 2.4h17.8c1.3 0 2.4-1.1 2.4-2.4V15.7c0-1.3-1.1-2.4-2.4-2.4zm-5.3 10.7h-5.3v-5.3h5.3v5.3z"/></svg>
                </div>
  
                <button class="btn-primary" onclick="registerUser()">Daftar</button>
            </div>
  
        </div>
    </div>
  
    <div id="historyModal" class="fs-modal">
          <div class="fs-header"><button style="background:none; border:none;" onclick="closeModal('historyModal')">${ICONS.back}</button><span>Riwayat Pesanan</span></div>
          <div style="padding:15px; display:flex; gap:10px; overflow-x:auto;">
              <button onclick="filterHist('all')" class="cat-pill active" id="tabAll">Semua</button>
              <button onclick="filterHist('pending')" class="cat-pill" id="tabPending">Belum Bayar</button>
              <button onclick="filterHist('paid')" class="cat-pill" id="tabPaid">Selesai</button>
          </div>
          <div id="histList" style="flex:1; overflow-y:auto; padding:0 15px 20px;"></div>
    </div>
  
    <div id="myProductsModal" class="fs-modal">
        <div class="fs-header"><button style="background:none; border:none;" onclick="closeModal('myProductsModal')">${ICONS.back}</button><span>Aset Saya</span></div>
        <div id="myProdList" style="flex:1; overflow-y:auto; padding:20px;"></div>
    </div>
  
    <div id="sheetOverlay" class="sheet-overlay" onclick="closeSheet()"></div>
    <div id="sortSheet" class="bottom-sheet">
        <div style="font-weight:700; font-size:1.1rem; margin-bottom:20px; padding-bottom:15px; border-bottom:1px solid var(--border);">Urutkan Produk</div>
        <div class="sheet-option" onclick="setSort('newest')">Terbaru</div>
        <div class="sheet-option" onclick="setSort('price_low')">Harga Terendah</div>
        <div class="sheet-option" onclick="setSort('price_high')">Harga Tertinggi</div>
    </div>
  
    <script>
  `;
  
  const HTML_PART_2 = `
        const ICONS = ${JSON.stringify(ICONS)};
        let allProducts=[],currentCode='',currentOrderId='',currentUser='',currentSort='newest',currentCat='Semua',appliedVoucher=null;
        let activeStockCode = '';
        let statsPage = 1;
        let bannerInterval;
        let cart = [];
        let tempRegImg = '';
        let captchaVerified = false;
  
        let BANNERS=${JSON.stringify(DEFAULT_CONFIG.banners)},CATEGORIES=${JSON.stringify(DEFAULT_CONFIG.cats)},OG_TITLE="${DEFAULT_CONFIG.ogTitle}",OG_DESC="${DEFAULT_CONFIG.ogDesc}",FAVICON_URL="${DEFAULT_CONFIG.favicon}",OG_IMAGE_URL="${DEFAULT_CONFIG.ogImage}";
        let STORE_NAME="{{STORE_NAME}}";
        let CONTACT_URL="{{CONTACT_URL}}";
  
        async function init(){
            checkSession();
            loadCart();
            checkAdminSession();
            await loadConfig();
            await loadProducts();
            initBannerSlider();
            updateCartCount();
            
            // CHECK URL ROUTING FOR DIRECT LINK (e.g., /p/kode-produk)
            const path = window.location.pathname;
            if(path.startsWith('/p/')) {
                const code = path.split('/')[2];
                if(code) {
                    // Wait until products loaded then open
                    const checkProd = setInterval(() => {
                        if(allProducts.length > 0) {
                            clearInterval(checkProd);
                            const p = allProducts.find(x => x.code === code);
                            if(p) openBuy(code);
                        }
                    }, 100);
                }
            }

            // DEVICE BACK BUTTON HANDLER
            window.addEventListener('popstate', function(event) {
                const actives = document.querySelectorAll('.modal.active, .fs-modal.active, .bottom-sheet.active');
                if (actives.length > 0) {
                    actives.forEach(el => {
                        if(el.id !== 'authModal') el.classList.remove('active'); // Don't close Auth on back
                    });
                }
            });
        }
  
        // --- AUTH SYSTEM (LOGIN/REGISTER) ---
        function checkSession() {
            const session = localStorage.getItem('user_session');
            if (!session) {
                document.getElementById('authModal').classList.add('active');
            } else {
                const user = JSON.parse(localStorage.getItem('user_db_' + session));
                if(user) {
                    currentUser = user.username;
                    updateProfileUI(user);
                    document.getElementById('authModal').classList.remove('active');
                } else {
                    localStorage.removeItem('user_session');
                    document.getElementById('authModal').classList.add('active');
                }
            }
        }
  
        function switchAuth(type) {
            captchaVerified = false;
            resetCaptchaUI();
            document.querySelectorAll('.auth-tab').forEach(e => e.classList.remove('active'));
            if (type === 'login') {
                document.getElementById('tabLogin').classList.add('active');
                document.getElementById('formLogin').style.display = 'block';
                document.getElementById('formRegister').style.display = 'none';
            } else {
                document.getElementById('tabRegister').classList.add('active');
                document.getElementById('formLogin').style.display = 'none';
                document.getElementById('formRegister').style.display = 'block';
            }
        }
  
        function toggleCaptcha(el) {
            const box = el.querySelector('.cf-check-box');
            if (!captchaVerified) {
                el.style.pointerEvents = 'none';
                box.innerHTML = '<div class="loader" style="width:16px;height:16px;border-width:2px;margin:0;"></div>';
                setTimeout(() => {
                    captchaVerified = true;
                    box.innerHTML = ICONS.check;
                    box.classList.add('checked');
                    el.style.pointerEvents = 'auto';
                }, 1000);
            }
        }
        
        function resetCaptchaUI() {
            document.querySelectorAll('.cf-check-box').forEach(el => {
                el.classList.remove('checked');
                el.innerHTML = '';
            });
            captchaVerified = false;
        }
  
        function handleRegImg(input) {
            const f = input.files[0];
            if(!f) return;
            const r = new FileReader();
            r.onloadend = function() {
                const i = new Image();
                i.onload = function() {
                    const c = document.createElement('canvas');
                    const ctx = c.getContext('2d');
                    const s = 100/i.width;
                    c.width = 100; c.height = i.height*s;
                    ctx.drawImage(i,0,0,c.width,c.height);
                    tempRegImg = c.toDataURL('image/jpeg', 0.7);
                    document.getElementById('regImgLabel').innerText = "Foto Terpilih ✓";
                    document.getElementById('regImgLabel').style.color = "var(--success)";
                    document.getElementById('regImgLabel').style.borderColor = "var(--success)";
                };
                i.src = r.result;
            };
            r.readAsDataURL(f);
        }
  
        function registerUser() {
            if (!captchaVerified) return toast("Silakan verifikasi captcha", true);
            const u = document.getElementById('regUser').value.trim();
            const p = document.getElementById('regPass').value.trim();
            
            if(!u || !p) return toast("Isi Username & Password", true);
            if(localStorage.getItem('user_db_' + u)) return toast("Username sudah ada", true);
            
            const userData = {
                username: u,
                password: p, 
                image: tempRegImg,
                joined: new Date().toISOString()
            };
            
            localStorage.setItem('user_db_' + u, JSON.stringify(userData));
            localStorage.setItem('user_session', u);
            
            toast("Registrasi Berhasil!");
            currentUser = u;
            updateProfileUI(userData);
            document.getElementById('authModal').classList.remove('active');
        }
  
        function loginUser() {
            if (!captchaVerified) return toast("Silakan verifikasi captcha", true);
            const u = document.getElementById('loginUser').value.trim();
            const p = document.getElementById('loginPass').value.trim();
            
            const stored = localStorage.getItem('user_db_' + u);
            if(!stored) return toast("User tidak ditemukan", true);
            
            const userData = JSON.parse(stored);
            if(userData.password !== p) return toast("Password Salah", true);
            
            localStorage.setItem('user_session', u);
            toast("Login Berhasil");
            currentUser = u;
            updateProfileUI(userData);
            document.getElementById('authModal').classList.remove('active');
        }
  
        function logoutUser() {
            localStorage.removeItem('user_session');
            location.reload();
        }
  
        function updateProfileUI(user) {
            document.getElementById('profileName').innerText = user.username;
            const av = document.getElementById('profileAvatar');
            if(user.image) {
                av.innerText = '';
                av.style.backgroundImage = \`url('\${user.image}')\`;
                av.style.backgroundSize = 'cover';
            } else {
                av.style.backgroundImage = 'none';
                av.innerText = user.username.charAt(0).toUpperCase();
            }
        }
  
        // --- CORE FUNCTIONS ---
        function checkAdminSession(){ if(localStorage.getItem('adminKey')) document.getElementById('quickAdminBtn').style.display='flex'; else document.getElementById('quickAdminBtn').style.display='none'; }
        async function loadConfig(){
            try {
                const r = await fetch('/api/config');
                const d = await r.json();
                if(d.banners) BANNERS = d.banners;
                if(d.cats) CATEGORIES = d.cats;
                if(d.favicon) FAVICON_URL = d.favicon;
                if(d.ogImage) OG_IMAGE_URL = d.ogImage;
                if(d.ogTitle) OG_TITLE = d.ogTitle;
                if(d.ogDesc) OG_DESC = d.ogDesc;
                if(d.storeName) {
                    STORE_NAME = d.storeName;
                    document.title = STORE_NAME;
                    document.getElementById('headerTitle').innerText = STORE_NAME;
                }
                if(d.contact) CONTACT_URL = d.contact;
                
                renderCategories();
            } catch {}
        }
        
        function openContact() { window.open(CONTACT_URL, '_blank'); }
  
        // --- MODAL SYSTEM ---
        function openModal(id){ 
            window.history.pushState({modal: id}, '');
            document.getElementById(id).classList.add('active'); 
        }
        function closeModal(id){ 
            document.getElementById(id).classList.remove('active'); 
        }
        function openSheet(){ window.history.pushState({sheet: 'sort'}, ''); document.getElementById('sheetOverlay').classList.add('active'); document.getElementById('sortSheet').classList.add('active'); }
        function closeSheet(){ document.getElementById('sheetOverlay').classList.remove('active'); document.getElementById('sortSheet').classList.remove('active'); }
  
        // --- CART SYSTEM ---
        function loadCart() { const c = localStorage.getItem('myCart'); if(c) cart = JSON.parse(c); }
        function saveCart() { localStorage.setItem('myCart', JSON.stringify(cart)); updateCartCount(); }
        function addToCart(code) {
            const p = allProducts.find(x => x.code === code);
            if(!p) return;
            const exist = cart.find(x => x.code === code);
            if(exist) { exist.qty++; } else { cart.push({code: code, qty: 1, price: p.price, name: p.name, img: p.img, selected: false}); }
            saveCart();
            toast("Masuk Keranjang");
        }
        function updateCartCount() {
            const count = cart.reduce((a,b)=>a+b.qty,0);
            const bad1 = document.getElementById('cartBadgeNav');
            const bad2 = document.getElementById('cartBadgePdp');
            if(count > 0) { bad1.style.display='block'; bad1.innerText=count; bad2.style.display='block'; bad2.innerText=count; }
            else { bad1.style.display='none'; bad2.style.display='none'; }
        }
        function openCart() {
            const l = document.getElementById('cartList');
            l.innerHTML = '';
            if(cart.length === 0) {
                l.innerHTML = '<div style="text-align:center; padding:50px; color:var(--text-muted); display:flex; flex-direction:column; align-items:center; gap:10px;">'+ICONS.cart+'<span>Keranjang kosong</span></div>';
                document.getElementById('cartTotal').innerText = 'Rp 0';
            } else {
                cart.forEach((item, idx) => {
                    const checkClass = item.selected ? 'active' : '';
                    l.innerHTML += \`<div class="cart-item">
                        <div class="cart-check \${checkClass}" onclick="toggleCartSelect(\${idx})"></div>
                        <img src="\${item.img||FAVICON_URL}" class="cart-thumb">
                        <div class="cart-info">
                            <div class="cart-title">\${item.name}</div>
                            <div class="cart-price">Rp \${item.price.toLocaleString()}</div>
                            <div style="font-size:0.8rem; margin-top:4px; color:var(--text-muted);">Jumlah: \${item.qty}</div>
                        </div>
                        <div class="cart-del" onclick="removeFromCart(\${idx})">${ICONS.trash}</div>
                    </div>\`;
                });
                updateCheckoutBtn();
            }
            openModal('cartPage');
        }
        
        function toggleCartSelect(idx) {
            cart[idx].selected = !cart[idx].selected;
            openCart(); // Re-render to show checkbox state
        }
        
        function updateCheckoutBtn() {
            let total = 0;
            cart.forEach(item => {
                if(item.selected) total += (item.price * item.qty);
            });
            document.getElementById('cartTotal').innerText = 'Rp ' + total.toLocaleString();
        }
  
        function removeFromCart(idx) { cart.splice(idx, 1); saveCart(); openCart(); }
        
        function checkoutCart() {
            const selectedItems = cart.filter(i => i.selected);
            if(selectedItems.length === 0) return toast("Pilih produk dulu", true);
            
            if(selectedItems.length > 1) {
                return toast("Mohon checkout satu per satu", true);
            }
            
            // Process Single Item (Backend Limit)
            const item = selectedItems[0];
            currentCode = item.code;
            
            // Re-use logic for single buy
            const html=\`<div><h3 style="margin-top:0;">\${item.name}</h3>
            <div style="display:flex; justify-content:center; align-items:center; gap:15px; margin:20px 0;">
                <span style="font-size:1.1rem; font-weight:bold;">Jumlah: \${item.qty}</span>
            </div>
            <div style="font-weight:800; font-size:1.2rem; margin-bottom:15px; color:var(--primary);" id="mTotal">Total: Rp \${(item.price * item.qty).toLocaleString()}</div>
            <input type="hidden" id="mQty" value="\${item.qty}">
            <button class="btn-primary" onclick="processBuy()">Lanjut Bayar</button></div>\`;
            
            document.getElementById('trxBody').innerHTML = html;
            openModal('trxModal');
        }
  
        // --- PRODUCT DETAIL PAGE (PDP) ---
        function openBuy(code) {
            currentCode = code;
            const p = allProducts.find(x => x.code === code);
            if(!p) return;
            
            // Populate PDP
            document.getElementById('pdpImage').src = p.img || FAVICON_URL;
            document.getElementById('pdpPrice').innerText = p.price === 0 ? 'GRATIS' : 'Rp ' + p.price.toLocaleString();
            document.getElementById('pdpName').innerText = p.name;
            document.getElementById('pdpStock').innerText = 'Stok: ' + p.stock;
            document.getElementById('pdpDesc').innerText = p.desc || 'Tidak ada deskripsi.';
            
            openModal('productDetailPage');
        }
        function closeProductDetail() { closeModal('productDetailPage'); }
        function addToCartCurrent() { addToCart(currentCode); }
        
        function shareCurrentProduct() {
            const url = \`\${window.location.origin}/p/\${currentCode}\`;
            if (navigator.share) {
                navigator.share({
                    title: document.getElementById('pdpName').innerText,
                    text: 'Cek produk ini di ' + STORE_NAME,
                    url: url
                }).catch(console.error);
            } else {
                copyText(url);
                toast("Link produk disalin");
            }
        }

        function buyCurrent() { 
            // Logic Beli Langsung (Open Modal Qty)
            const p = allProducts.find(x => x.code === currentCode);
            if(!p || p.stock < 1) return toast("Stok Habis");
            
            const html=\`<div><h3 style="margin-top:0;">\${p.name}</h3>
            <div style="display:flex; justify-content:center; align-items:center; gap:15px; margin:20px 0;">
                <button onclick="changeQty(-1)" style="width:35px;height:35px;border-radius:8px;border:1px solid #ddd;background:white;font-weight:bold;">-</button>
                <input id="mQty" value="1" readonly style="width:50px;text-align:center;font-weight:bold;border:none;font-size:1.1rem;background:transparent;">
                <button onclick="changeQty(1)" style="width:35px;height:35px;border-radius:8px;border:1px solid #ddd;background:white;font-weight:bold;">+</button>
            </div>
            <div style="font-weight:800; font-size:1.2rem; margin-bottom:15px; color:var(--primary);" id="mTotal">\${p.price===0?'GRATIS':'Rp '+p.price.toLocaleString()}</div>
            <button class="btn-primary" onclick="processBuy()">Lanjut Bayar</button></div>\`;
            
            document.getElementById('trxBody').innerHTML = html;
            openModal('trxModal');
        }
        
        function changeQty(d){
            const e=document.getElementById('mQty');
            let v=parseInt(e.value)+d;
            const p=allProducts.find(x=>x.code===currentCode);
            if(v<1)v=1; if(v>p.stock)v=p.stock;
            e.value=v;
            document.getElementById('mTotal').innerText = p.price===0?'GRATIS':'Rp '+(p.price*v).toLocaleString();
        }
  
        async function processBuy(){
            const q = parseInt(document.getElementById('mQty').value);
            document.getElementById('trxBody').innerHTML='<div class="loader"></div><p style="text-align:center; margin-top:15px;">Memproses pesanan...</p>';
            
            const r = await fetch('/api/buy', {method:'POST', body:JSON.stringify({code:currentCode, qty:q, voucherCode:null})});
            const d = await r.json();
            
            if(!d.success) { closeModal('trxModal'); return toast(d.message); }
            
            if(d.isFree) {
                saveHistoryItem({oid:'FREE-'+Date.now(), name:allProducts.find(x=>x.code===currentCode).name, date:new Date().toLocaleString(), status:'PAID', content:d.accounts, price:0});
                showSuccess(d.accounts, true);
            } else {
                currentOrderId = d.orderId;
                saveHistoryItem({oid:currentOrderId, name:allProducts.find(x=>x.code===currentCode).name, date:new Date().toLocaleString(), status:'PENDING', price:d.amount, qr:d.qrString});
                showPaymentUI(d.qrString, d.amount);
            }
        }
  
        function showPaymentUI(q,a){
               const u=\`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=\${encodeURIComponent(q)}\`;
               const h=\`<div style="text-align:center"><h3 style="margin-top:0;">Scan QRIS</h3><div style="padding:15px;background:white;border:1px solid #eee;border-radius:12px;display:inline-block;box-shadow:var(--shadow-sm);"><img src="\${u}" style="width:200px;display:block;"></div><h2 style="color:var(--primary);margin:10px 0 5px;">Rp \${a.toLocaleString()}</h2><p style="font-size:0.8rem;color:var(--text-muted);">ID: <span style="font-family:monospace">\${currentOrderId}</span></p><button class="btn-primary" onclick="checkStatus()">Cek Status Pembayaran</button><div style="font-size:0.75rem; color:var(--text-muted); margin-top:10px;">Otomatis cek status saat diklik</div></div>\`;
               document.getElementById('trxBody').innerHTML = h;
        }
  
        async function checkStatus(){
            const r=await fetch('/api/check-status?oid='+currentOrderId);
            const d=await r.json();
            if(d.status==='PAID'){
                const c=await fetch('/api/claim',{method:'POST',body:JSON.stringify({oid:currentOrderId})});
                const res=await c.json();
                if(res.success){
                    updateHistoryStatus(currentOrderId,'PAID',res.accounts);
                    showSuccess(res.accounts, true);
                } else toast("Gagal Claim. Hubungi Admin");
            } else toast("Belum ada pembayaran masuk");
        }
  
        function showSuccess(accs, isModal=false){
            let h=\`<div style="text-align:center"><div style="font-size:50px;color:var(--success);margin-bottom:10px;">${ICONS.check}</div><h3 style="margin:0 0 10px;">Berhasil!</h3><p style="color:var(--text-muted); font-size:0.9rem;">Berikut produk Anda:</p><div class="acc-list-container" style="background:#f8fafc; padding:15px; border-radius:12px; border:1px solid #e2e8f0; text-align:left; max-height:250px; overflow-y:auto;">\`;
            accs.forEach(a=>{ h+=\`<div style="margin-bottom:10px; background:white; padding:10px; border-radius:8px; border:1px dashed #cbd5e1; display:flex; justify-content:space-between; align-items:center;"><span style="font-family:monospace; font-weight:600; color:#334155; overflow-wrap:anywhere;">\${a}</span><div style="cursor:pointer; color:var(--primary);" onclick="copyText('\${a}')">${ICONS.copy}</div></div>\`; });
            h+='</div></div>';
            document.getElementById('trxBody').innerHTML=h;
            if(!isModal) openModal('trxModal');
        }
  
        // --- BANNER & UI UTILS ---
        function initBannerSlider() {
            const c = document.getElementById('bannerCarousel');
            if(BANNERS.length === 0) return;
            let h = '<div class="banner-slider" id="bannerSlider">';
            let d = '<div class="banner-dots">';
            BANNERS.forEach((b, i) => {
                h += \`<div class="banner-slide"><img src="\${b}" class="banner-img"></div>\`;
                d += \`<div class="banner-dot \${i===0?'active':''}"></div>\`;
            });
            c.innerHTML = h + '</div>' + d + '</div>';
            
            // Dots logic
            const slider = document.getElementById('bannerSlider');
            slider.addEventListener('scroll', () => {
                 const index = Math.round(slider.scrollLeft / slider.offsetWidth);
                 document.querySelectorAll('.banner-dot').forEach((dot,i) => {
                     if(i===index) dot.classList.add('active'); else dot.classList.remove('active');
                 });
            });
  
            // Auto scroll
            if(slider) {
                setInterval(() => {
                    const w = slider.offsetWidth;
                    if(slider.scrollLeft >= slider.scrollWidth - w - 10) slider.scrollTo({left:0, behavior:'smooth'});
                    else slider.scrollBy({left:w, behavior:'smooth'});
                }, 4000);
            }
        }
        
        function renderCategories(){ const l=document.getElementById('catList'); l.innerHTML=''; CATEGORIES.forEach(c=>{ l.innerHTML+=\`<div class="cat-pill \${c===currentCat?'active':''}" onclick="setCategory('\${c}')">\${c}</div>\`; }); }
        function setCategory(c){ currentCat=c; renderCategories(); applyFilter(); }
        function applyFilter(){
            const q = document.getElementById('searchInput').value.toLowerCase();
            let f = allProducts.filter(p => (p.name.toLowerCase().includes(q)) && (currentCat==='Semua'||p.category===currentCat));
            
            // Sort
            if(currentSort==='price_low') f.sort((a,b)=>a.price-b.price);
            else if(currentSort==='price_high') f.sort((a,b)=>b.price-a.price);
            else f.reverse(); 
  
            const l = document.getElementById('productList');
            l.innerHTML='';
            if(f.length===0) document.getElementById('noResults').style.display='block';
            else {
                document.getElementById('noResults').style.display='none';
                f.forEach(p => {
                    const isSoldOut = p.stock < 1;
                    const btnText = isSoldOut ? 'HABIS' : 'BELI';
                    const priceDisp = p.price === 0 ? 'GRATIS' : 'Rp ' + p.price.toLocaleString();
                    const badge = !isSoldOut && p.stock < 5 ? \`<div class="badge-discount">SISA \${p.stock}</div>\` : '';
                    
                    l.innerHTML += \`
                    <div class="card" onclick="openBuy('\${p.code}')">
                        <div class="prod-img-container">
                            <img src="\${p.img||FAVICON_URL}" class="prod-img">
                            \${badge}
                        </div>
                        <div class="card-content">
                            <h4>\${p.name}</h4>
                            <div class="price-row">
                                <div class="price">\${priceDisp}</div>
                                <div class="sold-count">\${isSoldOut?'Habis':'Ready'}</div>
                            </div>
                        </div>
                    </div>\`;
                });
            }
        }
        
        function handleSearch(e){ if((e.key==='Enter'||e.keyCode===13)&&e.target.value.toLowerCase()==='minkey'){openModal('loginModal');e.target.value=''} applyFilter(); }
        
        // --- ADMIN FUNCTIONS ---
        function openAdminMenu(){ openModal('adminMenuPage'); switchAdminTab('prod'); renderCategories(); }
        function closeAdminMenu(){ closeModal('adminMenuPage'); }
        function switchAdminTab(t){ 
            document.querySelectorAll('.sidebar-item').forEach(e=>e.classList.remove('active'));
            document.getElementById('sb'+t.charAt(0).toUpperCase()+t.slice(1)).classList.add('active');
            document.querySelectorAll('.admin-content > div').forEach(e=>e.style.display='none');
            document.getElementById('adminTab'+t.charAt(0).toUpperCase()+t.slice(1)).style.display='block';
            
            if(t==='prod'){ 
                const s=document.getElementById('editProdSelect'); 
                s.innerHTML='<option>Pilih Produk</option>'; 
                allProducts.forEach(p=>s.innerHTML+=\`<option value="\${p.code}">\${p.name}</option>\`); 
                renderAdminCats(); 
            }
            if(t==='vouc') loadAdminVouchers();
            if(t==='stats') loadAdminStats(1);
            if(t==='conf') initAdminConfUI();
        }
        function toggleAccordion(id){ 
            const e=document.getElementById(id); 
            const isOpen=e.classList.contains('open');
            document.querySelectorAll('.accordion').forEach(x=>x.classList.remove('open'));
            if(!isOpen) e.classList.add('open');
        }
  
        // --- ADMIN HELPERS ---
        function renderAdminCats(){
            const d=document.getElementById('confCatList'); d.innerHTML='';
            CATEGORIES.forEach((c,i)=>d.innerHTML+=\`<div class="tag">\${c} <span class="tag-del" onclick="admRemCat(\${i})">${ICONS.trash}</span></div>\`);
            updateCategorySelects();
        }
        
        function updateCategorySelects(){
            let h='<option value="">Pilih...</option>';
            CATEGORIES.forEach(c=>{ h+=\`<option value="\${c}">\${c}</option>\`; });
            document.getElementById('nCat').innerHTML=h;
            document.getElementById('editCat').innerHTML=h;
        }
        
        function admAddCat(){ const v=document.getElementById('newCatInput').value; if(v){CATEGORIES.push(v); document.getElementById('newCatInput').value=''; renderAdminCats(); admSaveConfigSilent();} }
        function admRemCat(i){ if(confirm("Hapus?")){CATEGORIES.splice(i,1); renderAdminCats(); admSaveConfigSilent();} }
        
        async function admSaveConfigSilent(){
             // USE GLOBAL VARIABLES FOR SAFETY
             const b = {
                banners: BANNERS,
                cats: CATEGORIES,
                ogTitle: OG_TITLE,
                ogDesc: OG_DESC,
                favicon: FAVICON_URL,
                ogImage: OG_IMAGE_URL
             };
             await fetch('/api/admin/save-config',{method:'POST',headers:{'Admin-Key':localStorage.getItem('adminKey')},body:JSON.stringify(b)});
        }
        function initAdminConfUI(){
            // Force value update from global variables
            document.getElementById('confFavicon').value = FAVICON_URL || "";
            document.getElementById('confOgTitle').value = OG_TITLE || "";
            document.getElementById('confOgDesc').value = OG_DESC || "";
            document.getElementById('confOgImage').value = OG_IMAGE_URL || "";
            document.getElementById('confStoreName').value = STORE_NAME || "";
            document.getElementById('confContact').value = CONTACT_URL || "";
            
            // INIT BANNER INPUTS (NEW LOGIC)
            renderAdminBanners();
            
            // Force previews update
            previewImg(document.getElementById('confFavicon'), 'prevFav');
            previewImg(document.getElementById('confOgImage'), 'prevOg');
            previewBanners();
        }
        
        // NEW DYNAMIC BANNER LOGIC
        function renderAdminBanners() {
            const c = document.getElementById('bannerListContainer');
            c.innerHTML = '';
            if(!BANNERS || BANNERS.length === 0) return;
            BANNERS.forEach((url, i) => {
                // Logic for Move Buttons Visibility
                const isFirst = (i === 0);
                const isLast = (i === BANNERS.length - 1);
                
                // Only render buttons if not first/last to avoid errors
                let moveUpBtn = isFirst ? '' : \`<div class="btn-icon-sm" onclick="admMoveBanner(\${i}, -1)">${ICONS.arrowUp}</div>\`;
                let moveDownBtn = isLast ? '' : \`<div class="btn-icon-sm" onclick="admMoveBanner(\${i}, 1)">${ICONS.arrowDown}</div>\`;
                
                c.innerHTML += \`
                    <div class="banner-item">
                        <div class="banner-head">
                            <span class="banner-label">Banner #\${i+1}</span>
                        </div>
                        <input class="input-field banner-url-input" value="\${url}" placeholder="URL Gambar..." oninput="previewBanners()" style="margin-bottom:0">
                        <div class="banner-actions">
                            \${moveUpBtn}
                            \${moveDownBtn}
                            <div class="btn-icon-sm btn-del-sm" onclick="admRemoveBanner(\${i})">${ICONS.trash}</div>
                        </div>
                    </div>
                \`;
            });
        }
        
        function admMoveBanner(index, direction) {
            // 1. Ambil data terbaru dari input dulu (PENTING)
            const inputs = document.querySelectorAll('.banner-url-input');
            BANNERS = Array.from(inputs).map(i => i.value);
  
            // 2. Lakukan Swap
            if (direction === -1 && index > 0) {
                 [BANNERS[index], BANNERS[index - 1]] = [BANNERS[index - 1], BANNERS[index]];
            } else if (direction === 1 && index < BANNERS.length - 1) {
                 [BANNERS[index], BANNERS[index + 1]] = [BANNERS[index + 1], BANNERS[index]];
            }
            
            // 3. Render ulang
            renderAdminBanners();
            previewBanners();
        }
        
        function admAddBanner() {
            // Ambil data dulu biar gak hilang yg diketik
            const inputs = document.querySelectorAll('.banner-url-input');
            if(inputs.length > 0) BANNERS = Array.from(inputs).map(i => i.value);
            
            if(!BANNERS) BANNERS = [];
            BANNERS.push("");
            renderAdminBanners();
        }
        
        function admRemoveBanner(index) {
            // Ambil data dulu
            const inputs = document.querySelectorAll('.banner-url-input');
            BANNERS = Array.from(inputs).map(i => i.value);
            
            BANNERS.splice(index, 1);
            renderAdminBanners();
            previewBanners();
        }
        
        function previewImg(input, imgId) {
            const img = document.getElementById(imgId);
            if(input.value) { img.src=input.value; img.style.display='block'; } else img.style.display='none';
        }
        
        function previewBanners() {
            // GATHER FROM INPUTS FIRST for live preview
            const inputs = document.querySelectorAll('.banner-url-input');
            const urls = [];
            inputs.forEach(input => {
                if(input.value.trim()) urls.push(input.value.trim());
            });
            
            const d = document.getElementById('bannerPreviews'); d.innerHTML='';
            urls.forEach(u=>{ d.innerHTML+=\`<img src="\${u}" style="height:60px;border-radius:4px;border:1px solid #ddd;">\`; });
        }
  
        function changeStatsPage(dir) {
            statsPage += dir;
            if(statsPage < 1) statsPage = 1;
            loadAdminStats(statsPage);
        }
  
        async function loadAdminStats(page){
            const l=document.getElementById('salesHistoryList'); l.innerHTML='<div class="loader"></div>';
            document.getElementById('pageIndicator').innerText=page;
            document.getElementById('btnPrevPage').disabled=(page===1);
            
            try {
                const r=await fetch('/api/admin/stats?page='+page,{headers:{'Admin-Key':localStorage.getItem('adminKey')}});
                const d=await r.json();
                if(d.success){
                    document.getElementById('statDaily').innerText='Rp '+(d.daily||0).toLocaleString();
                    document.getElementById('statMonthly').innerText='Rp '+(d.monthly||0).toLocaleString();
                    document.getElementById('statTotal').innerText='Rp '+(d.total||0).toLocaleString();
                    
                    let html='';
                    if(d.history.length === 0) {
                        html = '<p style="text-align:center; color:var(--text-muted); padding:20px;">Tidak ada data lagi.</p>';
                        document.getElementById('btnNextPage').disabled = true;
                    } else {
                        d.history.forEach(s=>{ 
                            html+=\`<div class="tx-item">
                                <div class="tx-left"><span class="tx-name">\${s.name}</span><span class="tx-date">\${new Date(s.date).toLocaleString()}</span></div>
                                <div class="tx-right">Rp \${(s.price||0).toLocaleString()}</div>
                            </div>\`; 
                        });
                        // Disable NEXT if less than 7 items
                        document.getElementById('btnNextPage').disabled = (d.history.length < 7);
                    }
                    l.innerHTML=html;
                }
            }catch{l.innerHTML='Error';}
        }
        
        async function admSaveConfig(){
            // GATHER BANNERS FROM DYNAMIC INPUTS
            const bannerInputs = document.querySelectorAll('.banner-url-input');
            const banners = Array.from(bannerInputs).map(i => i.value.trim()).filter(x => x);
            
            // GATHER OTHER CONFIGS
            const newOgTitle = document.getElementById('confOgTitle').value;
            const newOgDesc = document.getElementById('confOgDesc').value;
            const newFavicon = document.getElementById('confFavicon').value;
            const newOgImage = document.getElementById('confOgImage').value;
            const newStoreName = document.getElementById('confStoreName').value;
            const newContact = document.getElementById('confContact').value;
  
            const b={
                banners: banners,
                cats: CATEGORIES,
                ogTitle: newOgTitle,
                ogDesc: newOgDesc,
                favicon: newFavicon,
                ogImage: newOgImage,
                storeName: newStoreName,
                contact: newContact
            };
            
            const res = await fetch('/api/admin/save-config',{method:'POST',headers:{'Admin-Key':localStorage.getItem('adminKey')},body:JSON.stringify(b)});
            const data = await res.json();
            
            if(data.success) {
                // UPDATE GLOBAL VARIABLES IMMEDIATELY
                BANNERS = banners;
                OG_TITLE = newOgTitle;
                OG_DESC = newOgDesc;
                FAVICON_URL = newFavicon;
                OG_IMAGE_URL = newOgImage;
                STORE_NAME = newStoreName;
                CONTACT_URL = newContact;
                
                document.getElementById('headerTitle').innerText = STORE_NAME;
                document.title = STORE_NAME;
                
                toast("Konfigurasi disimpan"); 
                initBannerSlider();
            } else {
                toast("Gagal menyimpan", true);
            }
        }
        
        // --- USER FUNCTIONS ---
        function openInputName(){ openModal('inputNameModal'); }
        function closeUserMenu(){ closeModal('userMenuPage'); }
        function openUserMenu(){ 
            // 1. Ambil data riwayat transaksi
            const h = getHistory();
            let spend = 0;
            let assets = 0;

            // 2. Hitung total uang keluar & jumlah aset
            h.forEach(i => {
                if(i.status === 'PAID') {
                    spend += (i.price || 0); // Tambah harga ke total belanja
                    
                    // Hitung jumlah akun/aset
                    if(Array.isArray(i.content)) assets += i.content.length;
                    else assets++;
                }
            });

            // 3. Tampilkan angka hasil hitungan ke layar (HTML yang tadi kita buat)
            const elSpend = document.getElementById('uStatSpend');
            const elAssets = document.getElementById('uStatAssets');
            
            // Cek dulu elemennya ada atau tidak untuk menghindari error
            if(elSpend) elSpend.innerText = 'Rp ' + spend.toLocaleString();
            if(elAssets) elAssets.innerText = assets;
            
            // 4. Baru buka menu profilnya
            openModal('userMenuPage'); 
        }

        // Fungsi Baru: Untuk memproses ganti foto profil
        function changeProfilePic(input) {
            const f = input.files[0];
            if(!f) return;
            const r = new FileReader();
            r.onloadend = function() {
                const i = new Image();
                i.onload = function() {
                    const c = document.createElement('canvas');
                    const ctx = c.getContext('2d');
                    // Kecilkan gambar biar ringan disimpan di browser
                    const s = 100/i.width;
                    c.width = 100; c.height = i.height*s;
                    ctx.drawImage(i,0,0,c.width,c.height);
                    const newData = c.toDataURL('image/jpeg', 0.7);
                    
                    // Simpan data gambar ke LocalStorage browser
                    const session = localStorage.getItem('user_session');
                    if(session) {
                        let userDb = JSON.parse(localStorage.getItem('user_db_' + session));
                        userDb.image = newData;
                        localStorage.setItem('user_db_' + session, JSON.stringify(userDb));
                        
                        // Perbarui foto di layar
                        updateProfileUI(userDb);
                        toast("Foto Profil Diperbarui");
                    }
                };
                i.src = r.result;
            };
            r.readAsDataURL(f);
        }
        function editProfileName() {
            // 1. Minta input nama baru
            const currentSession = localStorage.getItem('user_session');
            const oldName = currentSession;
            let newName = prompt("Masukkan Nama Baru:", oldName);

            // 2. Validasi input
            if (!newName) return; // Jika batal/kosong
            newName = newName.trim();
            if (newName === oldName) return; // Jika nama sama saja
            if (newName.length < 3) return toast("Nama terlalu pendek (min 3 huruf)", true);
            
            // 3. Cek apakah nama sudah dipakai orang lain di browser ini
            if (localStorage.getItem('user_db_' + newName)) {
                return toast("Nama sudah digunakan user lain!", true);
            }

            // 4. Proses Ganti Nama (Migrasi Data)
            try {
                // Ambil data user lama
                const userData = JSON.parse(localStorage.getItem('user_db_' + oldName));
                
                // Update properti username di dalam data
                userData.username = newName;

                // Simpan ke kunci baru (user_db_NAMABARU)
                localStorage.setItem('user_db_' + newName, JSON.stringify(userData));
                
                // Update session aktif
                localStorage.setItem('user_session', newName);
                currentUser = newName;

                // Hapus data kunci lama agar bersih
                localStorage.removeItem('user_db_' + oldName);

                // Update Tampilan
                updateProfileUI(userData);
                toast("Nama berhasil diubah!");

            } catch (e) {
                console.error(e);
                toast("Gagal mengubah nama", true);
            }
        }
        
        // --- HISTORY & ASSETS ---
        function getHistory(){ return JSON.parse(localStorage.getItem('myHistory')||'[]'); }
        function saveHistoryItem(i){ let h=getHistory(); h.unshift(i); localStorage.setItem('myHistory',JSON.stringify(h)); }
        function updateHistoryStatus(oid,s,c){ let h=getHistory(); const i=h.findIndex(x=>x.oid===oid); if(i>=0){h[i].status=s; if(c)h[i].content=c; localStorage.setItem('myHistory',JSON.stringify(h));} }
        function filterHist(t){
            document.querySelectorAll('.cat-pill').forEach(e=>e.classList.remove('active'));
            document.getElementById(t==='all'?'tabAll':(t==='pending'?'tabPending':'tabPaid')).classList.add('active');
            const h=getHistory(); const f=h.filter(x=>(t==='all')?true:(t==='pending'?x.status==='PENDING':x.status==='PAID'));
            const l=document.getElementById('histList'); l.innerHTML='';
            if(f.length===0) l.innerHTML='<div style="text-align:center;color:#888;padding:20px;">Belum ada riwayat</div>';
            f.forEach(i=>{
                const st = i.status==='PAID'?'<span style="color:var(--success);background:#ECFDF5;padding:3px 8px;border-radius:6px;font-size:0.7rem;font-weight:700;">BERHASIL</span>':'<span style="color:var(--danger);background:#FEF2F2;padding:3px 8px;border-radius:6px;font-size:0.7rem;font-weight:700;">MENUNGGU</span>';
                l.innerHTML+=\`<div style="background:white; padding:12px; margin-bottom:10px; border-radius:12px; border:1px solid var(--border); box-shadow:var(--shadow-sm); cursor:pointer;" onclick="showHistoryDetail('\${i.oid}')">
                <div style="font-weight:700; margin-bottom:5px;">\${i.name}</div>
                <div style="font-size:0.75rem; display:flex; justify-content:space-between; align-items:center;">
                    <span style="color:var(--text-muted);">\${i.date}</span>
                    \${st}
                </div>
                </div>\`;
            });
        }
        function openHistory(){ openModal('historyModal'); filterHist('all'); }
        
        function showHistoryDetail(oid) {
            const item = getHistory().find(x => x.oid === oid);
            if (!item) return;
            
            if (item.status === 'PENDING') {
                currentOrderId = oid;
                showPaymentUI(item.qr, item.price);
                openModal('trxModal');
            } else if (item.status === 'PAID') {
                showSuccess(item.content, false);
                openModal('trxModal');
            }
        }
  
        function openAssets(){ 
            const h=getHistory().filter(x=>x.status==='PAID'); 
            const l=document.getElementById('myProdList'); l.innerHTML='';
            if(h.length===0) l.innerHTML='<div style="text-align:center;padding:40px;color:var(--text-muted);">'+ICONS.wallet+'<br>Belum ada aset</div>';
            h.forEach(i=>{
                let c = '';
                if(Array.isArray(i.content)) i.content.forEach(x=> c+=\`<div class="acc-box" style="background:#F8FAFC;padding:10px;border-radius:8px;border:1px dashed var(--border);margin-top:8px;display:flex;justify-content:space-between;align-items:center;"><span style="font-family:monospace;font-weight:600;">\${x}</span><div style="cursor:pointer;color:var(--primary);font-size:0.8rem;" onclick="copyText('\${x}')">Salin</div></div>\`);
                l.innerHTML+=\`<div class="asset-card" style="background:white;border-radius:12px;padding:16px;border:1px solid var(--border);margin-bottom:12px;"><strong>\${i.name}</strong>\${c}</div>\`;
            });
            openModal('myProductsModal');
        }
        function goToHome(){ 
             closeModal('historyModal'); closeModal('myProductsModal'); closeModal('userMenuPage'); closeModal('cartPage'); closeModal('productDetailPage');
        }
        
        // --- MISC ---
        function toast(m, error=false){ 
            const t=document.createElement('div'); t.className='toast visible'; 
            if(error) t.style.borderLeft = '5px solid var(--danger)';
            else t.style.borderLeft = '5px solid var(--success)';
            t.innerHTML=(error ? ICONS.close : ICONS.check)+' '+m;
            document.getElementById('toastContainer').appendChild(t);
            setTimeout(()=>{t.remove()}, 2000);
        }
        function copyText(t){ navigator.clipboard.writeText(t).then(()=>toast("Disalin")); }
        function setSort(t){ currentSort=t; closeSheet(); applyFilter(); }
        
        // --- ADMIN API STUBS ---
        async function loadProducts(){try{const r=await fetch('/api/products');const d=await r.json();allProducts=d.products;applyFilter();document.getElementById('loading').style.display='none'}catch{}}
        async function doLogin(){ const p=document.getElementById('adminPass').value; const r=await fetch('/api/admin/login',{method:'POST',body:JSON.stringify({password:p})}); const d=await r.json(); if(d.success){ localStorage.setItem('adminKey',p); closeModal('loginModal'); checkAdminSession(); toast("Login OK"); } else toast("Salah"); }
        function doLogout(){ localStorage.removeItem('adminKey'); closeAdminMenu(); checkAdminSession(); }
        // ... (Fungsi Admin Add/Edit/Delete/Stock sama seperti kode sebelumnya, hanya memastikan UI terhubung) ...
        function admOpenStockSelector(){ const l=document.getElementById('productSelectList');l.innerHTML='';allProducts.forEach(p=>{l.innerHTML+=\`<div onclick="admFetchStock('\${p.code}', '\${p.name}')" style="padding:10px;border-bottom:1px solid #eee;cursor:pointer;">\${p.name}</div>\`});openModal('selectProductModal'); }
        async function admFetchStock(c, n){ activeStockCode=c; closeModal('selectProductModal'); document.getElementById('stkModalName').innerText=n||c; openModal('stockDetailModal'); const r=await fetch('/api/admin/get-stock?code='+c,{headers:{'Admin-Key':localStorage.getItem('adminKey')}}); const d=await r.json(); const l=document.getElementById('stockListContainer'); l.innerHTML=''; if(d.stock.length===0)l.innerHTML='<p style="color:#888;">Stok Kosong</p>'; else d.stock.forEach((s,i)=>l.innerHTML+=\`<div class="stock-item"><span>\${s.substring(0,25)}...</span><span style="color:var(--danger);cursor:pointer" onclick="admDelStockDirect(\${i})">${ICONS.trash}</span></div>\`); }
        async function admAddStockDirect(){ const v=document.getElementById('newStockDirect').value; await fetch('/api/admin/stock-action',{method:'POST',headers:{'Admin-Key':localStorage.getItem('adminKey')},body:JSON.stringify({code:activeStockCode,action:'add',data:v})}); document.getElementById('newStockDirect').value=''; admFetchStock(activeStockCode, document.getElementById('stkModalName').innerText); toast("Stok Ditambah"); loadProducts(); }
        async function admDelStockDirect(i){ if(!confirm("Hapus?"))return; await fetch('/api/admin/stock-action',{method:'POST',headers:{'Admin-Key':localStorage.getItem('adminKey')},body:JSON.stringify({code:activeStockCode,action:'delete',index:i})}); admFetchStock(activeStockCode, document.getElementById('stkModalName').innerText); loadProducts(); }
        async function admAdd(){ await fetch('/api/admin/add-product',{method:'POST',headers:{'Admin-Key':localStorage.getItem('adminKey')},body:JSON.stringify({code:document.getElementById('nCode').value,name:document.getElementById('nName').value,price:document.getElementById('nPrice').value,category:document.getElementById('nCat').value,img:document.getElementById('nImg').value,desc:document.getElementById('nDesc').value,stockData:document.getElementById('nStock').value})}); toast("Disimpan"); loadProducts(); }
        function loadEditForm(){ const c=document.getElementById('editProdSelect').value; const p=allProducts.find(x=>x.code===c); if(p){document.getElementById('editFormArea').style.display='block'; document.getElementById('editPrice').value=p.price; document.getElementById('editImg').value=p.img||''; document.getElementById('editDesc').value=p.desc||''; document.getElementById('editCat').value=p.category||'';} }
        
        // VOUCHER LOGIC
        async function loadAdminVouchers(){const r=await fetch('/api/admin/vouchers',{headers:{'Admin-Key':localStorage.getItem('adminKey')}});const d=await r.json();const l=document.getElementById('voucherListAdmin');l.innerHTML='';if(d.vouchers.length===0){l.innerHTML='<p style="text-align:center;color:#888;">Belum ada voucher</p>';return}d.vouchers.forEach(v=>{l.innerHTML+=\`<div class="stock-item" style="display:flex;justify-content:space-between;"><div><strong>\${v.code}</strong> (Rp \${v.amount.toLocaleString()})</div><div style="cursor:pointer;color:var(--danger);" onclick="admDelVoucher('\${v.code}')">${ICONS.trash}</div></div>\`})}
        async function admSaveVoucher(){const c=document.getElementById('vCode').value.trim().toUpperCase(),a=parseInt(document.getElementById('vAmount').value),t=document.getElementById('vTarget').value,l=parseInt(document.getElementById('vLimit').value)||0;if(!c||!a)return toast("Lengkapi Data");await fetch('/api/admin/save-voucher',{method:'POST',headers:{'Admin-Key':localStorage.getItem('adminKey')},body:JSON.stringify({code:c,amount:a,validFor:t,limit:l})});toast("Voucher Dibuat");loadAdminVouchers()}
        async function admDelVoucher(c){if(!confirm("Hapus?"))return;await fetch('/api/admin/del-voucher',{method:'POST',headers:{'Admin-Key':localStorage.getItem('adminKey')},body:JSON.stringify({code:c})});toast("Dihapus");loadAdminVouchers()}
        async function admDelete(){const c=document.getElementById('editProdSelect').value;if(!c)return;if(!confirm("Hapus produk ini?"))return;await fetch('/api/admin/delete-product',{method:'POST',headers:{'Admin-Key':localStorage.getItem('adminKey')},body:JSON.stringify({code:c})});toast("Terhapus");location.reload()}
        async function admSave(){const c=document.getElementById('editProdSelect').value;if(!c)return;await fetch('/api/admin/edit-product',{method:'POST',headers:{'Admin-Key':localStorage.getItem('adminKey')},body:JSON.stringify({code:c,price:document.getElementById('editPrice').value,category:document.getElementById('editCat').value,img:document.getElementById('editImg').value,desc:document.getElementById('editDesc').value})});toast("Update Sukses");loadProducts()}
  
        init();
  `;
  
  // --- BACKEND CLOUDFLARE WORKER ---
  export default {
    async fetch(request, env) {
      if (!env.PREMIUM_DB) return new Response("Error: DATABASE KV NOT CONNECTED", { status: 500 });
  
      const url = new URL(request.url);
      const corsHeaders = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };
  
      if (url.pathname === "/" || url.pathname.startsWith("/p/")) {
          // --- LOGIC SHARE LINK PRODUK ---
          const conf = await env.PREMIUM_DB.get("CONFIG_STORE", { type: "json" }) || {};
          
          let title = conf.ogTitle || DEFAULT_CONFIG.ogTitle;
          let desc = conf.ogDesc || DEFAULT_CONFIG.ogDesc;
          let image = conf.ogImage || DEFAULT_CONFIG.ogImage;
  
          // Jika url diawali dengan /p/, cari produk di KV
          if (url.pathname.startsWith("/p/")) {
              const code = url.pathname.split("/")[2]; // ambil kode dari /p/KODE
              if (code) {
                  const prod = await env.PREMIUM_DB.get(`PROD_${code}`, { type: "json" });
                  const img = await env.PREMIUM_DB.get(`IMG_${code}`);
                  if (prod) {
                      title = `${prod.name} - ${conf.storeName || DEFAULT_CONFIG.storeName}`;
                      desc = prod.desc || `Beli ${prod.name} murah di sini!`;
                      if(img) image = img;
                  }
              }
          }
  
          let finalHtml = HTML_PART_1
              .replace(/{{STORE_FAVICON}}/g, conf.favicon || DEFAULT_CONFIG.favicon)
              .replace(/{{OG_IMAGE}}/g, image)
              .replace(/{{OG_TITLE}}/g, title)
              .replace(/{{OG_DESC}}/g, desc)
              + HTML_PART_2 + `</script></body></html>`;
          
          finalHtml = finalHtml.replace(/{{STORE_NAME}}/g, conf.storeName || DEFAULT_CONFIG.storeName)
                               .replace(/{{CONTACT_URL}}/g, conf.contact || DEFAULT_CONFIG.contact);
          
          return new Response(finalHtml, { headers: { "Content-Type": "text/html" } });
      }
  
      if (url.pathname === "/api/config") {
          const conf = await env.PREMIUM_DB.get("CONFIG_STORE", { type: "json" }) || {};
          return new Response(JSON.stringify(Object.assign({}, DEFAULT_CONFIG, conf)), { headers: corsHeaders });
      }
  
      if (url.pathname === "/api/products") {
          let list = await env.PREMIUM_DB.get("LIST_PRODUCTS", { type: "json" }) || [];
          let products = [];
          for (const code of list) {
              const prod = await env.PREMIUM_DB.get(`PROD_${code}`, { type: "json" });
              if (!prod) continue;
              const stock = await env.PREMIUM_DB.get(`STOCK_${code}`, { type: "json" }) || [];
              const img = await env.PREMIUM_DB.get(`IMG_${code}`);
              products.push({ code: prod.code, name: prod.name, price: parseInt(prod.price), stock: stock.length, img: img, category: prod.category || '', desc: prod.desc || '' });
          }
          return new Response(JSON.stringify({ products }), { headers: corsHeaders });
      }
  
      if (url.pathname === "/api/check-voucher" && request.method === "POST") {
          const { code, productCode } = await request.json();
          const voucher = await env.PREMIUM_DB.get(`VOUCHER_${code}`, { type: "json" });
          if (!voucher) return new Response(JSON.stringify({ valid: false, message: "Tidak valid" }), { headers: corsHeaders });
          if (voucher.limit && voucher.limit > 0 && (voucher.used || 0) >= voucher.limit) return new Response(JSON.stringify({ valid: false, message: "Habis" }), { headers: corsHeaders });
          if (voucher.validFor !== "ALL" && voucher.validFor !== productCode) return new Response(JSON.stringify({ valid: false, message: "Tidak berlaku produk ini" }), { headers: corsHeaders });
          return new Response(JSON.stringify({ valid: true, amount: voucher.amount }), { headers: corsHeaders });
      }
  
      if (url.pathname === "/api/buy" && request.method === "POST") {
          const { code, qty, voucherCode } = await request.json();
          const prod = await env.PREMIUM_DB.get(`PROD_${code}`, { type: "json" });
          let stock = await env.PREMIUM_DB.get(`STOCK_${code}`, { type: "json" }) || [];
          
          const reqQty = parseInt(qty);
          if (isNaN(reqQty) || reqQty < 1) return new Response(JSON.stringify({ success: false, message: "Jumlah tidak valid" }), { headers: corsHeaders });
          if (!prod || stock.length < reqQty) return new Response(JSON.stringify({ success: false, message: "Stok kurang" }), { headers: corsHeaders });
  
          let amount = parseInt(prod.price) * reqQty;
          if (voucherCode) {
              const v = await env.PREMIUM_DB.get(`VOUCHER_${voucherCode}`, { type: "json" });
              if (v && (v.validFor === "ALL" || v.validFor === code) && (!v.limit || v.limit === 0 || (v.used || 0) < v.limit)) {
                  amount = Math.max(0, amount - v.amount);
              }
          }
  
          if (amount === 0) {
              const accounts = []; for(let i=0; i<reqQty; i++) accounts.push(stock.shift());
              await env.PREMIUM_DB.put(`STOCK_${code}`, JSON.stringify(stock));
              if (voucherCode) {
                  const v = await env.PREMIUM_DB.get(`VOUCHER_${voucherCode}`, { type: "json" });
                  if(v) { v.used = (v.used || 0) + 1; await env.PREMIUM_DB.put(`VOUCHER_${voucherCode}`, JSON.stringify(v)); }
              }
              await recordSale(env, prod.name, 0, accounts);
              return new Response(JSON.stringify({ success: true, isFree: true, accounts }), { headers: corsHeaders });
          }
  
          const orderId = `INV${Date.now()}`;
          const res = await createPakasirTrx(amount, orderId, env);
          
          if (res.success && res.data.payment) {
              await env.PREMIUM_DB.put(`ORDER_${orderId}`, JSON.stringify({ code, qty: reqQty, status: 'PENDING', voucherCode, amount }), { expirationTtl: 3600 });
              return new Response(JSON.stringify({ success: true, isFree: false, amount, qrString: res.data.payment.payment_number, orderId: orderId }), { headers: corsHeaders });
          }
          return new Response(JSON.stringify({ success: false, message: "Gateway Error" }), { headers: corsHeaders });
      }
  
      if (url.pathname === "/api/check-status") {
          const oid = new URL(request.url).searchParams.get("oid");
          const orderRaw = await env.PREMIUM_DB.get(`ORDER_${oid}`);
          if(!orderRaw) return new Response(JSON.stringify({ status: 'PENDING' }), { headers: corsHeaders });
          
          const order = JSON.parse(orderRaw);
          const res = await checkPakasirStatus(oid, order.amount, env);
          const status = (res.success && res.data.transaction && res.data.transaction.status === 'completed') ? 'PAID' : 'PENDING';
          return new Response(JSON.stringify({ status }), { headers: corsHeaders });
      }
  
      if (url.pathname === "/api/claim" && request.method === "POST") {
          const { oid } = await request.json();
          const orderRaw = await env.PREMIUM_DB.get(`ORDER_${oid}`);
          if (!orderRaw || orderRaw === "CLAIMED") return new Response(JSON.stringify({ success: false }), { headers: corsHeaders });
          
          const order = JSON.parse(orderRaw);
          const res = await checkPakasirStatus(oid, order.amount, env);
          
          if (!res.success || !res.data.transaction || res.data.transaction.status !== 'completed') {
               return new Response(JSON.stringify({ success: false }), { headers: corsHeaders });
          }
          
          await env.PREMIUM_DB.put(`ORDER_${oid}`, "CLAIMED");
  
          const prod = await env.PREMIUM_DB.get(`PROD_${order.code}`, { type: "json" });
          let stock = await env.PREMIUM_DB.get(`STOCK_${order.code}`, { type: "json" }) || [];
          
          const qtyToClaim = parseInt(order.qty);
          const accs = []; 
          for(let i=0; i<qtyToClaim; i++) if(stock.length>0) accs.push(stock.shift());
          
          await env.PREMIUM_DB.put(`STOCK_${order.code}`, JSON.stringify(stock));
          if (order.voucherCode) {
              const v = await env.PREMIUM_DB.get(`VOUCHER_${order.voucherCode}`, { type: "json" });
              if(v) { v.used = (v.used || 0) + 1; await env.PREMIUM_DB.put(`VOUCHER_${order.voucherCode}`, JSON.stringify(v)); }
          }
          await recordSale(env, prod ? prod.name : order.code, order.amount, accs);
          return new Response(JSON.stringify({ success: true, accounts: accs }), { headers: corsHeaders });
      }
  
      if (url.pathname.startsWith("/api/admin")) {
          const body = await request.json().catch(() => ({}));
          if (url.pathname === "/api/admin/login") return new Response(JSON.stringify({ success: body.password === env.ADMIN_PASSWORD }), { headers: corsHeaders });
          if (request.headers.get("Admin-Key") !== env.ADMIN_PASSWORD) return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { headers: corsHeaders, status: 401 });
  
          if (url.pathname === "/api/admin/stock-action") {
              const { code, action, data, index } = body;
              let stock = await env.PREMIUM_DB.get(`STOCK_${code}`, { type: "json" }) || [];
              if (action === 'add') {
                  const newItems = data.split(';').map(i => i.trim()).filter(i => i !== '');
                  stock.push(...newItems);
              } else if (action === 'delete') {
                  if(index >= 0 && index < stock.length) stock.splice(index, 1);
              }
              await env.PREMIUM_DB.put(`STOCK_${code}`, JSON.stringify(stock));
              return new Response(JSON.stringify({ success: true, newStock: stock }), { headers: corsHeaders });
          }
  
          if (url.pathname === "/api/admin/stats") {
              const page = parseInt(new URL(request.url).searchParams.get("page") || "1");
              const limit = 7; // UPDATED LIMIT
              const sales = await env.PREMIUM_DB.get("ADMIN_SALES", { type: "json" }) || [];
              
              const now = new Date().toISOString();
              let daily = 0, monthly = 0, total = 0;
              sales.forEach(s => {
                  total += (s.price||0);
                  if (s.date.startsWith(now.split('T')[0])) daily += (s.price||0);
                  if (s.date.startsWith(now.slice(0, 7))) monthly += (s.price||0);
              });
  
              const startIndex = (page - 1) * limit;
              const endIndex = page * limit;
              const paginatedHistory = sales.slice(startIndex, endIndex);
  
              return new Response(JSON.stringify({ success: true, daily, monthly, total, history: paginatedHistory, page }), { headers: corsHeaders });
          }
  
          if (url.pathname === "/api/admin/get-stock") {
              const code = new URL(request.url).searchParams.get("code");
              const stock = await env.PREMIUM_DB.get(`STOCK_${code}`, { type: "json" }) || [];
              return new Response(JSON.stringify({ stock }), { headers: corsHeaders });
          }
          if (url.pathname === "/api/admin/add-product") {
              const c = body.code.replace(/\s/g, "").toLowerCase();
              await env.PREMIUM_DB.put(`PROD_${c}`, JSON.stringify({ code: c, name: body.name, price: body.price, category: body.category, desc: body.desc }));
              if(body.img) await env.PREMIUM_DB.put(`IMG_${c}`, body.img);
              if(body.stockData) await env.PREMIUM_DB.put(`STOCK_${c}`, JSON.stringify(body.stockData.split(";").map(i=>i.trim()).filter(i=>i!=="")));
              let list = await env.PREMIUM_DB.get("LIST_PRODUCTS", { type: "json" }) || [];
              if (!list.includes(c)) { list.push(c); await env.PREMIUM_DB.put("LIST_PRODUCTS", JSON.stringify(list)); }
              return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
          }
          if (url.pathname === "/api/admin/edit-product") {
              let p = await env.PREMIUM_DB.get(`PROD_${body.code}`, { type: "json" });
              if(!p) return new Response(JSON.stringify({ success: false }), { headers: corsHeaders });
              if(body.price) p.price = parseInt(body.price);
              if(body.category!==undefined) p.category=body.category;
              if(body.desc!==undefined) p.desc=body.desc;
              await env.PREMIUM_DB.put(`PROD_${body.code}`, JSON.stringify(p));
              if(body.img) await env.PREMIUM_DB.put(`IMG_${body.code}`, body.img);
              if(body.stockData) {
                  let s = await env.PREMIUM_DB.get(`STOCK_${body.code}`, { type: "json" }) || [];
                  s.push(...body.stockData.split(";").map(i=>i.trim()).filter(i=>i!==""));
                  await env.PREMIUM_DB.put(`STOCK_${body.code}`, JSON.stringify(s));
              }
              return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
          }
          if (url.pathname === "/api/admin/delete-product") {
              await env.PREMIUM_DB.delete(`PROD_${body.code}`); await env.PREMIUM_DB.delete(`STOCK_${body.code}`); await env.PREMIUM_DB.delete(`IMG_${body.code}`);
              let list = await env.PREMIUM_DB.get("LIST_PRODUCTS", { type: "json" }) || [];
              await env.PREMIUM_DB.put("LIST_PRODUCTS", JSON.stringify(list.filter(c => c !== body.code)));
              return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
          }
          if (url.pathname === "/api/admin/save-voucher") {
              const { code, amount, validFor, limit } = body;
              const ex = await env.PREMIUM_DB.get(`VOUCHER_${code}`, { type: "json" });
              await env.PREMIUM_DB.put(`VOUCHER_${code}`, JSON.stringify({ code, amount, validFor, limit, used: ex ? ex.used : 0 }));
              let l = await env.PREMIUM_DB.get("LIST_VOUCHERS", { type: "json" }) || [];
              if (!l.includes(code)) { l.push(code); await env.PREMIUM_DB.put("LIST_VOUCHERS", JSON.stringify(l)); }
              return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
          }
          if (url.pathname === "/api/admin/vouchers") {
              let list = await env.PREMIUM_DB.get("LIST_VOUCHERS", { type: "json" }) || [];
              let vouchers = [];
              for (const c of list) { const v = await env.PREMIUM_DB.get(`VOUCHER_${c}`, { type: "json" }); if(v) vouchers.push(v); }
              return new Response(JSON.stringify({ vouchers }), { headers: corsHeaders });
          }
          if (url.pathname === "/api/admin/del-voucher") {
              await env.PREMIUM_DB.delete(`VOUCHER_${body.code}`);
              let l = await env.PREMIUM_DB.get("LIST_VOUCHERS", { type: "json" }) || [];
              await env.PREMIUM_DB.put("LIST_VOUCHERS", JSON.stringify(l.filter(c => c !== body.code)));
              return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
          }
          if (url.pathname === "/api/admin/save-config") {
              await env.PREMIUM_DB.put("CONFIG_STORE", JSON.stringify(body));
              return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
          }
      }
  
      return new Response("Not Found", { status: 404 });
    }
  };
  
  async function recordSale(env, name, price, content) {
      let sales = await env.PREMIUM_DB.get("ADMIN_SALES", { type: "json" }) || [];
      sales.unshift({ date: new Date().toISOString(), name, price, content });
      if(sales.length > 10000) sales = sales.slice(0, 10000); 
      await env.PREMIUM_DB.put("ADMIN_SALES", JSON.stringify(sales));
  }
  
  async function createPakasirTrx(amount, orderId, env) {
    try {
      const body = { project: env.PAKASIR_SLUG, order_id: orderId, amount: amount, api_key: env.PAKASIR_API_KEY };
      const req = await fetch('https://app.pakasir.com/api/transactioncreate/qris', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
      });
      return { success: true, data: await req.json() };
    } catch(e) { return { success: false }; }
  }
  
  async function checkPakasirStatus(oid, amount, env) {
    try {
      const url = `https://app.pakasir.com/api/transactiondetail?project=${env.PAKASIR_SLUG}&amount=${amount}&order_id=${oid}&api_key=${env.PAKASIR_API_KEY}`;
      const req = await fetch(url);
      return { success: true, data: await req.json() };
    } catch(e) { return { success: false }; }
  }