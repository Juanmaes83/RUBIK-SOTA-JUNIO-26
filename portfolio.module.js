
        /* =========================================
           VARIABLES GLOBALES & TOKENS RUBIK SOTA
           ========================================= */
        :root {
            --main-font: "Inter", sans-serif;
            --sub-font: "Oswald", sans-serif;
            
            /* Variables Hero Originales (mantenidas para compatibilidad) */
            --font-size-h1: 0.24rem; --font-size-h2: 0.2rem;
            --font-size-label1: 0.2rem; --font-size-desc1: 0.18rem;
            --font-weight-4: 400; --font-weight-7: 700;
            --line-height-h1: 0.27rem; --line-height-desc1: 0.31rem;
            --letter-spacing: normal;
            --color-white: #ffffff;

            /* Rubik SOTA Tokens - Colores Sistematizados */
            --rs-bg: #000000; 
            --rs-surface: #0a0a0a; 
            --rs-text: #FFFFFF;
            --rs-muted: rgba(255, 255, 255, 0.7);
            --rs-gold: #D4AF37; /* Acento Oro Puro */
            --rs-gold-soft: rgba(212, 175, 55, 0.3);
            --rs-gold-light: rgba(212, 175, 55, 0.1);
            
            /* Colores de botones */
            --btn-bg: var(--rs-gold);
            --btn-text: var(--rs-bg);
            --btn-border: var(--rs-gold);
            --btn-outline-text: var(--rs-gold);
            --btn-outline-border: var(--rs-gold-soft);
            
            /* Espaciados */
            --space-xs: 0.5rem;
            --space-sm: 1rem;
            --space-md: 1.5rem;
            --space-lg: 2rem;
            --space-xl: 3rem;
            
            /* Tipografía para cards (basada en sectores) */
            --card-title-size: 18px;
            --card-text-size: 15px;
            --card-meta-size: 12px;
            --card-badge-size: 11px;
            --card-line-height: 1.5;
            --card-padding: var(--space-lg);
            --card-radius: 1.8rem;
            --card-border: 1px solid var(--rs-gold-soft);
            --card-shadow: 0 15px 35px rgba(0,0,0,0.6);
            --card-hover-transform: translateY(-8px) scale(1.02);
            --card-hover-border: var(--rs-gold);
            --card-hover-shadow: 0 20px 40px rgba(0,0,0,0.8);
        }

        @media (min-width: 1024px) {
            :root {
                --font-size-h1: 0.44rem; --font-size-h2: 0.28rem;
                --font-size-label1: 0.2rem; --font-size-desc1: 0.14rem;
                --line-height-h1: 0.48rem; --line-height-desc1: 0.16rem;
            }
        }

        /* =========================================
           RESET & ESTILOS BASE
           ========================================= */
        * {
            margin: 0;
            padding: 0;
            border: 0;
            box-sizing: border-box;
        }
        article, aside, figure, footer, header, main, nav, section { display: block; }
        body { 
            line-height: 1; 
            background: var(--rs-bg); 
            color: var(--rs-text); 
            font-family: var(--main-font); 
            overflow-x: hidden; 
            width: 100%; 
            -webkit-font-smoothing: antialiased; 
        }
        ul { list-style: none; }
        html { font-size: clamp(6px, calc(100vw / 1440 * 10), 10px); scroll-behavior: smooth; } /* 1rem = 10px en 1440px */
        a { text-decoration: none; outline: none; color: inherit; }
        img, video { max-width: 100%; height: auto; display: block; }
        button { cursor: pointer; border: none; background: none; }
        .up-text { text-transform: uppercase; }
        .desc-1 { 
            color: var(--color-white); 
            font-family: var(--main-font); 
            font-size: var(--font-size-desc1); 
            font-weight: var(--font-weight-4); 
            letter-spacing: var(--letter-spacing); 
            line-height: var(--line-height-desc1); 
        }

        /* =========================================
           MODAL GLOBAL (SERVICIOS Y SECTORES)
           ========================================= */
        .rs-modal-overlay {
            position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(10px);
            z-index: 9999; display: flex; align-items: center; justify-content: center;
            opacity: 0; pointer-events: none; transition: opacity 0.4s ease;
        }
        .rs-modal-overlay.active { opacity: 1; pointer-events: auto; }
        .rs-modal-content {
            background: var(--rs-surface); border: var(--card-border);
            padding: var(--card-padding); border-radius: 15px; max-width: 500px; width: 90%;
            position: relative; transform: translateY(20px); transition: transform 0.4s ease;
            text-align: center; box-shadow: var(--card-shadow);
        }
        .rs-modal-close {
            position: absolute; top: 15px; right: 20px; color: var(--rs-gold);
            font-size: 24px; cursor: pointer; transition: opacity 0.3s;
        }
        .rs-modal-close:hover { opacity: 0.7; }
        
        .rs-modal-title { font-family: var(--sub-font); font-size: 24px; color: var(--rs-text); margin-bottom: var(--space-xs); text-transform: uppercase; line-height: 1.2; }
        .rs-modal-claim { font-size: 16px; color: var(--rs-gold); font-weight: 600; margin-bottom: var(--space-sm); line-height: 1.4; }
        .rs-modal-desc { font-size: 14px; color: var(--rs-muted); line-height: 1.6; }

        /* =========================================
           TIPOGRAFÍA SOTA (BÁSICA)
           ========================================= */
        .rs-section { width: 100%; position: relative; overflow: hidden; }
        .rs-title { font-family: var(--sub-font); font-size: clamp(2rem, 4vw, 3rem); color: var(--rs-text); line-height: 1.1; margin-bottom: 0.5em; font-weight: 700; text-transform: uppercase; }
        .rs-subtitle { font-family: var(--main-font); font-size: 1.2rem; color: var(--rs-gold); font-weight: 600; margin-bottom: 1em; text-transform: uppercase; letter-spacing: 1px; }
        .rs-body { font-family: var(--main-font); font-size: 1rem; line-height: 1.6; color: var(--rs-muted); margin-bottom: 1.2em; }

        /* =========================================
           SISTEMA DE CARDS UNIFICADO
           ========================================= */
        .card {
            background: var(--rs-surface);
            border-radius: var(--card-radius);
            padding: var(--card-padding);
            border: var(--card-border);
            box-shadow: var(--card-shadow);
            transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
            position: relative;
            z-index: 5;
        }
        .card:hover {
            transform: var(--card-hover-transform);
            border-color: var(--card-hover-border);
            box-shadow: var(--card-hover-shadow);
        }
        .card__title {
            font-family: var(--sub-font);
            font-size: var(--card-title-size);
            color: var(--rs-gold);
            margin-bottom: var(--space-sm);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 1.2;
        }
        .card__text {
            font-family: var(--main-font);
            font-size: var(--card-text-size);
            line-height: var(--card-line-height);
            color: var(--rs-muted);
            margin-bottom: 0;
        }
        .card__meta {
            font-size: var(--card-meta-size);
            color: var(--rs-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .card__badge {
            background: rgba(0,0,0,0.4);
            border: 1px solid var(--rs-gold-soft);
            color: var(--rs-gold);
            font-size: var(--card-badge-size);
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 30px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            backdrop-filter: blur(4px);
            display: inline-block;
        }
        /* Variante destacada */
        .card--featured {
            background: var(--rs-gold-light);
            border: 2px solid var(--rs-gold);
            text-align: center;
            box-shadow: 0 15px 35px rgba(212,175,55,0.15);
        }
        .card--featured .card__title {
            color: var(--rs-text);
            font-size: 2rem;
            line-height: 1.2;
            font-weight: 800;
        }
        .card--featured .card__text {
            font-size: 1.2rem;
            margin-bottom: var(--space-sm);
        }
        .card--featured .card__cta {
            font-weight: 700;
            letter-spacing: 2px;
            color: var(--rs-gold);
            font-size: 1.4rem;
        }

        /* =========================================
           SISTEMA DE BOTONES UNIFICADO
           ========================================= */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: var(--space-xs);
            padding: var(--space-sm) var(--space-lg);
            font-family: var(--main-font);
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 50px;
            transition: all 0.3s ease;
            cursor: pointer;
            border: 1px solid transparent;
            background: transparent;
            color: inherit;
        }
        .btn--primary {
            background: var(--btn-bg);
            color: var(--btn-text);
            border-color: var(--btn-border);
        }
        .btn--primary:hover {
            filter: brightness(1.1);
            transform: scale(1.05);
        }
        .btn--outline {
            border: 1px solid var(--btn-outline-border);
            color: var(--btn-outline-text);
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(5px);
        }
        .btn--outline:hover {
            background: var(--rs-gold);
            color: var(--rs-bg);
            border-color: var(--rs-gold);
        }
        .btn--icon {
            width: 54px;
            height: 54px;
            padding: 0;
            border-radius: 50%;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(5px);
            color: var(--rs-gold);
            border: 1px solid var(--rs-gold-soft);
        }
        .btn--icon:hover {
            background: var(--rs-gold);
            color: var(--rs-bg);
            border-color: var(--rs-gold);
        }
        .btn--icon svg {
            width: 24px;
            height: 24px;
        }
        .btn--close {
            font-size: 35px;
            line-height: 1;
            color: var(--rs-gold);
            background: transparent;
            border: none;
            padding: 0;
        }
        .btn--close:hover {
            opacity: 0.7;
        }

        /* =========================================
           SECCIÓN 1: HERO 
           ========================================= */
        .hero-section { position: relative; overflow: hidden; height: 100vh; }
        .hero-section .container { display: flex; justify-content: center; align-items: center; height: 100vh; position: relative; }
        
        /* Socials */
        .hero-section .container .socials { display: flex; position: absolute; top: 20px; right: 20px; z-index: 100; }
        .hero-section .container .socials .links { display: flex; gap: 10px; overflow: hidden; position: relative; right: -30px; }
        .hero-section .container .socials .links a { 
            display: flex; color: #fff; font-size: 12px; line-height: 14px; letter-spacing: 0.5px; 
            transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); height: min-content; transform: translateY(-20px); 
        }
        .hero-section .container .socials .links a:hover { opacity: 0.7; }
        .hero-section .container .socials .logo-desc { display: flex; flex-direction: column; align-items: end; }
        .hero-section .container .socials .logo-desc .hide-img { display: flex; overflow: hidden; }
        .hero-section .container .socials .logo-desc .hide-img .logo-text-replace { 
            color: var(--rs-gold); font-weight: 700; font-size: 14px; text-align: right; line-height: 1.2; 
            transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); transform: translateY(-100%); 
        }
        .hero-section .container .socials .logo-desc .hide-text { display: flex; transform: rotate(-90deg); transform-origin: right bottom; overflow: hidden; position: relative; top: -15px; }
        .hero-section .container .socials .logo-desc p { 
            color: #fff; text-align: end; font-size: 10px; line-height: 12px; letter-spacing: 0.5px; 
            transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); transform: translateY(30px); 
        }
        .hero-section .container .socials.active .links a { transform: translateY(0); }
        .hero-section .container .socials.active .logo-desc .logo-text-replace { transform: translateY(0); }
        .hero-section .container .socials.active .logo-desc p { transform: translateY(0); }
        
        /* Wrapper central */
        .hero-section .container .wrapper { display: flex; width: 400px; max-width: 92vw; height: 268px; position: absolute; justify-content: center; align-items: center; }
        
        /* Descripción centro */
        .hero-section .container .wrapper .description-center { display: flex; position: absolute; top: -165px; justify-content: space-between; width: 100%; align-items: flex-end; }
        .hero-section .container .wrapper .description-center .grid { display: flex; flex-direction: column; }
        .hero-section .container .wrapper .description-center .grid span { position: relative; font-weight: 900; overflow: hidden; font-size: 14px; line-height: 12px; }
        .hero-section .container .wrapper .description-center .grid span p { transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); transform: translateY(-100%); }
        .hero-section .container .wrapper .description-center .grid span:nth-of-type(2) { left: 90px; margin-bottom: 28px; }
        .hero-section .container .wrapper .description-center .grid span:nth-of-type(2) p { transform: translateY(100%); }
        .hero-section .container .wrapper .description-center .grid span:nth-of-type(3) { left: 80px; }
        .hero-section .container .wrapper .description-center .grid.active span p { transform: translateY(0); }
        
        .hero-section .container .wrapper .description-center .numbers { display: flex; height: auto; overflow: hidden; }
        .hero-section .container .wrapper .description-center .numbers .hide-text { 
            display: flex; transform: translateY(100%); transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); 
        }
        .hero-section .container .wrapper .description-center .numbers .hide-text:nth-of-type(1) { 
            position: absolute; top: 0; right: 0; transform: translateY(-100%); overflow: hidden; 
        }
        .hero-section .container .wrapper .description-center .numbers .hide-text:nth-of-type(1) p { 
            transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); transform: translateY(-100%); 
        }
        .hero-section .container .wrapper .description-center .numbers .try { display: flex; flex-direction: column; transform: translateY(0); transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); }
        .hero-section .container .wrapper .description-center .numbers.active .hide-text { transform: translateY(0); }
        .hero-section .container .wrapper .description-center .numbers.active .hide-text:nth-of-type(1) p { transform: translateY(0); }
        
        /* Descripción bottom */
        .hero-section .container .wrapper .description-bottom { display: flex; position: absolute; bottom: -175px; justify-content: space-between; width: 900px; left: -50px; }
        .hero-section .container .wrapper .description-bottom .info-col { display: flex; flex-direction: column; width: max-content; gap: 8px; }
        .hero-section .container .wrapper .description-bottom .info-col .hide-text { 
            display: flex; height: 12px; transform: translateY(100%); transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); 
            position: relative; overflow: hidden; flex-direction: column; justify-content: center; 
        }
        .hero-section .container .wrapper .description-bottom .info-col .hide-text p { 
            transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); transform: translateY(-200%); position: absolute; 
            font-size: 12px; line-height: 11px; white-space: nowrap; 
        }
        .hero-section .container .wrapper .description-bottom .info-col .hide-text p:nth-of-type(2) { transform: translateY(200%); }
        .hero-section .container .wrapper .description-bottom .info-col .hide-text p.active { transform: translateY(0); transition-delay: 0.3s; }
        .hero-section .container .wrapper .description-bottom .info-col .hide-text:nth-of-type(2) { left: 30%; margin-bottom: 20px; }
        
        /* Caja de video/imagen */
        .hero-section .container .wrapper .box { 
            display: flex; position: absolute; width: 400px; height: 268px; overflow: hidden; 
            align-items: center; justify-content: center; z-index: 1; 
            clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%); 
        }
        .hero-section .container .wrapper .box img,
        .hero-section .container .wrapper .box video { 
            width: 100%; height: 100%; object-fit: cover; position: absolute; transform: scale(1.15); 
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); 
        }
        .hero-section .container .wrapper .box.from-video video { width: 400px; }
        
        .hero-section .container .wrapper .box .img_1, 
        .hero-section .container .wrapper .box .img_2, 
        .hero-section .container .wrapper .box .img_3 { 
            display: none; width: 400px; height: 100%; position: absolute; 
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); object-fit: cover;
        }
        .hero-section .container .wrapper .box .img_1 { transform: scale(1) translateY(16px); opacity: 0; }
        .hero-section .container .wrapper .box.active { bottom: unset; transform-origin: center; }
        
        /* Contador */
        .hero-section .container .wrapper .counter { display: flex; width: 238px; height: 238px; justify-content: center; align-items: center; position: relative; }
        .hero-section .container .wrapper .counter .current { color: #fff; z-index: 0; display: flex; overflow: hidden; }
        .hero-section .container .wrapper .counter .current p { transform: translateY(100%); }
        .hero-section .container .wrapper .counter .line { 
            display: flex; position: absolute; opacity: 0.4; transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); 
        }
        .hero-section .container .wrapper .counter .line:nth-of-type(1) { top: 0; width: 1px; height: 93px; transform-origin: bottom center; }
        .hero-section .container .wrapper .counter .line:nth-of-type(2) { right: 0; height: 1px; width: 93px; transform-origin: left center; }
        .hero-section .container .wrapper .counter .line:nth-of-type(3) { bottom: 0; width: 1px; height: 93px; transform-origin: top center; }
        .hero-section .container .wrapper .counter .line:nth-of-type(4) { left: 0; height: 1px; width: 93px; transform-origin: right center; }
        .hero-section .container .wrapper .counter .line:after { 
            content: ""; display: flex; width: 0%; height: 0%; position: absolute; background-color: #d9d9d9; 
            bottom: 0; transition: all 0.6s cubic-bezier(0.3, 0, 0.1, 1); 
        }
        .hero-section .container .wrapper .counter .line.active:after { width: 100%; height: 100%; }
        
        /* Laterales izquierdo/derecho */
        .hero-section .container .wrapper-left { display: flex; width: 284px; position: absolute; top: 0; left: 0; flex-direction: column; overflow: hidden; }
        .hero-section .container .wrapper-left .box-left { 
            display: flex; position: relative; height: 440px; overflow: hidden; margin-bottom: 13px; 
            align-items: center; justify-content: center; clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%); 
        }
        .hero-section .container .wrapper-left .box-left img { width: 100%; height: 100%; object-fit: cover; position: absolute; transform: scale(1.15); }
        .hero-section .container .wrapper-left .box-left .blue, .hero-section .container .wrapper-left .box-left .green { 
            z-index: 1; clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); 
        }
        
        .hero-section .container .wrapper-right { display: flex; width: 178px; position: absolute; right: 0; bottom: 100px; cursor: pointer; }
        .hero-section .container .wrapper-right .box-right { 
            display: flex; position: relative; width: 178px; height: 241px; align-items: center; 
            justify-content: center; overflow: hidden; clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); 
        }
        .hero-section .container .wrapper-right .box-right img { width: 100%; height: 100%; object-fit: cover; position: absolute; transform: scale(1.15); }
        .hero-section .container .wrapper-right .box-right .green, 
        .hero-section .container .wrapper-right .box-right .orange { 
            clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%); 
        }
        
        /* Botones de flecha (ahora usando .btn) */
        .hero-section .container .buttons-arrow { 
            display: flex; position: absolute; bottom: 40px; right: 40px; gap: 15px; 
            overflow: hidden; z-index: 9999; 
        }
        .hero-section .container .buttons-arrow .btn--icon {
            transform: translateY(150%);
            transition: transform 0.6s cubic-bezier(0.3, 0, 0.1, 1);
        }
        .hero-section .container .buttons-arrow.active .btn--icon {
            transform: translateY(0);
        }

        /* =========================================
           SECCIÓN 2: DIRECTOR'S CUT + MANIFIESTO
           ========================================= */
        .new-manifesto-section { min-height: 120vh; display: flex; flex-direction: column; background: var(--rs-bg); }
        .dc-content { flex: 2; position: relative; width: 100%; min-height: 60vh; overflow: hidden; background: var(--rs-bg); }
        .dc-background { position: absolute; top:0; left:0; width:100%; height:100%; object-fit: cover; filter: brightness(0.5) contrast(1.3); z-index:1; }
        .dc-box { position: absolute; top:0; left:0; width:100%; height:100%; z-index:2; transform: matrix3d(0.614952,0.147049,0,0.000199706,-0.0178567,0.487847,0,-0.0000312429,0,0,1,0,137,29,0,1); pointer-events: none; }
        .dc-video { width:100%; height:100%; border:0; display:block; }
        .dc-box .dc-video { opacity:0.35; mix-blend-mode:screen; }
        .dc-word { 
            position: absolute; top:0; left:0; width:100%; height:100%; margin:0; 
            display:flex; justify-content:center; align-items:center; 
            font-size:clamp(2rem, 5vw, 3.5rem); font-weight:900; color:var(--rs-text); 
            text-align:center; line-height:1.2; text-transform:uppercase; font-family:var(--sub-font); 
            text-shadow:0 0 20px rgba(0,0,0,0.8),0 0 40px rgba(0,0,0,0.5); opacity:0; 
            padding:0 20px; word-break:break-word; z-index:5; pointer-events:none; 
        }
        .dc-blur { 
            position: absolute; top:0; left:0; width:100%; height:100%; 
            filter: blur(200px) brightness(2) opacity(0.2) contrast(1.5); 
            transform: matrix3d(0.614952,0.147049,0,0.000199706,-0.0178567,0.487847,0,-0.0000312429,0,0,1,0,137,29,0,1) scale(1.4); 
            margin-left:-90px; margin-top:-80px; z-index:3; pointer-events:none; 
        }
        .dc-blur .dc-video { opacity:0.5; }
        
        /* Máscara SVG para reflejos */
        .dc-reflects { 
            position: absolute; top:0; left:0; width:100%; height:100%; 
            filter: blur(30px) brightness(3) opacity(0.4); z-index:4; 
            -webkit-mask-image: url('data:image/svg+xml;charset=utf8,<svg width="100%" height="100%" viewBox="0 0 1280 720" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(0.542005,0,0,0.542005,-65.945,-46.4578)"><path d="M1863.46,688.175C1849.66,686.316 1835.77,691.716 1823.15,697.82C1809.91,704.219 1796.64,711.646 1782,712.874C1793.16,714.455 1804.77,712.768 1815.03,708.074C1807.57,712.883 1799.61,717.063 1791.03,719.329C1782.46,721.595 1773.2,721.859 1764.81,718.969C1751.97,714.546 1741.5,703.02 1726.62,703.321C1732.81,714.678 1742.89,723.869 1754.76,728.984C1766.64,734.099 1780.24,735.106 1792.74,731.796C1804.83,728.597 1816.72,721.454 1828.95,724.038C1810.58,732.106 1792.22,740.173 1773.85,748.241C1787.57,751.825 1802.01,738.439 1815.34,743.272C1800.27,750.138 1784.62,755.732 1768.62,759.976C1760.68,762.082 1752.71,762.263 1748.41,759.645C1739.43,754.185 1732.35,745.672 1728.61,735.851C1743.52,740.9 1760.05,741.001 1775.2,735.401C1759.62,736.568 1743.65,730.376 1732.92,719.014C1722.24,707.692 1716.98,691.463 1718.99,676.027C1718.44,680.653 1722.68,684.416 1726.66,686.915C1755.05,704.781 1792.79,706.72 1822.87,691.858C1812.41,695.823 1800.53,695.913 1790.01,692.106C1779.5,688.299 1770.43,680.627 1764.93,670.887C1778.43,677.053 1794.03,676.369 1808.7,674.177C1823.38,671.985 1838.03,668.399 1852.86,669.165C1867.68,669.931 1883.23,675.976 1890.9,688.684C1877.77,677.641 1859.33,673.232 1842.63,677.144C1829.09,680.313 1815.94,688.611 1802.33,685.776C1809.52,688.764 1817.38,690.136 1824.86,691.579C1837.22,687.438 1850.57,686.267 1863.46,688.175ZM1863.46,688.175C1864.13,688.265 1864.79,688.372 1865.46,688.496C1864.79,688.381 1864.13,688.274 1863.46,688.175ZM1655.76,918.762C1655.7,918.237 1655.66,917.7 1655.64,917.15C1682.93,906.309 1710.39,890.582 1734.47,870.748C1738.8,857.288 1740.98,844.32 1740.11,831.55C1748.85,806.452 1762.47,784.772 1779.95,766.935C1780.62,766.332 1781.29,735.736 1781.97,765.145C1782.54,765.471 1783.12,765.786 1783.7,766.09C1785.32,802.341 1759.02,810.062 1745.81,836.547C1739.56,849.073 1748.44,866.575 1739.4,877.263C1721.1,913.005 1704.71,914.767 1673.16,919.311C1669.55,919.832 1667.2,923.559 1668.48,926.981C1672.66,938.186 1688.02,940.453 1691.82,953.856C1692.88,960.619 1689.33,965.272 1684.16,968.254C1674.96,973.552 1674.96,986.681 1684.48,991.364C1686.22,992.217 1688.02,992.933 1689.86,993.504C1682.05,994.683 1671.7,997.766 1670.65,1006.82C1669.55,1016.3 1681.58,1022.22 1683.84,1031.49C1691.89,1064.58 1654.93,1050.47 1669.15,1094.82C1666.6,1093.43 1664.51,1091.93 1662.81,1090.34C1661.33,1088.45 1660.14,1086.33 1659.32,1083.96C1655.65,1073.38 1660.86,1061.94 1666.43,1052.23C1669.23,1045.46 1672.13,1038.31 1672.84,1030.76C1673.54,1023.2 1671.71,1015.05 1666.28,1009.75C1668.8,1002.22 1672.32,995.906 1676.57,990.13C1670.52,986.075 1667.48,979.548 1667.81,973.099C1671.37,969.831 1675.74,967.787 1679.14,964.517C1682.54,961.247 1684.86,956.468 1683.98,951.833C1683.13,947.367 1679.58,943.948 1676,941.154C1671.72,937.824 1667.1,934.903 1663.19,931.147C1659.67,927.759 1656.7,923.52 1655.76,918.762Z"/></g></svg>'); 
            mask-repeat: no-repeat; mix-blend-mode: hard-light; pointer-events: none; 
        }
        
        .dc-manifesto-wrapper { flex: 1; width: 100%; background: var(--rs-bg); border-top: 2px solid var(--rs-gold-soft); padding: var(--space-xl) 5%; display: flex; align-items: center; justify-content: center; }
        .dc-manifesto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: var(--space-lg); max-width: 1500px; margin: 0 auto; width: 100%; }
        
        /* Cards de manifiesto adaptadas al sistema .card */
        .manifesto-card {
            /* Hereda de .card, pero mantenemos la clase por especificidad */
            composes: card;
        }
        .manifesto-card h3 {
            font-family: var(--sub-font);
            font-size: var(--card-title-size);
            color: var(--rs-gold);
            margin-bottom: var(--space-sm);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .manifesto-card p {
            font-family: var(--main-font);
            font-size: var(--card-text-size);
            line-height: var(--card-line-height);
            color: var(--rs-muted);
            margin-bottom: 0;
        }
        .manifesto-card.climax {
            background: var(--rs-gold-light);
            border: 2px solid var(--rs-gold);
            text-align: center;
            box-shadow: 0 15px 35px rgba(212,175,55,0.15);
        }
        .manifesto-card.climax .climax-title {
            color: var(--rs-text);
            font-size: 2rem;
            line-height: 1.2;
            font-weight: 800;
            margin-bottom: var(--space-sm);
        }
        .manifesto-card.climax p {
            font-size: 1.2rem;
            margin-bottom: var(--space-sm);
        }
        .manifesto-card.climax .climax-cta {
            font-weight: 700;
            letter-spacing: 2px;
            color: var(--rs-gold);
            font-size: 1.4rem;
        }

        /* =========================================
           SECCIÓN 3: SECTORES (GALERÍA 3D INFINITA)
           ========================================= */
        .sectores-3d-section {
            height: 100vh; position: relative; background: var(--rs-bg); overflow: hidden;
        }
        #sectores-canvas-container {
            position: absolute; inset: 0; z-index: 1; width: 100%; height: 100%;
        }
        #sectores-ui-layer {
            position: absolute; inset: 0; z-index: 2; pointer-events: none; width: 100%; height: 100%;
        }
        .sectores-slide-content {
            position: absolute; bottom: 15%; left: 8%; width: 90%; max-width: 440px;
            pointer-events: none;
            background: transparent;
            padding: 0;
        }

        /* Coreografía SOTA en 2 Fases */
        .sectores-slide-content .phase-1,
        .sectores-slide-content .phase-2 {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.4s ease, transform 0.4s ease-out;
        }
        .sectores-slide-content.active .phase-1 {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.8s ease, transform 0.8s ease-out;
            transition-delay: 0.1s;
        }
        .sectores-slide-content.active .phase-2 {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.8s ease, transform 0.8s ease-out;
            transition-delay: 0.6s;
        }
        
        .sectores-catalogue-number {
            display: inline-block; font-family: var(--main-font); font-size: var(--card-meta-size); text-transform: uppercase;
            letter-spacing: 3px; color: var(--rs-muted); border-bottom: 1px solid var(--rs-gold);
            padding-bottom: 5px; margin-bottom: var(--space-xs);
            text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }
        .sectores-slide-content h2 {
            font-family: var(--sub-font); font-weight: 600; font-size: clamp(28px, 4.5vw, 48px); line-height: 1.1;
            margin: 0 0 0.25rem 0; color: var(--rs-text); text-transform: uppercase;
            text-shadow: 0 4px 20px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8);
        }
        .sectores-claim {
            font-family: var(--main-font); font-weight: 600; font-size: 18px; color: var(--rs-gold);
            margin-bottom: var(--space-xs); letter-spacing: 0.3px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.9);
        }
        .sectores-description {
            font-family: var(--main-font); font-size: var(--card-text-size); line-height: var(--card-line-height); color: var(--rs-muted);
            margin-bottom: var(--space-sm); max-width: 450px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.9);
        }
        .sectores-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 0.25rem; }
        .sectores-badge {
            composes: card__badge;
        }
        .sectores-scroll-hint {
            position: absolute; bottom: 40px; right: 40px; z-index: 10;
            display: flex; align-items: center; gap: 10px; color: var(--rs-gold);
            background: rgba(10, 10, 10, 0.5); backdrop-filter: blur(5px);
            padding: 10px 20px; border-radius: 40px; border: 1px solid var(--rs-gold-soft);
            font-size: 14px;
        }
        .sectores-scroll-hint span { animation: rs-bounce 2s infinite; font-size: 18px;}
        @keyframes rs-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }

        @media (max-width: 768px) {
            .sectores-slide-content { left: 5%; bottom: 10%; max-width: 90%; padding: 20px; }
            .sectores-slide-content h2 { font-size: 26px; }
            .sectores-claim { font-size: 16px; }
            .sectores-description { font-size: 14px; }
            .sectores-scroll-hint { display: none; }
        }

        /* =========================================
           SECCIÓN 4: PORTAFOLIO 3D
           ========================================= */
        #portafolio-3d { height: 100vh; background-color: #000; position: relative; overflow: hidden;}
        #portafolio-canvas-wrapper { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1; touch-action: pan-y; }
        #portafolio-3d .text-overlay { 
            position: absolute; top: 50%; left: 5%; transform: translateY(-50%);
            background: rgba(0,0,0,0.6); backdrop-filter: blur(8px);
            padding: var(--space-lg); border-radius: 10px; max-width: 300px; 
            border-left: 3px solid var(--rs-gold); z-index: 10; pointer-events: none;
        }
        #portafolio-3d .text-overlay .rs-title-sm { 
            font-family: var(--main-font); color: var(--rs-text); font-size: 0.85rem; 
            line-height: 1.4; margin-bottom: 5px; font-weight: 400;
        }
        #portafolio-3d .text-overlay .rs-subtitle { 
            font-family: var(--sub-font); font-size: 1rem; color: var(--rs-gold); 
            letter-spacing: 1px; margin-bottom: 0;
        }
        
        /* =========================================
           LIGHTBOX PROYECTO (PAQUETE 2B — redesign)
           ========================================= */
        #lightbox {
            display: none; position: fixed; z-index: 1000; inset: 0;
            background: radial-gradient(120% 90% at 50% 10%, rgba(212,175,55,0.06), transparent 60%),
                        rgba(0,0,0,0.85);
            backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
            justify-content: center; align-items: center;
            opacity: 0; transition: opacity 0.3s ease;
            padding: 32px 24px; box-sizing: border-box;
        }
        #lightbox.active { display: flex; opacity: 1; }
        #lightbox-content {
            position: relative;
            max-width: 1100px; width: 100%;
            background: linear-gradient(180deg, rgba(20,16,8,0.65), rgba(8,8,8,0.7));
            border: 1px solid var(--rs-gold-soft);
            border-radius: 18px;
            box-shadow: 0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04);
            overflow: hidden;
        }
        .lb-grid {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 0;
            align-items: stretch;
        }
        .lb-media {
            background: #050505;
            border-right: 1px solid var(--rs-gold-soft);
            padding: 28px;
            display: flex; align-items: center; justify-content: center;
        }
        #lightbox img {
            max-width: 100%; max-height: 60vh; height: auto;
            border-radius: 10px;
            box-shadow: 0 12px 40px rgba(0,0,0,0.6);
            object-fit: contain;
            margin: 0; border: 1px solid var(--rs-gold-soft);
        }
        .lb-info {
            padding: 36px 36px 32px;
            display: flex; flex-direction: column;
            text-align: left;
        }
        .lb-overline {
            font-family: var(--main-font);
            font-size: 11px; line-height: 1;
            color: var(--rs-gold);
            text-transform: uppercase; letter-spacing: 3px;
            margin-bottom: 14px;
        }
        .lb-overline::before {
            content: ""; display: inline-block; width: 24px; height: 1px;
            background: var(--rs-gold); vertical-align: middle; margin-right: 10px;
        }
        #lightbox-title.lb-title {
            font-family: var(--sub-font);
            font-size: clamp(24px, 2.6vw, 34px); line-height: 1.05;
            color: var(--rs-text);
            text-transform: uppercase; letter-spacing: 1px;
            margin: 0 0 10px;
            font-weight: 700;
        }
        #lightbox-tags.lb-tagline {
            font-family: var(--main-font);
            font-size: 13px; line-height: 1.4;
            color: var(--rs-muted);
            text-transform: none; letter-spacing: 0.4px;
            margin: 0 0 22px;
        }
        .lb-services-label {
            font-family: var(--main-font);
            font-size: 10px; color: rgba(255,255,255,0.45);
            text-transform: uppercase; letter-spacing: 2.5px;
            margin-bottom: 10px;
        }
        .lb-chips {
            list-style: none; padding: 0; margin: 0 0 28px;
            display: flex; flex-wrap: wrap; gap: 8px;
        }
        .lb-chip {
            display: inline-flex; align-items: center;
            padding: 7px 13px;
            border: 1px solid var(--rs-gold-soft);
            border-radius: 999px;
            background: rgba(212,175,55,0.06);
            color: var(--rs-text);
            font-family: var(--main-font);
            font-size: 12px; line-height: 1;
            letter-spacing: 0.4px;
            white-space: nowrap;
        }
        #lightbox-link.btn--cta {
            align-self: flex-start;
            display: inline-flex; align-items: center; gap: 8px;
            padding: 14px 28px;
            background: var(--rs-gold);
            color: var(--rs-bg);
            border: 1px solid var(--rs-gold);
            border-radius: 999px;
            font-family: var(--sub-font);
            font-size: 13px; letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
            margin-top: auto;
        }
        #lightbox-link.btn--cta:hover {
            background: transparent; color: var(--rs-gold);
            transform: translateY(-1px);
        }
        #lightbox-link.btn--cta.btn--disabled {
            background: transparent; color: rgba(255,255,255,0.5);
            border-color: rgba(255,255,255,0.15);
            pointer-events: none; cursor: default;
        }
        #close-btn {
            position: absolute; top: 14px; right: 18px;
            width: 38px; height: 38px;
            display: inline-flex; align-items: center; justify-content: center;
            font-size: 26px; line-height: 1;
            color: var(--rs-gold);
            background: rgba(0,0,0,0.55);
            border: 1px solid var(--rs-gold-soft);
            border-radius: 999px;
            cursor: pointer; z-index: 1002;
            transition: background 0.25s ease, color 0.25s ease;
        }
        #close-btn:hover { background: var(--rs-gold); color: var(--rs-bg); opacity: 1; }

        @media (max-width: 860px) {
            #lightbox { padding: 16px 14px; }
            .lb-grid { grid-template-columns: 1fr; }
            .lb-media { border-right: none; border-bottom: 1px solid var(--rs-gold-soft); padding: 18px; }
            #lightbox img { max-height: 38vh; }
            .lb-info { padding: 24px 22px 26px; }
            #lightbox-title.lb-title { font-size: 22px; }
            #lightbox-tags.lb-tagline { font-size: 12px; margin-bottom: 16px; }
            .lb-chips { margin-bottom: 22px; }
            .lb-chip { font-size: 11px; padding: 6px 11px; }
            #lightbox-link.btn--cta { width: 100%; justify-content: center; padding: 13px 22px; }
            #close-btn { top: 8px; right: 8px; width: 34px; height: 34px; font-size: 22px; }
        }

        /* Portfolio section microcopy hint (PAQUETE 2B) */
        #portafolio-3d .portfolio-hint {
            position: absolute;
            left: 50%; bottom: 24px; transform: translateX(-50%);
            z-index: 4;
            display: inline-flex; align-items: center; gap: 10px;
            padding: 8px 16px;
            background: rgba(0,0,0,0.55);
            border: 1px solid var(--rs-gold-soft);
            border-radius: 999px;
            font-family: var(--main-font);
            font-size: 11px; letter-spacing: 2px;
            text-transform: uppercase;
            color: var(--rs-muted);
            pointer-events: none;
            backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }
        #portafolio-3d .portfolio-hint .dot {
            width: 6px; height: 6px; border-radius: 50%;
            background: var(--rs-gold);
            box-shadow: 0 0 8px rgba(212,175,55,0.7);
            animation: rs-pulse 2s ease-in-out infinite;
        }
        @keyframes rs-pulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
        }
        #portafolio-3d .portfolio-hint__text-mobile { display: none; }
        @media (max-width: 768px) {
            #portafolio-3d .portfolio-hint { font-size: 10px; padding: 7px 13px; letter-spacing: 1.5px; bottom: 18px; }
            #portafolio-3d .portfolio-hint__text-desktop { display: none; }
            #portafolio-3d .portfolio-hint__text-mobile { display: inline; }
        }

        /* =========================================
           SECCIÓN 5: DIRECTOR'S CUT (CINEMA)
           ========================================= */
        #cinema-director {
            width: 100%; padding: 10vh 0; background-color: var(--rs-bg);
            display: flex; flex-direction: column; overflow: hidden; position: relative;
        }
        .cinema-header { display: flex; justify-content: space-between; align-items: flex-end; padding: 0 5%; margin-bottom: var(--space-lg); }
        .cinema-header-texts { display: flex; flex-direction: column; }
        .cinema-arrows { display: flex; gap: 15px; }
        .cinema-arrow {
            composes: btn btn--icon;
        }
        .cinema-arrow svg { width: 24px; height: 24px; }

        .cinema-carousel {
            display: flex; gap: 20px; padding: 0 5%; overflow-x: auto;
            scroll-snap-type: x mandatory; scrollbar-width: none;
        }
        .cinema-carousel::-webkit-scrollbar { display: none; }
        .cinema-item {
            flex: 0 0 75vw; max-width: 600px; aspect-ratio: 16/9;
            scroll-snap-align: center; border-radius: 8px; overflow: hidden;
            position: relative; cursor: pointer; border: 1px solid var(--rs-gold-soft);
            background-size: cover; background-position: center;
            transition: border-color 0.4s;
        }
        @media (min-width: 768px) { .cinema-item { flex: 0 0 40vw; max-width: 500px; } }
        
        .cinema-item::before {
            content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.4);
            transition: background 0.4s;
        }
        .cinema-item:hover { border-color: var(--rs-gold); }
        .cinema-item:hover::before { background: rgba(0,0,0,0.1); }
        
        .cinema-play-btn {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 60px; height: 60px; border-radius: 50%; background: var(--rs-gold);
            display: flex; align-items: center; justify-content: center;
            color: var(--rs-bg); opacity: 0.8; transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); pointer-events: none;
        }
        .cinema-item:hover .cinema-play-btn { 
            opacity: 1; transform: translate(-50%, -50%) scale(1.1); 
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.4); 
        }
        .cinema-play-btn svg { width: 24px; height: 24px; margin-left: 4px; }

        /* Cinema Modal */
        #cinema-modal {
            position: fixed; inset: 0; background: rgba(0,0,0,0.95); backdrop-filter: blur(10px);
            z-index: 10000; display: flex; align-items: center; justify-content: center;
            opacity: 0; pointer-events: none; transition: opacity 0.4s ease;
        }
        #cinema-modal.active { opacity: 1; pointer-events: auto; }
        .cinema-modal-close {
            position: absolute; top: 20px; right: 30px;
            font-size: 40px; cursor: pointer; z-index: 10001; line-height: 1;
            color: var(--rs-gold); background: transparent; border: none;
        }
        .cinema-modal-close:hover { opacity: 0.7; }
        #cinema-video-player {
            width: 90%; max-width: 1400px; aspect-ratio: 16/9;
            border-radius: 10px; border: 1px solid var(--rs-gold-soft); outline: none;
            background: #000; box-shadow: 0 20px 50px rgba(0,0,0,0.8);
        }

        /* =========================================
           SECCIÓN 5.5: WALL OF WORK (MARQUEE INFINITO)
           ========================================= */
        #wall-of-work { 
            height: 100vh; background-color: var(--rs-bg); 
            display: flex; flex-direction: column; justify-content: center; 
            position: relative; overflow: hidden; padding: 5vh 0; box-sizing: border-box; 
        }
        
        #wall-of-work .marquee-overlay { 
            position: absolute; inset: 0; z-index: 10; 
            display: flex; flex-direction: column; justify-content: center; align-items: center; 
            background: radial-gradient(circle at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 30%, transparent 60%); 
            pointer-events: none; 
        }
        #wall-of-work .marquee-overlay .rs-title { 
            font-size: clamp(1.5rem, 3vw, 2.5rem); margin-bottom: 5px; 
            letter-spacing: 2px;
            text-shadow: 0 4px 15px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.8); text-align: center;
        }

        .marquee-container { position: relative; z-index: 1; width: 100vw; }
        .marquee-row { 
            width: 100%; height: 21vh; margin-bottom: 1.5vh; 
            overflow: hidden; display: flex; position: relative; 
        }
        .marquee-row:last-child { margin-bottom: 0; }
        
        .marquee-track { 
            display: flex; gap: 1.5vh; height: 100%; width: max-content; 
            will-change: transform; 
        }
        
        .marquee-item { 
            height: 100%; aspect-ratio: 16/9; 
            border-radius: 8px; overflow: hidden; position: relative; cursor: pointer; 
        }
        
        .marquee-item img { 
            width: 100%; height: 100%; object-fit: cover; 
            filter: grayscale(100%); 
            transition: all 0.8s cubic-bezier(0.25, 1, 0.1, 1); 
        }
        .marquee-item:hover img { 
            filter: grayscale(0%); 
            transform: scale(1.40); 
        }
        
        @keyframes scrollLeft { 
            0% { transform: translate3d(0, 0, 0); } 
            100% { transform: translate3d(-50%, 0, 0); } 
        }
        @keyframes scrollRight { 
            0% { transform: translate3d(-50%, 0, 0); } 
            100% { transform: translate3d(0, 0, 0); } 
        }
        
        .row-1 .marquee-track { animation: scrollLeft 60s linear infinite; }
        .row-2 .marquee-track { animation: scrollRight 65s linear infinite; }
        .row-3 .marquee-track { animation: scrollLeft 55s linear infinite; }
        .row-4 .marquee-track { animation: scrollRight 70s linear infinite; }
        
        .marquee-row:hover .marquee-track { animation-play-state: paused; }

        /* =========================================
           SECCIÓN 6: CONTACTO (NUEVO MÓDULO)
           ========================================= */
        #contacto {
            position: relative; width: 100vw; height: 100vh; overflow: hidden; background: var(--rs-bg);
            touch-action: none; /* Crucial para evitar scroll nativo en móviles al arrastrar */
        }

        #contacto canvas {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            display: block; z-index: 1; pointer-events: none;
            opacity: 0.35;
            cursor: default;
        }
        #contacto canvas:active { cursor: default; }
        #contacto .rs-contact-form {
            box-shadow: 0 0 80px 30px rgba(0,0,0,0.55), 0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04);
        }

        #contacto .contact-subtle-title {
            position: absolute; top: 12vh; left: 50%; transform: translateX(-50%);
            z-index: 2; font-family: var(--sub-font); font-size: clamp(14px, 1.5vw, 18px); font-weight: 300;
            color: var(--rs-text); letter-spacing: 5px; text-transform: uppercase;
            text-align: center; width: 90%; pointer-events: none;
            text-shadow: 0 4px 20px rgba(0,0,0,1);
        }

        #contacto .cta-central-mini {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 8px;
            padding: 12px 24px; background: rgba(10, 10, 10, 0.6);
            backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 50px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px var(--rs-gold-soft);
            animation: float 4s ease-in-out infinite; pointer-events: none;
        }

        #contacto .cta-text-mini {
            font-family: var(--sub-font); font-size: 12px; font-weight: 600;
            color: var(--rs-gold); letter-spacing: 1.5px; text-transform: uppercase;
        }

        #contacto .cta-icons-mini { display: flex; gap: 15px; justify-content: center; }
        #contacto .cta-icons-mini i { width: 16px; height: 16px; color: var(--rs-text); }

        #contacto .contact-footer-strip {
            position: absolute; bottom: 5vh; left: 50%; transform: translateX(-50%);
            z-index: 2; display: flex; flex-wrap: wrap; align-items: center; justify-content: center;
            gap: 15px; padding: 12px 30px; width: max-content; max-width: 95%;
            background: rgba(10, 10, 10, 0.8); backdrop-filter: blur(12px); 
            border: 1px solid rgba(255,255,255,0.1); border-radius: 50px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
        }

        #contacto .contact-footer-strip a, #contacto .contact-footer-strip .info-text {
            font-family: var(--main-font); font-size: 12px; color: var(--rs-muted); text-decoration: none;
            display: flex; align-items: center; gap: 8px; transition: color 0.3s; font-weight: 500;
            letter-spacing: 1px;
        }
        #contacto .contact-footer-strip a:hover { color: var(--rs-text); }
        #contacto .contact-footer-strip i { width: 14px; height: 14px; color: var(--rs-gold); }
        #contacto .contact-footer-strip .separator { color: rgba(255,255,255,0.1); font-size: 12px; user-select: none;}
        #contacto .contact-footer-strip .separator-dots { color: var(--rs-gold); font-size: 14px; letter-spacing: 2px; margin: 0 5px; user-select: none;}

        #contacto .contact-footer-strip .phone-pill {
            background: rgba(212, 175, 55, 0.1); border: 1px solid var(--rs-gold);
            color: var(--rs-gold) !important; padding: 8px 18px; border-radius: 30px;
            font-weight: 600; letter-spacing: 1px; margin-left: 10px; transition: all 0.3s;
        }
        #contacto .contact-footer-strip .phone-pill i { color: var(--rs-gold); }
        #contacto .contact-footer-strip .phone-pill:hover {
            background: var(--rs-gold); color: var(--rs-bg) !important; box-shadow: 0 0 25px var(--rs-gold-soft);
        }
        #contacto .contact-footer-strip .phone-pill:hover i { color: var(--rs-bg); }

        @keyframes float { 0%, 100% { transform: translate(-50%, -50%); } 50% { transform: translate(-50%, -55%); } }
        
        @media (max-width: 768px) {
            #contacto .contact-subtle-title { font-size: 12px; letter-spacing: 2px; top: 12vh; line-height: 1.6;}
            #contacto .contact-footer-strip { padding: 15px 20px; border-radius: 20px; gap: 10px; flex-direction: column; text-align: center;}
            #contacto .contact-footer-strip .separator { display: none; }
            #contacto .contact-footer-strip .separator-dots { display: block; margin: 5px 0;}
            #contacto .contact-footer-strip .phone-pill { margin-left: 0; margin-top: 10px; width: 100%; justify-content: center;}
        }
        
        /* ==========================================
           SECCIÓN 7: EQUIPO (COMPLETAMENTE AISLADA)
           ========================================== */
        #equipo {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            width: 100%;
            margin: 0;
            padding: 0;
            background: #000;
            overflow: hidden;

            --rs-bg: #000;
            --rs-ink: rgba(255,255,255,.92);
            --rs-muted: rgba(255,255,255,.65);
            --rs-red: #ff2b2b;
            --rs-redGlow: rgba(255,43,43,.22);
        }

        #equipo .wrap {
            position: relative;
            width: 800px; height: 600px;
            overflow: hidden;
            transform-origin: center center;
            max-width: min(800px, 92vw);
            max-height: min(600px, 70vh);
            filter: contrast(1.02) saturate(1.04);
        }
        #equipo .wrap *,
        #equipo .wrap *::before,
        #equipo .wrap *::after {
            position: absolute;
            content: '';
        }

        #equipo .wrap::after {
            content: "EQUIPO  RUBIK SOTA";
            position: absolute;
            left: 18px;
            bottom: 16px;
            z-index: 9999;
            padding: 10px 12px;
            border-radius: 12px;
            color: var(--rs-ink);
            font: 700 14px/1.1 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
            letter-spacing: .22em;
            text-transform: uppercase;
            background: rgba(0,0,0,.35);
            backdrop-filter: blur(6px);
            border: 1px solid rgba(255,255,255,.08);
            box-shadow: 0 12px 30px rgba(0,0,0,.35);
        }
        #equipo .wrap::before {
            content: "";
            position: absolute;
            left: 18px;
            bottom: 56px;
            width: 54px;
            height: 3px;
            border-radius: 999px;
            background: var(--rs-red);
            z-index: 9999;
            box-shadow: 0 0 18px var(--rs-redGlow);
        }
        #equipo .scene-1 .lamp > div:nth-child(2):after {
            opacity: .18;
            filter: hue-rotate(-10deg) saturate(1.05);
            animation: rsPulseGlow 3.6s ease-in-out infinite;
        }
        @keyframes rsPulseGlow {
            0%,100% { opacity: .14; }
            50%     { opacity: .22; }
        }
        #equipo [class*="red"],
        #equipo [class*="Red"],
        #equipo [class*="rock"] {
            filter: saturate(1.05);
        }
        #equipo .wrap, #equipo .wrap * {
            will-change: transform, opacity;
        }

        /* ===== Escena 1 ===== */
        #equipo .scene-1 {
            top: 0px; left: 0px;
            width: 800px; height: 600px;
            animation: sceneOne 10s linear infinite;
        }
        #equipo .scene-1 .bg-1 {
            width: 900px; height: 122px;
            background: #654143;
            border-radius: 0 61px 61px 0;
        }
        #equipo .scene-1 .bg-1:before {
            top: 122px; left: 0px;
            width: 822px; height: 250px;
            background: #704744;
        }
        #equipo .scene-1 .bg-1:after {
            top: 340px; left: 0px;
            width: 543px; height: 228px;
            background: #654143;
            border-radius: 0 56px 35px 0;
        }
        #equipo .scene-1 .bg-2 {
            width: 900px; height: 77px;
            background: #593640;
            border-radius: 30px 0 0 30px;
        }
        #equipo .scene-1 .bg-2:before {
            top: 360px; right: 0px;
            width: 870px; height: 222px;
            background: #654143;
            border-radius: 68px 0 0 0;
        }
        #equipo .scene-1 .bg-2:after {
            top: 582px; right: 0px;
            width: 1244px; height: 20px;
            background: #3F252E;
        }
        #equipo .scene-1 .table {
            top: 326px; left: 397px;
            width: 208px; height: 14px;
            background: #377CA6;
        }
        #equipo .scene-1 .table:before {
            top: 14px; left: 49px;
            width: 133px; height: 24px;
            box-sizing: border-box;
            border-top: 13px solid #1C101C;
            border-right: 13px solid #1C101C;
            border-left: 13px solid #1C101C;
        }
        #equipo .scene-1 .table:after {
            top: 38px; left: 49px;
            width: 133px; height: 186px;
            box-sizing: border-box;
            border-left: 13px solid #271F28;
            border-bottom: 13px solid #271F28;
            border-right: 13px solid #271F28;
            border-radius: 0 0 53px 0;
        }
        #equipo .scene-1 .table > div:nth-child(1) {
            top: 14px; left: 21px;
            width: 28px; height: 13px;
            background: #1C101C;
        }
        #equipo .scene-1 .table > div:nth-child(1):before {
            top: 196px; left: 17px;
            width: 13px; height: 14px;
            background: #271F28;
            box-shadow: 0 14px 0 #1C101C, 0 27px 0 #271F28, 0 31px 0 #271F28;
        }
        #equipo .scene-1 .table > div:nth-child(1):after {
            top: 204px; left: 99px;
            width: 13px; height: 18px;
            background: #1C101C;
            box-shadow: 0 18px 0 #271F28;
        }
        #equipo .scene-1 .table > div:nth-child(2) {
            top: -96px; left: 89px;
            width: 86px; height: 96px;
            background: #271F28;
            border-radius: 27px 27px 40px 0;
            box-shadow: inset -8px -59px 0 9px #1C101C;
        }
        #equipo .scene-1 .table > div:nth-child(2):before {
            top: 28px; left: -50px;
            width: 67px; height: 10px;
            background: #D37241;
            box-shadow: 28px 0 0 0 #AA375F, 
                        27px 0 0 0 #740748, 
                        -9px 10px 0 0 #1C101C, 
                        28px 10px 0 0 white, 
                        -23px 28px 0 0 #377CA6, 
                        28px 28px 0 0 #D37241, 
                        -28px 38px 0 0 white, 
                        27px 38px 0 0 white;
        }
        #equipo .scene-1 .table > div:nth-child(2):after {
            top: 62px; left: 67px;
            width: 27px; height: 27px;
            background-image: linear-gradient(to right, #377CA6 36%, #1C101C 37%, #1C101C 63%, #377CA6 64%);
            box-shadow: 0 0 0 6px #1C101C, 
                        0 -5px 0 12px #234259;
        }
        #equipo .scene-1 .table > div:nth-child(3) {
            top: -71px; left: 40px;
            width: 97px; height: 5px;
            background: #404040;
            box-shadow: -3px 25px 0px 3px #404040, 
                        -14px 25px 0px 3px #404040, 
                        -8px 58px 0px 8px #404040, 
                        -32px 58px 0px 8px #404040;
        }
        #equipo .scene-1 .table > div:nth-child(3):before {
            top: 0px; left: -8px;
            width: 5px; height: 50px;
            background: #404040;
            box-shadow: 14px 0 0 0 #404040, 
                        28px 0 0 0 #404040, 
                        42px 0 0 0 #404040, 
                        56px 0 0 0 #404040, 
                        71px 0 0 0 #404040, 
                        85px 0 0 0 #404040, 
                        100px 0 0 0 #404040;
        }
        #equipo .scene-1 .table > div:nth-child(3):after {
            top: 47px; left: 92px;
            width: 76px; height: 6px;
            background: white;
            box-shadow: 0 6px 0 0 #A7AEAF, 
                        -7px 12px 0 0 white, 
                        0 18px 0 0 #A7AEAF, 
                        -76px 18px 0 0 #1C101C;
        }
        #equipo .scene-1 .tablet {
            width: 17px; height: 185px;
            background: #BEAE9D;
            transform-origin: top left;
            transform: rotate(-143deg);
            box-shadow: inset 0 -13px 0 0 #9C857C, inset 0 45px 0 0 #9C857C;
        }
        #equipo .scene-1 .tablet:after {
            top: 79px; left: -14px;
            width: 14px; height: 38px;
            background: #234259;
        }
        #equipo .scene-1 .tablet:before {
            top: 62px; left: -83px;
            width: 80px; height: 10px;
            background: #1C101C;
            transform: rotate(23deg);
            transform-origin: 0 0;
        }
        #equipo .scene-1 .lamp {
            top: -304px; left: 46px;
            width: 21px; height: 21px;
            border-radius: 20px 20px 0 0;
            background: #1C101C;
        }
        #equipo .scene-1 .lamp:before {
            top: 13px; left: -9px;
            width: 43px; height: 10px;
            background: #271F28;
        }
        #equipo .scene-1 .lamp:after {
            top: 10px; left: 52px;
            width: 80px; height: 5px;
            background: #271F28;
            box-shadow: 0 10px 0 0 #271F28;
        }
        #equipo .scene-1 .lamp > div:nth-child(1) {
            top: 8px; left: 33px;
            width: 19px; height: 20px;
            background: #1C101C;
            border-radius: 20px 0 0 20px;
        }
        #equipo .scene-1 .lamp > div:nth-child(1):after {
            top: -2px; left: 99px;
            width: 22px; height: 32px;
            background: #1C101C;
            border-radius: 2px 100% 14px 14px;
        }
        #equipo .scene-1 .lamp > div:nth-child(1):before {
            top: 16px; left: 103px;
            width: 6px; height: 102px;
            background: #271F28;
            transform: rotate(35deg);
            transform-origin: 0 0;
            box-shadow: 10px 0 0 0 #271F28;
        }
        #equipo .scene-1 .lamp > div:nth-child(2) {
            top: 19px; left: -25px;
            width: 70px; height: 33px;
            background: #1C101C;
            border-radius: 100px 100px 0 0;
        }
        #equipo .scene-1 .lamp > div:nth-child(2):before {
            top: 33px; left: 0px;
            width: 70px; height: 4px;
            background: #D37241;
        }
        #equipo .scene-1 .lamp > div:nth-child(2):after {
            top: 37px; left: -133px;
            width: 330px; height: 0px;
            border-left: 132px solid transparent;
            border-right: 127px solid transparent;
            border-bottom: 194px solid #D37241;
            box-sizing: border-box;
            opacity: .2;
        }
        #equipo .scene-1 .chair {
            top: 433px; left: 214px;
            height: 39px; width: 109px;
            background: #1C101C;
            border-radius: 28px 28px 2px 2px;
            box-shadow: 0 123px 0 -15px #271F28;
        }
        #equipo .scene-1 .chair:before {
            top: 39px; left: 36px;
            width: 13px; height: 99px;
            background: #271F28;
            box-shadow: 12px 0 0 0 #404040;
        }
        #equipo .scene-1 .chair:after {
            top: 71px; left: 56px;
            width: 32px; height: 12px;
            border-radius: 6px;
            box-shadow: -21px -48px 0 13px #1C101C;
            background: #1C101C;
        }
        #equipo .scene-1 .armchair {
            top: 244px; left: 604px;
            width: 114px; height: 165px;
            background: #1C101C;
            border-radius: 20px 62px 0 0;
        }
        #equipo .scene-1 .armchair:before {
            top: 167px; left: 0px;
            width: 210px; height: 171px;
            background: #3F252E;
        }
        #equipo .scene-1 .armchair:after {
            top: 128px; left: 114px;
            width: 100px; height: 34px;
            background: #1C101C;
            box-shadow: inset 0 12px 0 0 #3F252E;
        }
        #equipo .scene-1 .armchair > div:nth-child(1) {
            top: 162px; left: 0px;
            width: 200px; height: 66px;
            background: #593640;
            border-radius: 0 0 0 66px;
            box-shadow: 0 21px 0 0 #1C101C;
        }
        #equipo .scene-1 .armchair > div:nth-child(1):before {
            top: 0px; left: 72px;
            width: 140px; height: 20px;
            background: #654036;
            border-radius: 0 0 0 20px;
        }
        #equipo .scene-1 .armchair > div:nth-child(1):after {
            top: -80px; left: 0px;
            width: 71px; height: 80px;
            background: #593640;
            border-radius: 0 100px 0 0;
        }
        #equipo .scene-1 .armchair .plaid {
            top: 152px; left: 114px;
            width: 90px; height: 10px;
            background: #AF7C50;
            box-shadow: 0 10px 0 0 #956B48, 
                        0 20px 0 0 #AF7C50, 
                        0 30px 0 0 #956B48, 
                        0 40px 0 0 #AF7C50;
            z-index: 1;
        }
        #equipo .scene-1 .armchair .plaid:before {
            top: 50px; left: 0px;
            width: 10px; height: 14px;
            background: #956B48;
            box-shadow: 18px 0 0 0 #956B48, 
                        36px 0 0 0 #956B48, 
                        54px 0 0 0 #956B48, 
                        72px 0 0 0 #956B48;
        }
        #equipo .scene-1 .armchair .plaid:after {
            top: -44px; left: 0px;
            width: 41px; height: 44px;
            background: linear-gradient(to right, #AF7C50 50%, #D69C51 51%);
            border-radius: 24px 24px 0 0;
        }
        #equipo .scene-1 .picture {
            top: -34px; right: -22px;
            height: 150px; width: 120px;
            background: #9C857C;
            overflow: hidden;
            box-shadow: 0 0 0 22px #956B48, 
                        0 0 0 43px #3F252E;
        }
        #equipo .scene-1 .picture:before {
            top: 47px; left: 27px;
            width: 50px; height: 50px;
            border-radius: 100%;
            background: #BEAE9D;
        }
        #equipo .scene-1 .picture:after {
            top: 109px; left: 56px;
            width: 14px;
            border-left: 29px solid transparent;
            border-bottom: 35px solid #3F252E;
        }
        #equipo .scene-1 .picture > div:nth-child(1) {
            top: 75px; left: 9px;
            width: 15px;
            border-right: 50px solid transparent;
            border-left: 39px solid transparent;
            border-bottom: 40px solid #88594E;
        }
        #equipo .scene-1 .picture > div:nth-child(1):before {
            top: -46px; left: -23px;
            height: 10px;
            border-left: 74px solid transparent;
            border-bottom: 76px solid #88594E;
        }
        #equipo .scene-1 .picture > div:nth-child(1):after {
            top: 17px; left: -48px;
            width: 14px;
            border-right: 78px solid transparent;
            border-bottom: 100px solid #654036;
        }
        #equipo .scene-1 .picture > div:nth-child(2) {
            top: 100px; left: 19px;
            width: 24px;
            border-right: 35px solid transparent;
            border-bottom: 40px solid #654036;
        }
        #equipo .scene-1 .picture > div:nth-child(2):before {
            top: 9px; left: 32px;
            width: 50px; height: 40px;
            background: #654036;
        }
        #equipo .scene-1 .picture > div:nth-child(2):after {
            top: 24px; left: -4px;
            width: 13px;
            border-right: 20px solid transparent;
            border-left: 20px solid transparent;
            border-bottom: 20px solid #3F252E;
            box-shadow: 8px 44px 0 24px #3F252E;
        }
        #equipo .scene-1 .red-dog {
            top: 152px; left: 568px;
            width: 70px; height: 43px;
            background: #D37241;
            border-radius: 0 34px 0 0;
        }
        #equipo .scene-1 .red-dog:before {
            top: -20px; left: -78px;
            width: 104px; height: 68px;
            background: white;
            border-radius: 0 100px 0 100px;
        }
        #equipo .scene-1 .red-dog__body {
            top: -44px; left: -65px;
            width: 81px; height: 74px;
            background: #D37241;
            border-radius: 0 100px 0 100px;
            box-shadow: 35px 24px 0 -24px #D37241, -7px -15px 0 -5px #D37241;
        }
        #equipo .scene-1 .red-dog__body:before {
            top: 30px; left: 15px;
            width: 35px; height: 40px;
            background: #D37241;
            border-radius: 0 0 20px 20px;
            transform-origin: 0 0;
            transform: rotate(40deg);
        }
        #equipo .scene-1 .red-dog__body:after {
            top: 50px; left: 111px;
            width: 16px; height: 16px;
            background: #D37241;
            transform: skewX(-22deg) rotate(-34deg);
            animation: sceneOneDogTail .8s ease infinite;
            transform-origin: bottom left;
        }
        #equipo .scene-1 .red-dog__leg {
            top: 28px; left: 21px;
            width: 49px; height: 43px;
            background: #D37241;
            border-radius: 0 9px 0 35px;
        }
        #equipo .scene-1 .red-dog__leg:before {
            top: 30px; left: 49px;
            width: 12px; height: 34px;
            background: linear-gradient(#D37241 38%, white 39%);
            border-radius: 0 5px 2px 0 / 0 15px 2px 0;
        }
        #equipo .scene-1 .red-dog__leg:after {
            top: 52px; left: 34px;
            width: 16px; height: 12px;
            background: white;
            border-radius: 14px 0 0 0;
        }
        #equipo .scene-1 .red-dog__hand {
            top: 15px; left: -96px;
            width: 43px; height: 22px;
            background: white;
            transform-origin: bottom right;
            transform: rotate(40deg);
            border-radius: 21px 10px 10px 0;
        }
        #equipo .scene-1 .red-dog__hand:before {
            top: 21px; left: 0px;
            width: 15px; height: 20px;
            background: white;
            border-radius: 0 0 0 17px;
        }
        #equipo .scene-1 .red-dog__head {
            top: -68px; left: -99px;
            width: 42px; height: 56px;
            background: #D37241;
            border-radius: 36% 0 90% 4px / 70% 0 46% 4px;
            border-right: 8px solid white;
            transform-origin: bottom right;
            animation: sceneOneDogHead 10s ease infinite;
            transform: rotate(0deg);
        }
        #equipo .scene-1 .red-dog__head:before {
            top: 25px; left: -20px;
            width: 22px; height: 21px;
            background: #D37241;
            border-radius: 27% 0 0 100%;
            box-shadow: inset 21px 2px 0 -6px white;
        }
        #equipo .scene-1 .red-dog__head:after {
            top: 20px; left: 9px;
            width: 6px; height: 6px;
            background: black;
            border-radius: 100%;
            animation: sceneOneDogEye 2s ease infinite;
        }
        #equipo .scene-1 .red-dog__head > div:nth-child(1) {
            top: -22px; left: 18px;
            width: 11px;
            border-left: 23px solid transparent;
            border-bottom: 39px solid #D37241;
            transform-origin: right bottom;
            transform: rotate(10deg);
        }
        #equipo .scene-1 .red-dog__head > div:nth-child(1):before {
            top: 0px; left: -18px;
            width: 6px;
            border-left: 23px solid transparent;
            border-bottom: 39px solid white;
        }
        #equipo .scene-1 .red-dog__head > div:nth-child(1):after {
            top: 37px; left: -18px;
            width: 30px; height: 9px;
            background: white;
            transform: rotate(-9deg);
            border-radius: 0 0 10px 6px;
        }
        #equipo .scene-1 .red-dog__head > div:nth-child(2) {
            top: 25px; left: -20px;
            width: 10px; height: 9px;
            background: black;
            border-radius: 6px 0 15px 3px;
        }
        #equipo .scene-1 .back-table {
            top: 350px; left: 0px;
            width: 277px; height: 30px;
            background: linear-gradient(to right, #956B48 20%, #7A5548 21%, #7A5548 79%, #956B48 80%);
            box-shadow: 0 25px 0 0 #1C101C, 0 -10px 0 0 #AF7C50;
        }
        #equipo .scene-1 .back-table:before {
            top: 55px; left: 0px;
            width: 26px; height: 175px;
            background: #1C101C;
            box-shadow: 251px 0 0 0 #1C101C;
        }
        #equipo .scene-1 .back-table:after {
            top: 10px; left: 124px;
            width: 30px; height: 10px;
            background: #1C101C;
        }
        #equipo .scene-1 .back-table .books {
            top: -26px; left: 46px;
            width: 102px; height: 16px;
            box-sizing: border-box;
            background: white;
            box-shadow: inset -8px 0 0 0 #716C6B;
            border-radius: 8px 0 0 8px;
            border: 4px solid #271F28;
            border-right: 0;
        }
        #equipo .scene-1 .back-table .books:before {
            top: -28px; left: 10px;
            width: 88px; height: 24px;
            box-sizing: border-box;
            background: white;
            border-radius: 0 12px 12px 0;
            border: 6px solid #593640;
            border-left: 0;
            box-shadow: inset 6px 0 0 0 #716C6B, 
                        inset -23px 0 0 -13px #271F28, 
                        inset 0 6px 0 0 rgba(0, 0, 0, .1);
        }
        #equipo .scene-1 .back-table .frame {
            top: -92px; left: 148px;
            width: 46px; height: 62px;
            background: #D69C51;
            border: 10px solid #485973;
        }
        #equipo .scene-1 .back-table .frame:before {
            top: 10px; left: 10px;
            width: 20px; height: 20px;
            border: 3px solid #553333;
            transform: rotate(45deg);
            z-index: 1;
        }
        #equipo .scene-1 .back-table .frame:after {
            top: 26px; left: 10px;
            width: 20px; height: 20px;
            border: 3px solid #553333;
            transform: rotate(45deg);
            z-index: 1;
        }
        #equipo .scene-1 .photos {
            top: 252px; left: 66px;
            width: 21px; height: 22px;
            background: #3F252E;
            border: 4px solid white;
            border-bottom-width: 10px;
            transform: rotate(22deg);
        }
        #equipo .scene-1 .photos:before {
            top: -10px; left: 13px;
            width: 21px; height: 22px;
            background: #234259;
            border: 4px solid white;
            border-bottom-width: 10px;
            transform: rotate(-44deg);
        }
        #equipo .scene-1 .photos:after {
            top: -5px; left: 8px;
            width: 8px; height: 8px;
            background: black;
            border-radius: 50%;
        }
        #equipo .scene-1 .shelf-1 {
            top: 224px; left: 0px;
            width: 210px; height: 8px;
            background: #AF7C50;
        }
        #equipo .scene-1 .shelf-1:before {
            top: 8px; left: 40px;
            width: 111px; height: 6px;
            background: #1C101C;
        }
        #equipo .scene-1 .shelf-1:after {
            top: 14px; left: 40px;
            width: 8px; height: 6px;
            background: #1C101C;
            border-radius: 0 0 5px 5px;
            box-shadow: 103px 0 0 0 #1C101C;
        }
        #equipo .scene-1 .shelf-1 .book {
            top: -28px; left: 77px;
            width: 71px; height: 16px;
            background: white;
            border: 6px solid #234259;
            border-right: 0;
            border-radius: 15px 0 0 15px;
            box-shadow: inset 24px 0 0 -15px #1C101C, 
                        inset 0 6px 0 0 rgba(0, 0, 0, .1);
        }
        #equipo .scene-1 .shelf-1 .book:before {
            top: -43px; left: 35px;
            width: 36px; height: 37px;
            background: linear-gradient(#D5C8B8 12%, #BEAE9D 13%, #BEAE9D 90%, #3F252E 91%);
            border-radius: 0 0 12px 12px;
        }
        #equipo .scene-1 .shelf-1 .book:after {
            top: -38px; left: 71px;
            width: 14px; height: 22px;
            box-sizing: border-box;
            border-radius: 0 12px 12px 0;
            border: 7px solid #3F252E;
            border-left: 0;
        }
        #equipo .scene-1 .shelf-1 .camera {
            top: -38px; left: 0px;
            width: 60px; height: 38px;
            background: linear-gradient(#404040 68%, #271F28 69%);
            border-radius: 0 8px 0 8px;
        }
        #equipo .scene-1 .shelf-1 .camera:before {
            top: -4px; left: 0px;
            width: 16px; height: 4px;
            background: #1C101C;
            box-shadow: 5px 26px 0 0 #716C6B;
        }
        #equipo .scene-1 .shelf-1 .camera:after {
            top: 3px; left: 24px;
            width: 30px; height: 30px;
            box-sizing: border-box;
            background: linear-gradient(#716C6B 45%, #94959B 46%);
            border-radius: 50%;
            border: 7px solid #1C101C;
            transform: rotate(-45deg);
        }
        #equipo .scene-1 .shelf-1 .camera__flash {
            top: -34px; left: 22px;
            width: 34px; height: 24px;
            box-sizing: border-box;
            background: white;
            border: 4px solid #271F28;
            border-top-width: 7px;
            box-shadow: inset 0 6px 0 0 rgba(0, 0, 0, .1);
        }
        #equipo .scene-1 .shelf-1 .camera__flash:before {
            top: 17px; left: 1px;
            width: 22px; height: 10px;
            background: #1C101C;
        }
        #equipo .scene-1 .shelf-2 {
            top: 118px; left: 0px;
            width: 198px; height: 18px;
            background: #3F252E;
            box-shadow: -18px 16px 0 0 #593640;
        }
        #equipo .scene-1 .shelf-2:before {
            top: 18px; left: 180px;
            border-right: 17px solid transparent;
            border-top: 16px solid #271F28;
        }
        #equipo .scene-1 .shelf-2 .books {
            top: -18px; left: 18px;
            width: 54px; height: 18px;
            box-sizing: border-box;
            border-top: 6px solid #956B48;
            border-bottom: 6px solid #956B48;
            border-left: 11px solid #956B48;
            border-right: 11px solid #956B48;
            background: #AF7C50;
            box-shadow: -6px 0 0 0 #AF7C50, 6px 0 0 0 #AF7C50;
        }
        #equipo .scene-1 .shelf-2 .books:before {
            top: -62px; left: -15px;
            width: 26px; height: 56px;
            background: #756356;
            box-shadow: inset 5px 0 0 0 #58433F, 
                        inset 0 4px 0 0 #58433F, 
                        inset 0 10px 0 0 #756356, 
                        inset 0 16px 0 0 #58433F;
        }
        #equipo .scene-1 .shelf-2 .books:after {
            top: -47px; left: 11px;
            width: 26px; height: 41px;
            background: #58433F;
            box-shadow: inset 8px 0 0 0 #9C857C, 
                        inset 0 -24px 0 0 #BEAE9D, 
                        inset 0 7px 0 0 #BEAE9D, 
                        inset -8px 0 0 0 #BEAE9D, 
                            -6px 0 0 0 #58433F;
        }
        #equipo .scene-1 .shelf-2 .ship {
            top: -40px; left: 105px;
            width: 127px; height: 26px;
            background: #7A5548;
            border-radius: 0 0 26% 0 / 0 0 100% 0;
        }
        #equipo .scene-1 .shelf-2 .ship:before {
            top: 0px; left: -25px;
            width: 25px; height: 6px;
            background: #7A5548;
        }
        #equipo .scene-1 .shelf-2 .ship:after {
            top: 12px; left: 3px;
            width: 8px; height: 8px;
            background: #7A5548;
            transform: rotate(45deg);
            box-shadow: 15px -15px 0 0 #7A5548, 
                        30px -30px 0 0 #7A5548, 
                        45px -45px 0 0 #7A5548, 
                        60px -60px 0 0 #7A5548;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(1) {
            top: -4px; left: -13px;
            width: 122px; height: 4px;
            background: #3F252E;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(1):before {
            top: -22px; left: 122px;
            width: 10px; height: 20px;
            border-radius: 17px 0 0 0;
            border-top: 6px solid #3F252E;
            border-left: 8px solid #3F252E;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(1):after {
            top: -16px; left: 130px;
            width: 10px; height: 10px;
            border-radius: 10px 8px 0 0;
            border-left: 10px solid #7A5548;
            border-top: 10px solid #7A5548;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(2) {
            top: -14px; left: 0px;
            width: 47px; height: 6px;
            background: linear-gradient(to right, #271F28 14%, 
                                                #7A5548 15%, #7A5548 27%, 
                                                #271F28 28%, #271F28 44%, 
                                                #7A5548 45%, #7A5548 57%, 
                                                #271F28 58%, #271F28 74%, 
                                                #7A5548 75%, #7A5548 87%, 
                                                #271F28 88%);
            border-top: 4px solid #3F252E;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(2):before {
            top: -68px; left: 15px;
            width: 4px; height: 64px;
            background: #3F252E;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(2):after {
            top: -68px; left: 65px;
            width: 6px; height: 74px;
            background: #3F252E;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(3) {
            top: -74px; left: 11px;
            width: 21px; height: 26px;
            box-sizing: border-box;
            background: #716C6B;
            border: 4px solid #9C857C;
            border-left: 4px solid #593640;
            border-radius: 0 13px 13px 0;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(3):before {
            top: 18px; left: -4px;
            width: 24px; height: 31px;
            box-sizing: border-box;
            border: 4px solid #9C857C;
            border-left: 4px solid #593640;
            background: #716C6B;
            border-radius: 0 16px 16px 0;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(3):after {
            top: 12px; left: 43px;
            width: 38px; height: 48px;
            box-sizing: border-box;
            border: 9px solid #9C857C;
            border-left: 7px solid #593640;
            background: #716C6B;
            border-radius: 0 26px 26px 0;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(4) {
            top: 6px; left: -19px;
            width: 136px; height: 24px;
            background: #3F252E;
            border-radius: 0 0 30px 30px;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(4):before {
            top: 24px; left: 28px;
            width: 80px; height: 4px;
            background: #271F28;
        }
        #equipo .scene-1 .shelf-2 .ship div:nth-child(4):after {
            top: 28px; left: 28px;
            width: 5px; height: 6px;
            background: #271F28;
            box-shadow: 37px 0 0 0 #271F28, 
                        75px 0 0 0 #271F28;
        }
        #equipo .scene-1 .man {
            top: 54px; left: 189px;
            width: 262px; height: 528px;
            z-index: 1;
        }
        #equipo .scene-1 .man__body {
            top: 241px; left: 0px;
            width: 118px; height: 61px;
            background: linear-gradient(to right, #271F28 46%, #1C101C 47%);
            border-radius: 0 0 100% 5% / 0 0 10% 100%;
        }
        #equipo .scene-1 .man__chest {
            bottom: 59px; left: 0px;
            width: 116px; height: 157px;
            transform-origin: bottom left;
            animation: sceneOneManBody 10s ease infinite;
            transform: rotate(10deg) translateY(0px);
        }
        #equipo .scene-1 .man__chest:before {
            bottom: 0px; left: 0px;
            width: 116px; height: 157px;
            background: linear-gradient(to right, #271F28 46%, #1C101C 47%);
            transform-origin: bottom left;
            animation: sceneOneManChest 10s ease infinite;
            border-radius: 100% 44% 0 0 / 100% 70% 0 0;
            transform: scaleX(1);
        }
        #equipo .scene-1 .man__head {
            top: -98px; left: 44px;
            width: 87px; height: 74px;
            background: #271F28;
            border-radius: 46px 13px 0 0;
            transform-origin: 0 0;
            animation: sceneOneManHead 10s ease infinite;
            transform: rotate(-10deg) translateY(0px) translateX(0px);
        }
        #equipo .scene-1 .man__head:before {
            top: 74px; left: 0px;
            width: 68px; height: 42px;
            background: linear-gradient(to right, #F6BE9C 30%, #D7957C 31%);
            transform-origin: 0 0;
            animation: sceneOneManNeck 10s ease infinite;
            transform: rotate(34deg);
        }
        #equipo .scene-1 .man__head div:nth-child(1) {
            top: 6px; left: 52px;
            width: 47px; height: 27px;
            background: #F6BE9C;
            border-radius: 14px 54% 0 13px / 14px 100% 0 13px;
        }
        #equipo .scene-1 .man__head div:nth-child(1):before {
            top: 26px; left: -11px;
            width: 39px;
            border-left: 19px solid transparent;
            border-bottom: 23px solid #F6BE9C;
        }
        #equipo .scene-1 .man__head div:nth-child(1):after {
            top: 56px; left: 47px;
            width: 10px; height: 12px;
            background: #F6BE9C;
            border-radius: 0 3px 10px 0;
        }
        #equipo .scene-1 .man__head div:nth-child(2) {
            top: 46px; left: 8px;
            width: 24px; height: 24px;
            border-radius: 50%;
            background: #D7957C;
            box-shadow: inset 1px 1px 0 4px #F6BE9C;
        }
        #equipo .scene-1 .man__head div:nth-child(2):before {
            top: 12px; left: 13px;
            width: 8px; height: 8px;
            background: #F6BE9C;
            border-radius: 50%;
        }
        #equipo .scene-1 .man__head div:nth-child(2):after {
            top: 28px; left: -2px;
            border-right: 20px solid transparent;
            border-left: 20px solid transparent;
            border-bottom: 15px solid #F6BE9C;
            transform-origin: top center;
            transform: rotate(36deg);
        }
        #equipo .scene-1 .man__head div:nth-child(3) {
            top: 55px; left: 24px;
            width: 47px; height: 59px;
            background: #271F28;
            border-radius: 18px 0 0 48px;
        }
        #equipo .scene-1 .man__head div:nth-child(3):before {
            top: 0px; left: 17px;
            width: 58px; height: 19px;
            background: #F6BE9C;
            border-radius: 0 0 0 21px;
        }
        #equipo .scene-1 .man__head div:nth-child(3):after {
            top: 19px; left: 47px;
            width: 29px; height: 10px;
            background: #271F28;
            border-radius: 0 0 8px 0;
        }
        #equipo .scene-1 .man__head div:nth-child(4) {
            top: 84px; left: 71px;
            width: 24px; height: 30px;
            background: #271F28;
            border-radius: 0 0 17px 0;
        }
        #equipo .scene-1 .man__head div:nth-child(4):before {
            top: 0px; left: 5px;
            width: 17px; height: 8px;
            background: white;
            border-radius: 0 0 0 10px;
            animation: sceneOneManMouth 10s ease infinite;
            transform: scaleY(1);
        }
        #equipo .scene-1 .man__head div:nth-child(4):after {
            top: -34px; left: 11px;
            width: 5px; height: 13px;
            background: black;
            border-radius: 5px;
            animation: sceneOneManEye 2s ease infinite, sceneOneManEye2 10s ease infinite;
            transform: scaleY(1);
        }
        #equipo .scene-1 .man__head div:nth-child(5) {
            top: 32px; left: 70px;
            width: 10px; height: 6px;
            border-radius: 16px 0 0 0;
            border-top: 7px solid #404040;
            border-left: 7px solid #404040;
            animation: sceneOneManBrow 2s ease infinite, sceneOneManBrow2 10s ease infinite;
            transform: rotate(0deg) translate(0, 0);
        }
        #equipo .scene-1 .man__head div:nth-child(5):before {
            top: -7px; left: 6px;
            width: 7px; height: 7px;
            background: #404040;
            border-radius: 50%;
        }
        #equipo .scene-1 .man__head div:nth-child(5):after {
            top: 1px; left: -7px;
            width: 7px; height: 7px;
            background: #404040;
            border-radius: 50%;
        }
        #equipo .scene-1 .man__arm {
            top: 6px; left: 12px;
            width: 81px; height: 123px;
            background: linear-gradient(#404040 49%, #D7957C 50%);
            border-radius: 42px 42px 39px 0;
            transform-origin: center top;
            animation: sceneOneManArm 10s ease infinite;
            transform: rotate(-34deg) translateY(0px) translateX(0px);
        }
        #equipo .scene-1 .man__arm:before {
            top: 118px; left: 0px;
            width: 40px; height: 50px;
            background: #D7957C;
            border-radius: 0 0 0 20px;
        }
        #equipo .scene-1 .man__arm:after {
            top: 50px; left: -6px;
            width: 93px; height: 33px;
            background: #94959B;
            border-radius: 5px;
        }
        #equipo .scene-1 .man__forearm {
            top: 165px; left: -31px;
            width: 67px; height: 100px;
            background: #F6BE9C;
            border-radius: 36px 28px 60px 4px;
            z-index: 1;
            transform-origin: top center;
            animation: sceneOneManForearm 10s ease infinite;
            transform: rotate(-102deg);
        }
        #equipo .scene-1 .man__forearm:before {
            top: 79px; left: 44px;
            width: 30px; height: 54px;
            background: #F6BE9C;
            transform: rotate(-16deg);
            border-radius: 5px 30px 15px 10px;
            box-shadow: 0 14px 0 0 #D7957C;
        }
        #equipo .scene-1 .man__forearm:after {
            top: 121px; left: 68px;
            width: 9px; height: 13px;
            background: #1C101C;
            border-radius: 100% 0;
        }
        #equipo .scene-1 .man__forearm div:nth-child(2) {
            top: 93px; left: 1px;
            width: 15px; height: 41px;
            background: #F6BE9C;
            transform: rotate(-17deg);
            border-radius: 12px 8px 8px 11px;
            box-shadow: 0 15px 0 0 #88594E;
        }
        #equipo .scene-1 .man__forearm div:nth-child(2):before {
            top: 0px; left: 8px;
            width: 20px; height: 57px;
            background: #F6BE9C;
            border-radius: 0 0 10px 10px;
            box-shadow: 0 15px 0 0 #AF736B;
        }
        #equipo .scene-1 .man__forearm div:nth-child(2):after {
            top: 0px; left: 21px;
            width: 17px; height: 70px;
            background: #F6BE9C;
            border-radius: 0 0 0 13px;
            box-shadow: 0 15px 0 0 #D7957C;
        }
        #equipo .scene-1 .man__forearm div:nth-child(1) {
            top: 80px; left: 45px;
            width: 20px; height: 95px;
            background: #F6BE9C;
            transform: rotate(-17deg);
            border-radius: 10px;
        }
        #equipo .scene-1 .man__forearm div:nth-child(1):before {
            top: 40px; left: 24px;
            width: 30px; height: 6px;
            background: #1C101C;
            transform: rotate(-37deg);
        }
        #equipo .scene-1 .man__forearm div:nth-child(1):after {
            top: 82px; left: -31px;
            width: 17px;
            border-left: 11px solid transparent;
            border-top: 6px solid #1C101C;
            transform: rotate(-37deg);
        }
        #equipo .scene-1 .man__leg {
            top: 298px; left: 5px;
            width: 222px; height: 88px;
            background: linear-gradient(to right, #36779D 56%, #D7957C 57%);
            border-radius: 0 69px 120px 131px / 0 75px 74px 140px;
        }
        #equipo .scene-1 .man__knee {
            top: 15px; left: 189px;
            width: 47px; height: 194px;
            background: linear-gradient(#D7957C 38%, #D7D7D6 39%, #D7D7D6 55%, white 56%);
            border-radius: 10px 40px 20px 30px;
            transform-origin: 50% 0;
            animation: sceneOneManKnee 10s ease infinite;
            transform: rotate(23deg);
        }
        #equipo .scene-1 .man__knee:before {
            top: 75px; left: -27px;
            width: 28px; height: 64px;
            background: linear-gradient(#D7D7D6 50%, white 51%);
            border-radius: 64% 0 0 100% / 50% 0 0 50%;
        }
        #equipo .scene-1 .man__knee:after {
            top: 75px; left: -10px;
            width: 13px; height: 33px;
            background: #A7AEAF;
            box-shadow: 30px 0 0 0 #A7AEAF;
        }
        #equipo .scene-1 .man__feet {
            top: 191px; left: 0px;
            width: 93px; height: 36px;
            background: #59BECF;
            border-radius: 4px 29px 0 0;
            transform-origin: 0 0;
            transform: rotate(-20deg);
            animation: sceneOneManFeet 10s ease infinite;
        }
        #equipo .scene-1 .man__feet:before {
            top: 36px; left: -5px;
            width: 101px; height: 7px;
            background: #1C101C;
            border-radius: 2px;
        }
        #equipo .scene-1 .man__feet:after {
            top: -20px; left: 0px;
            width: 28px; height: 23px;
            background: #59BECF;
            border-radius: 0 17px 0 0;
        }
        #equipo .scene-1 .man__feet div:nth-child(1) {
            top: -1px; left: -11px;
            width: 38px; height: 37px;
            background: #377CA6;
            z-index: 1;
            border-radius: 50% 50% 0 50%;
        }
        #equipo .scene-1 .man__feet div:nth-child(1):before {
            top: 20px; left: 38px;
            width: 40px; height: 17px;
            background: #377CA6;
            border-radius: 0 15px 0 0;
        }
        #equipo .scene-1 .man__feet div:nth-child(1):after {
            top: -28px; left: 44px;
            width: 40px; height: 20px;
            background: #377CA6;
            border-radius: 30px 30px 0 0;
            transform: rotate(-56deg);
        }
        #equipo .scene-1 .man__feet div:nth-child(2) {
            top: -8px; left: 52px;
            width: 12px; height: 20px;
            background: #1C101C;
            z-index: 1;
            transform: rotate(-4deg);
            border-radius: 6px;
        }
        #equipo .scene-1 .animation_to_left { animation: sceneOneGoLeft 10s ease infinite; }
        #equipo .scene-1 .animation_to_right { animation: sceneOneGoRight 10s ease infinite; }
        @keyframes sceneOneManEye {
            0% 	{ transform: scaleY(1); }
            5% 	{ transform: scaleY(.1); }
            10% { transform: scaleY(1); }
        }
        @keyframes sceneOneManBrow {
            2% 	{ transform: translateY(0px); }
            8% 	{ transform: translateY(7px); }
            14% { transform: translateY(0px); }
        }
        @keyframes sceneOneDogTail {
            0% 		{ transform: skewX(-22deg) rotate(-34deg); }
            50% 	{ transform: skewX(-22deg) rotate(16deg); }
            100%	{ transform: skewX(-22deg) rotate(-34deg); }
        }
        @keyframes sceneOneDogEye {
            60% { transform: scaleY(1); }
            65% { transform: scaleY(.1); }
            70% { transform: scaleY(1); }
        }
        @keyframes sceneOne {
            0% 		{ opacity: 1; z-index: 4; }
            10.1% 	{ opacity: 1; z-index: 4; }
            10.2% 	{ opacity: 0; z-index: 1; }
            37.8% 	{ opacity: 0; z-index: 2; }
            61.8% 	{ opacity: 0; z-index: 3; }
            80.3% 	{ opacity: 0; z-index: 3; }
            80.4% 	{ opacity: 1; z-index: 3; }
            88.8% 	{ opacity: 1; z-index: 4; }
            100% 	{ opacity: 1; z-index: 4; }
        }
        @keyframes sceneOneGoLeft {
            0% 		{ transform: translateX(0px); }
            3% 		{ transform: translateX(0px); }
            10.2% 	{ transform: translateX(-900px); }
            10.8% 	{ transform: translateX(0px); }
        }
        @keyframes sceneOneGoRight {
            0% 		{ transform: translateX(0px); }
            3% 		{ transform: translateX(0px); }
            10.2% 	{ transform: translateX(900px); }
            10.8% 	{ transform: translateX(0px); }
        }
        @keyframes sceneOneManFeet {
            0% 		{ transform: rotate(-20deg); }
            12% 	{ transform: rotate(-20deg); }
            87% 	{ transform: rotate(-17deg); }
            91.8% 	{ transform: rotate(-17deg); }
            100% 	{ transform: rotate(-20deg); }
        }
        @keyframes sceneOneManKnee {
            0% 		{ transform: rotate(23deg); }
            12% 	{ transform: rotate(23deg); }
            87% 	{ transform: rotate(17deg); }
            91.8% 	{ transform: rotate(13deg); }
            100% 	{ transform: rotate(23deg); }
        }
        @keyframes sceneOneManForearm {
            0% 		{ transform: rotate(-102deg); }
            12% 	{ transform: rotate(-102deg); }
            87% 	{ transform: rotate(-126deg); }
            91.8% 	{ transform: rotate(-126deg); }
            100% 	{ transform: rotate(-102deg); }
        }
        @keyframes sceneOneManArm {
            0% 		{ transform: rotate(-34deg) translateY(0px) 	translateX(0px); }
            12% 	{ transform: rotate(-34deg) translateY(0px) 	translateX(0px); }
            87% 	{ transform: rotate(-20deg) translateY(10px) 	translateX(52px); }
            91.8% 	{ transform: rotate(-19deg) translateY(12px) 	translateX(41px); }
            100% 	{ transform: rotate(-34deg) translateY(0px) 	translateX(0px); }
        }
        @keyframes sceneOneManBrow2 {
            0% 		{ transform: rotate(0deg) 	translate(0, 0); }
            12% 	{ transform: rotate(0deg) 	translate(0, 0); }
            87% 	{ transform: rotate(22deg) 	translate(5px, 9px); }
            91.8% 	{ transform: rotate(22deg) 	translate(4px, 6px); }
            100% 	{ transform: rotate(0deg) 	translate(0, 0); }
        }
        @keyframes sceneOneManEye2 {
            0% 		{ transform: scaleY(1); }
            12% 	{ transform: scaleY(1); }
            87% 	{ transform: scaleY(0.5); }
            91.8% 	{ transform: scaleY(0.5); }
            100% 	{ transform: scaleY(1); }
        }
        @keyframes sceneOneManMouth {
            0% 		{ transform: scaleY(1); }
            12% 	{ transform: scaleY(1); }
            87% 	{ transform: scaleY(0); }
            91.8% 	{ transform: scaleY(0); }
            100% 	{ transform: scaleY(1); }
        }
        @keyframes sceneOneManNeck {
            0% 		{ transform: rotate(34deg); }
            12% 	{ transform: rotate(34deg); }
            87% 	{ transform: rotate(14deg); }
            91.8% 	{ transform: rotate(34deg); }
            100% 	{ transform: rotate(34deg); }
        }
        @keyframes sceneOneManHead {
            0% 		{ transform: rotate(-10deg) translateY(0px) 	translateX(0px); }
            12% 	{ transform: rotate(-10deg) translateY(0px) 	translateX(0px); }
            87% 	{ transform: rotate(29deg) 	translateY(-50px) 	translateX(107px); }
            91.8% 	{ transform: rotate(-4deg) 	translateY(4px) 	translateX(53px); }
            100% 	{ transform: rotate(-10deg) translateY(0px) 	translateX(0px); }
        }
        @keyframes sceneOneManChest {
            0% {
                border-radius: 100% 44% 0 0 / 100% 70% 0 0;
                transform: scaleX(1);
            }
            12% {
                border-radius: 100% 44% 0 0 / 100% 70% 0 0;
                transform: scaleX(1);
            }
            87% {
                border-radius: 100% 44% 0 30px / 100% 70% 0 30px;
                transform: scaleX(1.5);
            }
            91.8% {
                border-radius: 100% 44% 0 30px / 100% 70% 0 30px;
                transform: scaleX(1.5);
            }
            100% {
                border-radius: 100% 44% 0 0 / 100% 70% 0 0;
                transform: scaleX(1);
            }
        }
        @keyframes sceneOneManBody {
            0% 		{ transform: rotate(10deg) translateY(0px); }
            12% 	{ transform: rotate(10deg) translateY(0px); }
            87% 	{ transform: rotate(10deg) translateY(21px); }
            91.8% 	{ transform: rotate(10deg) translateY(21px); }
            100% 	{ transform: rotate(10deg) translateY(0px); }
        }
        @keyframes sceneOneDogHead {
            0% 		{ transform: rotate(0deg); }
            12% 	{ transform: rotate(0deg); }
            87% 	{ transform: rotate(-21deg); }
            91.8% 	{ transform: rotate(-7deg); }
            100% 	{ transform: rotate(0deg); }
        }
        #equipo .scene-2 {
            width: 800px; height: 600px;
            animation: sceneTwo 10s linear infinite;
        }
        #equipo .scene-2 .rock {
            top: 378px; left: 94px;
            width: 32px; height: 4px;
            background: #B4394A;
            animation: sceneTwoRock 10s ease infinite;
        }
        #equipo .scene-2 .rock:before {
            top: 4px; left: 6px;
            width: 26px; height: 15px;
            background: #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(1) {
            top: 10px; left: 50px;
            width: 40px; height: 25px;
            background: #CE524A;
            border-radius: 0 22px 0 0;
        }
        #equipo .scene-2 .rock div:nth-child(1):before {
            top: 0px; left: -102px;
            width: 21px;
            border-left: 73px solid transparent;
            border-bottom: 32px solid #ED7852;
            transform: skewX(-36deg);
        }
        #equipo .scene-2 .rock div:nth-child(1):after {
            top: 32px; left: -116px;
            width: 93px; height: 12px;
            background: #ED7852;
            transform: skewX(-29deg);
            box-shadow: 10px 0 0 0 #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(2) {
            top: 54px; left: -56px;
            width: 18px;
            border-left: 43px solid transparent;
            border-bottom: 14px solid #CE524A;
        }
        #equipo .scene-2 .rock div:nth-child(2):before {
            top: 0px; left: -87px;
            width: 66px; height: 14px;
            background: #ED7852;
            transform: skewX(-72deg);
        }
        #equipo .scene-2 .rock div:nth-child(2):after {
            top: 14px; left: -93px;
            width: 108px; height: 16px;
            background: #ED7852;
            transform: skewX(-37deg);
            box-shadow: 17px 0 0 0 #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(3) {
            top: 54px; left: 5px;
            width: 20px;
            border-right: 8px solid transparent;
            border-top: 14px solid #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(3):before {
            top: 16px; left: -110px;
            width: 72px; height: 18px;
            background: #ED7852;
            transform: skewX(-36deg);
            box-shadow: 21px 0 0 0 #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(3):after {
            top: 34px; left: -130px;
            width: 55px; height: 28px;
            background: #CE524A;
            transform: skewX(-39deg);
            box-shadow: 40px 0 0 0 #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(4) {
            top: 112px; left: -41px;
            width: 49px;
            border-left: 13px solid transparent;
            border-bottom: 18px solid #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(4):before {
            top: 18px; left: -140px;
            width: 127px; height: 70px;
            background: #ED7852;
            transform: skewX(-35deg);
            box-shadow: 60px 0 0 0 #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(4):after {
            top: 17px; left: -36px;
            border-left: 48px solid transparent;
            border-right: 40px solid transparent;
            border-bottom: 71px solid #CE524A;
        }
        #equipo .scene-2 .rock div:nth-child(5) {
            top: 14px; left: 30px;
            border-left: 20px solid transparent;
            border-bottom: 28px solid #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(5):before {
            top: 70px; left: -66px;
            width: 95px; height: 28px;
            background: #B4394A;
            transform: skewX(-37deg);
            box-shadow: 0 18px 0 0 #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(5):after {
            top: 85px; left: -27px;
            border-right: 22px solid transparent;
            border-bottom: 40px solid #CE524A;
        }
        #equipo .scene-2 .rock div:nth-child(6) {
            top: 34px; left: 13px;
            width: 16px;
            border-right: 34px solid transparent;
            border-left: 32px solid transparent;
            border-bottom: 50px solid #B4394A;
            border-radius: 0 0 7px 0;
        }
        #equipo .scene-2 .rock div:nth-child(6):before {
            top: 49px; left: 22px;
            border-left: 23px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 30px solid #B4394A;
        }
        #equipo .scene-2 .rock div:nth-child(6):after {
            top: -4px; left: 10px;
            border-left: 21px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 29px solid #B4394A;
            transform: rotate(-70deg);
        }
        #equipo .scene-2 .rock div:nth-child(7) {
            top: 59px; left: -4px;
            border-right: 38px solid transparent;
            border-left: 38px solid transparent;
            border-bottom: 24px solid #CE524A;
            transform: rotate(-90deg);
        }
        #equipo .scene-2 .rock div:nth-child(7):before {
            top: 34px; left: 2px;
            border-right: 11px solid transparent;
            border-left: 11px solid transparent;
            border-top: 11px solid #CE524A;
        }
        #equipo .scene-2 .rock div:nth-child(7):after {
            top: 41px; left: 39px;
            width: 9px; height: 8px;
            background: #B4394A;
            transform: skewX(-30deg) rotate(24deg);
        }
        #equipo .scene-2 .lighthouse {
            top: -40px; left: 32px;
            width: 14px; height: 50px;
            background: #CE524A;
            animation: sceneTwoLighthouse 10s ease infinite;
        }
        #equipo .scene-2 .lighthouse:before {
            top: 4px; left: -2px;
            width: 18px; height: 10px;
            background: #F7BD64;
            border-top: 4px solid #CE524A;
            border-bottom: 4px solid #CE524A;
            box-shadow: 0 4px 0 0 rgba(0, 0, 0, .1), 
            inset 6px 0 0 0 #4A4263, 
            inset -8px 0 0 0 #4A4263, 
            inset 0 2px 0 0 #4A4263, 
            inset 0 -2px 0 0 #4A4263;
        }
        #equipo .scene-2 .lighthouse:after {
            top: 12px; left: -56px;
            width: 7px;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 150px solid #F7D67B;
            transform-origin: top center;
            transform: rotate(90deg) scaleX(1);
            animation: sceneTwoLighhouse 2s ease infinite;
        }
        #equipo .scene-2 .girl {
            top: 60px; left: 236px;
            width: 394px; height: 500px;
            animation: sceneTwoStone 10s ease infinite;
        }
        #equipo .scene-2 .girl > div:nth-child(1) {
            top: 170px; left: 112px;
            width: 150px; height: 90px;
            background: #101019;
            border-radius: 0 110px 4px 0;
            transform-origin: right top;
            animation: sceneTwoGirlHear1 10s ease infinite;
            transform: rotate(-40deg) translate(0, 0);
        }
        #equipo .scene-2 .girl > div:nth-child(1):before {
            top: -50px; left: -11px;
            width: 60px; height: 80px;
            background: #101019;
            transform: rotate(-19deg);
        }
        #equipo .scene-2 .girl > div:nth-child(1):after {
            top: -37px; left: 0px;
            width: 60px; height: 80px;
            background: #101019;
            transform: rotate(-50deg);
        }
        #equipo .scene-2 .girl > div:nth-child(2) {
            top: 180px; left: 17px;
            width: 90px; height: 120px;
            background: #101019;
            border-radius: 24px 10px 0 80px;
            animation: sceneTwoGirlHear2 10s ease infinite;
            transform: translate(0px, 0px) rotate(0deg);
        }
        #equipo .scene-2 .girl > div:nth-child(2):before {
            top: -126px; left: -18px;
            width: 130px; height: 153px;
            background: #101019;
            border-radius: 70px 0 0 60px;
            transform: translate(0px, 0px);
        }
        #equipo .scene-2 .girl > div:nth-child(2):after {
            top: -175px; left: 37px;
            width: 100px; height: 100px;
            background: #101019;
            border-radius: 50%;
            box-shadow: 45px -14px 0 -10px #101019, 80px 7px 0 -23px #101019, 20px 37px 0 -13px #101019;
            transform: translate(0px, 0px) rotate(0deg);
        }
        #equipo .scene-2 .girl__back-leg {
            top: 303px; left: 170px;
            width: 115px; height: 40px;
            background: #943139;
            border-radius: 0 14px 0 0;
            transform-origin: 0 0;
            transform: rotate(9deg);
        }
        #equipo .scene-2 .girl__back-leg:before {
            top: 36px; left: 2px;
            width: 100px; height: 27px;
            background: #943139;
            transform-origin: 0 0;
            transform: rotate(-13deg);
        }
        #equipo .scene-2 .girl__back-leg:after {
            top: 21px; left: 83px;
            width: 33px; height: 160px;
            background: #943139;
            transform-origin: 0 0;
            transform: rotate(-30deg);
        }
        #equipo .scene-2 .girl__foot {
            top: 137px; left: 166px;
            width: 66px; height: 53px;
            background: #943139;
            transform-origin: 0 0;
            transform: rotate(-21deg);
        }
        #equipo .scene-2 .girl__foot:before {
            top: -15px; left: 9px;
            width: 10px; height: 20px;
            background: #943139;
            transform: rotate(-20deg);
        }
        #equipo .scene-2 .girl__foot:after {
            top: -1px; left: 10px;
            width: 30px; height: 10px;
            background: #943139;
            transform: rotate(20deg);
        }
        #equipo .scene-2 .girl__foot-thumbs {
            top: 94px;left: 232px;
            width: 12px; height: 14px;
            background: #943139;
            border-radius: 2px 10px 10px 0;
            transform: rotate(10deg);
        }
        #equipo .scene-2 .girl__foot-thumbs:before {
            top: 11px; left: -3px;
            width: 10px; height: 17px;
            background: #943139;
            transform: rotate(23deg);
        }
        #equipo .scene-2 .girl__foot-thumbs:after {
            top: 11px; left: 2px;
            width: 10px; height: 25px;
            background: #943139;
            border-radius: 0 90% 100% 0;
        }
        #equipo .scene-2 .girl__paper {
            top: -44px;left: 84px;
            width: 60px; height: 72px;
            background: #E7CEB5;
            box-shadow: 8px -22px 0 -8px #E7CEB5;
            transform-origin: bottom left;
            transform: rotate(57deg) translate(0px, 0px);
        }
        #equipo .scene-2 .girl__paper:before {
            top: -14px; left: 0px;
            border-top: 14px solid transparent;
            border-right: 16px solid #DAAA8A;
        }
        #equipo .scene-2 .girl__paper:after {
            top: 37px; left: 12px;
            width: 40px; height: 5px;
            background: #D09B88;
            border-radius: 2px;
        }
        #equipo .scene-2 .girl__back-arm {
            top: 248px; left: 130px;
            width: 109px; height: 22px;
            background: #943139;
            border-radius: 0 10px 20px 0;
            transform-origin: 0 0;
            animation: sceneTwoGirlBackArm 10s ease infinite;
            transform: rotate(-30deg) translate(0px, 0px);
        }
        #equipo .scene-2 .girl__back-arm:before {
            top: -11px; left: 15px;
            width: 90px; height: 15px;
            background: #943139;
            transform-origin: 0 0;
            transform: rotate(7deg);
        }
        #equipo .scene-2 .girl__back-arm:after {
            top: 0px; left: 104px;
            width: 24px; height: 9px;
            background: #943139;
            border-radius: 0 2px 10px 0;
            transform-origin: 0 0;
            transform: rotate(16deg);
        }
        #equipo .scene-2 .girl__chest {
            top: 121px; left: 93px;
            width: 50px; height: 83px;
            background: #5A8C8C;
            border-radius: 49px 0 0 0;
            transform-origin: left bottom;
            animation: sceneTwoGirlChest 10s ease infinite;
            transform: rotate(-12deg);
        }
        #equipo .scene-2 .girl__chest:after {
            top: 9px; left: 0px;
            width: 83px; height: 92px;
            background: #5A8C8C;
            border-radius: 35px 59px 0 0;
            transform-origin: right bottom;
            transform: rotate(13deg);
        }
        #equipo .scene-2 .girl__chest:before {
            top: 79px; left: 0px;
            width: 65px; height: 27px;
            background: #9C2141;
            transform-origin: 0 0;
            animation: sceneTwoGirlStomack 10s ease infinite;
            transform: rotate(16deg);
        }
        #equipo .scene-2 .girl__back-shorts {
            top: 290px; left: 110px;
            width: 67px; height: 75px;
            box-sizing: border-box;
            background: #27445A;
            border-right: 25px solid #798C8D;
        }
        #equipo .scene-2 .girl__back-shorts:before {
            top: -72px; left: -18px;
            width: 60px; height: 55px;
            background: #BD4242;
            transform-origin: 0 0;
            transform: rotate(26deg);
        }
        #equipo .scene-2 .girl__back-shorts:after {
            top: -72px; left: -18px;
            width: 64px; height: 60px;
            background: #BD4242;
            transform-origin: 0 0;
            transform: rotate(13deg);
        }
        #equipo .scene-2 .girl__front-leg {
            top: 270px; left: 137px;
            width: 110px; height: 61px;
            background: #BD4242;
            border-radius: 0 44% 23px 0;
            transform-origin: 0 0;
            transform: rotate(-28deg);
        }
        #equipo .scene-2 .girl__front-leg:before {
            top: 31px; left: 0px;
            width: 90px; height: 40px;
            background: #BD4242;
            border-radius: 0 0 94% 0;
        }
        #equipo .scene-2 .girl__front-leg:after {
            top: 20px; left: 72px;
            width: 20px; height: 140px;
            background: #BD4242;
            transform-origin: 0 0;
            transform: rotate(12deg);
        }
        #equipo .scene-2 .girl__knee {
            top: 41px;left: 89px;
            width: 20px; height: 160px;
            background: #BD4242;
            transform-origin: 0 0;
            transform: rotate(17deg);
        }
        #equipo .scene-2 .girl__knee:before {
            top: 96px; left: -30px;
            width: 30px; height: 50px;
            background: #BD4242;
            border-radius: 20px 0 0 0;
        }
        #equipo .scene-2 .girl__knee:after {
            top: 14px; left: -191px;
            width: 70px; height: 76px;
            background: #354E6F;
            border-radius: 22px 0 0 50px;
            transform-origin: 0 0;
            transform: rotate(-15deg);
        }
        #equipo .scene-2 .girl__shorts {
            top: 267px; left: 67px;
            width: 60px; height: 80px;
            background: #354E6F;
            border-radius: 0 0 0 56px;
            transform-origin: 0 0;
            transform: rotate(22deg);
        }
        #equipo .scene-2 .girl__shorts:before {
            top: -27px; left: 62px;
            width: 83px; height: 32px;
            background: #9CB5BD;
            transform-origin: 0 0;
            transform: rotate(40deg);
        }
        #equipo .scene-2 .girl__front-arm {
            top: 103px; left: 124px;
            width: 135px; height: 23px;
            background: #BD4242;
            border-radius: 20px 11px 2px 0;
            transform-origin: 0 0;
            animation: sceneTwoGirlFromArm 10s ease infinite;
            transform: rotate(27deg) translate(0px, 0px);
        }
        #equipo .scene-2 .girl__front-arm:before {
            top: 22px; left: 0px;
            width: 135px; height: 25px;
            background: #BD4242;
            border-radius: 0 0 18px 23px;
            transform-origin: 0 0;
            transform: rotate(-6deg);
        }
        #equipo .scene-2 .girl__front-arm:after {
            top: 30px; left: 128px;
            width: 20px; height: 134px;
            background: #BD4242;
            border-radius: 6px 0 0 20px;
            transform-origin: 0 0;
            animation: sceneTwoGirlTriceps 10s ease infinite;
            transform: rotate(198deg);
        }
        #equipo .scene-2 .girl__forearm {
            top: 13px;left: 99px;
            width: 100px; height: 13px;
            background: #BD4242;
            transform-origin: 0 0;
            animation: sceneTwoGirlForearm 10s ease infinite;
            transform: rotate(-67deg);
        }
        #equipo .scene-2 .girl__forearm:before {
            top: -4px; left: 98px;
            width: 35px; height: 10px;
            background: #BD4242;
            border-radius: 4px;
            transform-origin: 0 0;
            transform: rotate(-29deg);
        }
        #equipo .scene-2 .girl__forearm:after {
            top: -10px; left: 100px;
            width: 23px; height: 16px;
            background: #BD4242;
        }
        #equipo .scene-2 .girl__palm {
            top: -18px;left: 104px;
            width: 10px; height: 26px;
            background: #BD4242;
            border-radius: 6px 0 0 0;
            transform-origin: 0 0;
            transform: rotate(26deg);
        }
        #equipo .scene-2 .girl__palm:before {
            top: -9px; left: 2px;
            width: 10px; height: 17px;
            background: #BD4242;
            border-radius: 0 8px 0 3px;
            transform: rotate(20deg);
        }
        #equipo .scene-2 .girl__palm:after {
            top: -24px; left: 9px;
            width: 6px; height: 21px;
            background: #101019;
            border-radius: 0 0 10px 0;
            transform: rotate(-16deg);
        }
        #equipo .scene-2 .girl__face {
            top: -48px; left: 73px;
            width: 42px; height: 40px;
            background: #BD4242;
            border-radius: 50%;
            transform-origin: 0 0;
            animation: sceneTwoGirlFace 10s ease infinite;
            transform: rotate(0deg) translate(0px, 0px);
        }
        #equipo .scene-2 .girl__face:before {
            top: 32px; left: 0px;
            width: 35px; height: 50px;
            background: #BD4242;
            border-radius: 0 0 4px 0;
            transform-origin: top right;
            transform: rotate(25deg);
        }
        #equipo .scene-2 .girl__face:after {
            top: 16px; left: -36px;
            width: 40px; height: 40px;
            background: #101019;
            border-radius: 50%;
        }
        #equipo .scene-2 .girl__nose {
            top: 33px; left: 18px;
            width: 16px; height: 28px;
            background: #BD4242;
            border-radius: 0 0 8px 0;
            transform: rotate(-9deg) translate(0, 0);
        }
        #equipo .scene-2 .girl__nose:before {
            top: -13px; left: -2px;
            width: 23px; height: 10px;
            background: #101019;
            border-radius: 20px;
            animation: sceneTwoGirlBrow 10s ease infinite;
            transform: rotate(51deg);
        }
        #equipo .scene-2 .girl__nose:after {
            top: 1px; left: -7px;
            width: 17px; height: 5px;
            background: #101019;
            border-radius: 4px;
            animation: sceneTwoGirlEye 10s ease infinite;
            transform: rotate(47deg);
        }
        #equipo .scene-2 .stone {
            top: 422px; left: 203px;
            width: 350px; height: 138px;
            border-radius: 110px 180px 0 0 / 82px 130px 0 0;
            background: linear-gradient(-50deg, #4A4263 45%, #413452 46%, #413452 62%, #352C49 63%);
            animation: sceneTwoStone 10s ease infinite;
        }
        #equipo .scene-2 .stone:before {
            top: 66px; left: -90px;
            width: 97px; height: 76px;
            background: #352C49;
            border-radius: 48px 0 0 0;
        }
        #equipo .scene-2 .stone:after {
            top: 96px; left: -141px;
            width: 106px; height: 46px;
            background: #352C49;
            border-radius: 50px 50px 0 0;
            box-shadow: 524px 6px 0 0 #352C49;
        }
        #equipo .scene-2 .basket {
            top: 516px; left: 248px;
            width: 50px; height: 50px;
            box-sizing: border-box;
            background: #413452;
            border-radius: 50%;
            box-shadow: inset 0 0 0 12px #CA415A, inset 0 0 0 18px #EECD19;
            animation: sceneTwoStone 10s ease infinite;
        }
        #equipo .scene-2 .basket:before {
            top: 1px; left: -105px;
            width: 61px; height: 12px;
            background: #D69338;
            transform: rotate(-44deg);
            box-shadow: 0px 3px 0 0 #677321, 3px 15px 0 0 #B4394A, 3px 20px 0 0 #7B3231, -7px 32px 0 0 #D69338;
        }
        #equipo .scene-2 .basket:after {
            top: -7px; left: -26px;
            width: 15px; height: 43px;
            background: #C47533;
            border-radius: 8px;
        }
        #equipo .scene-2 .basket div:nth-child(1) {
            top: 16px; left: -53px;
            width: 60px; height: 8px;
            background: #8C9421;
            border-radius: 10px 10px 0 0;
        }
        #equipo .scene-2 .basket div:nth-child(1):before {
            top: 8px; left: -33px;
            width: 136px; height: 30px;
            background: #C47533;
            border-top: 6px solid #E7AD39;
            z-index: 1;
        }
        #equipo .scene-2 .basket div:nth-child(1):after {
            top: 22px; left: -33px;
            width: 21px; height: 17px;
            background: #7B3231;
            z-index: 1;
            border-radius: 0 15px 0 0;
        }
        #equipo .scene-2 .basket div:nth-child(2) {
            top: 30px; left: -44px;
            width: 52px; height: 24px;
            box-sizing: border-box;
            background: #E7AD39;
            z-index: 1;
            border-radius: 0 0 25px 25px;
            border-left: 8px solid #7B3231;
            border-bottom: 8px solid #7B3231;
            border-right: 8px solid #7B3231;
        }
        #equipo .scene-2 .basket div:nth-child(2):before {
            top: -14px; left: 6px;
            width: 14px; height: 20px;
            background: #C47533;
            border-radius: 0 0 12px 12px;
            border: 5px solid #101019;
            border-top: 0;
        }
        #equipo .scene-2 .basket div:nth-child(2):after {
            top: 20px; left: -50px;
            width: 48px; height: 10px;
            background: #7B3231;
            border-radius: 0 10px 0 0;
        }
        #equipo .scene-2 .sand {
            bottom: 0px; left: 0px;
            width: 500px; height: 40px;
            background: #677321;
            animation: sceneTwoStone 10s ease infinite;
        }
        #equipo .scene-2 .sand:before {
            bottom: 0px; left: 0px;
            width: 810px; height: 18px;
            background: #E7AD39;
        }
        #equipo .scene-2 .sand:after {
            top: 14px; left: 135px;
            width: 190px; height: 8px;
            background: #E7AD39;
            border-radius: 10px 0 0 0;
        }
        #equipo .scene-2 .sand div {
            top: 8px; left: 240px;
            width: 117px; height: 14px;
            background: #E7AD39;
            border-radius: 0 15px 0 0;
        }
        #equipo .scene-2 .sand div:before {
            top: -15px; left: 0px;
            width: 71px; height: 15px;
            background: #E7AD39;
            border-radius: 0 20px 0 0;
        }
        #equipo .scene-2 .sand div:after {
            top: 0px; left: -10px;
            width: 75px; height: 10px;
            background: #E7AD39;
            z-index: 1;
            border-radius: 10px 0 0 0;
        }
        #equipo .scene-2 .crab {
            bottom: 25px; left: 28px;
            width: 60px; height: 30px;
            animation: sceneTwoCrab 10s linear infinite, sceneTwoStone 10s ease infinite;
            transform: translateX(0px);
        }
        #equipo .scene-2 .crab div:nth-child(1) {
            bottom: 0; left: 0;
            width: 60px; height: 30px;
            background: linear-gradient(#9C2141 49%, #E7CEB5 50%);
            border-radius: 10px;
            animation: sceneTwoCrabBody 10s linear infinite;
            transform: rotate(0deg) translate(0px, 0px);
        }
        #equipo .scene-2 .crab div:nth-child(1):before {
            top: -7px; left: 14px;
            width: 8px; height: 9px;
            background: white;
            border-radius: 2px;
            box-shadow: 24px 0 0 0 white;
        }
        #equipo .scene-2 .crab div:nth-child(2) {
            top: -29px; left: -32px;
            width: 15px; height: 44px;
            background: #9C2141;
            border-radius: 10px 0 0 10px;
            animation: sceneTwoCrabLeftArm 10s linear infinite;
        }
        #equipo .scene-2 .crab div:nth-child(2):before {
            top: 6px; left: 15px;
            width: 13px; height: 18px;
            background: #641939;
            border-radius: 0 15px 0 0;
        }
        #equipo .scene-2 .crab div:nth-child(2):after {
            top: 24px; left: 15px;
            width: 13px; height: 20px;
            background: #9C2141;
            border-radius: 0 0 10px 0;
        }
        #equipo .scene-2 .crab div:nth-child(3) {
            top: -35px; left: 79px;
            width: 15px; height: 44px;
            background: #9C2141;
            border-radius: 0 10px 10px 0;
            animation: sceneTwoCrabRightArm 10s linear infinite;
            transform: rotate(0deg) translate(0px, 0px);
        }
        #equipo .scene-2 .crab div:nth-child(3):before {
            top: 6px; left: -13px;
            width: 13px; height: 18px;
            background: #641939;
            border-radius: 15px 0 0 0;
        }
        #equipo .scene-2 .crab div:nth-child(3):after {
            top: 24px; left: -13px;
            width: 13px; height: 20px;
            background: #9C2141;
            border-radius: 0 0 0 10px;
        }
        #equipo .scene-2 .crab div:nth-child(4) {
            top: 21px; left: -18px;
            width: 17px; height: 16px;
            background: #641939;
            border-radius: 0 0 100% 0;
            animation: sceneTwoCrabLeg1 10s linear infinite;
            transform: rotate(-20deg) translate(0px, 0px);
        }
        #equipo .scene-2 .crab div:nth-child(5) {
            top: 21px; left: 2px;
            width: 14px; height: 16px;
            background: #9C2141;
            border-radius: 0 0 100% 0;
            animation: sceneTwoCrabLeg2 10s linear infinite;
            transform: rotate(0deg) translate(0px, 0px);
        }
        #equipo .scene-2 .crab div:nth-child(6) {
            top: 21px; left: 46px;
            width: 16px; height: 16px;
            background: #9C2141;
            border-radius: 0 0 0 100%;
            animation: sceneTwoCrabLeg3 10s linear infinite;
            transform: rotate(0deg) translate(0px, 0px);
        }
        #equipo .scene-2 .crab div:nth-child(7) {
            top: 21px; left: 64px;
            width: 16px; height: 16px;
            background: #641939;
            border-radius: 0 0 0 100%;
            animation: sceneTwoCrabLeg4 10s linear infinite;
            transform: rotate(0deg) translate(0px, 0px);
        }
        #equipo .scene-2 .bg-1 {
            width: 800px; height: 300px;
            background: #9C3163;
            border-radius: 0 0 90px 90px;
            animation: sceneTwoBg1 10s ease infinite;
        }
        #equipo .scene-2 .bg-2 {
            top: -30px; left: -47px;
            width: 220px; height: 220px;
            background: #CA415A;
            border-radius: 50%;
            animation: sceneTwoBg2 10s ease infinite;
        }
        #equipo .scene-2 .bg-2:before {
            top: 33px; left: 144px;
            width: 200px; height: 200px;
            background: #CA415A;
            border-radius: 50%;
        }
        #equipo .scene-2 .bg-3 {
            top: -41px; right: -44px;
            width: 200px; height: 200px;
            background: #CA415A;
            border-radius: 50%;
            animation: sceneTwoBg3 10s ease infinite;
        }
        #equipo .scene-2 .bg-3:before {
            top: 68px; left: -230px;
            width: 200px; height: 200px;
            background: #CA415A;
            border-radius: 50%;
        }
        #equipo .scene-2 .bg-3:after {
            top: 93px; left: -117px;
            width: 110px; height: 110px;
            background: #CA415A;
            border-radius: 50%;
            box-shadow: 100px -7px 0 10px #CA415A;
        }
        #equipo .scene-2 .bg-4 {
            top: 36px; left: -127px;
            width: 220px; height: 220px;
            background: #ED7852;
            border-radius: 50%;
            box-shadow: 442px 10px 0 0 #ED7852, 782px -21px 0 0 #ED7852, 302px 69px 0 0 #ED7852, 112px 140px 0 0 #ED7852, 262px 150px 0 0 #ED7852, 542px 110px 0 0 #ED7852, 772px 70px 0 0 #ED7852;
            animation: sceneTwoBg4 10s ease infinite;
        }
        #equipo .scene-2 .bg-4:before {
            top: 58px; left: 156px;
            width: 140px; height: 140px;
            background: #ED7852;
            border-radius: 50%;
            box-shadow: 509px 15px 0 0 #ED7852;
        }
        #equipo .scene-2 .bg-4:after {
            top: 110px; left: 260px;
            width: 80px; height: 80px;
            background: #ED7852;
            border-radius: 50%;
            box-shadow: 378px -16px 0 0 #ED7852, 488px -35px 0 0 #ED7852;
        }
        #equipo .scene-2 .bg-5 {
            top: 199px; left: -140px;
            width: 220px; height: 220px;
            background: #FC9250;
            border-radius: 50%;
            box-shadow: 500px 20px 0 0 #FC9250, 635px -15px 0 0 #FC9250, 805px 135px 0 0 #FC9250, 605px 75px 0 0 #FC9250, 335px 125px 0 0 #FC9250, 105px 125px 0 0 #FC9250;
            animation: sceneTwoBg5 10s ease infinite;
        }
        #equipo .scene-2 .bg-5:before {
            top: 110px; left: 340px;
            width: 100px; height: 40px;
            background: #FC9250;
            border-radius: 50%;
            box-shadow: 538px 6px 0 0 #FC9250;
        }
        #equipo .scene-2 .bg-5:after {
            top: 112px; left: 222px;
            width: 170px; height: 170px;
            background: #FC9250;
            border-radius: 50%;
            box-shadow: 510px -70px 0 0 #FC9250;
        }
        #equipo .scene-2 .bg-6 {
            bottom: 0px; left: 559px;
            width: 260px; height: 260px;
            background: #F7BD64;
            border-radius: 50%;
            box-shadow: -751px 8px 0 0 #F7BD64, -204px 38px 0 0 #F7BD64;
            animation: sceneTwoBg6 10s ease infinite;
        }
        #equipo .scene-2 .bg-6:before {
            top: 50px; left: -385px;
            width: 150px; height: 150px;
            background: #F7BD64;
            border-radius: 50%;
            box-shadow: 84px 20px 0 0 #F7BD64, -186px 10px 0 0 #F7BD64, -86px 30px 0 0 #F7BD64;
        }
        #equipo .scene-2 .water {
            bottom: 18px; right: 0px;
            width: 470px; height: 21px;
            background: white;
            z-index: 1;
            animation: sceneTwoWater 10s ease infinite;
        }
        #equipo .scene-2 .water:before {
            top: -11px; left: -45px;
            width: 55px; height: 32px;
            background: white;
            border-radius: 30px 30px 0 0;
        }
        #equipo .scene-2 .water:after {
            top: 9px; left: -60px;
            width: 20px; height: 12px;
            background: white;
            border-radius: 14px 0 0 0;
        }
        #equipo .scene-2 .water div:nth-child(1) {
            top: -12px; left: 102px;
            width: 230px; height: 12px;
            background: white;
            border-radius: 20px 0 0 0;
            box-shadow: 183px -9px 0 0 white;
        }
        #equipo .scene-2 .water div:nth-child(1):before {
            top: -31px; left: 43px;
            width: 102px; height: 45px;
            background: white;
            border-radius: 120px 120px 0 0;
        }
        #equipo .scene-2 .water div:nth-child(1):after {
            top: -15px; left: 210px;
            width: 79px; height: 10px;
            background: white;
            border-radius: 10px 10px 0 0;
        }
        #equipo .scene-2 .water div:nth-child(2) {
            top: -40px; left: 320px;
            width: 39px; height: 22px;
            background: white;
            border-radius: 50px 50px 0 0;
        }
        #equipo .scene-2 .water div:nth-child(2):before {
            top: -7px; left: -74px;
            width: 12px; height: 12px;
            background: white;
            border-radius: 50%;
            box-shadow: 93px 0 0 0 white;
        }
        #equipo .scene-2 .water div:nth-child(2):after {
            top: -37px; left: -74px;
            width: 5px; height: 5px;
            background: white;
            border-radius: 50%;
            box-shadow: 18px 15px 0 0 white, 124px 13px 0 0 white;
        }
        #equipo .scene-2 .water div:nth-child(4) {
            top: 7px; left: 66px;
            width: 408px; height: 6px;
            background: #0297DA;
            border-radius: 0 0 0 10px;
        }
        #equipo .scene-2 .water div:nth-child(4):before {
            top: 6px; left: 0px;
            width: 86px; height: 8px;
            background: white;
            border-radius: 0 10px 0 0;
        }
        #equipo .scene-2 .water div:nth-child(4):after {
            top: 4px; left: 215px;
            width: 210px; height: 10px;
            background: white;
            border-radius: 10px 0 0 0;
        }
        #equipo .scene-2 .water div:nth-child(3) {
            top: 0px; left: 131px;
            width: 360px; height: 10px;
            background: #0297DA;
            border-radius: 10px 0 0 0;
        }
        #equipo .scene-2 .water div:nth-child(3):before {
            top: 0px; left: 272px;
            width: 80px; height: 11px;
            background: white;
            border-radius: 11px 0 0 0;
            z-index: 1;
        }
        #equipo .scene-2 .water div:nth-child(3):after {
            top: -11px; left: 195px;
            width: 150px; height: 11px;
            background: #0297DA;
            border-radius: 11px 0 0;
        }
        @keyframes sceneTwoCrab {
            0% 		{ transform: translateX(0px); }
            15% 	{ transform: translateX(0px); }
            16.2% 	{ transform: translateX(4px); }
            19.8% 	{ transform: translateX(11px); }
            100% 	{ transform: translateX(11px); }
        }
        @keyframes sceneTwoCrabBody {
            0% 		{ transform: rotate(0deg) 	translate(0px, 0px); }
            12.6% 	{ transform: rotate(-2deg) 	translate(0px, 0px); }
            13.2% 	{ transform: rotate(-3deg) 	translate(0px, 0px); }
            15% 	{ transform: rotate(1deg) 	translate(5px, -2px); }
            19.8% 	{ transform: rotate(3deg) 	translate(5px, -2px); }
            24% 	{ transform: rotate(3deg) 	translate(5px, -6px); }
            27% 	{ transform: rotate(6deg) 	translate(12px, -13px); }
            30% 	{ transform: rotate(-8deg) 	translate(-6px, -15px); }
            100% 	{ transform: rotate(-8deg) 	translate(-6px, -15px); }
        }
        @keyframes sceneTwoCrabLeftArm {
            13.2% 	{ transform: rotate(0deg) 	translate(0px, 0px); }
            15% 	{ transform: rotate(0deg) 	translate(4px, -1px); }
            16.2% 	{ transform: rotate(0deg) 	translate(5px, -6px); }
            19.8% 	{ transform: rotate(6deg) 	translate(9px, -20px); }
            24% 	{ transform: rotate(21deg) 	translate(10px, -28px); }
            27% 	{ transform: rotate(21deg) 	translate(17px, -34px); }
            30% 	{ transform: rotate(-19deg) translate(-13px, -6px); }
            100% 	{ transform: rotate(-19deg) translate(-13px, -6px); }
        }
        @keyframes sceneTwoCrabRightArm {
            0% 		{ transform: rotate(0deg) 	translate(0px, 0px); }
            12.6% 	{ transform: rotate(0deg) 	translate(0px, 0px); }
            13.2% 	{ transform: rotate(-5deg) 	translate(-3px, -3px); }
            15% 	{ transform: rotate(1deg) 	translate(4px, -1px); }
            16.2% 	{ transform: rotate(15deg) 	translate(10px, 4px); }
            19.8% 	{ transform: rotate(58deg) 	translate(33px, -1px); }
            24% 	{ transform: rotate(58deg) 	translate(27px, -1px); }
            27% 	{ transform: rotate(58deg) 	translate(27px, -15px); }
            30% 	{ transform: rotate(-26deg) translate(-15px, -40px); }
            100% 	{ transform: rotate(-26deg) translate(-15px, -40px); }
        }
        @keyframes sceneTwoCrabLeg1 {
            0% 		{ transform: rotate(-20deg) translate(0px, 0px); }
            15% 	{ transform: rotate(-20deg) translate(0px, 0px); }
            16.2% 	{ transform: rotate(-20deg) translate(3px, -6px); }
            19.8% 	{ transform: rotate(0deg) 	translate(5px, 0px); }
            100% 	{ transform: rotate(0deg) 	translate(5px, 0px); }
        }
        @keyframes sceneTwoCrabLeg2 {
            0% 		{ transform: rotate(0deg) 	translate(0px, 0px); }
            12.6% 	{ transform: rotate(0deg) 	translate(0px, 0px); }
            13.2% 	{ transform: rotate(-6deg) 	translate(1px, -4px); }
            15% 	{ transform: rotate(-6deg) 	translate(12px, 0px); }
            16.2% 	{ transform: rotate(1deg) 	translate(9px, 0px); }
            19.8% 	{ transform: rotate(1deg) 	translate(4px, 0px); }
            100% 	{ transform: rotate(1deg) 	translate(4px, 0px); }
        }
        @keyframes sceneTwoCrabLeg3 {
            0% 		{ transform: rotate(0deg) 	translate(0px, 0px); }
            12.6% 	{ transform: rotate(0deg) 	translate(0px, 0px); }
            13.2% 	{ transform: rotate(-12deg) translate(3px, -4px); }
            15% 	{ transform: rotate(5deg) 	translate(10px, -2px); }
            16.2% 	{ transform: rotate(2deg) 	translate(10px, 0px); }
            19.8% 	{ transform: rotate(2deg) 	translate(4px, 0px); }
            100% 	{ transform: rotate(2deg) 	translate(4px, 0px); }
        }
        @keyframes sceneTwoCrabLeg4 {
            0% 		{ transform: rotate(0deg) 	translate(0px, 0px); }
            15% 	{ transform: rotate(0deg) 	translate(0px, 0px); }
            16.2% 	{ transform: rotate(-30deg) translate(4px, -5px); }
            19.8% 	{ transform: rotate(0deg) 	translate(5px, 0px); }
            100% 	{ transform: rotate(0deg) 	translate(5px, 0px); }
        }
        @keyframes sceneTwoLighhouse {
            0% 		{ transform: rotate(90deg) scaleX(1); }
            50% 	{ transform: rotate(90deg) scaleX(2); }
            100% 	{ transform: rotate(90deg) scaleX(1); }
        }
        @keyframes sceneTwoGirlHear1 {
            0% 		{ transform: rotate(-40deg) translate(0, 0); }
            10.8% 	{ transform: rotate(-40deg) translate(0, 0); }
            16.2% 	{ transform: rotate(-40deg) translate(25px, 7px); }
            21% 	{ transform: rotate(-40deg) translate(-13px, -33px); }
            100% 	{ transform: rotate(-40deg) translate(-13px, -33px); }
        }
        @keyframes sceneTwoGirlHear2 {
            0% 		{ transform: translate(0px, 0px) 	rotate(0deg); }
            10.8% 	{ transform: translate(0px, 0px) 	rotate(0deg); }
            16.2% 	{ transform: translate(18px, 9px) 	rotate(-15deg); }
            21% 	{ transform: translate(7px, 9px) 	rotate(-20deg); }
            100% 	{ transform: translate(7px, 9px) 	rotate(-20deg); }
        }
        @keyframes sceneTwoGirlBackArm {
            0% 		{ transform: rotate(-30deg) translate(0px, 0px); }
            10.8% 	{ transform: rotate(-30deg) translate(0px, 0px); }
            16.2% 	{ transform: rotate(-37deg) translate(-19px, 0px); }
            21% 	{ transform: rotate(-33deg) translate(-32px, -16px); }
            100% 	{ transform: rotate(-33deg) translate(-32px, -16px); }
        }
        @keyframes sceneTwoGirlChest {
            0% 		{ transform: rotate(-12deg) translate(0px, 0px); }
            10.8% 	{ transform: rotate(-12deg) translate(0px, 0px); }
            16.2% 	{ transform: rotate(-12deg) translate(0px, 0px); }
            21% 	{transform: rotate(-32deg) 	translate(-3px, 0px); }
            100% 	{transform: rotate(-32deg) 	translate(-3px, 0px); }
        }
        @keyframes sceneTwoGirlStomack {
            0% 		{ transform: rotate(16deg) scaleY(1) 	scaleX(1) 		translate(0px, 0px); }
            10.8% 	{ transform: rotate(16deg) scaleY(1) 	scaleX(1) 		translate(0px, 0px); }
            16.2% 	{ transform: rotate(16deg) scaleY(1) 	scaleX(1) 		translate(0px, 0px); }
            21% 	{ transform: rotate(26deg) scaleY(2.2) 	scaleX(0.94) 	translate(2px, -10px); }
            100% 	{ transform: rotate(26deg) scaleY(2.2) 	scaleX(0.94) 	translate(2px, -10px); }
        }
        @keyframes sceneTwoGirlFromArm {
            0% 		{ transform: rotate(27deg) translate(0px, 0px); }
            10.8% 	{ transform: rotate(27deg) translate(0px, 0px); }
            16.2% 	{ transform: rotate(25deg) translate(-8px, 2px); }
            21% 	{ transform: rotate(-3deg) translate(-48px, 0px); }
            100% 	{ transform: rotate(-3deg) translate(-48px, 0px); }
        }
        @keyframes sceneTwoGirlTriceps {
            0% 		{ transform: rotate(198deg) translate(0px, 0px); }
            10.8% 	{ transform: rotate(198deg) translate(0px, 0px); }
            16.2% 	{ transform: rotate(200deg) translate(0px, 0px); }
            21% 	{ transform: rotate(264deg) translate(0px, -20px); }
            100% 	{ transform: rotate(264deg) translate(0px, -20px); }
        }
        @keyframes sceneTwoGirlForearm {
            0% 		{ transform: rotate(-67deg) translate(0px, 0px); }
            10.8% 	{ transform: rotate(-67deg) translate(0px, 0px); }
            16.2% 	{ transform: rotate(-62deg) translate(0px, 0px); }
            21% 	{ transform: rotate(-2deg) 	translate(18px, -12px); }
            100% 	{ transform: rotate(-2deg) 	translate(18px, -12px); }
        }
        @keyframes sceneTwoGirlFace {
            0% 		{ transform: rotate(0deg) 	translate(0px, 0px); }
            10.8% 	{ transform: rotate(0deg) 	translate(0px, 0px); }
            16.2% 	{ transform: rotate(-16deg) translate(-26px, -16px); }
            21% 	{ transform: rotate(-1deg) 	translate(-6px, -2px); }
        }
        @keyframes sceneTwoGirlBrow {
            0% 		{ transform: rotate(51deg); }
            10.8% 	{ transform: rotate(51deg); }
            16.2% 	{ transform: rotate(43deg); }
            100% 	{ transform: rotate(43deg); }
        }
        @keyframes sceneTwoGirlEye {
            0% 		{ transform: rotate(47deg); }
            10.8% 	{ transform: rotate(47deg); }
            16.2% 	{ transform: rotate(36deg); }
            100% 	{ transform: rotate(36deg); }
        }
        @keyframes sceneTwo {
            0% 		{ opacity: 0; z-index: 3; }
            3.5% 	{ opacity: 0; z-index: 3; }
            3.6% 	{ opacity: 1; z-index: 3; }
            10.2% 	{ opacity: 1; z-index: 4; }
            37.7% 	{ opacity: 1; z-index: 4; }
            37.8% 	{ opacity: 0; z-index: 1; }
            61.8% 	{ opacity: 0; z-index: 2; }
            88.8% 	{ opacity: 0; z-index: 3; }
            100% 	{ opacity: 0; z-index: 3; }
        }
        @keyframes sceneTwoBg1 {
            0% 		{ transform: translateY(0px); }
            30.6% 	{ transform: translateY(0px); }
            34.8% 	{ transform: translateY(600px); }
            100% 	{ transform: translateY(600px); }
        }
        @keyframes sceneTwoBg2 {
            0% 		{ transform: translate(0px, 0px); }
            31.2% 	{ transform: translate(0px, 0px); }
            34.2% 	{ transform: translate(-400px, -10px); }
            100% 	{ transform: translate(-400px, -10px); }
        }
        @keyframes sceneTwoBg3 {
            0% 		{ transform: translate(0px, 0px); }
            31.2% 	{ transform: translate(0px, 0px); }
            34.2% 	{ transform: translate(-870px, 30px); }
            100% 	{ transform: translate(-870px, 30px); }
        }
        @keyframes sceneTwoBg4 {
            0% 		{ transform: translate(0px, 0px); }
            31.8% 	{ transform: translate(0px, 0px); }
            35.4% 	{ transform: translate(930px, 10px); }
            100% 	{ transform: translate(930px, 10px); }
        }
        @keyframes sceneTwoBg5 {
            0% 		{ transform: translate(0px, 0px); }
            32.4% 	{ transform: translate(0px, 0px); }
            36.6% 	{ transform: translate(-940px, 10px); }
            100% 	{ transform: translate(-940px, 10px); }
        }
        @keyframes sceneTwoBg6 {
            0% 		{ transform: translate(0px, 0px); }
            32.4% 	{ transform: translate(0px, 0px); }
            36.6% 	{ transform: translate(1000px, 10px); }
            100% 	{ transform: translate(1000px, 10px); }
        }
        @keyframes sceneTwoRock {
            0% 		{ transform: translate(0px, 0px); }
            31.8% 	{ transform: translate(0px, 0px); }
            35.4% 	{ transform: translate(-193px, 0px); }
            100% 	{ transform: translate(-193px, 0px); }
        }
        @keyframes sceneTwoStone {
            0% 		{ transform: translate(0px, 0px); }
            33.6% 	{ transform: translate(0px, 0px); }
            37.8% 	{ transform: translate(-750px, 0px); }
            100% 	{ transform: translate(-750px, 0px); }
        }
        @keyframes sceneTwoWater {
            0% 		{ transform: translate(160px, 0px); }
            7.8% 	{ transform: translate(160px, 0px); }
            19.2% 	{ transform: translate(0px, 0px); }
            21% 	{ transform: translate(0px, 0px); }
            33.6% 	{ transform: translate(160px, 0px); }
            37.8% 	{ transform: translate(480px, 0px); }
            100% 	{ transform: translate(480px, 0px); }
        }
        #equipo .scene-3 {
            width: 800px; height: 600px;
            animation: sceneThree 10s linear infinite;
        }
        #equipo .scene-3 .road {
            animation: sceneThreeRoad 10s ease infinite;
        }
        #equipo .scene-3 .car {
            animation: sceneThreeCar 1s ease infinite;
            animation-delay: .1s;
        }
        #equipo .scene-3 .car > div:nth-child(1) {
            top: 102px; left: 318px;
            width: 279px; height: 166px;
            background: #424A6B;
            border-radius: 0 20px 0 0;
            box-shadow: inset 0 7px 0 0 #526B94;
        }
        #equipo .scene-3 .car > div:nth-child(1):before {
            top: -10px; left: 163px;
            width: 100px; height: 208px;
            background: #424A6B;
            box-shadow: inset -11px 0 0 -1px #526B94;
            border-radius: 0 26px 0 0;
            transform-origin: right top;
            transform: rotate(-36deg);
        }
        #equipo .scene-3 .car > div:nth-child(1):after {
            top: -50px; left: -10px;
            width: 290px; height: 226px;
            box-sizing: border-box;
            border-radius: 0 20px 0 0;
            border-left: 10px solid #0A0615;
            border-top: 10px solid #0A0615;
            border-bottom: 10px solid #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(2) {
            top: 41px; left: 516px;
            width: 64px; height: 253px;
            box-sizing: border-box;
            border-right: 10px solid #0A0615;
            border-bottom: 10px solid #0A0615;
            border-radius: 0 28px 42px 0;
            transform-origin: top right;
            transform: rotate(-37deg);
            z-index: 1;
        }
        #equipo .scene-3 .car > div:nth-child(2):before {
            top: 212px; left: -84px;
            width: 100px; height: 10px;
            background: #0A0615;
            transform: rotate(37deg);
        }
        #equipo .scene-3 .car > div:nth-child(2):after {
            top: -259px; left: -441px;
            width: 213px; height: 227px;
            box-sizing: border-box;
            border-top: 10px solid #0A0615;
            border-right: 10px solid #0A0615;
            border-bottom: 10px solid #0A0615;
            border-radius: 20px 0 0 0;
            transform: rotate(37deg);
        }
        #equipo .scene-3 .car > div:nth-child(3) {
            top: 268px; left: 0px;
            width: 80px; height: 10px;
            background: #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(3):before {
            top: -185px; left: 70px;
            width: 64px; height: 253px;
            box-sizing: border-box;
            border-left: 10px solid #0A0615;
            border-bottom: 10px solid #0A0615;
            border-radius: 28px 0 0 42px;
            transform-origin: top right;
            transform: rotate(37deg);
            z-index: 1;
        }
        #equipo .scene-3 .car > div:nth-child(3):after {
            top: -60px; left: 100px;
            border-left: 32px solid transparent;
            border-right: 32px solid transparent;
            border-bottom: 52px solid #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(4) {
            top: 137px; left: 90px;
            width: 12px; height: 74px;
            background: #0A0615;
            border-radius: 6px;
            box-shadow: -42px -11px 0 0 #0A0615, -29px 17px 0 1px #0A0615, -14px 18px 0 2px #0A0615, -51px 40px 0 2px #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(4):before {
            top: 79px; left: -32px;
            width: 32px; height: 20px;
            background: #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(4):after {
            top: 60px; left: -11px;
            width: 20px; height: 25px;
            background: #0A0615;
            border-radius: 6px;
            transform: rotate(30deg);
        }
        #equipo .scene-3 .car > div:nth-child(5) {
            top: 29px; left: 54px;
            width: 569px; height: 23px;
            box-sizing: border-box;
            border-top: 10px solid #0A0615;
            background: #1B172C;
            border-radius: 7% 7% 0 0 / 100% 100% 0 0;
        }
        #equipo .scene-3 .car > div:nth-child(5):before {
            top: -7px; left: 7px;
            width: 35px; height: 273px;
            box-sizing: border-box;
            background: #1B172C;
            transform-origin: 0 0;
            transform: rotate(37deg);
            border-radius: 21% 0 0 0;
            border-left: 14px solid #425273;
            z-index: 3;
        }
        #equipo .scene-3 .car > div:nth-child(5):after {
            top: 13px; left: 226px;
            width: 28px; height: 227px;
            background: #1B172C;
        }
        #equipo .scene-3 .car > div:nth-child(6) {
            top: 30px; left: 599px;
            width: 26px; height: 26px;
            background: #0A0615;
            border-radius: 0 40px 0 0;
            transform: skewX(37deg);
        }
        #equipo .scene-3 .car > div:nth-child(6):before {
            top: 26px; left: 16px;
            width: 10px; height: 218px;
            background: #526B94;
            box-shadow: -10px 0 0 0 #425273, -16px 0 0 0 #425273, -26px 0 0 0 #1B172C, -34px 0 0 0 #1B172C;
        }
        #equipo .scene-3 .car > div:nth-child(6):after {
            top: 22px; left: -25px;
            width: 25px; height: 25px;
            background: #1B172C;
        }
        #equipo .scene-3 .car > div:nth-child(7) {
            top: 278px; left: 0px;
            width: 780px; height: 290px;
            background: #1B172C;
        }
        #equipo .scene-3 .car > div:nth-child(7):before {
            top: -64px; right: 20px;
            border-right: 50px solid transparent;
            border-bottom: 64px solid #1B172C;
        }
        #equipo .scene-3 .car > div:nth-child(7):after {
            top: -26px; right: 68px;
            border-left: 30px solid transparent;
            border-bottom: 26px solid #1B172C;
        }
        #equipo .scene-3 .car > div:nth-child(8) {
            top: 136px; left: 182px;
            width: 68px; height: 180px;
            background: #425464; 
            border-radius: 60px;
            box-shadow: inset 25px -4px 0 9px #2F294A, inset 35px -10px 0 17px #313152;
            z-index: 1;
        }
        #equipo .scene-3 .car > div:nth-child(8):before {
            top: 154px; left: 1px;
            width: 71px; height: 219px;
            background: #425464; 
            border-radius: 0 0 0 60px;
            box-shadow: inset 24px -9px 0 9px #2F294A, inset 54px 0 0 0 #313152;
            transform: rotate(-19.5deg);
            transform-origin: 0 0;
        }
        #equipo .scene-3 .car > div:nth-child(8):after {
            top: 263px; left: 65px;
            width: 232px; height: 80px;
            background: #2F294A;
            border-radius: 60px 30px 30px 60px;
        }
        #equipo .scene-3 .car > div:nth-child(9) {
            top: 333px; left: 664px;
            width: 113px; height: 85px;
            box-sizing: border-box;
            background: #0A0615;
            border: 10px solid #2B242C;
            border-radius: 0 60px 60px 60px;
            box-shadow: 40px 0 0 10px #2B242C, 37px 78px 0 4px #2B242C, 47px 158px 0 4px #2B242C;
        }
        #equipo .scene-3 .car > div:nth-child(9):before {
            top: -57px; left: -11px;
            width: 97px; height: 47px;
            box-sizing: border-box;
            background: #0A0615;
            border-radius: 0 0 20px 0;
            border-top: 13px solid #2B242C;
            border-left: 22px solid #2B242C;
            border-right: 10px solid #2B242C;
            transform: skewX(-49deg);
            transform-origin: bottom left;
            box-shadow: 70px 0 0 #2B242C;
        }
        #equipo .scene-3 .car > div:nth-child(9):after {
            top: 77px; left: 73px;
            width: 80px; height: 131px;
            background: #0A0615;
            border-radius: 70px 0 0 0;
            border-top: 19px solid #1B172C;
            border-left: 19px solid #1B172C;
        }
        #equipo .scene-3 .car > div:nth-child(10) {
            top: 414px; left: 498px;
            width: 234px; height: 144px;
            background: #1B172C;
            border-radius: 0 56px 71px 60px;
            overflow: hidden;
            z-index: 1;
        }
        #equipo .scene-3 .car > div:nth-child(10):before {
            top: 16px; left: 2px;
            width: 94px; height: 139px;
            box-sizing: border-box;
            background: #293253;
            border-radius: 27px 27px;
            box-shadow: inset 0 10px 0 12px #293253, inset 0 -9px 0 12px #293253, inset 0 48px 0 20px #424A6B, inset 0 -17px 0 12px #424A6B, inset 0 80px 0 0 #202132;
        }
        #equipo .scene-3 .car > div:nth-child(10):after {
            top: 0px; left: 32px;
            width: 26px; height: 8px;
            border-left: 6px solid #3F4262;
            border-top: 8px solid #3F4262;
            border-right: 6px solid #3F4262;
            border-radius: 6px 6px 0 0;
        }
        #equipo .scene-3 .car > div:nth-child(10) > div {
            top: 72px; left: 102px;
            width: 84px; height: 12px;
            background: #424A6B;
            box-shadow: 14px 0 0 0 #424A6B, 34px 0 0 0 #293253, -18px 12px 0 0 #313152, -18px 16px 0 0 #313152, 11px 12px 0 0 #313152, 11px 16px 0 0 #313152, 16px 28px 0 0 #293253, 16px 34px 0 0 #293253, 26px 28px 0 0 #293253, 26px 34px 0 0 #293253, 8px 46px 0 0 #432747, 8px 50px 0 0 #432747;
        }
        #equipo .scene-3 .car > div:nth-child(10) > div:before {
            top: 16px; left: 4px;
            width: 30px; height: 6px;
            background: #202132;
            box-shadow: 34px 0 0 0 #202132, 38px 0 0 0 #202132, 34px 18px 0 0 #202132, 54px 18px 0 0 #202132, 28px 34px 0 0 #202132, 28px 36px 0 0 #202132, 34px 34px 0 0 #202132, 34px 36px 0 0 #202132;
        }
        #equipo .scene-3 .car > div:nth-child(10) > div:after {
            top: 26px; left: 10px;
            width: 6px; height: 16px;
            background: #202132;
            box-shadow: 0 4px 0 0 #202132, 15px 4px 0 0 #202132, 15px 0 0 0 #202132, 85px 4px 0 0 #202132, 85px 0 0 0 #202132, 6px 20px 0 0 #202132, 9px 20px 0 0 #202132, 66px 20px 0 0 #202132, 69px 20px 0 0 #202132;
        }
        #equipo .scene-3 .car > div:nth-child(11) {
            top: 329px; left: 660px;
            width: 74px; height: 6px;
            background: #0A0615;
            transform-origin: 0 0;
            transform: rotate(-41deg);
            border-radius: 4px;
        }
        #equipo .scene-3 .car > div:nth-child(11):before {
            top: -10px; left: 20px;
            width: 10px; height: 11px;
            background: #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(11):after {
            top: -37px; left: -18px;
            width: 85px; height: 27px;
            background: #0A0615;
            border-radius: 10px 10px 20px 20px;
        }
        #equipo .scene-3 .car > div:nth-child(12) {
            top: 392px; left: 691px;
            width: 61px; height: 16px;
            background: #293253;
            border-radius: 2px 2px 20px 20px;
        }
        #equipo .scene-3 .car > div:nth-child(12):before {
            top: -28px; left: -12px;
            width: 86px; height: 28px;
            box-sizing: border-box;
            background: #313152;
            border-radius: 0 14px 14px 0;
            border-top: 5px solid #522959;
            border-right: 5px solid #522959;
            border-bottom: 5px solid #522959;
            box-shadow: inset 5px 0 0 0 #0A0615, inset -44px 0 0 -36px #1B172C;
        }
        #equipo .scene-3 .car > div:nth-child(12):after {
            top: -68px; left: 11px;
            width: 44px; height: 10px;
            background: #293253;
            border-radius: 5px;
            box-shadow: 10px -10px 0 0 #293253;
        }
        #equipo .scene-3 .car > div:nth-child(13) {
            top: 272px; left: 750px;
            width: 60px; height: 14px;
            background: #0A0615;
            transform: skewX(37deg);
        }
        #equipo .scene-3 .car > div:nth-child(13):before {
            top: -113px; left: 68px;
            width: 9px; height: 113px;
            background: #0A0615;
            box-shadow: -15px -55px 0 0 #0A0615, -15px 0px 0 0 #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(13):after {
            top: -102px; left: 53px;
            width: 16px; height: 14px;
            background: #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(14) {
            top: 496px; left: 323px;
            width: 230px; height: 62px;
            background: linear-gradient(#0A0615 25%, #2B242C 26%, #2B242C 84%, #1B172C 85%);
            border-radius: 56px 0 0 0;
        }
        #equipo .scene-3 .car > div:nth-child(14):before {
            top: -16px; left: -29px;
            width: 160px; height: 16px;
            background: #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(14):after {
            top: 0px; left: 29px;
            width: 62px; height: 62px;
            background: #432747;
        }
        #equipo .scene-3 .car > div:nth-child(15) {
            top: 481px; left: 41px;
            width: 157px; height: 30px;
            background: #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(15):before {
            top: 30px; left: 0px;
            width: 157px;
            border-right: 40px solid transparent;
            border-bottom: 47px solid #2B242C;
        }
        #equipo .scene-3 .car > div:nth-child(15):after {
            top: -291px; left: -31px;
            width: 50px; height: 160px;
            background: #5A6B8C;
            transform-origin: 0 0;
            transform: rotate(-14deg);
            border-radius: 21px;
            z-index: 1;
        }
        #equipo .scene-3 .car > div:nth-child(16) {
            top: 413px; left: -10px;
            width: 234px; height: 68px;
            background: #2F294A;
            border-radius: 0 41px 21px 0;
        }
        #equipo .scene-3 .car > div:nth-child(16):after {
            top: -276px; left: -20px;
            width: 69px; height: 276px;
            background: linear-gradient(to right, #292149 28%, #2F294A 29%);
            border-radius: 34px 34px 15px 15px;
            z-index: 2;
        }
        #equipo .scene-3 .car > div:nth-child(16):before {
            top: -163px; left: -172px;
            border-right: 100px solid transparent;
            border-left: 160px solid transparent;
            border-bottom: 60px solid #1B172C;
            transform: rotate(-90deg);
            z-index: 1;
        }
        #equipo .scene-3 .car > div:nth-child(17) {
            top: 264px; left: -417px;
            width: 320px; height: 239px;
            box-sizing: border-box;
            background: #1B172C;
            border-top: 12px solid #0A0615;
            border-left: 14px solid #0A0615;
            border-bottom: 17px solid #0A0615;
            border-radius: 40% 0 0 0;
            box-shadow: inset 21px -24px 0 0 #2B242C;
        }
        #equipo .scene-3 .car > div:nth-child(17):before {
            top: 13px; left: 0px;
            width: 54px; height: 103px;
            background: #432747;
            border-radius: 100% 0 31px 0 / 73% 0 31px 0;
            box-shadow: inset -12px -29px 0 0 #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(17):after {
            top: 116px; left: 24px;
            width: 183px; height: 70px;
            background: #0A0615;
            border-radius: 35px;
        }
        #equipo .scene-3 .car > div:nth-child(18) {
            top: 342px; left: -334px;
            width: 130px; height: 34px;
            background: #2B242C;
        }
        #equipo .scene-3 .car > div:nth-child(18):before {
            top: -80px; left: 200px;
            width: 66px; height: 191px;
            background: #2B242C;
            border-radius: 40px 42px 0 0;
            transform-origin: 0 0;
            transform: rotate(-20deg);
            z-index: 3;
        }
        #equipo .scene-3 .car > div:nth-child(18):after {
            top: -96px; left: 215px;
            width: 30px; height: 30px;
            background: #0A0615;
            transform: skewX(-35deg);
            z-index: 3;
        }
        #equipo .scene-3 .car > div:nth-child(19) {
            top: 340px; left: -97px;
            border-right: 50px solid transparent;
            border-bottom: 78px solid #2B242C;
        }
        #equipo .scene-3 .car > div:nth-child(19):before {
            top: 36px; left: -105px;
            width: 90px; height: 41px;
            background: linear-gradient(#473A56 49%, #413452 50%);
            transform: rotate(-20deg);
        }
        #equipo .scene-3 .car > div:nth-child(19):after {
            top: 57px; left: -108px;
            width: 250px; height: 250px;
            box-sizing: border-box;
            border-radius: 50%;
            border: 20px solid transparent;
            border-left: 20px solid #2B242C;
            transform: rotate(65deg);
        }
        #equipo .scene-3 .car > div:nth-child(20) {
            top: 412px; left: -205px;
            width: 256px; height: 188px;
            box-sizing: border-box;
            background: linear-gradient(#0A0615 92%, #202132 93%);
            border-radius: 138px 86px 0 0;
            border-top: 20px solid #1B172C;
            border-left: 20px solid #1B172C;
            border-right: 20px solid #1B172C;
            z-index: 3;
        }
        #equipo .scene-3 .car > div:nth-child(20):before {
            top: 17px; left: 20px;
            width: 192px; height: 192px;
            box-sizing: border-box;
            background: radial-gradient(#1B172C 10%, #0A0615 11%, #0A0615 24%, #1B172C 25%, #1B172C 50%, #0A0615 51%);
            border-radius: 50%;
            border-top: 9px solid #1B172C;
            border-left: 9px solid #1B172C;
            border-bottom: 9px solid #0A0615;
            border-right: 9px solid #0A0615;
            transform: rotate(45deg);
        }
        #equipo .scene-3 .car > div:nth-child(20):after {
            top: -56px; left: -168px;
            width: 92px; height: 17px;
            background: #1A3142;
            border-right: 16px solid #27445A;
            border-left: 16px solid #27445A;
            box-shadow: 5px -57px 0 0 #2B242C, 41px -57px 0 0 #2B242C;
        }
        #equipo .scene-3 .car > div:nth-child(21) {
            top: 503px; left: -393px;
            width: 59px; height: 57px;
            background: linear-gradient(#821D42 32%, #4A5A73 33%);
            box-shadow: inset -47px 0 0 0 #0A0615, 140px 0 0 0 #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(21):before {
            top: 0px; left: 59px;
            width: 81px; height: 31px;
            background: #1B172C;
            border-bottom: 12px solid #0A0615;
        }
        #equipo .scene-3 .car > div:nth-child(21):after {
            top: 55px; left: 444px;
            width: 677px; height: 12px;
            background: #2B242C;
            box-shadow: 0px 12px 0 0 #0A0615, 90px 12px 0 0 #0A0615;
        }
        #equipo .scene-3 .sneakers {
            top: 514px; left: 50px;
            width: 31px; height: 36px;
            background: linear-gradient(#424A6B 77%, #293253 78%);
        }
        #equipo .scene-3 .sneakers:before {
            top: 12px; left: 31px;
            width: 40px; height: 24px;
            background: linear-gradient(to right, #424A6B 61%, #293253 62%);
            border-radius: 0 17px 0 0;
            box-shadow: inset 0 -8px 0 0 #293253;
        }
        #equipo .scene-3 .sneakers:after {
            top: 5px; left: 31px;
            border-right: 25px solid transparent;
            border-bottom: 7px solid #293253;
        }
        #equipo .scene-3 .sneakers > div {
            top: 14px; left: 0px;
            width: 17px; height: 14px;
            background: #293253;
            border-radius: 0 14px 0 0;
        }
        #equipo .scene-3 .sneakers > div:before {
            top: -32px; left: 13px;
            width: 18px; height: 30px;
            background: #293253;
            border-radius: 20px 0 0 8px;
        }
        #equipo .scene-3 .sneakers > div:after {
            top: -4px; left: 50px;
            width: 5px; height: 8px;
            background: #1B172C;
            box-shadow: -8px -2px 0 0 #1B172C, -16px -4px 0 0 #1B172C;
            z-index: 1;
        }
        #equipo .scene-3 .papper {
            top: 480px; left: 106px;
            width: 60px; height: 66px;
            box-sizing: border-box;
            background: #293253;
            border: 15px solid #4A5A73;
            box-shadow: 0 8px 0 0 #424A6B, 0 24px 0 0 #4A5A73;
            z-index: 11;
            transform-origin: left 90px;
            transform: rotate(-6deg);
            animation: sceneThreePapper 10s ease infinite;
            animation-delay: -0.5s;
        }
        #equipo .scene-3 .papper:before {
            top: -15px; left: -15px;
            border-bottom: 28px solid transparent;
            border-left: 60px solid #5A6B8C;
        }
        #equipo .scene-3 .papper:after {
            top: -15px; left: -15px;
            border-top: 28px solid transparent;
            border-left: 60px solid #424A6B;
            transform: rotate(-50deg);
        }
        #equipo .scene-3 .man {
            top: 168px; left: 236px;
            width: 465px; height: 321px;
            z-index: 1;
        }
        #equipo .scene-3 .man__head {
            top: 77px; left: 30px;
            width: 35px; height: 67px;
            background: #473A56;
            border-radius: 18px;
            transform-origin: bottom left;
            transform: rotate(5deg);
            animation: sceneThreeManHead 1s ease infinite;
        }
        #equipo .scene-3 .man__head:before {
            top: -9px; left: 12px;
            width: 56px; height: 66px;
            background: #0A0615;
            border-radius: 0 0 6px 45px;
        }
        #equipo .scene-3 .man__head:after {
            top: 13px; left: 51px;
            width: 23px; height: 16px;
            background: #0A0615;
            border-radius: 0 0 4px 0;
        }
        #equipo .scene-3 .man__hair {
            top: -67px; left: -16px;
            width: 46px; height: 86px;
            background: #0A0615;
            border-radius: 35px 0 0 27px;
        }
        #equipo .scene-3 .man__hair:before {
            top: 0px; left: 46px;
            width: 10px;
            border-right: 11px solid transparent;
            border-top: 16px solid #0A0615;
        }
        #equipo .scene-3 .man__hair:after {
            top: 16px; left: 46px;
            height: 17px;
            border-bottom: 10px solid transparent;
            border-left: 10px solid #0A0615;
        }
        #equipo .scene-3 .man__beard {
            top: -62px; left: 30px;
            width: 40px; height: 75px;
            background: #6B8278;
            border-radius: 0 28px 0 22px;
            box-shadow: inset -10px 1px 0 0 #7AA68E;
        }
        #equipo .scene-3 .man__beard:before {
            top: 37px; left: 18px;
            width: 26px; height: 8px;
            background: #0A0615;
        }
        #equipo .scene-3 .man__beard:after {
            top: 50px; left: 28px;
            width: 6px; height: 9px;
            background: #0A0615;
            border-radius: 2px;
            animation: sceneThreeManEye 2s ease infinite;
        }
        #equipo .scene-3 .man__nose {
            top: -11px; left: 70px;
            width: 12px; height: 24px;
            background: #73436B;
            border-radius: 0 12px 4px 0;
            box-shadow: inset -4px 0 0 0 #B65B76;
        }
        #equipo .scene-3 .man__nose:before {
            top: 14px; left: -4px;
            width: 12px; height: 10px;
            background: #73436B;
            border-radius: 4px 0 0 4px;
            box-shadow: inset 0 -4px 0 0 #B65B76;
        }
        #equipo .scene-3 .man__body {
            top: 199px; left: 40px;
            width: 71px; height: 110px;
            background: #31396A;
            border-radius: 50px 0 0 4px;
            box-shadow: inset -14px 0 0 0 #3A7BA5;
            transform-origin: 0 0;
            transform: rotate(-66deg);
            z-index: 1;
        }
        #equipo .scene-3 .man__body:before {
            top: 157px; left: 15px;
            width: 72px; height: 37px;
            background: #4A4263;
            box-shadow: inset -7px 0 0 0 #413452, 0 12px 0 0 #3A114B;
            transform-origin: 0 0;
            transform: rotate(-24deg);
        }
        #equipo .scene-3 .man__body:after {
            top: 108px; left: -8px;
            width: 72px; height: 68px;
            background: #31396A;
            box-shadow: inset -8px 0 0 0 #293253;
            border-radius: 16% 0 0 0 / 100% 0 0 0;
            transform-origin: 0 0;
            transform: rotate(-25deg);
        }
        #equipo .scene-3 .man__arm {
            top: 121px; left: 28px;
            width: 58px; height: 75px;
            background: #325385;
            border-radius: 29px 29px 0 0;
            box-shadow: inset -12px 0 0 0 #3A7BA5;
            transform: rotate(-9deg);
            transform-origin: 29px 29px;
            z-index: 1;
        }
        #equipo .scene-3 .man__arm:before {
            top: 75px; left: 16px;
            width: 33px; height: 80px;
            background: #6B8278;
            border-radius: 0 0 16px 16px;
        }
        #equipo .scene-3 .man__forearm {
            top: 130px;  left: 20px;
            width: 26px; height: 163px;
            background: #6B8278;
            border-radius: 40px;
            transform-origin: 13px 13px;
            transform: rotate(-131deg);
        }
        #equipo .scene-3 .man__forearm:before {
            top: 142px; left: 7px;
            height: 18px;
            border-bottom: 22px solid transparent;
            border-right: 23px solid #6B8278;
            transform: rotate(50deg);
            transform-origin: 0 0;
            animation: sceneThreeManPalm .5s linear infinite;
        }
        #equipo .scene-3 .man__forearm:after {
            top: 165px; left: -39px;
            width: 13px;
            border-left: 19px solid transparent;
            border-bottom: 18px solid #7AA68E;
            transform-origin: bottom right;
            transform: rotate(4deg) translate(0, 0);
            animation: sceneThreeManFingers .5s linear infinite;
        }
        #equipo .scene-3 .man__shorts {
            top: 244px; left: 277px;
            width: 50px; height: 70px;
            background: #3A114B;
            transform-origin: 0 0;
            transform: rotate(-117deg);
            border-radius: 4px 0 0 0;
            z-index: 7;
        }
        #equipo .scene-3 .man__shorts:after {
            top: -9px; left: -12px;
            width: 83px; height: 102px;
            background: #553356;
            box-shadow: inset 47px 0 0 0 #522959;
            transform-origin: 0 0;
            transform: rotate(-22deg);
            border-radius: 24px 40px 0 0 / 54px 40px 0 0;
        }
        #equipo .scene-3 .man__shorts:before {
            top: -37px; left: 14px;
            border-right: 50px solid transparent;
            border-top: 46px solid #522959;
            border-radius: 0 15px;
            transform-origin: 0 0;
            transform: rotate(23deg);
        }
        #equipo .scene-3 .man__legs {
            top: 183px; left: 323px;
        }
        #equipo .scene-3 .man__legs div:nth-child(1) {
            top: -37px; left: -95px;
            width: 40px; height: 164px;
            background: #4A426B;
            border-radius: 0 0 22px 15px;
            transform-origin: top right;
            transform: rotate(-143deg);
            z-index: 6;
        }
        #equipo .scene-3 .man__legs div:nth-child(1):before {
            top: -2px; left: -28px;
            width: 40px; height: 164px;
            background: #4A426B;
            border-radius: 0 0 22px 15px;
            transform-origin: top right;
            transform: rotate(-8deg);
        }
        #equipo .scene-3 .man__legs div:nth-child(2) {
            top: -68px; left: 106px;
            width: 32px; height: 69px;
            background: #4A426B;
            border-radius: 0 0 0 10px;
            transform-origin: 0 0;
            transform: rotate(-146deg);
        }
        #equipo .scene-3 .man__legs div:nth-child(2):before {
            top: -13px; left: 84px;
            width: 23px;
            border-right: 33px solid transparent;
            border-left: 5px solid transparent;
            border-top: 70px solid #473A56;
            transform-origin: 0 0;
            transform: rotate(91deg);
        }
        #equipo .scene-3 .man__legs div:nth-child(2):after {
            top: 48px; left: 3px;
            width: 30px; height: 15px;
            background: #4A426B;
            border-radius: 0 0 11px 6px;
            transform-origin: 0 0;
            transform: rotate(41deg);
        }
        #equipo .scene-3 .man__legs div:nth-child(3) {
            top: -131px; left: 115px;
            width: 23px; height: 13px;
            background: #4A426B;
            border-radius: 0 5px 10px 0;
            transform-origin: 0 0;
            transform: rotate(-126deg);
        }
        #equipo .scene-3 .man__legs div:nth-child(4) {
            top: 24px; left: 3px;
            width: 58px; height: 135px;
            background: #352C49;
            border-radius: 0 0 30px 30px;
            transform-origin: 0 0;
            transform: rotate(-124deg);
            z-index: 4;
        }
        #equipo .scene-3 .man__legs div:nth-child(5) {
            top: -97px; left: 65px;
            width: 30px; height: 180px;
            transform-origin: 0 0;
            transform: rotate(7deg);
            background: #352C49;
            border-radius: 19px 14px 0 0;
            z-index: 5;
        }
        #equipo .scene-3 .man__legs div:nth-child(5):before {
            top: 0px; left: 22px;
            width: 30px; height: 170px;
            background: #352C49;
            border-radius: 0 29px 0 26px;
            transform-origin: 0 0;
            transform: rotate(8deg);
        }
        #equipo .scene-3 .man__legs div:nth-child(6) {
            top: 71px; left: 37px;
            width: 35px; height: 35px;
            background: #352C49;
            border-radius: 30px 30px 0 0;
            transform: rotate(237deg);
        }
        #equipo .scene-3 .man__legs div:nth-child(6):before {
            top: 1px; left: -30px;
            height: 13px;
            border-top: 22px solid transparent;
            border-right: 50px solid #352C49;
            transform: rotate(10deg);
        }
        #equipo .scene-3 .man__legs div:nth-child(6):after {
            top: 16px; left: -56px;
            width: 42px; height: 19px;
            background: #352C49;
            border-radius: 20px 17px 0 0;
            transform: rotate(-40deg);
        }
        #equipo .scene-3 .laptop {
            top: 166px; left: 164px;
            width: 72px; height: 11px;
            background: #0A0615;
            border-radius: 0 0 8px 0;
        }
        #equipo .scene-3 .laptop:before {
            top: -84px; left: 65px;
            width: 10px; height: 96px;
            background: #0A0615;
            border-radius: 0 10px 10px 0;
            box-shadow: -5px 0 0 0 #92DAF3;
            transform-origin: bottom right;
            transform: rotate(14deg);
        }
        #equipo .scene-3 .laptop:after {
            top: 0px; left: 58px;
            width: 10px; height: 10px;
            background: #0A0615;
        }
        #equipo .scene-3 .pizza {
            top: 392px; left: 62px;
            width: 156px; height: 18px;
            background: #473A56;
            z-index: 1;
        }
        #equipo .scene-3 .pizza:before {
            top: -102px; left: -12px;
            width: 94px; height: 102px;
            box-sizing: border-box;
            background: #524A6B;
            border-top: 10px solid #413452;
            border-right: 16px solid #473A56;
            border-left: 14px solid #473A56;
            transform: skewX(14deg);
        }
        #equipo .scene-3 .pizza:after {
            top: -20px; left: 0px;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 20px solid #524A6B;
        }
        #equipo .scene-3 .pizza__fat {
            top: -78px; left: 12px;
            width: 18px; height: 16px;
            background: #413452;
            border-radius: 50%;
            transform: skewX(14deg);
        }
        #equipo .scene-3 .pizza__fat:before {
            top: 4px; left: 31px;
            width: 20px; height: 25px;
            background: #413452;
            border-radius: 15px 0 0 15px;
        }
        #equipo .scene-3 .pizza__fat:after {
            top: 33px; left: 4px;
            width: 47px; height: 46px;
            background: #413452;
            border-radius: 70% 0 0 0;
        }
        #equipo .scene-3 .coffee {
            top: 355px; left: 125px;
            width: 28px;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 55px solid #5A6B8C;
            transform-origin: 7px bottom;
            z-index: 1;
            animation: sceneThreeCoffee 10s ease infinite;
            animation-delay: -0.5s;
        }
        #equipo .scene-3 .coffee:before {
            top: -45px; left: -6px;
            width: 32px;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 27px solid #27445A;
        }
        #equipo .scene-3 .coffee:after {
            top: -72px; left: 0px;
            width: 29px; height: 9px;
            background: #4A5A73;
            box-shadow: -13px 8px 0 0 #5A6B8C, 13px 8px 0 0 #5A6B8C, 6px 13px 0 0 #4A5A73, -7px 13px 0 0 #4A5A73;
        }
        #equipo .scene-3 .bg-1 {
            width: 850px; height: 130px;
            border-radius: 0 50px 50px 0;
            background: #2F294A;
            animation: sceneThreeBg1 10s ease infinite;
        }
        #equipo .scene-3 .bg-1:before {
            top: 257px; left: 0px;
            width: 850px; height: 133px;
            background: #2F294A;
            border-radius: 0 55px 55px 0;
        }
        #equipo .scene-3 .bg-2 {
            width: 860px; height: 54px;
            background: #2F294A;
            border-radius: 25px 0 0 25px;
            animation: sceneThreeBg2 10s ease infinite;
        }
        #equipo .scene-3 .bg-2:before {
            top: 126px; right: 0px;
            width: 1054px; height: 133px;
            background: #2F294A;
            border-radius: 57px 0 0 57px;
        }
        #equipo .scene-3 .bg-2:after {
            top: 521px; right: 0px;
            width: 1314px; height: 90px;
            background: #2F294A;
            border-radius: 50px 0 0 0;
        }
        @keyframes sceneThreeManEye {
            60% { transform: scaleY(1); }
            65% { transform: scaleY(.1); }
            70% { transform: scaleY(1); }
        }
        @keyframes sceneThreeManPalm {
            0% 		{ transform: rotate(50deg); }
            50% 	{ transform: rotate(40deg); }
            100% 	{ transform: rotate(50deg); }
        }
        @keyframes sceneThreeManFingers {
            0% 		{ transform: rotate(4deg) translate(0, 0); }
            50% 	{ transform: rotate(-6deg) translate(5px, 4px); }
            100% 	{ transform: rotate(4deg) translate(0, 0); }
        }
        @keyframes sceneThreeManHead {
            0% 		{ transform: rotate(0deg); }
            50% 	{ transform: rotate(9deg); }
            100% 	{ transform: rotate(0deg); }
        }
        @keyframes sceneThreeCoffee {
            0% 		{ transform: rotate(0deg) translate(0px, 0px); }
            55.2% 	{ transform: rotate(0deg) translate(0px, 0px); }
            57.6% 	{ transform: rotate(-77deg) translate(0px, 0px); }
            58.8% 	{ transform: rotate(-77deg) translate(9px, 8px); }
            60% 	{ transform: rotate(-77deg) translate(0px, 0px); }
            100% 	{ transform: rotate(-77deg) translate(0px, 0px); }
        }
        @keyframes sceneThreePapper {
            0% 		{ transform: rotate(-6deg); }
            57% 	{ transform: rotate(-6deg); }
            59.4% 	{ transform: rotate(-38deg); }
            100% 	{ transform: rotate(-38deg); }
        }
        @keyframes sceneThreeManHead {
            0% 		{ transform: rotate(0deg); }
            50% 	{ transform: rotate(9deg); }
            100% 	{ transform: rotate(0deg); }
        }
        @keyframes sceneThreeRoad {
            0% 		{ transform: translate(0, 0); }
            52.8% 	{ transform: translate(0, 0); }
            61.8% 	{ transform: translate(1220px, 0); }
            100% 	{ transform: translate(1220px, 0); }
        }
        @keyframes sceneThreeCar {
            0% 		{ transform: translateY(0); }
            50% 	{ transform: translateY(-10px); }
            100% 	{ transform: translateY(0); }
        }
        @keyframes sceneThreeBg1 {
            0% 		{ transform: translateX(0); }
            55.3% 	{ transform: translateX(0); }
            61.8% 	{ transform: translateX(-850px); }
            100% 	{ transform: translateX(-850px); }
        }
        @keyframes sceneThreeBg2 {
            0% 		{ transform: translateX(0); }
            55.2% 	{ transform: translateX(0); }
            61.8% 	{ transform: translateX(1320px); }
            100% 	{ transform: translateX(1320px); }
        }
        @keyframes sceneThree {
            0% 		{ opacity: 0; z-index: 3; }
            31.1% 	{ opacity: 0; z-index: 3; }
            31.2% 	{ opacity: 1; z-index: 3; }
            37.8% 	{ opacity: 1; z-index: 4; }
            61.7% 	{ opacity: 1; z-index: 4; }
            61.8% 	{ opacity: 0; z-index: 1; }
            88.8% 	{ opacity: 0; z-index: 2; }
            100% 	{ opacity: 0; z-index: 2; }
        }
        #equipo .scene-4 {
            width: 800px; height: 600px;
            animation: sceneFour 10s linear infinite;
        }
        #equipo .scene-4__top {
            animation: sceneFourTop 10s ease infinite;
        }
        #equipo .scene-4__left {
            animation: sceneFourLeft 10s ease infinite;
        }
        #equipo .scene-4__right {
            animation: sceneFourRight 10s ease infinite;
        }
        #equipo .scene-4 .picture-1 {
            width: 98px; height: 98px;
            background: #6B8439;
            border: 12px solid #32283F;
            overflow: hidden;
        }
        #equipo .scene-4 .picture-1:before {
            width: 100px; height: 100px;
            background: #435A3A;
            transform: rotate(45deg);
        }
        #equipo .scene-4 .picture-1:after {
            top: 53px; left: 58px;
            width: 20px; height: 36px;
            background: #D0BD21;
            box-shadow: 0 -43px 0 0 #D0BD21;
            border-radius: 100%;
            transform-origin: 0 0;
            transform: rotate(-135deg);
        }
        #equipo .scene-4 .picture-2 {
            top: 136px; left: 36px;
            width: 62px; height: 91px;
            background: #C6C69C;
            border: 12px solid #314339;
        }
        #equipo .scene-4 .picture-2:before {
            top: 62px; left: 6px;
            width: 4px; height: 5px;
            background: #32283F;
            box-shadow: 8px 0 0 0 #32283F, 12px 0 0 0 #32283F, 20px 0 0 0 #32283F, 24px 0 0 0 #32283F, 
            28px 0 0 0 #32283F, 32px 0 0 0 #32283F, 36px 0 0 0 #32283F, 40px 0 0 0 #32283F, 
            44px 0 0 0 #32283F, 44px 8px 0 0 #32283F, 40px 8px 0 0 #32283F, 36px 8px 0 0 #32283F, 
            8px -8px 0 0 #32283F, 12px -8px 0 0 #32283F, 16px -8px 0 0 #32283F, 24px -8px 0 0 #32283F, 
            32px -8px 0 0 #32283F, 36px -8px 0 0 #32283F, 40px -8px 0 0 #32283F, 43px -8px 0 0 #32283F, 
            4px -16px 0 0 #32283F, 8px -16px 0 0 #32283F, 12px -16px 0 0 #32283F, 16px -16px 0 0 #32283F, 
            20px -16px 0 0 #32283F, 28px -16px 0 0 #32283F, 32px -16px 0 0 #32283F, 36px -16px 0 0 #32283F, 
            40px -16px 0 0 #32283F, 12px -28px 0 0 #32283F, 16px -28px 0 0 #32283F, 20px -28px 0 0 #32283F, 
            24px -28px 0 0 #32283F, 28px -28px 0 0 #32283F, 32px -28px 0 0 #32283F, 34px -28px 0 0 #32283F, 
            12px -24px 0 0 #32283F, 16px -24px 0 0 #32283F, 20px -24px 0 0 #32283F, 24px -24px 0 0 #32283F, 
            28px -24px 0 0 #32283F, 32px -24px 0 0 #32283F, 34px -24px 0 0 #32283F;
        }
        #equipo .scene-4 .picture-2:after {
            top: 9px; left: 23px;
            width: 7px; height: 7px;
            border: 4px solid #32283F;
            transform: rotate(45deg);
        }
        #equipo .scene-4 .picture-3 {
            top: -30px; left: 138px;
            width: 53px; height: 74px;
            background: #6B8439;
            border: 10px solid #314339;
        }
        #equipo .scene-4 .picture-4 {
            top: 79px; left: 138px;
            width: 164px; height: 86px;
            background: #AEAB21;
            border: 12px solid #424242;
            box-shadow: inset 0 0 0 14px #D0C821;
        }
        #equipo .scene-4 .picture-4:before {
            top: 26px; left: 102px;
            width: 35px; height: 35px;
            background: linear-gradient(-45deg, #9B9C21 50%, #737B21 50%);
            border-radius: 100% 0;
            transform: rotate(-45deg);
            box-shadow: -27px -27px 0 0 #737B21;
        }
        #equipo .scene-4 .picture-4:after {
            top: 26px; left: 26px;
            width: 35px; height: 35px;
            background: linear-gradient(-45deg, #737B21 50%, #9B9C21 50%);
            border-radius: 100% 0;
            transform: rotate(-45deg);
        }
        #equipo .scene-4 .picture-5 {
            top: 26px; left: 225px;
            width: 26px; height: 26px;
            background: #435A3A;
            border: 6px solid #32283F;
        }
        #equipo .scene-4 .picture-5:before {
            top: 7px; left: 7px;
            width: 11px; height: 11px;
            background: #9B9C21;
            transform: rotate(45deg);
        }
        #equipo .scene-4 .picture-5:after {
            top: -43px; left: -5px;
            width: 25px; height: 10px;
            background: #435A3A;
            border: 6px solid #32283F;
        }
        #equipo .scene-4 .picture-6 {
            top: -30px; left: 276px;
            width: 310px; height: 55px;
            background: #5A6222;
            border: 12px solid #5A6222;
            box-shadow: inset 0 0 0 12px #737B21;
        }
        #equipo .scene-4 .picture-6:before {
            top: 6px; left: 23px;
            width: 30px; height: 30px;
            background: #737B21;
            border-radius: 90% 0;
            box-shadow: 103px 0 0 0 #737B21, 206px 0 0 0 #737B21;
        }
        #equipo .scene-4 .picture-6:after {
            top: 6px; left: 52px;
            width: 30px; height: 30px;
            background: #737B21;
            border-radius: 0 90%;
            box-shadow: 103px 0 0 0 #737B21, 206px 0 0 0 #737B21;
        }
        #equipo .scene-4 .picture-7 {
            top: 64px; left: 552px;
            width: 112px; height: 64px;
            background: linear-gradient(to right, #6B8439 45%, #435A3A 46%, #435A3A 55%, #6B8439 56%);
            border: 12px solid #32283F;
            box-shadow: inset 0 0 0 12px #435A3A;
        }
        #equipo .scene-4 .picture-7:before {
            top: 18px; left: 17px;
            width: 14px; height: 14px;
            background: #314339;
            border-radius: 50%;
            box-shadow: 14px 0 0 0 #314339, 14px 14px 0 0 #314339, 0 14px 0 0 #314339, 49px 0 0 0 #314339, 49px 14px 0 0 #314339, 63px 14px 0 0 #314339, 63px 0 0 0 #314339;
        }
        #equipo .scene-4 .picture-7:after {
            top: -100px; left: 62px;
            width: 190px; height: 51px;
            background: #314339;
            border: 11px solid #32283F;
            box-shadow: inset 0 0 0 12px #6B8439;
        }
        #equipo .scene-4 .picture-8 {
            top: 64px; left: 702px;
            width: 120px; height: 97px;
            background: #9B9C21;
            border: 15px solid #314339;
            box-shadow: inset 0 0 0 12px #D0BD21;
        }
        #equipo .scene-4 .picture-8:before {
            top: 85px; left: -624px;
            width: 10px; height: 4px;
            background: #32283F;
            box-shadow: -2px 8px 0 0 #32283F;
            transform: skewX(-27deg);
        }
        #equipo .scene-4 .picture-8:after {
            top: 85px; left: -663px;
            width: 10px; height: 4px;
            background: #32283F;
            box-shadow: 2px 8px 0 0 #32283F;
            transform: skewX(27deg);
        }
        #equipo .scene-4 .bookshelf {
            top: 266px; left: 555px;
            width: 320px; height: 294px;
            background: linear-gradient(#314339 9%, #435A3A 9%, #435A3A 35%, #4A6B39 35%, #4A6B39 38%, #314339 38%, #314339 48%, #435A3A 48%, #435A3A 68%, #4A6B39 68%, #4A6B39 71.5%, #314339 72%, #314339 81%, #435A3A 81%);
            border: 12px solid #537A39;
        }
        #equipo .scene-4 .bookshelf:before {
            top: 10px; left: 168px;
            width: 28px; height: 92px;
            background: #FFFFFF;
            box-shadow: -8px 0 0 0 #436B94, inset 0 22px 0 10px #528CB5, inset 0 0 0 10px #528CB5;
        }
        #equipo .scene-4 .bookshelf:after {
            top: 10px; left: 204px;
            width: 28px; height: 92px;
            background: #FFFFFF;
            box-shadow: -8px 0 0 0 #737B21, inset 0 22px 0 10px #9B9C21, inset 0 0 0 10px #9B9C21;
        }
        #equipo .scene-4 .photo {
            top: 306px; left: 629px;
            width: 35px; height: 56px;
            background: #6B8439;
            border: 9px solid #32283F;
            overflow: hidden;
        }
        #equipo .scene-4 .photo:before {
            top: 10px; left: 7px;
            width: 18px; height: 18px;
            background: #ACB752;
            border-radius: 50%;
        }
        #equipo .scene-4 .photo:after {
            top: 32px; left: -7px;
            border-left: 20px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 19px solid #314339;
            box-shadow: 20px 7px 0 -7px #314339;
        }
        #equipo .scene-4 .books-1 {
            top: 416px; left: 574px;
            width: 64px; height: 10px;
            background: #9B9C21;
            box-shadow: 0 4px 0 0 #737B21, 0 14px 0 0 #E7BD39, 0 16px 0 0 #E7BD39, 0 22px 0 0 #C47533, 0 32px 0 0 #C65A84, 0 35px 0 0 #C65A84, 0 40px 0 0 #873E5E, 0 46px 0 0 #424242, 0 52px 0 0 #211821;
        }
        #equipo .scene-4 .books-1:before {
            top: 14px; left: 48px;
            width: 8px; height: 12px;
            background: #C47533;
        }
        #equipo .scene-4 .books-1:after {
            top: 38px; left: 8px;
            width: 48px; height: 7px;
            background: #873E5E;
        }
        #equipo .scene-4 .books-2 {
            top: 448px; left: 652px;
            width: 6px; height: 30px;
            background: #2B242C;
            box-shadow: 11px -5px 0 5px #9B9C21, 
            27px -5px 0 5px #6B8439, 27px -13px 0 5px #6B8439, 
            33px -13px 0 5px #314339, 33px -5px 0 5px #314339, 
            53px -9px 0 9px #528CB5, 53px -17px 0 9px #528CB5, 
            73px -5px 0 5px #E7BD39, 73px -27px 0 5px #E7BD39, 
            79px -27px 0 5px #C47533, 79px -5px 0 5px #C47533, 
            95px -5px 0 5px #9B9C21, 95px -35px 0 5px #9B9C21, 
            101px -35px 0 5px #737B21, 101px -5px 0 5px #737B21, 
            114px -3px 0 2px #704946, 114px -34px 0 2px #704946, 114px -47px 0 2px #704946, 
            124px -47px 0 2px #563636, 124px -16px 0 2px #563636, 124px -2px 0 2px #563636, 
            134px -38px 0 2px #E7BD39, 134px -12px 0 2px #E7BD39, 
            157px -25px 0 25px #C47533;
        }
        #equipo .scene-4 .books-2:before {
            top: -13px; left: 29px;
            width: 14px; height: 9px;
            background: #314339;
            box-shadow: 15px -8px 0 0 #526B94, 15px 30px 0 0 #526B94, 
            25px -8px 0 0 #526B94, 25px 30px 0 0 #526B94, 
            39px 34px 0 0 #C47533, 47px 34px 0 0 #C47533, 
            47px -19px 0 0 #C47533, 39px -19px 0 0 #C47533, 
            60px -21px 0 -1px #737B21, 70px -21px 0 -1px #737B21, 
            70px 28px 0 -1px #737B21, 60px 28px 0 -1px #737B21, 
            81px 32px 0 -2px #563636, 81px -32px 0 -2px #563636;
        }
        #equipo .scene-4 .books-2:after {
            top: 56px; left: 44px;
            width: 49px; height: 12px;
            background: #528CB5;
            box-shadow: 19px 0 0 0 #528CB5, 
            9px 8px 0 0 #526B94, 
            9px 20px 0 0 #528CB5, 9px 22px 0 0 #528CB5, 
            2px 34px 0 0 #424242, 46px 34px 0 0 #424242, 66px 34px 0 0 #424242, 
            10px 42px 0 0 #2B242C, 58px 42px 0 0 #2B242C, 
            10px 53px 0 0 #424242, 59px 53px 0 0 #424242, 59px 56px 0 0 #424242, 10px 56px 0 0 #424242;
        }
        #equipo .scene-4 .books-3 {
            top: 504px; left: 570px;
            width: 28px; height: 68px;
            box-sizing: border-box;
            background: #FFFFFF;
            box-shadow: -3px 0 0 0 #737B21, inset 0 26px 0 0 #9B9C21, inset 0 0 0 10px #9B9C21;
        }
        #equipo .scene-4 .books-3:before {
            top: 0px; left: 31px;
            width: 28px; height: 68px;
            box-sizing: border-box;
            background: #FFFFFF;
            box-shadow: -3px 0 0 0 #436B94, inset 0 26px 0 0 #528CB5, inset 0 0 0 10px #528CB5;
        }
        #equipo .scene-4 .books-3:after {
            top: 0px; left: 62px;
            width: 28px; height: 68px;
            box-sizing: border-box;
            background: #FFFFFF;
            box-shadow: -3px 0 0 0 #873E5E, inset 0 26px 0 0 #C65A84, inset 0 0 0 10px #C65A84;
        }
        #equipo .scene-4 .commode {
            top: 408px; left: 0px;
            width: 268px; height: 14px;
            background: #4C7339;
        }
        #equipo .scene-4 .commode:before {
            top: 14px; left: 12px;
            width: 242px; height: 108px;
            background: #4A6B39;
            box-shadow: inset 0 14px 0 0 #435A3A;
        }
        #equipo .scene-4 .commode:after {
            top: 122px; left: 12px;
            width: 12px; height: 53px;
            background: #4A6B39;
            box-shadow: 230px 0 0 0 #4A6B39;
        }
        #equipo .scene-4 .commode__box {
            top: 25px; left: 23px;
            width: 105px; height: 37px;
            background: #6B8439;
            box-shadow: 0 6px 0 0 #435A3A, 114px 0 0 0 #6B8439, 114px 6px 0 0 #435A3A, 
            0 49px 0 0 #6B8439, 100px 49px 0 0 #6B8439, 114px 49px 0 0 #6B8439, 
            0 54px 0 0 #435A3A, 100px 54px 0 0 #435A3A, 114px 54px 0 0 #435A3A;
        }
        #equipo .scene-4 .commode__box:before {
            top: 13px; left: 33px;
            width: 40px; height: 12px;
            background: #E7BD39;
            box-shadow: 0 6px 0 0 #4A6B39, 114px 0 0 0 #E7BD39, 114px 6px 0 0 #4A6B39, 57px 44px 0 0 #E7BD39, 57px 50px 0 0 #4A6B39;
        }
        #equipo .scene-4 .commode__box:after {
            top: -73px; left: -11px;
            width: 108px; height: 48px;
            background: #424242;
            border-radius: 10px 10px 0 0;
            box-shadow: inset 0 16px 0 0 #5A595A;
        }
        #equipo .scene-4 .printer {
            top: -43px; left: 25px;
            width: 9px; height: 5px;
            background: #97B04E;
        }
        #equipo .scene-4 .printer:before {
            top: 0px; left: 15px;
            width: 8px; height: 5px;
            background: #528CB5;
        }
        #equipo .scene-4 .printer:after {
            top: 22px; left: 19px;
            width: 46px; height: 9px;
            background: #528CB5;
        }
        #equipo .scene-4 .table {
            top: 332px; left: 124px;
            width: 274px; height: 12px;
            background: #E7BD39;
        }
        #equipo .scene-4 .table:before {
            top: 12px; left: 16px;
            width: 212px; height: 12px;
            background: #211821;
        }
        #equipo .scene-4 .table:after {
            top: 24px; left: 36px;
            width: 14px; height: 222px;
            background: #211821;
        }
        #equipo .scene-4 .table__leg {
            top: 239px; left: 36px;
            width: 136px; height: 12px;
            background: #211821;
        }
        #equipo .scene-4 .table__leg:before {
            top: -243px; left: 55px;
            width: 12px; height: 150px;
            background: #211821;
            transform: rotate(45deg);
        }
        #equipo .scene-4 .table__leg:after {
            top: -261px; left: -12px;
            width: 88px; height: 22px;
            background: #2B242C;
        }
        #equipo .scene-4 .plant {
            top: -36px; left: 10px;
            width: 52px; height: 10px;
            background: #704946;
        }
        #equipo .scene-4 .plant:before {
            top: 10px; left: 8px;
            width: 38px; height: 26px;
            background: linear-gradient(#5A3942 21%, #704946 22%, #704946 80%, #5A3942 81%);
            border-radius: 0 0 10px 10px;
        }
        #equipo .scene-4 .plant:after {
            top: -48px; left: 10px;
            width: 28px; height: 48px;
            background: linear-gradient(to right, #435A3A 50%, #737B21 51%);
            border-radius: 20px 20px 0 0;
        }
        #equipo .scene-4 .plant__flower {
            top: -70px; left: 48px;
            width: 10px; height: 26px;
            background: #435A3A;
            border-radius: 10px 10px 20px 0;
        }
        #equipo .scene-4 .plant__flower:before {
            top: 14px; left: -7px;
            width: 12px; height: 12px;
            background: #435A3A;
            border-radius: 50%;
        }
        #equipo .scene-4 .plant__flower:after {
            top: -25px; left: -23px;
            width: 8px; height: 8px;
            background: #BC6B3A;
            border: 5px solid #E7BD39;
            transform: rotate(45deg);
        }
        #equipo .scene-4 .monitor {
            top: -22px; left: 69px;
            width: 63px; height: 22px;
            box-sizing: border-box;
            border-left: 10px solid #424242;
            border-bottom: 10px solid #424242;
            border-radius: 0 0 0 19px;
        }
        #equipo .scene-4 .monitor:before {
            top: -85px; left: 10px;
            width: 20px; height: 104px;
            box-sizing: border-box;
            border-left: 10px solid #424242;
            border-bottom: 10px solid #424242;
            border-radius: 0 0 0 30px;
            transform-origin: 0 0;
            transform: rotate(14deg);
        }
        #equipo .scene-4 .monitor:after {
            top: -163px; left: -26px;
            width: 24px; height: 175px;
            background: #D6D6D5;
            box-shadow: inset -12px 0 0 0 #424242;
            border-radius: 100% 0 0 100%;
            transform-origin: 0 0;
            transform: rotate(-24deg);
        }
        #equipo .scene-4 .keyboard {
            top: -20px; left: 161px;
            width: 20px; height: 20px;
            background: #424242;
            border: 5px solid #D6D6D5;
            box-sizing: border-box;
            border-radius: 50%;
        }
        #equipo .scene-4 .keyboard:before {
            top: -4px; left: 11px;
            width: 50px; height: 8px;
            background: #D6D6D5;
            transform-origin: 0 0;
            transform: rotate(13deg);
            box-shadow: -1px -5px 0 -2px #424242;
        }
        #equipo .scene-4 .keyboard:after {
            top: -170px; left: -87px;
            width: 5px; height: 153px;
            background: #FFFFFF;
            transform-origin: 0 0;
            transform: rotate(-24deg);
        }
        #equipo .scene-4 .chair {
            top: 556px; left: 386px;
            width: 196px; height: 15px;
            background: #211821;
            border-radius: 10px 10px 0 0;
            transform: translateX(0);
            animation: sceneFourChair 10s ease infinite;
        }
        #equipo .scene-4 .chair:after {
            top: -96px; left: 87px;
            width: 23px; height: 10px;
            background: #211821;
            box-shadow: 0 10px 0 0 #424242, 0 20px 0 0 #211821, 0 30px 0 0 #424242, 0 40px 0 0 #211821, 0 50px 0 0 #424242, 0 60px 0 0 #211821, 0 70px 0 0 #424242, 0 80px 0 0 #211821, 0 86px 0 0 #424242, 6px 43px 0 0 #211821;
        }
        #equipo .scene-4 .chair:before {
            top: -140px; left: 22px;
            width: 155px; height: 44px;
            background: linear-gradient(#F7AD39 59%, #BC6B3A 60%);
            border-radius: 50px;
        }
        #equipo .scene-4 .chair__legs {
            top: 15px; left: 8px;
            width: 18px; height: 12px;
            background: #211821;
            box-shadow: 166px 0 0 0 #211821;
        }
        #equipo .scene-4 .chair__legs:before {
            top: -79px; left: 108px;
            width: 10px; height: 32px;
            background: #211821;
        }
        #equipo .scene-4 .chair__legs:after {
            top: -323px; left: 140px;
            width: 100px; height: 212px;
            box-sizing: border-box;
            border-radius: 0 20px 74px 0;
            border-right: 20px solid #211821;
            border-bottom: 20px solid #211821;
        }
        #equipo .scene-4 .chair__back {
            top: -374px; left: 184px;
            width: 44px; height: 147px;
            background: #F7AD39;
            border-radius: 25px;
        }
        #equipo .scene-4 .chair__back:before {
            top: 100px; left: 7px;
            width: 44px; height: 117px;
            background: #F7AD39;
            border-radius: 25px;
            transform-origin: 0 0;
            transform: rotate(17deg);
        }
        #equipo .scene-4 .girl {
            top: -467px; left: 43px;
            width: 120px; height: 340px;
            transform: translateX(0);
        }
        #equipo .scene-4 .girl:before {
            top: 475px; left: -186px;
            width: 10px; height: 10px;
            background: #F7C6A5;
            border-radius: 4px 0 0;
            transform: translateX(0);
            animation: sceneFourGirlToe 10s ease infinite;
        }
        #equipo .scene-4 .girl:after {
            top: 453px; left: -36px;
            width: 12px; height: 14px;
            background: #FFD6B5;
            border-radius: 10px 0 0 0;
        }
        #equipo .scene-4 .girl__neck {
            top: 77px; left: 70px;
            width: 17px; height: 50px;
            background: linear-gradient(-45deg, #FFD6B5 58%, #DAAA8A 59%);
            transform-origin: bottom left;
            transform: rotate(3deg);
        }
        #equipo .scene-4 .girl__neck:before {
            top: 51px; left: -6px;
            width: 22px; height: 18px;
            background: #ffffff;
            transform-origin: bottom left;
            transform: skewY(-43deg);
        }
        #equipo .scene-4 .girl__neck:after {
            top: 74px; left: -15px;
            width: 29px; height: 38px;
            background: #424242;
            transform-origin: bottom left;
            transform: skewY(-37deg);
        }
        #equipo .scene-4 .girl__body {
            top: 170px; left: 44px;
            width: 40px; height: 84px;
            background: #424242;
            border-radius: 20px 0 0 0;
        }
        #equipo .scene-4 .girl__body:before {
            top: -8px; left: -2px;
            width: 30px; height: 42px;
            background: #424242;
            transform: rotate(33deg);
            border-radius: 0 0 0 20px / 0 0 0 8px;
        }
        #equipo .scene-4 .girl__body:after {
            top: 84px; left: 0px;
            width: 55px; height: 85px;
            background: #325385;
            border-radius: 0 17px 42px 0 / 0 36px 42px 0;
            box-shadow: inset 0 -123px 0 -50px #528CB5;
        }
        #equipo .scene-4 .girl__head { 
            top: -10px; left: 32px;
            width: 56px; height: 110px;
            background: #FFD6B5;
            border-radius: 39px 0 32px 12px;
            transform-origin: bottom right;
            transform: rotate(5deg);
            animation: sceneFourGirlHead 10s ease infinite;
        }
        #equipo .scene-4 .girl__head:before {
            top: 63px; left: -20px;
            width: 21px; height: 13px;
            background: #FFD6B5;
            border-radius: 0 0 0 16px;
        }
        #equipo .scene-4 .girl__head:after {
            top: 73px; left: -5px;
            width: 7px; height: 15px;
            background: #FFD6B5;
            border-radius: 0 0 0 20px;
            border-bottom: 2px solid #DAAA8A;
        }
        #equipo .scene-4 .girl__hair {
            top: 0px; left: 30px;
            width: 40px; height: 60px;
            box-sizing: border-box;
            background: #FFD639;
            border-radius: 4px 12px 0 24px;
            border-left: 9px solid #F7AD39;
            border-bottom: 9px solid #F7AD39;
        }
        #equipo .scene-4 .girl__hair:before {
            top: 0px; left: 16px;
            width: 47px; height: 240px;
            background: #F7AD39;
            border-radius: 0 60px 50px 8px;
            box-shadow: inset -11px 39px 0 11px #FFD639;
        }
        #equipo .scene-4 .girl__hair:after {
            top: 0px; left: 16px;
            width: 12px; height: 60px;
            background: #F7647B;
            border-radius: 2px 4px 0 0;
        }
        #equipo .scene-4 .girl__face {
            top: 53px; left: 55px;
            width: 16px; height: 25px;
            background: #FFD6B5;
            border-radius: 10px 10px 16px 0;
        }
        #equipo .scene-4 .girl__face:before {
            top: -1px; left: -47px;
            width: 5px; height: 8px;
            background: #2B242C;
            border-radius: 4px;
        }
        #equipo .scene-4 .girl__face:after {
            top: -10px; left: -49px;
            width: 17px; height: 7px;
            background: #F7AD39;
            border-radius: 4px;
            transform-origin: bottom right;
            transform: rotate(23deg);
        }
        #equipo .scene-4 .girl__back-arm { 
            top: 148px; left: 40px;
            width: 18px; height: 90px;
            background: #F7C6A5;
            border-radius: 0 0 0 7px;
            transform-origin: bottom right;
            transform: rotate(-30deg) translate(0, 0);
            animation: sceneFourGirlBackArm 10s ease infinite;
        }
        #equipo .scene-4 .girl__back-arm:before {
            top: -27px; left: -26px;
            width: 30px; height: 29px;
            background: #D6947B;
            border-radius: 30px 0 0 20px;
            transform-origin: bottom right;
            transform: rotate(30deg);
        }
        #equipo .scene-4 .girl__back-arm:after {
            top: -20px; left: -15px;
            width: 20px; height: 9px;
            background: #F7C6A5;
            border-radius: 4px 0 0 4px;
            transform-origin: bottom right;
            transform: rotate(30deg);
        }
        #equipo .scene-4 .girl__back-arm .girl__palm {
            top: -54px; left: -18px;
            width: 6px; height: 36px;
            background: #875A4F;
            border-radius: 2px;
            transform-origin: bottom left;
            transform: rotate(48deg);
        }
        #equipo .scene-4 .girl__back-arm .girl__palm:before {
            top: 3px; left: 11px;
            width: 20px; height: 20px;
            background: #F7C6A5;
            border-radius: 0px 30px 0 10px;
            transform-origin: bottom left;
            transform: rotate(29deg);
        }
        #equipo .scene-4 .girl__back-arm .girl__palm:after {
            top: 16px; left: 20px;
            width: 19px; height: 14px;
            background: #F7C6A5;
            transform: rotate(44deg);
        }
        #equipo .scene-4 .girl__front-arm {
            top: 126px; left: 72px;
            width: 25px; height: 140px;
            background: #FFD6B5;
            border-radius: 13px;
            transform-origin: 12px 12px;
            transform: rotate(4deg);
            animation: sceneFourGirlFrontArm 10s ease infinite;
        }
        #equipo .scene-4 .girl__forearm {
            top: 120px; left: 2px;
            width: 20px; height: 137px;
            background: #FFD6B5;
            border-radius: 10px;
            transform-origin: 10px 10px;
            transform: rotate(121deg);
            animation: sceneFourGirlForearm 10s ease infinite;
        }
        #equipo .scene-4 .girl__forearm:before {
            top: 120px; left: -3px;
            width: 21px; height: 29px;
            background: #DAAA8A;
            border-radius: 2px 4px 14px;
        }
        #equipo .scene-4 .girl__forearm:after {
            top: 134px; left: 2px;
            width: 7px; height: 24px;
            background: #FFD6B5;
            border-radius: 4px;
            box-shadow: 6px -18px 0 0 #FFD6B5, 10px -22px 0 0 #FFD6B5, -1px -22px 0 0 #FFD6B5;
        }
        #equipo .scene-4 .girl__skirt {
            top: 284px; left: -40px;
            width: 139px; height: 55px;
            box-sizing: border-box;
            background: #528CB5;
            border-radius: 0 0 42px 0;
            border-bottom: 10px solid #436B94;
        }
        #equipo .scene-4 .girl__skirt:before {
            top: 31px; left: -84px;
            width: 84px; height: 23px;
            background: #F7C6A5;
            border-radius: 12px 0 0 12px;
        }
        #equipo .scene-4 .girl__skirt:after {
            top: 6px; left: -94px;
            width: 94px; height: 30px;
            background: #FFD6B5;
            border-radius: 15px 0 0 15px;
        }
        #equipo .scene-4 .girl__back-leg {
            top: 315px; left: -124px;
            width: 20px; height: 157px;
            border-radius: 10px;
            background: #F7C6A5;
            transform-origin: 10px 10px;
            transform: rotate(15deg);
            animation: sceneFourGirlBackLeg 10s ease infinite;
        }
        #equipo .scene-4 .girl__back-leg:before {
            top: 137px; left: 1px;
            width: 26px; height: 26px;
            border-radius: 50%;
            background: #F7C6A5;
        }
        #equipo .scene-4 .girl__back-leg:after {
            top: 143px; left: 0px;
            width: 20px; height: 38px;
            background: #F7C6A5;
            border-radius: 0 0 30px 0;
            transform-origin: 0 0;
            transform: rotate(23deg);
            animation: sceneFourGirlFoot 10s ease infinite;
        }
        #equipo .scene-4 .girl__front-leg { 
            top: 292px; left: -135px;
            width: 22px; height: 186px;
            background: #FFD6B5;
            border-radius: 11px;
            transform-origin: 11px 11px;
            transform: rotate(-41.7deg);
        }
        #equipo .scene-4 .girl__front-leg:before {
            top: 165px; left: 1px;
            width: 26px; height: 26px;
            border-radius: 50%;
            background: #FFD6B5;
        }
        #equipo .scene-4 .girl__front-leg:after {
            top: 170px; left: 0px;
            width: 20px; height: 38px;
            background: #FFD6B5;
            transform-origin: 0 0;
            transform: rotate(40deg);
        }
        #equipo .scene-4 .teacup {
            top: 138px; left: -18px;
            width: 21px; height: 36px;
            background: #704946;
            border-radius: 0 16px 16px 0;
            transform-origin: 0 0;
            transform: rotate(-35deg);
            animation: sceneFourGirlTeacup 10s ease infinite;
        }
        #equipo .scene-4 .teacup:before { 
            top: 24px; left: -16px;
            width: 17px; height: 9px;
            background: #D0BD21;
            border-radius: 10px;
            box-shadow: 2px -22px 0 -2px #D0BD21;
            animation: sceneFourGirlTeacupSteam 1s ease infinite;
        }
        #equipo .scene-4 .teacup:after {
            top: 14px; left: -36px;
            width: 13px; height: 7px;
            background: #D0BD21;
            border-radius: 4px;
            box-shadow: -23px -10px 0 1px #D0BD21;
            animation: sceneFourGirlTeacupSteam 1s ease infinite;
            animation-delay: .2s;
        }
        #equipo .scene-4 .bg-1 {
            top: 50px; left: 0px;
            width: 870px; height: 164px;
            background: #9B9C21;
            border-radius: 0 68px 68px 0;
            animation: sceneFourLeft 10s ease infinite;
        }
        #equipo .scene-4 .bg-1:before {
            top: 164px; left: 0px;
            width: 1026px; height: 164px;
            background: #9B9C21;
            border-radius: 0 72px 72px 0;
        }
        #equipo .scene-4 .bg-1:after {
            top: 532px; left: 0px;
            width: 1196px; height: 21px;
            background: #211821;
        }
        #equipo .scene-4 .bg-2 {
            width: 850px; height: 51px;
            background: #9B9C21;
            border-radius: 15px 0 0 15px;
            animation: sceneFourRight 10s ease infinite;
        }
        #equipo .scene-4 .bg-2:before {
            top: 374px; right: 0px;
            width: 850px; height: 220px;
            background: #848C21;
            border-radius: 74px 0 0 60px;
        }
        @keyframes sceneFourChair {
            0% 		{ transform: translateX(0); }
            60%  	{ transform: translateX(0); }
            62.4% 	{ transform: translateX(-5px); }
            63% 	{ transform: translateX(-9px); }
            63.6% 	{ transform: translateX(-15px); }
            64.2% 	{ transform: translateX(-23px); }
            64.8% 	{ transform: translateX(-29px); }
            65.4% 	{ transform: translateX(-35px); }
            66% 	{ transform: translateX(-41px); }
            66.6% 	{ transform: translateX(-45px); }
            67.2% 	{ transform: translateX(-47px); }
            67.8% 	{ transform: translateX(-49px); }
            69% 	{ transform: translateX(-51px); }
            70.2% 	{ transform: translateX(-49px); }
            71.4% 	{ transform: translateX(-45px); }
            72.6% 	{ transform: translateX(-37px); }
            73.8% 	{ transform: translateX(-25px); }
            75% 	{ transform: translateX(-13px); }
            76.2% 	{ transform: translateX(-3px); }
            78% 	{ transform: translateX(5px); }
            79.8% 	{ transform: translateX(5px); }
            81.6% 	{ transform: translateX(1px); }
            100% 	{ transform: translateX(1px); }
        }
        @keyframes sceneFourGirlHead {
            0% 		{ transform: rotate(5deg); }
            60% 	{ transform: rotate(5deg); }
            62.4% 	{ transform: rotate(6deg) translate(3px, 0px); }
            63.6% 	{ transform: rotate(8deg) translate(3px, 0px); }
            64.2% 	{ transform: rotate(8deg) translate(5px, 1px); }
            64.8% 	{ transform: rotate(8deg) translate(5px, 1px); }
            65.4% 	{ transform: rotate(8deg) translate(3px, 1px); }
            66.6% 	{ transform: rotate(8deg) translate(3px, 1px); }
            67.2% 	{ transform: rotate(8deg) translate(0px, 1px); }
            71.4% 	{ transform: rotate(8deg) translate(-2px, 1px); }
            72.6% 	{ transform: rotate(5deg) translate(-2px, 1px); }
            75% 	{ transform: rotate(3deg) translate(-2px, 1px); }
            76.2% 	{ transform: rotate(1deg) translate(-2px, 1px); }
            78% 	{ transform: rotate(-2deg) translate(-2px, 1px); }
            100% 	{ transform: rotate(-2deg) translate(-2px, 1px); }
        }
        @keyframes sceneFourGirlToe {
            0% 		{ transform: translateX(0); }
            60% 	{ transform: translateX(0); }
            62.4% 	{ transform: translateX(5px); }
            63% 	{ transform: translateX(9px); }
            63.6% 	{ transform: translateX(15px); }
            64.2% 	{ transform: translateX(23px); }
            64.8% 	{ transform: translateX(29px); }
            65.4% 	{ transform: translateX(34px); }
            66% 	{ transform: translateX(41px); }
            66.6% 	{ transform: translateX(45px); }
            67.2% 	{ transform: translateX(47px); }
            67.8% 	{ transform: translateX(49px); }
            69% 	{ transform: translateX(51px); }
            70.2% 	{ transform: translateX(49px); }
            71.4% 	{ transform: translateX(45px); }
            72.6% 	{ transform: translateX(37px); }
            73.8% 	{ transform: translateX(25px); }
            75% 	{ transform: translateX(13px); }
            76.2% 	{ transform: translateX(3px); }
            78% 	{ transform: translateX(-5px); }
            79.8% 	{ transform: translateX(-5px); }
            81.6% 	{ transform: translateX(-1px); }
            100% 	{ transform: translateX(-1px); }
        }
        @keyframes sceneFourGirlFoot {
            0% 		{ transform: rotate(23deg); }
            60% 	{ transform: rotate(23deg); }
            62.4% 	{ transform: rotate(29deg); }
            63% 	{ transform: rotate(32deg); }
            63.6% 	{ transform: rotate(32deg); }
            64.2% 	{ transform: rotate(42deg); }
            64.8% 	{ transform: rotate(42deg); }
            65.4% 	{ transform: rotate(47deg); }
            67.2% 	{ transform: rotate(47deg); }
            67.8% 	{ transform: rotate(53deg); }
            70.2% 	{ transform: rotate(53deg); }
            71.4% 	{ transform: rotate(45deg); }
            72.6% 	{ transform: rotate(45deg); }
            73.8% 	{ transform: rotate(39deg); }
            75% 	{ transform: rotate(29deg); }
            76.2% 	{ transform: rotate(26deg); }
            78% 	{ transform: rotate(21deg); }
            100% 	{ transform: rotate(21deg); }
        }
        @keyframes sceneFourGirlBackLeg {
            0% 		{ transform: rotate(15deg); }
            60% 	{ transform: rotate(15deg); }
            62.4% 	{ transform: rotate(12deg); }
            63% 	{ transform: rotate(10deg); }
            63.6% 	{ transform: rotate(8deg); }
            64.2% 	{ transform: rotate(4deg); }
            64.8% 	{ transform: rotate(2deg); }
            65.4% 	{ transform: rotate(0deg); }
            66% 	{ transform: rotate(-2deg); }
            66.6% 	{ transform: rotate(-4deg); }
            67.8% 	{ transform: rotate(-6deg); }
            69% 	{ transform: rotate(-7deg); }
            70.2% 	{ transform: rotate(-5deg); }
            71.4% 	{ transform: rotate(-3deg); }
            72.6% 	{ transform: rotate(0deg); }
            73.8% 	{ transform: rotate(5deg); }
            75% 	{ transform: rotate(10deg); }
            76.2% 	{ transform: rotate(14deg); }
            78% 	{ transform: rotate(17deg); }
            81.6% 	{ transform: rotate(15deg); }
            100% 	{ transform: rotate(15deg); }
        }
        @keyframes sceneFourGirlForearm {
            0% 		{ transform: rotate(121deg); }
            60% 	{ transform: rotate(121deg); }
            63% 	{ transform: rotate(123deg); }
            63.6% 	{ transform: rotate(126deg); }
            64.2% 	{ transform: rotate(129deg); }
            64.8% 	{ transform: rotate(131deg); }
            65.4% 	{ transform: rotate(134deg); }
            66% 	{ transform: rotate(136deg); }
            66.6% 	{ transform: rotate(135deg); }
            67.8% 	{ transform: rotate(135deg); }
            69% 	{ transform: rotate(134deg); }
            70.2% 	{ transform: rotate(131deg); }
            71.4% 	{ transform: rotate(128deg); }
            72.6% 	{ transform: rotate(124deg); }
            73.8% 	{ transform: rotate(121deg); }
            76.2% 	{ transform: rotate(121deg); }
            78% 	{ transform: rotate(119deg); }
            81.6% 	{ transform: rotate(120deg); }
            100% 	{ transform: rotate(120deg); }
        }
        @keyframes sceneFourGirlFrontArm {
            0% 		{ transform: rotate(4deg); }
            60% 	{ transform: rotate(4deg); }
            63.6% 	{ transform: rotate(1deg); }
            65.4% 	{ transform: rotate(1deg); }
            66% 	{ transform: rotate(4deg); }
            66.6% 	{ transform: rotate(6deg); }
            67.2% 	{ transform: rotate(8deg); }
            67.8% 	{ transform: rotate(10deg); }
            69% 	{ transform: rotate(14deg); }
            70.2% 	{ transform: rotate(17deg); }
            71.4% 	{ transform: rotate(20deg); }
            72.6% 	{ transform: rotate(23deg); }
            75% 	{ transform: rotate(22deg); }
            76.2% 	{ transform: rotate(21deg); }
            78% 	{ transform: rotate(17deg); }
            79.8% 	{ transform: rotate(11deg); }
            81.6% 	{ transform: rotate(5deg); }
            100% 	{ transform: rotate(5deg); }
        }
        @keyframes sceneFourGirlTeacup {
            0% 		{ transform: rotate(-35deg) translate(0px, 0px); }
            60% 	{ transform: rotate(-35deg) translate(0px, 0px); }
            63% 	{ transform: rotate(-36deg) translate(3px, -1px); }
            63.6% 	{ transform: rotate(-37deg) translate(0px, 2px); }
            64.2% 	{ transform: rotate(-39deg) translate(3px, 2px); }
            64.8% 	{ transform: rotate(-40deg) translate(2px, 2px); }
            65.4% 	{ transform: rotate(-44deg) translate(2px, 6px); }
            66% 	{ transform: rotate(-49deg) translate(2px, 8px); }
            66.6% 	{ transform: rotate(-49deg) translate(-1px, 7px); }
            67.2% 	{ transform: rotate(-53deg) translate(-1px, 9px); }
            67.8% 	{ transform: rotate(-54deg) translate(0px, 11px); }
            69% 	{ transform: rotate(-56deg) translate(1px, 12px); }
            70.2% 	{ transform: rotate(-56deg) translate(-2px, 12px); }
            71.4% 	{ transform: rotate(-57deg) translate(0px, 12px); }
            72.6% 	{ transform: rotate(-57deg) translate(1px, 10px); }
            73.8% 	{ transform: rotate(-54deg) translate(0px, 8px); }
            75% 	{ transform: rotate(-52deg) translate(0px, 8px); }
            76.2% 	{ transform: rotate(-51deg) translate(0px, 8px); }
            78% 	{ transform: rotate(-48deg) translate(-2px, 5px); }
            79.8% 	{ transform: rotate(-40deg) translate(1px, 1px); }
            81.6% 	{ transform: rotate(-35deg) translate(0px, -1px); }
            100% 	{ transform: rotate(-35deg) translate(0px, -1px); }
        }
        @keyframes sceneFourGirlBackArm {
            0% 		{ transform: rotate(-30deg) translate(0, 0); }
            60% 	{ transform: rotate(-30deg) translate(0, 0); }
            62.4% 	{ transform: rotate(-30deg) translate(1px, 2px); }
            63% 	{ transform: rotate(-31deg) translate(5px, 2px); }
            63.6% 	{ transform: rotate(-31deg) translate(9px, 2px); }
            64.2% 	{ transform: rotate(-32deg) translate(16px, 2px); }
            64.8% 	{ transform: rotate(-32deg) translate(20px, 0px); }
            65.4% 	{ transform: rotate(-32deg) translate(23px, -4px); }
            66% 	{ transform: rotate(-32deg) translate(27px, -9px); }
            66.6% 	{ transform: rotate(-32deg) translate(27px, -9px); }
            67.2% 	{ transform: rotate(-32deg) translate(27px, -15px); }
            67.8% 	{ transform: rotate(-31deg) translate(27px, -15px); }
            69% 	{ transform: rotate(-30deg) translate(27px, -15px); }
            70.2% 	{ transform: rotate(-30deg) translate(22px, -27px); }
            71.4% 	{ transform: rotate(-30deg) translate(17px, -31px); }
            72.6% 	{ transform: rotate(-30deg) translate(10px, -34px); }
            73.8% 	{ transform: rotate(-31deg) translate(7px, -34px); }
            76.2% 	{ transform: rotate(-30deg) translate(4px, -31px); }
            78% 	{ transform: rotate(-30deg) translate(0px, -22px); }
            79.8% 	{ transform: rotate(-31deg) translate(-2px, -14px); }
            81.6% 	{ transform: rotate(-31deg) translate(-2px, -5px); }
            100% 	{ transform: rotate(-31deg) translate(-2px, -5px); }
        }
        @keyframes sceneFourGirlTeacupSteam {
            0% 		{ transform: translateX(0px); opacity: 0; }
            50% 	{ transform: translateX(-10px); opacity: 1; }
            100% 	{ transform: translateX(-20px); opacity: 0; }
        }
        @keyframes sceneFourTop {
            0% 		{ transform: translateY(0px); }
            82.2% 	{ transform: translateY(0px); }
            87% 	{ transform: translateY(-260px); }
            100% 	{ transform: translateY(-260px); }
        }
        @keyframes sceneFourLeft {
            0% 		{ transform: translateX(0px); }
            79.8% 	{ transform: translateX(0px); }
            88.2% 	{ transform: translateX(-1198px); }
            100% 	{ transform: translateX(-1198px); }
        }
        @keyframes sceneFourRight {
            0% 		{ transform: translateX(0px); }
            81% 	{ transform: translateX(0px); }
            88.8% 	{ transform: translateX(850px); }
            100% 	{ transform: translateX(850px); }
        }
        @keyframes sceneFour {
            0% 		{ opacity: 0; z-index: 2; }
            10.2% 	{ opacity: 0; z-index: 2; }
            37.8% 	{ opacity: 0; z-index: 3; }
            54.5% 	{ opacity: 0; z-index: 3; }
            54.6% 	{ opacity: 1; z-index: 3; }
            61.8% 	{ opacity: 1; z-index: 4; }
            88.7% 	{ opacity: 1; z-index: 4; }
            88.8% 	{ opacity: 0; z-index: 1; }
            100% 	{ opacity: 0; z-index: 1; }
        }

        /* ===== Responsive adicional para que la animación escale bien ===== */
        @media (max-width: 900px){
            #equipo .wrap {
                transform: scale(.92);
            }
        }
        @media (max-width: 700px){
            #equipo .wrap {
                transform: scale(.78);
            }
        }
        @media (max-width: 520px){
            #equipo .wrap {
                transform: scale(.66);
            }
        }
        /* =========================================
           MOBILE RESPONSIVE FIXES
           ========================================= */
        @media (max-width: 768px) {
            /* Hero: hide overflow text labels that use px positions */
            .hero-section .container .wrapper .description-bottom {
                display: none;
            }
            .hero-section .container .wrapper .description-center {
                display: none;
            }
            /* Hero: wrapper adapts to screen */
            .hero-section .container .wrapper {
                width: 92vw;
                max-width: 400px;
            }
            /* Hero: wrapper-left hidden on small screens */
            .hero-section .container .wrapper-left {
                display: none;
            }
            /* Hero: buttons arrow reposition */
            .hero-section .container .buttons-arrow {
                bottom: 20px;
                right: 20px;
            }
        }

        @media (max-width: 480px) {
            /* Portafolio 3D: hint text */
            #portafolio-3d .text-overlay {
                font-size: 11px;
                padding: 12px;
                max-width: 180px;
            }
            /* Cinema: bigger cards on small mobile */
            .cinema-item {
                flex: 0 0 85vw;
            }
            /* Wall of work: slower marquee rows */
            .marquee-row {
                height: 18vh;
            }
            /* Sectores badges: smaller */
            .sectores-badge {
                font-size: 10px;
                padding: 5px 10px;
            }
        }

        /* =========================================
           NAV MÍNIMA (PAQUETE 1)
           ========================================= */
        .rs-nav {
            position: fixed; top: 0; left: 0; right: 0; z-index: 200;
            display: flex; align-items: center; justify-content: space-between;
            padding: 12px 24px;
            background: rgba(0,0,0,0.55);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-bottom: 1px solid var(--rs-gold-soft);
            font-family: var(--sub-font);
        }
        .rs-nav__brand {
            color: var(--rs-gold);
            font-weight: 700;
            letter-spacing: 2px;
            font-size: 14px;
            text-transform: uppercase;
        }
        .rs-nav__links {
            display: flex; gap: 22px; align-items: center;
            list-style: none; margin: 0; padding: 0;
        }
        .rs-nav__links a {
            color: var(--rs-text);
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1.5px;
            transition: color 0.25s ease;
        }
        .rs-nav__links a:hover { color: var(--rs-gold); }
        .rs-nav__cta {
            color: var(--rs-gold);
            border: 1px solid var(--rs-gold-soft);
            padding: 6px 14px;
            border-radius: 999px;
            font-size: 12px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            transition: background 0.25s ease, color 0.25s ease;
        }
        .rs-nav__cta:hover { background: var(--rs-gold); color: var(--rs-bg); }
        @media (max-width: 768px) {
            .rs-nav { padding: 10px 14px; }
            .rs-nav__brand { font-size: 12px; letter-spacing: 1px; }
            .rs-nav__links { gap: 12px; }
            .rs-nav__links a { font-size: 10px; letter-spacing: 1px; }
            .rs-nav__links li.rs-nav__hide-sm { display: none; }
            .rs-nav__cta { padding: 5px 10px; font-size: 10px; }
        }

        /* =========================================
           PAQUETE 3 — CONVERSIÓN
           ========================================= */

        /* CTA intermedios entre secciones (mid-CTA) */
        .rs-mid-cta {
            display: flex; justify-content: center; align-items: center;
            padding: 70px 24px;
            background: var(--rs-bg);
            border-top: 1px solid rgba(212,175,55,0.08);
            border-bottom: 1px solid rgba(212,175,55,0.08);
        }
        .rs-mid-cta__inner {
            display: flex; align-items: center; gap: 28px;
            max-width: 1100px; width: 100%;
            justify-content: space-between; flex-wrap: wrap;
        }
        .rs-mid-cta__text {
            font-family: var(--sub-font);
            font-size: clamp(18px, 2.2vw, 26px);
            color: var(--rs-text);
            text-transform: uppercase; letter-spacing: 1px;
            line-height: 1.2;
            margin: 0;
        }
        .rs-mid-cta__text em {
            color: var(--rs-gold); font-style: normal;
        }
        .rs-mid-cta__btn {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 14px 28px;
            background: var(--rs-gold); color: var(--rs-bg);
            border: 1px solid var(--rs-gold);
            border-radius: 999px;
            font-family: var(--sub-font);
            font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
            white-space: nowrap;
            transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .rs-mid-cta__btn:hover {
            background: transparent; color: var(--rs-gold); transform: translateY(-1px);
        }
        .rs-mid-cta__btn--ghost {
            background: transparent; color: var(--rs-gold);
        }
        .rs-mid-cta__btn--ghost:hover { background: var(--rs-gold); color: var(--rs-bg); }
        @media (max-width: 768px) {
            .rs-mid-cta { padding: 50px 18px; }
            .rs-mid-cta__inner { flex-direction: column; gap: 18px; text-align: center; }
            .rs-mid-cta__btn { width: 100%; justify-content: center; padding: 13px 22px; }
        }

        /* Capacidades (servicios) */
        #capacidades {
            background: var(--rs-bg);
            padding: 100px 24px 80px;
            position: relative;
        }
        #capacidades .cap-wrap { max-width: 1200px; margin: 0 auto; }
        #capacidades .cap-overline {
            font-family: var(--main-font); font-size: 11px;
            color: var(--rs-gold); letter-spacing: 3px; text-transform: uppercase;
            margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
        }
        #capacidades .cap-overline::before {
            content: ""; width: 28px; height: 1px; background: var(--rs-gold);
        }
        #capacidades .cap-title {
            font-family: var(--sub-font);
            font-size: clamp(28px, 4.2vw, 48px);
            color: var(--rs-text); text-transform: uppercase;
            line-height: 1.05; letter-spacing: 1px;
            margin: 0 0 14px; font-weight: 700; max-width: 900px;
        }
        #capacidades .cap-title em {
            color: var(--rs-gold); font-style: normal;
        }
        #capacidades .cap-subtitle {
            font-family: var(--main-font);
            font-size: clamp(14px, 1.4vw, 16px);
            color: var(--rs-muted); line-height: 1.5;
            margin: 0 0 48px; max-width: 720px;
        }
        #capacidades .cap-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
        }
        #capacidades .cap-card {
            background: linear-gradient(180deg, rgba(20,16,8,0.55), rgba(8,8,8,0.65));
            border: 1px solid var(--rs-gold-soft);
            border-radius: 14px;
            padding: 22px 20px 24px;
            display: flex; flex-direction: column; gap: 10px;
            transition: border-color 0.3s ease, transform 0.3s ease;
        }
        #capacidades .cap-card:hover {
            border-color: var(--rs-gold);
            transform: translateY(-3px);
        }
        #capacidades .cap-card__num {
            font-family: var(--main-font);
            font-size: 11px; color: rgba(255,255,255,0.4);
            letter-spacing: 2px;
        }
        #capacidades .cap-card__title {
            font-family: var(--sub-font);
            font-size: 18px; color: var(--rs-gold);
            text-transform: uppercase; letter-spacing: 1px;
            margin: 0; line-height: 1.1; font-weight: 700;
        }
        #capacidades .cap-card__text {
            font-family: var(--main-font);
            font-size: 13px; color: var(--rs-muted);
            line-height: 1.5; margin: 0;
        }
        @media (max-width: 1024px) {
            #capacidades .cap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
            #capacidades { padding: 70px 18px 60px; }
            #capacidades .cap-grid { grid-template-columns: 1fr; gap: 12px; }
            #capacidades .cap-card { padding: 18px 17px 20px; }
        }

        /* Cómo trabajamos (proceso) */
        #proceso {
            background: var(--rs-bg);
            padding: 90px 24px;
            position: relative;
        }
        #proceso .proc-wrap { max-width: 1200px; margin: 0 auto; }
        #proceso .proc-overline {
            font-family: var(--main-font); font-size: 11px;
            color: var(--rs-gold); letter-spacing: 3px; text-transform: uppercase;
            margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
        }
        #proceso .proc-overline::before {
            content: ""; width: 28px; height: 1px; background: var(--rs-gold);
        }
        #proceso .proc-title {
            font-family: var(--sub-font);
            font-size: clamp(28px, 4vw, 44px);
            color: var(--rs-text); text-transform: uppercase;
            line-height: 1.05; letter-spacing: 1px;
            margin: 0 0 48px; font-weight: 700;
        }
        #proceso .proc-steps {
            display: grid; grid-template-columns: repeat(5, 1fr);
            gap: 0; border-top: 1px solid var(--rs-gold-soft);
        }
        #proceso .proc-step {
            padding: 28px 22px 24px;
            border-right: 1px solid var(--rs-gold-soft);
            display: flex; flex-direction: column; gap: 10px;
        }
        #proceso .proc-step:last-child { border-right: none; }
        #proceso .proc-step__num {
            font-family: var(--sub-font);
            font-size: 14px; color: var(--rs-gold);
            letter-spacing: 2px;
        }
        #proceso .proc-step__title {
            font-family: var(--sub-font);
            font-size: 16px; color: var(--rs-text);
            text-transform: uppercase; letter-spacing: 1px;
            margin: 0; font-weight: 700;
        }
        #proceso .proc-step__text {
            font-family: var(--main-font);
            font-size: 12.5px; color: var(--rs-muted);
            line-height: 1.5; margin: 0;
        }
        @media (max-width: 900px) {
            #proceso .proc-steps { grid-template-columns: 1fr; }
            #proceso .proc-step { border-right: none; border-bottom: 1px solid var(--rs-gold-soft); padding: 20px 18px; }
            #proceso .proc-step:last-child { border-bottom: none; }
        }
        @media (max-width: 540px) {
            #proceso { padding: 60px 18px; }
        }

        /* Contacto rediseñado (Paquete 3) */
        #contacto .rs-contact-wrap {
            position: relative; z-index: 5;
            max-width: 1200px; margin: 0 auto;
            padding: 110px 24px 60px;
        }
        #contacto .rs-contact-head { margin-bottom: 40px; max-width: 760px; }
        #contacto .rs-contact-overline {
            font-family: var(--main-font); font-size: 11px;
            color: var(--rs-gold); letter-spacing: 3px; text-transform: uppercase;
            margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
        }
        #contacto .rs-contact-overline::before {
            content: ""; width: 28px; height: 1px; background: var(--rs-gold);
        }
        #contacto .rs-contact-title {
            font-family: var(--sub-font);
            font-size: clamp(28px, 4.4vw, 48px);
            color: var(--rs-text); text-transform: uppercase;
            line-height: 1.05; letter-spacing: 1px; margin: 0 0 18px;
            font-weight: 700;
        }
        #contacto .rs-contact-title em {
            color: var(--rs-gold); font-style: normal;
        }
        #contacto .rs-contact-sub {
            font-family: var(--main-font);
            font-size: clamp(14px, 1.4vw, 16px);
            color: var(--rs-muted); line-height: 1.55;
            margin: 0;
        }
        #contacto .rs-contact-grid {
            display: grid; grid-template-columns: 0.85fr 1.15fr;
            gap: 28px; align-items: start;
        }
        #contacto .rs-contact-channels {
            display: flex; flex-direction: column; gap: 14px;
        }
        #contacto .rs-channel {
            display: flex; align-items: center; gap: 14px;
            padding: 18px 20px;
            background: rgba(212,175,55,0.05);
            border: 1px solid var(--rs-gold-soft);
            border-radius: 14px;
            text-decoration: none; color: var(--rs-text);
            transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        #contacto .rs-channel:hover {
            background: rgba(212,175,55,0.1);
            border-color: var(--rs-gold);
            transform: translateY(-1px);
        }
        #contacto .rs-channel__icon {
            width: 38px; height: 38px;
            border-radius: 999px;
            background: rgba(212,175,55,0.12);
            color: var(--rs-gold);
            display: inline-flex; align-items: center; justify-content: center;
            flex-shrink: 0;
        }
        #contacto .rs-channel__icon i { width: 16px; height: 16px; }
        #contacto .rs-channel__label {
            font-family: var(--main-font); font-size: 11px;
            color: rgba(255,255,255,0.5); text-transform: uppercase;
            letter-spacing: 2px; margin-bottom: 3px;
        }
        #contacto .rs-channel__value {
            font-family: var(--sub-font); font-size: 16px;
            color: var(--rs-text); letter-spacing: 1px; text-transform: uppercase;
        }
        #contacto .rs-channel--wa .rs-channel__icon { color: #25D366; background: rgba(37,211,102,0.12); }
        #contacto .rs-contact-form {
            background: linear-gradient(180deg, rgba(20,16,8,0.55), rgba(8,8,8,0.65));
            border: 1px solid var(--rs-gold-soft);
            border-radius: 18px;
            padding: 30px 28px 26px;
        }
        #contacto .rs-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
        #contacto .rs-form-row--single { grid-template-columns: 1fr; }
        #contacto .rs-form-field { display: flex; flex-direction: column; gap: 6px; }
        #contacto .rs-form-field label {
            font-family: var(--main-font); font-size: 10px;
            color: rgba(255,255,255,0.55);
            text-transform: uppercase; letter-spacing: 2px;
        }
        #contacto .rs-form-field input,
        #contacto .rs-form-field select,
        #contacto .rs-form-field textarea {
            background: rgba(0,0,0,0.45);
            border: 1px solid var(--rs-gold-soft);
            border-radius: 10px;
            padding: 11px 14px;
            font-family: var(--main-font); font-size: 14px;
            color: var(--rs-text);
            outline: none;
            transition: border-color 0.2s ease, background 0.2s ease;
            width: 100%;
        }
        #contacto .rs-form-field textarea { resize: vertical; min-height: 110px; }
        #contacto .rs-form-field input:focus,
        #contacto .rs-form-field select:focus,
        #contacto .rs-form-field textarea:focus {
            border-color: var(--rs-gold);
            background: rgba(0,0,0,0.65);
        }
        #contacto .rs-form-field input.error,
        #contacto .rs-form-field select.error,
        #contacto .rs-form-field textarea.error {
            border-color: #d04848;
        }
        #contacto .rs-form-actions {
            display: flex; align-items: center; gap: 14px; margin-top: 6px;
            flex-wrap: wrap;
        }
        #contacto .rs-form-submit {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 14px 26px;
            background: var(--rs-gold); color: var(--rs-bg);
            border: 1px solid var(--rs-gold);
            border-radius: 999px;
            font-family: var(--sub-font);
            font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
            cursor: pointer;
            transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        #contacto .rs-form-submit:hover {
            background: transparent; color: var(--rs-gold); transform: translateY(-1px);
        }
        #contacto .rs-form-alt {
            font-family: var(--main-font); font-size: 12px;
            color: var(--rs-muted);
        }
        #contacto .rs-form-alt a { color: var(--rs-gold); text-decoration: underline; text-underline-offset: 3px; }
        #contacto .rs-form-status {
            margin-top: 12px;
            font-family: var(--main-font); font-size: 12.5px;
            color: var(--rs-muted); min-height: 1.2em;
        }
        #contacto .rs-form-status.ok { color: var(--rs-gold); }
        #contacto .rs-form-status.err { color: #ff8a8a; }
        @media (max-width: 900px) {
            #contacto .rs-contact-grid { grid-template-columns: 1fr; }
            #contacto .rs-contact-wrap { padding: 80px 18px 50px; }
            #contacto .rs-contact-form { padding: 22px 18px 20px; }
            #contacto .rs-form-row { grid-template-columns: 1fr; gap: 12px; margin-bottom: 12px; }
            #contacto .rs-form-actions { flex-direction: column; align-items: stretch; }
            #contacto .rs-form-submit { width: 100%; justify-content: center; padding: 13px 22px; }
            #contacto .rs-form-alt { text-align: center; }
        }
        /* Hide the legacy decorative donut copy block — kept canvas as ambient */
        #contacto .contact-subtle-title,
        #contacto .cta-central-mini { display: none !important; }

        /* Mobile contact FAB bar */
        .rs-fab {
            display: none;
            position: fixed; left: 12px; right: 12px; bottom: 12px;
            z-index: 220;
            background: rgba(0,0,0,0.78);
            border: 1px solid var(--rs-gold-soft);
            border-radius: 999px;
            padding: 6px;
            box-shadow: 0 14px 30px rgba(0,0,0,0.55);
            backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
        }
        .rs-fab__row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px; }
        .rs-fab__btn {
            display: inline-flex; align-items: center; justify-content: center; gap: 7px;
            padding: 10px 6px;
            border-radius: 999px;
            text-decoration: none;
            font-family: var(--main-font); font-size: 11px; letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--rs-text);
            transition: background 0.25s ease, color 0.25s ease;
        }
        .rs-fab__btn i { width: 14px; height: 14px; }
        .rs-fab__btn--call { color: var(--rs-gold); }
        .rs-fab__btn--call:hover, .rs-fab__btn--call:active { background: rgba(212,175,55,0.14); }
        .rs-fab__btn--wa { color: #25D366; }
        .rs-fab__btn--wa:hover, .rs-fab__btn--wa:active { background: rgba(37,211,102,0.14); }
        .rs-fab__btn--contact { background: var(--rs-gold); color: var(--rs-bg); }
        .rs-fab__btn--contact:hover { background: transparent; color: var(--rs-gold); }
        @media (max-width: 768px) {
            .rs-fab { display: block; }
            /* Add safe bottom space so FAB doesn't cover the footer strip */
            #contacto .rs-contact-wrap { padding-bottom: 90px; }
        }
        /* Hide FAB when lightbox is open to avoid overlapping the CTA */
        body.lb-open .rs-fab { display: none !important; }

        /* =========================================
           SECTORES — Navegación (dots + flechas)
           ========================================= */
        .sectores-nav {
            position: absolute; left: 50%; bottom: 28px; transform: translateX(-50%);
            z-index: 10;
            display: flex; align-items: center; gap: 18px;
            padding: 10px 18px;
            background: rgba(0,0,0,0.55);
            border: 1px solid var(--rs-gold-soft);
            border-radius: 999px;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            pointer-events: auto;
            box-shadow: 0 12px 30px rgba(0,0,0,0.5);
        }
        .sectores-nav__arrow {
            width: 34px; height: 34px;
            display: inline-flex; align-items: center; justify-content: center;
            background: transparent;
            color: var(--rs-gold);
            border: 1px solid var(--rs-gold-soft);
            border-radius: 999px;
            cursor: pointer;
            transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .sectores-nav__arrow:hover {
            background: var(--rs-gold);
            color: var(--rs-bg);
            transform: translateY(-1px);
        }
        .sectores-nav__dots {
            display: inline-flex; gap: 8px; align-items: center;
        }
        .sectores-nav__dot {
            width: 8px; height: 8px;
            padding: 0; margin: 0;
            border: 1px solid var(--rs-gold-soft);
            background: transparent;
            border-radius: 999px;
            cursor: pointer;
            transition: width 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .sectores-nav__dot:hover {
            background: rgba(212,175,55,0.35);
            border-color: var(--rs-gold);
        }
        .sectores-nav__dot.is-active {
            width: 24px;
            background: var(--rs-gold);
            border-color: var(--rs-gold);
        }
        @media (max-width: 768px) {
            .sectores-nav { bottom: 16px; gap: 10px; padding: 8px 12px; }
            .sectores-nav__arrow { width: 30px; height: 30px; }
            .sectores-nav__dots { gap: 5px; }
            .sectores-nav__dot { width: 6px; height: 6px; }
            .sectores-nav__dot.is-active { width: 18px; }
        }

        /* =============================================
           PAQUETE 4 — IMMERSPHERE SECTION
           ============================================= */
        .rs-immersphere {
            background: #000;
            padding: 96px 6%;
            border-top: 1px solid rgba(212,175,55,0.12);
            border-bottom: 1px solid rgba(212,175,55,0.12);
            position: relative;
            overflow: hidden;
        }
        .rs-immersphere::before {
            content: 'IMMERSPHERE';
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%,-50%);
            font-family: var(--sub-font,'Oswald',sans-serif);
            font-size: clamp(80px,14vw,180px);
            font-weight: 900;
            color: rgba(212,175,55,0.03);
            white-space: nowrap;
            pointer-events: none;
            letter-spacing: 8px;
            user-select: none;
        }
        .immersphere-inner {
            display: flex;
            align-items: center;
            gap: 64px;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }
        .immersphere-content { flex: 1; min-width: 0; }
        .immersphere-overline {
            font-family: var(--sub-font,'Oswald',sans-serif);
            font-size: 11px;
            letter-spacing: 3px;
            color: var(--rs-gold,#D4AF37);
            text-transform: uppercase;
            margin-bottom: 18px;
            opacity: 0.75;
        }
        .immersphere-title {
            font-family: var(--sub-font,'Oswald',sans-serif);
            font-size: clamp(52px,8vw,88px);
            font-weight: 700;
            color: #fff;
            line-height: 0.9;
            margin: 0 0 18px;
            letter-spacing: -1px;
        }
        .immersphere-claim {
            font-size: clamp(18px,2.2vw,24px);
            color: var(--rs-gold,#D4AF37);
            font-weight: 600;
            line-height: 1.3;
            margin: 0 0 22px;
        }
        .immersphere-desc {
            font-size: 15px;
            color: rgba(255,255,255,0.65);
            line-height: 1.75;
            max-width: 480px;
            margin: 0 0 32px;
        }
        .immersphere-desc strong { color: #fff; font-weight: 600; }
        .immersphere-stats {
            display: flex;
            gap: 32px;
            margin-bottom: 28px;
        }
        .imm-stat { display: flex; flex-direction: column; gap: 3px; }
        .imm-stat__n {
            font-family: var(--sub-font,'Oswald',sans-serif);
            font-size: 30px;
            font-weight: 700;
            color: var(--rs-gold,#D4AF37);
            line-height: 1;
        }
        .imm-stat__l {
            font-size: 10px;
            color: rgba(255,255,255,0.45);
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }
        .immersphere-sectors {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 36px;
        }
        .imm-chip {
            font-size: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: rgba(212,175,55,0.8);
            border: 1px solid rgba(212,175,55,0.25);
            padding: 5px 12px;
            border-radius: 2px;
            white-space: nowrap;
        }
        .immersphere-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn--gold {
            background: var(--rs-gold,#D4AF37);
            color: #000;
            font-weight: 700;
            font-size: 12px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            padding: 14px 28px;
            border-radius: 2px;
            text-decoration: none;
            transition: opacity .2s;
            display: inline-block;
        }
        .btn--gold:hover { opacity: .82; }
        .btn--outline-gold {
            border: 1px solid rgba(212,175,55,0.45);
            color: var(--rs-gold,#D4AF37);
            font-size: 12px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            padding: 14px 28px;
            border-radius: 2px;
            text-decoration: none;
            transition: border-color .2s;
            display: inline-block;
        }
        .btn--outline-gold:hover { border-color: var(--rs-gold,#D4AF37); }
        /* Media frame */
        .immersphere-media { flex: 0 0 400px; }
        .immersphere-video-frame {
            position: relative;
            aspect-ratio: 16/10;
            background: #05040c;
            border: 1px solid rgba(212,175,55,0.2);
            border-radius: 3px;
            overflow: hidden;
        }
        .imm-frame-topbar {
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg,transparent,#D4AF37 40%,transparent);
            opacity: .55;
        }
        .immersphere-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            gap: 10px;
            padding: 28px;
            text-align: center;
        }
        .imm-play-icon svg { width: 72px; height: 72px; }
        .imm-placeholder-label {
            font-family: var(--sub-font,'Oswald',sans-serif);
            font-size: 16px;
            color: #fff;
            letter-spacing: 2px;
            margin: 4px 0 0;
            text-transform: uppercase;
        }
        .imm-placeholder-sub {
            font-size: 11px;
            color: rgba(255,255,255,0.35);
            margin: 0;
            font-style: italic;
        }
        .imm-placeholder-cta {
            margin-top: 10px;
            font-size: 11px;
            color: var(--rs-gold,#D4AF37);
            letter-spacing: 1px;
            text-decoration: none;
            border-bottom: 1px solid rgba(212,175,55,0.3);
            padding-bottom: 2px;
            transition: border-color .2s;
        }
        .imm-placeholder-cta:hover { border-color: var(--rs-gold,#D4AF37); }
        @media (max-width: 900px) {
            .immersphere-inner { flex-direction: column; gap: 40px; }
            .immersphere-media { flex: none; width: 100%; max-width: 480px; margin: 0 auto; }
            .rs-immersphere { padding: 64px 5%; }
        }
        @media (max-width: 480px) {
            .immersphere-stats { gap: 20px; }
            .immersphere-ctas { flex-direction: column; }
            .btn--gold, .btn--outline-gold { text-align: center; }
        }

        /* =============================================
           PAQUETE 4 — PORTFOLIO HOVER PANEL
           ============================================= */
        /* HOVER PANEL — tooltip flotante que sigue al cursor */
        #portafolio-hover-panel {
            position: absolute;
            left: 0; top: 0;       /* posición dinámica via JS */
            pointer-events: none;
            opacity: 0;
            transform: translateY(6px);
            background: rgba(4,4,18,0.95);
            border-top: 2px solid #D4AF37;
            border-left: 1px solid rgba(212,175,55,0.22);
            border-right: 1px solid rgba(212,175,55,0.22);
            border-bottom: 1px solid rgba(212,175,55,0.22);
            border-radius: 0 0 3px 3px;
            padding: 14px 22px 16px;
            min-width: 240px;
            max-width: 300px;
            transition: opacity .15s, transform .15s;
            z-index: 30;
            backdrop-filter: blur(10px);
        }
        #portafolio-hover-panel.active {
            opacity: 1;
            transform: translateY(0);
        }
        .php-title {
            display: block;
            font-family: var(--sub-font,'Oswald',sans-serif);
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 1.5px;
            color: #ffffff;
            text-transform: uppercase;
            line-height: 1.2;
            margin-bottom: 5px;
        }
        .php-sector {
            display: block;
            font-size: 11px;
            color: #D4AF37;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            margin-bottom: 7px;
            opacity: 0.9;
        }
        .php-tags {
            display: block;
            font-size: 10px;
            color: rgba(255,255,255,0.45);
            letter-spacing: 0.5px;
            margin-bottom: 10px;
            line-height: 1.4;
        }
        .php-preview {
            display: block;
            width: 100%;
            height: 128px;
            object-fit: cover;
            border-radius: 1px;
            margin-bottom: 11px;
            background: rgba(212,175,55,0.07); /* placeholder mientras carga */
            border-bottom: 1px solid rgba(212,175,55,0.18);
        }
        .php-cta {
            display: block;
            font-size: 10px;
            font-family: var(--sub-font,'Oswald',sans-serif);
            color: #D4AF37;
            letter-spacing: 2px;
            text-transform: uppercase;
            opacity: 0.85;
        }

        /* =========================================
           P22 — SKIP TO CONTENT LINK
           ========================================= */
        .rs-skip-link {
            position: absolute;
            left: -9999px;
            top: 1rem;
            z-index: 100000;
            background: var(--rs-gold);
            color: #000;
            padding: 8px 18px;
            font-family: var(--sub-font);
            font-weight: 700;
            font-size: 13px;
            letter-spacing: 1px;
            text-transform: uppercase;
            border-radius: 2px;
        }
        .rs-skip-link:focus { left: 1rem; }

        /* =========================================
           P14 — MOBILE DRAWER NAV
           ========================================= */
        .rs-nav__burger {
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            width: 36px;
            height: 36px;
            background: none;
            border: 1px solid rgba(212,175,55,0.3);
            border-radius: 3px;
            cursor: pointer;
            padding: 0;
        }
        .rs-nav__burger span {
            display: block;
            width: 18px;
            height: 1.5px;
            background: var(--rs-gold);
            transition: transform .25s, opacity .25s;
        }
        .rs-nav__burger[aria-expanded="true"] span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .rs-nav__burger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
        .rs-nav__burger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
        @media (max-width: 768px) { .rs-nav__burger { display: flex; } }

        /* Lang toggle button in nav */
        .rs-lang-toggle {
            font-family: var(--sub-font);
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1.5px;
            color: var(--rs-gold);
            background: none;
            border: 1px solid rgba(212,175,55,0.35);
            border-radius: 2px;
            padding: 4px 8px;
            cursor: pointer;
            transition: background .2s, color .2s;
            margin-right: 8px;
        }
        .rs-lang-toggle:hover { background: var(--rs-gold); color: #000; }
        @media (max-width: 480px) { .rs-lang-toggle { display: none; } }

        /* Drawer overlay + panel */
        .rs-drawer { display: none; }
        .rs-drawer.open { display: block; }
        .rs-drawer__overlay {
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.75);
            backdrop-filter: blur(4px);
            z-index: 9000;
        }
        .rs-drawer__panel {
            position: fixed;
            top: 0; right: 0;
            width: min(320px, 85vw);
            height: 100vh;
            background: #050508;
            border-left: 1px solid rgba(212,175,55,0.25);
            z-index: 9001;
            display: flex;
            flex-direction: column;
            padding: 24px 28px 32px;
            transform: translateX(100%);
            transition: transform .3s cubic-bezier(.4,0,.2,1);
            overflow-y: auto;
        }
        .rs-drawer.open .rs-drawer__panel { transform: translateX(0); }
        .rs-drawer__close {
            align-self: flex-end;
            background: none;
            border: none;
            color: var(--rs-gold);
            font-size: 28px;
            cursor: pointer;
            margin-bottom: 32px;
            line-height: 1;
        }
        .rs-drawer__links {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0;
            flex: 1;
        }
        .rs-drawer__link {
            display: block;
            font-family: var(--sub-font);
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: var(--rs-text);
            padding: 14px 0;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            transition: color .2s, padding-left .2s;
        }
        .rs-drawer__link:hover { color: var(--rs-gold); padding-left: 6px; }
        .rs-drawer__ctas {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 32px;
        }
        .rs-drawer__wa {
            display: block;
            text-align: center;
            padding: 12px;
            border: 1px solid rgba(212,175,55,0.35);
            border-radius: 2px;
            font-family: var(--sub-font);
            font-size: 13px;
            letter-spacing: 1px;
            color: var(--rs-gold);
            transition: background .2s;
        }
        .rs-drawer__wa:hover { background: rgba(212,175,55,0.1); }
        .rs-drawer__cta {
            display: block;
            text-align: center;
            padding: 14px;
            background: var(--rs-gold);
            color: #000;
            font-family: var(--sub-font);
            font-weight: 700;
            font-size: 13px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            border-radius: 2px;
            transition: opacity .2s;
        }
        .rs-drawer__cta:hover { opacity: .85; }

        /* =========================================
           P10 — HERO CTA BUTTON
           ========================================= */
        .hero-cta-bar {
            position: absolute;
            bottom: 2.5rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 20;
        }
        .hero-cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--rs-gold);
            color: #000;
            font-family: var(--sub-font);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 13px 30px;
            border-radius: 2px;
            white-space: nowrap;
            transition: transform .2s, opacity .2s;
            animation: heroCTAPulse 2.5s ease-in-out infinite;
        }
        .hero-cta-btn:hover { transform: translateY(-3px); opacity: .9; }
        @keyframes heroCTAPulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,.55); }
            50% { box-shadow: 0 0 0 10px rgba(212,175,55,0); }
        }
        @media (max-width: 768px) { .hero-cta-bar { bottom: 1.5rem; } .hero-cta-btn { font-size: 11px; padding: 11px 22px; } }

        /* =========================================
           P13 — CAPACIDADES CARD CTA
           ========================================= */
        .cap-card__cta {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            margin-top: 14px;
            font-family: var(--sub-font);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--rs-gold);
            border-bottom: 1px solid rgba(212,175,55,0.3);
            padding-bottom: 2px;
            transition: border-color .2s, opacity .2s;
        }
        .cap-card__cta:hover { border-color: var(--rs-gold); opacity: .8; }

        /* =========================================
           P16 — IMMERSPHERE SCREENSHOT MEDIA
           ========================================= */
        .immersphere-media-live {
            position: relative;
            width: 100%;
            max-width: 520px;
            border-radius: 6px;
            overflow: hidden;
            border: 1px solid rgba(212,175,55,0.22);
            box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        }
        .imm-screenshot {
            display: block;
            width: 100%;
            aspect-ratio: 16/10;
            object-fit: cover;
            background: rgba(212,175,55,0.05);
        }
        .imm-screenshot-cta {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            background: rgba(0,0,0,0.75);
            backdrop-filter: blur(6px);
            color: var(--rs-gold);
            font-family: var(--sub-font);
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            text-align: center;
            padding: 12px;
            transition: background .2s;
        }
        .imm-screenshot-cta:hover { background: rgba(212,175,55,0.15); }

        /* =========================================
           P20 — LEGAL FOOTER
           ========================================= */
        .rs-legal-footer {
            background: #000;
            border-top: 1px solid rgba(212,175,55,0.12);
            padding: 16px 24px;
        }
        .rs-legal-footer__inner {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
            font-family: var(--sub-font);
            font-size: 10px;
            letter-spacing: 1px;
            color: rgba(255,255,255,0.35);
        }
        .rs-legal-footer__links {
            display: flex;
            gap: 20px;
        }
        .rs-legal-footer__links a {
            color: rgba(255,255,255,0.35);
            text-decoration: none;
            transition: color .2s;
        }
        .rs-legal-footer__links a:hover { color: var(--rs-gold); }
        @media (max-width: 480px) {
            .rs-legal-footer__inner { flex-direction: column; text-align: center; }
        }

        /* =========================================
           CINEMA HOVER PANEL
           ========================================= */
        #cinema-hover-panel {
            position: fixed;
            pointer-events: none;
            opacity: 0;
            transform: translateY(6px);
            background: rgba(4,4,18,0.97);
            border-top: 2px solid #D4AF37;
            border-left: 1px solid rgba(212,175,55,0.22);
            border-right: 1px solid rgba(212,175,55,0.22);
            border-bottom: 1px solid rgba(212,175,55,0.22);
            border-radius: 0 0 3px 3px;
            padding: 0 0 14px 0;
            min-width: 240px;
            max-width: 300px;
            transition: opacity .15s, transform .15s;
            z-index: 500;
            backdrop-filter: blur(10px);
            overflow: hidden;
        }
        #cinema-hover-panel.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .chp-thumb {
            display: block;
            width: 100%;
            height: 128px;
            object-fit: cover;
            margin-bottom: 12px;
            background: rgba(212,175,55,0.07);
        }
        .chp-inner { padding: 0 14px; }
        .chp-title {
            display: block;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 4px;
            line-height: 1.2;
        }
        .chp-sector {
            display: block;
            font-size: 10px;
            color: #D4AF37;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .chp-tags {
            display: block;
            font-size: 10px;
            color: rgba(255,255,255,0.45);
            margin-bottom: 9px;
            line-height: 1.4;
        }
        .chp-cta {
            display: block;
            font-size: 10px;
            font-family: var(--sub-font,'Oswald',sans-serif);
            color: #D4AF37;
            letter-spacing: 2px;
            text-transform: uppercase;
            opacity: 0.85;
        }

        /* =========================================
           EXIT GATE (INTERSTITIAL)
           ========================================= */
        #rs-exit-gate {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.88);
            backdrop-filter: blur(14px);
            z-index: 99999;
            align-items: center;
            justify-content: center;
        }
        #rs-exit-gate.active { display: flex; }
        .rs-exit-gate__box {
            max-width: 440px;
            width: 90%;
            background: #050508;
            border-top: 2px solid var(--rs-gold);
            border-left: 1px solid rgba(212,175,55,0.3);
            border-right: 1px solid rgba(212,175,55,0.3);
            border-bottom: 1px solid rgba(212,175,55,0.3);
            border-radius: 0 0 4px 4px;
            overflow: hidden;
            text-align: center;
        }
        .rs-exit-gate__preview {
            width: 100%;
            height: 160px;
            object-fit: cover;
            display: block;
            background: rgba(212,175,55,0.05);
            border-bottom: 1px solid rgba(212,175,55,0.12);
        }
        .rs-exit-gate__body { padding: 28px 32px 24px; }
        .rs-exit-gate__label {
            font-family: var(--sub-font);
            font-size: 9px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: var(--rs-gold);
            margin-bottom: 8px;
            opacity: 0.7;
        }
        .rs-exit-gate__title {
            font-family: var(--sub-font);
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 1px;
            color: #fff;
            margin-bottom: 12px;
        }
        .rs-exit-gate__msg {
            font-size: 13px;
            color: rgba(255,255,255,.6);
            line-height: 1.65;
            margin-bottom: 24px;
        }
        .rs-exit-gate__btns {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-bottom: 16px;
            flex-wrap: wrap;
        }
        .rs-exit-gate__wa {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #25D366;
            color: #000;
            font-family: var(--sub-font);
            font-weight: 700;
            font-size: 12px;
            letter-spacing: 1px;
            padding: 11px 20px;
            border-radius: 2px;
            transition: opacity .2s;
        }
        .rs-exit-gate__continue {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--rs-gold);
            color: #000;
            font-family: var(--sub-font);
            font-weight: 700;
            font-size: 12px;
            letter-spacing: 1px;
            padding: 11px 20px;
            border-radius: 2px;
            transition: opacity .2s;
        }
        .rs-exit-gate__wa:hover, .rs-exit-gate__continue:hover { opacity: .82; }
        .rs-exit-gate__skip {
            font-size: 11px;
            color: rgba(255,255,255,.3);
            background: none;
            border: none;
            cursor: pointer;
            transition: color .2s;
        }
        .rs-exit-gate__skip:hover { color: rgba(255,255,255,.55); }

        /* =========================================
           WISHLIST SYSTEM
           ========================================= */
        .rs-wish-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 30px;
            height: 30px;
            background: rgba(0,0,0,0.6);
            border: 1px solid rgba(212,175,55,0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            pointer-events: auto;
            transition: background .2s, border-color .2s;
            z-index: 5;
        }
        .rs-wish-btn:hover { background: rgba(212,175,55,0.15); border-color: var(--rs-gold); }
        .rs-wish-btn svg { width: 14px; height: 14px; fill: none; stroke: #D4AF37; stroke-width: 2; transition: fill .2s; }
        .rs-wish-btn.saved svg { fill: #D4AF37; }

        .rs-lb-wish {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-top: 12px;
            padding: 8px 14px;
            background: rgba(212,175,55,0.08);
            border: 1px solid rgba(212,175,55,0.25);
            border-radius: 2px;
            font-family: var(--sub-font);
            font-size: 11px;
            letter-spacing: 1px;
            color: rgba(255,255,255,.7);
            cursor: pointer;
            transition: background .2s, border-color .2s;
        }
        .rs-lb-wish:hover { background: rgba(212,175,55,0.15); border-color: var(--rs-gold); }
        .rs-lb-wish svg { width: 13px; height: 13px; fill: none; stroke: #D4AF37; stroke-width: 2; transition: fill .2s; }
        .rs-lb-wish.saved { color: #D4AF37; }
        .rs-lb-wish.saved svg { fill: #D4AF37; }

        /* Wishlist badge in nav */
        .rs-wish-badge {
            display: none;
            position: absolute;
            top: -6px;
            right: -8px;
            background: var(--rs-gold);
            color: #000;
            font-size: 9px;
            font-weight: 800;
            font-family: var(--sub-font);
            width: 16px;
            height: 16px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            line-height: 1;
        }
        .rs-wish-badge.show { display: flex; }

        /* Nav CTA wrapper needs relative pos for badge */
        .rs-nav__cta-wrap {
            position: relative;
            display: inline-block;
        }

        /* Wishlist summary in contact form */
        #rs-wishlist-summary {
            display: none;
            margin-bottom: 14px;
            padding: 12px 14px;
            background: rgba(212,175,55,0.06);
            border-left: 2px solid var(--rs-gold);
            border-radius: 0 2px 2px 0;
            font-size: 13px;
            color: rgba(255,255,255,.65);
            line-height: 1.5;
        }
        #rs-wishlist-summary strong { color: var(--rs-gold); display: block; margin-bottom: 4px; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; }
    
/* ═════════ FIX/AUDITORIA — añadidos ═════════ */
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
:focus-visible{outline:2px solid #D4AF37;outline-offset:3px;border-radius:2px}
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
}
a.rs-link-active{color:#D4AF37!important}
.rs-form-status{margin-top:.8rem;font-size:.9rem;color:#D4AF37;min-height:1.2em}
/* Portafolio 3D en móvil: contenido y sin desbordes */
#portafolio-3d{height:100svh}
#portafolio-3d .text-overlay{left:clamp(12px,4vw,5vw);max-width:min(300px,calc(100vw - 24px));padding:clamp(12px,3vw,24px)}
#portafolio-canvas-wrapper{touch-action:pan-y}
#portafolio-canvas-wrapper canvas{display:block;width:100%;height:100%}
/* Donut de contacto: contenido, escalable y sin secuestrar scroll */
#contacto{overflow-x:hidden}
#contact-canvas{max-width:100%;touch-action:pan-y}
@media(max-width:480px){#contacto .rs-contact-wrap{max-width:100%;padding-inline:clamp(12px,4vw,20px)}}
