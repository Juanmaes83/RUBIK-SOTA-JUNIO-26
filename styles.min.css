

    document.addEventListener("DOMContentLoaded", () => {
        gsap.config({trialWarn: false}); 
        gsap.registerPlugin(ScrollTrigger, Observer, CustomEase);
        CustomEase.create("hop", "M0,0 C0.3,0 0.1,1 1,1");

        /* --- 0. MODAL LOGIC GLOBALES --- */
        const modal = document.getElementById('rs-modal');
        const modalTitle = document.getElementById('rs-modal-title');
        const modalClaim = document.getElementById('rs-modal-claim');
        const modalDesc = document.getElementById('rs-modal-desc');
        const modalClose = document.getElementById('rs-modal-close');

        function openModal(title, claim, desc) {
            modalTitle.textContent = title;
            modalClaim.textContent = claim;
            modalDesc.textContent = desc;
            modal.classList.add('active');
        }
        
        // Exponemos el modal de forma global para que el módulo 3D pueda usarlo
        window.rsOpenModal = openModal;

        modalClose.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });

        /* --- 1. HERO LOGIC --- */
        (() => {
            let wrapperLeft = document.querySelector(".wrapper-left");
            let wrapperLeftBox = document.querySelectorAll(".wrapper-left .box-left");
            let wrapperLeftBoxImgOrange = document.querySelectorAll(".wrapper-left .box-left .orange");
            let wrapperLeftBoxImgBlue = document.querySelectorAll(".wrapper-left .box-left .blue");
            let wrapperRightBox = document.querySelector(".wrapper-right .box-right");
            let wrapperRightBoxImg = document.querySelectorAll(".wrapper-right .box-right img");
            let wrapperRightBoxImgBlue = document.querySelector(".wrapper-right .box-right .blue");
            let box = document.querySelectorAll(".hero-section .box");
            let counter = document.querySelector(".hero-section .counter .current p");
            let lines = document.querySelectorAll(".hero-section .counter .line");
            
            let centerImg_1 = document.querySelector(".img_1");
            let allCenterImgs = document.querySelectorAll(".hero-section .container .wrapper .from-video .center-img");
            
            let arrowLeft = document.querySelector(".arrow-left");
            let arrowRight = document.querySelector(".arrow-right");
            let socials = document.querySelector(".socials");
            let gridDescription = document.querySelector(".grid");
            let numbers = document.querySelector(".numbers");
            let buttonsArrows = document.querySelector(".buttons-arrow");
            let descriptionBottom = document.querySelector(".description-bottom");
            let infoCall = descriptionBottom.querySelectorAll(".info-col .hide-text");
            let countNumbers = document.querySelector(".numbers .hide-text .try");
            let changeTextBlocks = document.querySelectorAll(".change-text");

            const tl = gsap.timeline({
                onComplete: () => {
                    if (box.length === 3) {
                        box[1].style.display = "none";
                        gsap.timeline()
                            .to(box[0].querySelector(".base-video"), { x: "20px", ease: "hop", duration: 0.3 })
                            .to(box[0], { x: "-400px", ease: "hop", duration: 0.6, zIndex: 2 })
                            .to(box[0].querySelector(".base-video"), { x: "0px", ease: "hop", duration: 0.3 }, 0.5);
                        gsap.timeline()
                            .to(box[2].firstElementChild, { x: "-20px", ease: "hop", duration: 0.3 })
                            .to(box[2], { x: "400px", ease: "hop", duration: 0.6 })
                            .to(counter, { duration: 0.3, ease: "hop", y: "0%" }, "<")
                            .to(lines, { duration: 0.1, delay: 0.1, onComplete: () => lines.forEach(l => l.classList.add("active")) }, "<")
                            .to(box[2].firstElementChild, { x: "0px", ease: "hop", duration: 0.3 }, 0.5)
                            .to(counter, { innerHTML: 100, duration: 1, ease: "hop", snap: { innerHTML: 1 }, onUpdate: () => counter.textContent = String(Math.round(counter.innerHTML)).padStart(2, "0") })
                            .to(lines, { rotation: 180, ease: "hop", duration: 0.3 })
                            .to(counter, { duration: 0.3, ease: "hop", y: "100%" })
                            .to(lines, { duration: 0.3, delay: 0.1, onComplete: () => lines.forEach(l => l.classList.remove("active")) })
                            .call(() => {
                                gsap.timeline()
                                    .to(box[0].querySelector(".base-video"), { x: "-20px", ease: "hop", duration: 0.3 })
                                    .to(box[0], { x: "0px", ease: "hop", duration: 0.6, zIndex: 2 })
                                    .to(box[0].querySelector(".base-video"), { x: "0px", ease: "hop", duration: 0.3 }, 0.5);
                                gsap.timeline()
                                    .to(box[2].firstElementChild, { x: "20px", ease: "hop", duration: 0.3 })
                                    .to(box[2], { x: "0px", ease: "hop", duration: 0.6 })
                                    .to(box[2].firstElementChild, { x: "0px", ease: "hop", duration: 0.3 }, 0.5)
                                    .call(runAdditionalTimeline2);
                            });
                    }
                }
            });

            function runAdditionalTimeline2() {
                const tl2 = gsap.timeline();
                tl2.to(centerImg_1, { display: "flex", opacity: 1, duration: 0.5, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, 0);
                
                tl2.add(() => box[0].classList.add("active"), 0);
                tl2.to(box[0], { height: "420px", duration: 1, ease: "hop" }, 0);
                tl2.to(wrapperLeftBox, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "hop", duration: 1, stagger: 0.2 }, 0);
                tl2.to(wrapperLeftBoxImgOrange, { ease: "hop", duration: 1, scale: 1 }, 0); 
                tl2.to(wrapperRightBox, { clipPath: "polygon(0% 0,100% 0,100% 100%,0% 100%)", ease: "hop", duration: 1 }, 0);
                tl2.to(wrapperRightBoxImgBlue, { ease: "hop", duration: 1, scale: 1 }, 0); 
                tl2.to(box[2], { display: "none", duration: 0.1 }, 0);
                
                tl2.to(box[0].querySelector(".base-video"), { zIndex: -2, duration: 0.1, display: "none" }, 0);
                
                tl2.add(() => socials.classList.add("active"), 0);
                tl2.add(() => gridDescription.classList.add("active"), 0);
                tl2.add(() => numbers.classList.add("active"), 0);
                tl2.add(() => buttonsArrows.classList.add("active"), 0);
                tl2.add(() => infoCall.forEach(c => { const p = c.querySelector("p"); if(p) p.classList.add("active"); }), 0);
                
                const infiniteScroll = gsap.timeline({ repeat: -1, ease: "linear" });
                infiniteScroll.to(wrapperLeft, { y: "-50%", duration: 16, ease: "none", onComplete: () => gsap.set(wrapperLeft, { y: "0%" }) });
                tl2.add(infiniteScroll, "<");

                let isAnimating = false;
                changeTextBlocks.forEach((block) => {
                    const paragraphs = block.querySelectorAll("p");
                    let activeIndex = 0;
                    const updateActiveParagraph = (newIndex) => {
                        paragraphs[activeIndex].classList.remove("active");
                        activeIndex = newIndex;
                        paragraphs[activeIndex].classList.add("active");
                    };
                    paragraphs[activeIndex].classList.add("active");
                    arrowLeft.addEventListener("click", () => {
                        if (isAnimating) return; isAnimating = true;
                        updateActiveParagraph((activeIndex - 1 + paragraphs.length) % paragraphs.length);
                        isAnimating = false;
                    });
                    arrowRight.addEventListener("click", () => {
                        if (isAnimating) return; isAnimating = true;
                        updateActiveParagraph((activeIndex + 1) % paragraphs.length);
                        isAnimating = false;
                    });
                });

                let currentIndex = 0; let clickCount = 0;
                allCenterImgs.forEach((img, i) => { if(i!==currentIndex) img.style.display="none"; });

                arrowLeft.addEventListener("click", () => {
                    if (isAnimating) return; isAnimating = true;
                    const currentVideo = allCenterImgs[currentIndex]; 
                    const currentRightImg = wrapperRightBoxImg[currentIndex];
                    const prevIndex = (currentIndex - 1 + allCenterImgs.length) % allCenterImgs.length;
                    const prevVideo = allCenterImgs[prevIndex]; 
                    const prevRightImg = wrapperRightBoxImg[prevIndex];
                    
                    gsap.set(prevVideo, { display: "flex", clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)", zIndex: 1 });
                    clickCount--; if (clickCount < 0) clickCount = 2;
                    gsap.to(countNumbers, { y: `${clickCount * -11}px`, ease: "hop", duration: 0.3 });
                    gsap.to(prevVideo, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, onComplete: () => { currentVideo.style.display = "none"; prevVideo.style.zIndex = "-1"; } });
                    
                    gsap.set(prevRightImg, { display: "flex", clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)", zIndex: 1, scale: 1.15 });
                    gsap.to(prevRightImg, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, duration: 1, ease: "hop", onComplete: () => { currentRightImg.style.display = "none"; prevRightImg.style.zIndex = "-1"; } });
                    
                    const imageSequences = ["orange", "blue", "green"];
                    const prevImageClass = imageSequences[(currentIndex - 1 + imageSequences.length) % imageSequences.length];
                    wrapperLeftBox.forEach((box, index) => {
                        const nextImg = box.querySelector(`.${imageSequences[currentIndex]}`);
                        const prevImg = box.querySelector(`.${prevImageClass}`);
                        const tl3 = gsap.timeline();
                        tl3.set(prevImg, { display: "flex", clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", zIndex: 1, scale: 1.15 });
                        tl3.to(prevImg, { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "hop", duration: 1, scale: 1, stagger: 0.2 * index, delay: 0.2, onComplete: () => { nextImg.style.display = "none"; nextImg.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"; prevImg.style.zIndex = "-1"; } });
                    });
                    currentIndex = prevIndex; isAnimating = false;
                });

                arrowRight.addEventListener("click", () => {
                    if (isAnimating) return; isAnimating = true;
                    const currentVideo = allCenterImgs[currentIndex]; 
                    const currentRightImg = wrapperRightBoxImg[currentIndex];
                    const nextIndex = (currentIndex + 1) % allCenterImgs.length;
                    const nextVideo = allCenterImgs[nextIndex]; 
                    const nexRightImg = wrapperRightBoxImg[nextIndex];
                    
                    gsap.set(nextVideo, { display: "flex", clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)", zIndex: 1 });
                    clickCount++; if (clickCount > 2) clickCount = 0;
                    gsap.to(countNumbers, { y: `${clickCount * -11}px`, ease: "hop", duration: 0.3 });
                    gsap.to(nextVideo, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, onComplete: () => { currentVideo.style.display = "none"; nextVideo.style.zIndex = "-1"; } });
                    
                    gsap.set(nexRightImg, { display: "flex", clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)", zIndex: 1, scale: 1.15 });
                    gsap.to(nexRightImg, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, duration: 1, ease: "hop", onComplete: () => { currentRightImg.style.display = "none"; nexRightImg.style.zIndex = "-1"; } });
                    
                    const imageSequences = ["orange", "blue", "green"];
                    currentIndex = (currentIndex + 1) % imageSequences.length;
                    const nextImageClass = imageSequences[currentIndex];
                    wrapperLeftBox.forEach((box, index) => {
                        const prevImg = box.querySelector(`.${imageSequences[(currentIndex - 1 + imageSequences.length) % imageSequences.length]}`);
                        const nextImg = box.querySelector(`.${nextImageClass}`);
                        const tl3 = gsap.timeline();
                        tl3.set(nextImg, { display: "flex", clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", zIndex: 1, scale: 1.15 }); 
                        tl3.to(nextImg, { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "hop", duration: 1, scale: 1, stagger: 0.2 * index, delay: 0.2, onComplete: () => { prevImg.style.display = "none"; prevImg.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"; nextImg.style.zIndex = "-1"; } });
                    });
                    isAnimating = false;
                });
            }

            box.forEach(b => {
                tl.to(b, { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5, ease: "hop" })
                  .to(b.firstElementChild, { scale: 1, y: 20, duration: 0.5, ease: "hop" }, "<");
            });
        })();

        /* --- 2. MANIFIESTO + DIRECTOR'S CUT LOGIC (FUSIÓN) --- */
        (() => {
            const words = [
                "Motion & Campaigns: DIRECTOR'S CUT RUBIK SOTA",
                "CREATIVIDAD", "NARRATIVA", "IMPACTO", "EMOCIÓN", "CAMPAÑAS", "MOTION", "BRAND STORY", "RUBIK SOTA"
            ];
            let idx = 0;
            const wordEl = document.getElementById('dc-word');
            let wordInterval;

            // Estado inicial de las tarjetas
            gsap.set(".card", { x: 100, autoAlpha: 0, scale: 0.95 });

            ScrollTrigger.create({
                trigger: "#directors-cut-manifesto",
                start: "top 70%",
                once: true,
                onEnter: () => {
                    // 1. Iniciar rotación de palabras de forma segura (solo cuando se ve)
                    if (wordEl) {
                        gsap.to(wordEl, { autoAlpha: 1, duration: 1 });
                        wordInterval = setInterval(() => {
                            gsap.to(wordEl, { autoAlpha: 0, duration: 0.5, onComplete: () => {
                                idx = (idx + 1) % words.length;
                                wordEl.textContent = words[idx];
                                gsap.to(wordEl, { autoAlpha: 1, duration: 0.5 });
                            }});
                        }, 4000);
                    }

                    // 2. Fades programados cinemáticos
                    gsap.to(".dc-background", { opacity: 0, duration: 5, delay: 13, ease: "power2.inOut" });
                    gsap.to(".dc-reflects", { opacity: 0, duration: 5, delay: 45, ease: "power2.inOut" });
                    gsap.to(".dc-box", { transform: "none", duration: 10, delay: 60, ease: "power2.out" });

                    // 3. Entrada elástica SOTA de las tarjetas
                    const tl = gsap.timeline();
                    tl.to(".card", {
                        x: 0,
                        autoAlpha: 1,
                        scale: 1,
                        duration: 1.2,
                        stagger: 0.2,
                        ease: "elastic.out(1, 0.5)"
                    });
                    
                    // Fade-in interior
                    tl.fromTo(".card h3, .card p", 
                        { autoAlpha: 0, y: 15 },
                        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
                        "-=0.8"
                    );
                }
            });
        })();

        // Inicializar iconos globales
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        /* === PAQUETE 3 — Formulario briefing -> mailto === */
        (function () {
            const form = document.getElementById('rs-brief-form');
            if (!form) return;
            const status = document.getElementById('rs-form-status');
            const TARGET_EMAIL = 'proyectos@rubiksota.com'; // TODO: confirmar email oficial.

            function clearErrors() {
                form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            }
            function markError(id) {
                const el = document.getElementById(id);
                if (el) el.classList.add('error');
            }
            function isEmail(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            }

            form.addEventListener('submit', function (e) {
                e.preventDefault();
                clearErrors();
                status.classList.remove('ok', 'err');
                status.textContent = '';

                const name = document.getElementById('rs-f-name').value.trim();
                const email = document.getElementById('rs-f-email').value.trim();
                const company = document.getElementById('rs-f-company').value.trim();
                const type = document.getElementById('rs-f-type').value;
                const budget = document.getElementById('rs-f-budget').value;
                const message = document.getElementById('rs-f-msg').value.trim();

                let invalid = false;
                if (!name) { markError('rs-f-name'); invalid = true; }
                if (!email || !isEmail(email)) { markError('rs-f-email'); invalid = true; }
                if (!message) { markError('rs-f-msg'); invalid = true; }
                if (invalid) {
                    status.classList.add('err');
                    status.textContent = 'Revisa los campos marcados: nombre, email válido y mensaje son obligatorios.';
                    return;
                }

                const submitBtn = form.querySelector('.rs-form-submit');
                const btnSpan = submitBtn ? submitBtn.querySelector('span') : null;
                if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '.5'; }
                if (btnSpan) btnSpan.textContent = 'Enviando…';
                status.textContent = 'Enviando briefing…';

                /* P9 — Web3Forms (sin backend, funciona en GitHub Pages)
                   Obtén tu clave gratuita en https://web3forms.com
                   y reemplaza 'TU_CLAVE_WEB3FORMS' con la clave de tu cuenta */
                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        access_key: 'c1eebc1c-5f9b-4b27-8266-2a3c4208fa30',
                        subject: 'Nuevo proyecto Rubik Sota — ' + type,
                        from_name: 'Rubik Sota Web',
                        name: name,
                        email: email,
                        empresa: company || '(sin especificar)',
                        tipo_proyecto: type,
                        presupuesto: budget,
                        message: message,
                        botcheck: ''
                    })
                })
                .then(function(res) { return res.json(); })
                .then(function(data) {
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
                    if (btnSpan) btnSpan.textContent = 'Enviar briefing';
                    if (data.success) {
                        status.classList.add('ok');
                        status.textContent = '¡Briefing enviado! Te contactamos en menos de 24h.';
                        form.reset();
                    } else {
                        status.classList.add('err');
                        status.textContent = (data.message || 'Error al enviar.') + ' Escríbenos por WhatsApp como alternativa.';
                    }
                })
                .catch(function() {
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
                    if (btnSpan) btnSpan.textContent = 'Enviar briefing';
                    status.classList.add('err');
                    status.textContent = 'Error de conexión. Por favor, escríbenos por WhatsApp directamente.';
                });
            });
        })();

        /* === PAQUETE 3 — Body class while lightbox is open (hides FAB) === */
        (function () {
            const lb = document.getElementById('lightbox');
            if (!lb) return;
            const sync = function () {
                document.body.classList.toggle('lb-open', lb.classList.contains('active'));
            };
            const mo = new MutationObserver(sync);
            mo.observe(lb, { attributes: true, attributeFilter: ['class'] });
            sync();
        })();

        /* --- 5.2 DIRECTOR'S CUT (CINEMA) LOGIC --- */
        (() => {
            const baseUrl = "https://res.cloudinary.com/dgbgriykc/video/upload/";

            /* METADATOS DE VÍDEOS RS */
            const cinemaData = {
                'RS_HOTEL_CO':          { title: 'Hotel & Co',           sector: 'Hospitality',              tags: 'Vídeo · Motion · Branding' },
                'RS_ADIDAS':            { title: 'Adidas · Campaña',     sector: 'Moda / Sport',             tags: 'Vídeo · Campaña · Sport' },
                'RS_ADIDAS2':           { title: 'Adidas · Making Of',   sector: 'Moda / Sport',             tags: 'Vídeo · BTS · Sport' },
                'RS_VIDEO3':            { title: 'Proyecto 03',          sector: 'Alimentación · Hostelería', tags: 'Vídeo · Motion' },
                'RS_VIDEO2':            { title: 'Proyecto 02',          sector: 'Storytelling',             tags: 'Vídeo · Narrativa' },
                'RS_VIDEO4':            { title: 'Proyecto 04',          sector: 'Consumo',                  tags: 'Vídeo · Motion' },
                'RS_VIDEO7':            { title: 'Proyecto 07',          sector: 'Automoción',               tags: 'Vídeo · Campaña' },
                'RS_0527':              { title: '0527',                 sector: 'Arquitectura · Construcción', tags: 'Vídeo · Motion' },
                'RS_ALICIA_WONDERLAND': { title: 'Alicia Wonderland',    sector: 'Fantástico / Moda',        tags: 'Vídeo · Fantasía · Motion' },
                'RS_PERFUME':           { title: 'Perfume · Campaña',    sector: 'Lujo / Belleza',           tags: 'Vídeo · Campaña · Lujo' },
                'RS_PERFUME2':          { title: 'Perfume · Versión 2',  sector: 'Lujo / Belleza',           tags: 'Vídeo · Motion · Lujo' },
                'RS_ZAPAS1':            { title: 'Zapatillas · Edit 1',  sector: 'Moda / Sport',             tags: 'Vídeo · Product' },
                'RS_ZAPAS2':            { title: 'Zapatillas · Edit 2',  sector: 'Moda / Sport',             tags: 'Vídeo · Product' },
                'RS_DIA_DE_LA_MADRE':   { title: 'Día de la Madre',      sector: 'Campaña',                  tags: 'Vídeo · Emoción · Campaña' },
                'RS_2044':              { title: '2044',                 sector: 'Conceptual',               tags: 'Motion · Conceptual' },
                'RS_DB1F':              { title: 'DB1F',                 sector: 'Motion',                   tags: 'Motion · Experimental' },
                'RS_VIDEO5':            { title: 'Proyecto 05',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO6':            { title: 'Proyecto 06',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO8':            { title: 'Proyecto 08',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO9':            { title: 'Proyecto 09',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO10':           { title: 'Proyecto 10',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO11':           { title: 'Proyecto 11',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO12':           { title: 'Proyecto 12',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO14':           { title: 'Proyecto 14',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO16':           { title: 'Proyecto 16',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO17':           { title: 'Proyecto 17',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO18':           { title: 'Proyecto 18',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
                'RS_VIDEO19':           { title: 'Proyecto 19',          sector: 'Rubik Sota',               tags: 'Vídeo · Motion' },
            };

            /* ORDEN DE VÍDEOS — primeros 8 fijados por cliente */
            const cinemaFiles = [
                /* === DESTACADOS (orden editorial) === */
                "RS_HOTEL_CO","RS_ADIDAS","RS_VIDEO3","RS_VIDEO2",
                "RS_VIDEO7","RS_0527","RS_ALICIA_WONDERLAND","RS_PERFUME",
                /* === RESTO RS === */
                "RS_ADIDAS2","RS_VIDEO6","RS_VIDEO8","RS_VIDEO9",
                "RS_VIDEO16","RS_VIDEO10","RS_VIDEO5","RS_VIDEO4","RS_VIDEO19",
                "RS_VIDEO11","RS_VIDEO12","RS_DIA_DE_LA_MADRE",
                "RS_ZAPAS1","RS_PERFUME2","RS_ZAPAS2",
                "RS_2044","RS_DB1F","RS_VIDEO14","RS_VIDEO17","RS_VIDEO18",
                /* === ARCHIVO ORIGINAL CINEMA === */
                "v1772293176/VIDEO_CINEMA_01_te2aqq", "v1772293177/VIDEO_CINEMA_02_fjp6py", "v1772293275/VIDEO_CINEMA_03_cmun7m",
                "v1772294239/VIDEO_CINEMA_04_ve5bto", "v1772293280/VIDEO_CINEMA_05_hebuub", "v1772293335/VIDEO_CINEMA_06_dcyqgv",
                "v1772293340/VIDEO_CINEMA_07_nnt1in", "v1772293328/VIDEO_CINEMA_08_aas1k6", "v1772293277/VIDEO_CINEMA_09_ywhti7",
                "v1772293544/VIDEO_CINEMA_010_c4cjol", "v1772294157/VIDEO_CINEMA_011_tljiyw", "v1772293665/VIDEO_CINEMA_012_udlxbc",
                "v1772293665/VIDEO_CINEMA_013_g5zkdi", "v1772293695/VIDEO_CINEMA_014_shy3xd", "v1772293696/VIDEO_CINEMA_015_tv43qr",
                "v1772293734/VIDEO_CINEMA_016_wzle6h", "v1772293726/VIDEO_CINEMA_017_oyl9np", "v1772293755/VIDEO_CINEMA_018_caagrz",
                "v1772293756/VIDEO_CINEMA_019_ncdkvb", "v1772293788/VIDEO_CINEMA_020_ubh6qf", "v1772293787/VIDEO_CINEMA_021_ppngxk",
                "v1772293813/VIDEO_CINEMA_022_mbzz0s", "v1772293813/VIDEO_CINEMA_023_kuc6og", "v1772293814/VIDEO_CINEMA_024_mlovqn",
                "v1772293878/VIDEO_CINEMA_025_tnbomw", "v1772293874/VIDEO_CINEMA_026_bfek6e", "v1772293871/VIDEO_CINEMA_027_zikvdd",
                "v1772293904/VIDEO_CINEMA_028_ho1cqx", "v1772293905/VIDEO_CINEMA_029_u3qdpf", "v1772293965/VIDEO_CINEMA_30_t6fmio",
                "v1772293968/VIDEO_CINEMA_031_bocf1e"
            ];

            const track = document.getElementById('cinema-track');
            const modal = document.getElementById('cinema-modal');
            const player = document.getElementById('cinema-video-player');
            const closeBtn = document.getElementById('cinema-close');
            const chPanel = document.getElementById('cinema-hover-panel');

            /* Hover panel state */
            let chVisible = false;
            let chTimer = null;

            cinemaFiles.forEach((file) => {
                const thumbUrl = `${baseUrl}c_fill,w_800,q_auto,f_auto/${file}.jpg`;
                const videoUrl = `${baseUrl}f_auto,q_auto,vc_auto,w_1920/${file}.mp4`;
                const el = document.createElement('div');
                el.className = 'cinema-item';
                el.style.backgroundImage = `url(${thumbUrl})`;
                el.innerHTML = `<div class="cinema-play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>`;
                el.onclick = () => { player.src = videoUrl; modal.classList.add('active'); player.play(); };

                /* HOVER PANEL */
                const key = file.startsWith('RS_') ? file : null;
                const meta = key && cinemaData[key]
                    ? cinemaData[key]
                    : { title: 'Archivo Rubik Sota', sector: 'Cinema Director', tags: 'Vídeo · Motion' };

                el.addEventListener('mouseenter', function() {
                    clearTimeout(chTimer);
                    chPanel.innerHTML =
                        '<img class="chp-thumb" src="' + thumbUrl + '" alt="">' +
                        '<div class="chp-inner">' +
                        '<span class="chp-title">' + meta.title + '</span>' +
                        '<span class="chp-sector">' + meta.sector + '</span>' +
                        '<span class="chp-tags">' + meta.tags + '</span>' +
                        '<span class="chp-cta">CLICK PARA VER VÍDEO →</span>' +
                        '</div>';
                    chPanel.classList.add('visible');
                    chPanel.setAttribute('aria-hidden', 'false');
                    chVisible = true;
                });
                el.addEventListener('mousemove', function(e) {
                    if (!chVisible) return;
                    const pw = chPanel.offsetWidth || 270;
                    const ph = chPanel.offsetHeight || 220;
                    var tx = e.clientX + 22;
                    var ty = e.clientY - Math.round(ph / 2);
                    if (tx + pw > window.innerWidth - 10) tx = e.clientX - pw - 22;
                    if (ty < 10) ty = 10;
                    if (ty + ph > window.innerHeight - 10) ty = window.innerHeight - ph - 10;
                    chPanel.style.left = tx + 'px';
                    chPanel.style.top  = ty + 'px';
                });
                el.addEventListener('mouseleave', function() {
                    chTimer = setTimeout(function() {
                        chPanel.classList.remove('visible');
                        chPanel.setAttribute('aria-hidden', 'true');
                        chVisible = false;
                    }, 120);
                });

                track.appendChild(el);
            });

            closeBtn.onclick = () => { modal.classList.remove('active'); player.pause(); player.src = ""; };
            const btnPrev = document.getElementById('cinema-prev');
            const btnNext = document.getElementById('cinema-next');
            btnNext.onclick = () => track.scrollBy({ left: 300, behavior: 'smooth' });
            btnPrev.onclick = () => track.scrollBy({ left: -300, behavior: 'smooth' });
        })();

        /* --- 5.5 WALL OF WORK --- */
        (() => {
            const baseUrl = "https://cdn.jsdelivr.net/gh/Juanmaes83/RUBIK-SOTA-WEB-FINAL@main/public/";
            const exactFiles = [
                /* CAMPANA 1-15: confirmados 200 OK en jsDelivr */
                "IMAGE_PORTAFOLIOCAMPANA1HOR.png","IMAGE_PORTAFOLIOCAMPANA2HOR.png","IMAGE_PORTAFOLIOCAMPANA3HOR.png",
                "IMAGE_PORTAFOLIOCAMPANA4HOR.png","IMAGE_PORTAFOLIOCAMPANA5HOR.png","IMAGE_PORTAFOLIOCAMPANA6HOR.png",
                "IMAGE_PORTAFOLIOCAMPANA7HOR.png","IMAGE_PORTAFOLIOCAMPANA8HOR.png","IMAGE_PORTAFOLIOCAMPANA9HOR.png",
                "IMAGE_PORTAFOLIOCAMPANA10HOR.png","IMAGE_PORTAFOLIOCAMPANA11HOR.png","IMAGE_PORTAFOLIOCAMPANA12HOR.png",
                "IMAGE_PORTAFOLIOCAMPANA13HOR.png","IMAGE_PORTAFOLIOCAMPANA14HOR.png","IMAGE_PORTAFOLIOCAMPANA15HOR.png",
                /* CONTENIDO HOR: confirmados 200 OK en jsDelivr */
                "IMAGE_PORTAFOLIOCONTENIDO1HOR.png","IMAGE_PORTAFOLIOCONTENIDO2HOR.png","IMAGE_PORTAFOLIOCONTENIDO3HOR.png",
                "IMAGE_PORTAFOLIOCONTENIDO4HOR.png","IMAGE_PORTAFOLIOCONTENIDO5HOR_1.png","IMAGE_PORTAFOLIOCONTENIDO6HOR.png",
                "IMAGE_PORTAFOLIOCONTENIDO7HOR.png","IMAGE_PORTAFOLIOCONTENIDO8HOR.png","IMAGE_PORTAFOLIOCONTENIDO9HOR.png",
                "IMAGE_PORTAFOLIOCONTENIDO11HOR_1.png","IMAGE_PORTAFOLIOCONTENIDO12HOR.png","IMAGE_PORTAFOLIOCONTENIDO13HOR.png",
                "IMAGE_PORTAFOLIOCONTENIDO14HOR.png","IMAGE_PORTAFOLIOCONTENIDO15HOR.png","IMAGE_PORTAFOLIOCONTENIDO16HOR.png",
                "IMAGE_PORTAFOLIOCONTENIDO18HOR.png","IMAGE_PORTAFOLIOCONTENIDO19HOR.png","IMAGE_PORTAFOLIOCONTENIDO20HOR.png",
                "IMAGE_PORTAFOLIOCONTENIDO21HOR.png","IMAGE_PORTAFOLIOCONTENIDO22HOR.png","IMAGE_PORTAFOLIOCONTENIDO25HOR.png",
                "IMAGE_PORTAFOLIOCONTENIDO26HOR.png","IMAGE_PORTAFOLIOCONTENIDO27HOR.png","IMAGE_PORTAFOLIOCONTENIDO28HOR_1.png",
                "IMAGE_PORTAFOLIOCONTENIDO29HOR.png","IMAGE_PORTAFOLIOCONTENIDO30HOR.png","IMAGE_PORTAFOLIOCONTENIDO66HOR_1.png",
                "IMAGE_PORTAFOLIOCONTENIDO68HOR_1.png"
            ];
            const rows = [document.querySelector('#mq-row-1 .marquee-track'), document.querySelector('#mq-row-2 .marquee-track'), document.querySelector('#mq-row-3 .marquee-track'), document.querySelector('#mq-row-4 .marquee-track')];
            rows.forEach(track => {
                if(!track) return;
                let html = "";
                for(let i=0; i<20; i++) {
                    const file = exactFiles[i % exactFiles.length];
                    html += `<div class="marquee-item"><img src="${baseUrl}${file}" loading="lazy" alt="Imagen del proyecto en el lightbox"></div>`;
                }
                track.innerHTML = html + html;
            });
        })();
    });



/* ═══ bloque ═══ */


    (() => {
        const shaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec2 touch;
uniform int pointerCount;
uniform vec2[10] pointers;
#define PA pointers
#define zoom (P>1 ? distance(PA[0].xy,PA[1].xy)/MN : .0)
uniform samplerCube cubeMap;
#define cmap cubeMap
#define mouse (touch/R)
#define P pointerCount
#define FC gl_FragCoord.xy
#define R resolution
#define T time
#define N normalize
#define S smoothstep
#define MN min(R.x,R.y)
#define rot(a) mat2(cos((a)-vec4(0,11,33,0)))
float tor(vec3 p, vec2 s) {
vec2 c=vec2(length(p.xy)-s.x,p.z);
return length(c)-s.y;
}
vec2 map(vec3 p) {
vec3 q=p;
p.yz*=rot(-mouse.y*6.3-T*.4);
p.xz*=rot(3.14+mouse.x*6.3+T*.2);
vec2
a=vec2(abs(tor(p,vec2(1,.4)))-.01,1),
b=vec2(abs(length(q)-10.)-.05,0);
a=a.x<b.x?a:b;
return a;
}
vec3 norm(vec3 p) {
float h=1e-3; vec2 k=vec2(-1,1);
return N(
k.xyy*map(p+k.xyy*h).x+
k.yxy*map(p+k.yxy*h).x+
k.yyx*map(p+k.yyx*h).x+
k.xxx*map(p+k.xxx*h).x
);
}
vec3 dir(vec2 uv, vec3 p, vec3 t, float z) {
vec3 up=vec3(0,1,0),
f=N(t-p),
r=N(cross(up,f)),
u=N(cross(f,r));
return N(mat3(r,u,f)*vec3(uv,z));
}
void main() {
vec2 uv=(FC-.5*R)/MN;
float grain=MN;
uv=floor(uv*grain)/grain;
vec2 st=uv*.8;
vec3 col=vec3(0),
p=vec3(0,0,-3.+zoom),
rd=dir(uv,p,vec3(0),1.-.2*dot(uv,uv));
vec3 lp=vec3(-1,2,-3);
float dd=.0, at=.0, bnz=.0, side=1.;
for (float i=.0; i<400.; i++) {
vec2 d=map(p);
d.x*side;
if (abs(d.x)<1e-3) {
vec3 n=norm(p)*side, l=N(lp-p);
float dif=clamp(dot(l,n),.0,1.);
if (d.y<1.) {
rd=reflect(rd,n);
rd.xz*=rot(T);
col=mix(col,texture(cmap,-rd).rgb,.5);
break;
} else if (bnz++<1.) {
vec3 r=reflect(rd,n);
r.xz*=rot(T);
float fre=clamp(1.+dot(rd,n),.0,1.),
spe=pow(clamp(dot(r,l),.0,1.),64.);
col+=spe*2.;
col+=2.*fre*texture(cmap,r).rgb;
at*=15.;
col+=at*at;
}
if (dot(l,n)<.0) l=-l;
dif=clamp(dot(l,n),.0,1.);
float fre=pow(clamp(1.+dot(rd,n),.0,1.),5.);
col+=.08+.2*dif+.1*fre;
side=-side;
vec3 rdo=refract(rd,n,1.+side*.4);
if (dot(rdo,rdo)==.0) rdo=reflect(rd,n);
rd=rdo;
d.x=11e-1;
}
p+=rd*d.x;
dd+=d.x;
at+=.05*(.05/dd);
}
col=S(.0,1.25,col);
col=tanh(col)*vec3(1.7,.9,1.1);
col=pow(col,vec3(.4545));
uv=2.*FC/R-1.;
uv*=.8;
uv*=uv;
float v=dot(uv,uv);
col=mix(col,vec3(0),v);
  O=vec4(col,1);
}`;

        class Renderer {
            #vertexSrc = `#version 300 es\nprecision highp float;\nin vec4 position;\nvoid main(){gl_Position=position;}`;
            #vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
            constructor(canvas, scale) {
                this.canvas = canvas; this.scale = scale;
                this.gl = canvas.getContext('webgl2');
                if (!this.gl) return;
                this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
                this.shaderSource = shaderSource;
                this.mouseMove = [0, 0]; this.mouseCoords = [0, 0];
                this.pointerCoords = [0, 0]; this.nbrOfPointers = 0;
                this.setup(); this.init();
            }
            updateMove(deltas) { this.mouseMove = deltas; }
            updateMouse(coords) { this.mouseCoords = coords; }
            updatePointerCoords(coords) { this.pointerCoords = coords; }
            updatePointerCount(nbr) { this.nbrOfPointers = nbr; }
            updateScale(scale) {
                this.scale = scale;
                this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
            }
            compile(shader, source) {
                const gl = this.gl;
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
            }
            createCubeMap() {
                const gl = this.gl;
                const cubeMap = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeMap);
                const imgpath = 'https://assets.codepen.io/4386748';
                const faces = [
                    [gl.TEXTURE_CUBE_MAP_POSITIVE_X, '03posx.jpg'],
                    [gl.TEXTURE_CUBE_MAP_NEGATIVE_X, '03negx.jpg'],
                    [gl.TEXTURE_CUBE_MAP_POSITIVE_Y, '03posy.jpg'],
                    [gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, '03negy.jpg'],
                    [gl.TEXTURE_CUBE_MAP_POSITIVE_Z, '03posz.jpg'],
                    [gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, '03negz.jpg'],
                ];
                for (let [target, url] of faces) {
                    const level = 0; const internalFormat = gl.RGBA;
                    const width = 512; const height = 512;
                    const format = gl.RGBA; const type = gl.UNSIGNED_BYTE;
                    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
                    const image = new Image(); image.crossOrigin = 'anonymous';
                    image.onload = () => {
                        gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeMap);
                        gl.texImage2D(target, level, internalFormat, format, type, image);
                        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
                    };
                    image.src = `${imgpath}/${url}?width=512&height=512&format=auto`;
                }
                gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
                return cubeMap;
            }
            setup() {
                const gl = this.gl;
                this.cubeMap = this.createCubeMap();
                this.vs = gl.createShader(gl.VERTEX_SHADER);
                this.fs = gl.createShader(gl.FRAGMENT_SHADER);
                this.compile(this.vs, this.#vertexSrc);
                this.compile(this.fs, this.shaderSource);
                this.program = gl.createProgram();
                gl.attachShader(this.program, this.vs);
                gl.attachShader(this.program, this.fs);
                gl.linkProgram(this.program);
            }
            init() {
                const gl = this.gl; const program = this.program;
                this.buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.#vertices), gl.STATIC_DRAW);
                const position = gl.getAttribLocation(program, 'position');
                gl.enableVertexAttribArray(position);
                gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
                program.resolution = gl.getUniformLocation(program, 'resolution');
                program.time = gl.getUniformLocation(program, 'time');
                program.move = gl.getUniformLocation(program, 'move');
                program.touch = gl.getUniformLocation(program, 'touch');
                program.pointerCount = gl.getUniformLocation(program, 'pointerCount');
                program.pointers = gl.getUniformLocation(program, 'pointers');
                program.cubeMap = gl.getUniformLocation(program, 'cubeMap');
            }
            render(now = 0) {
                const gl = this.gl; const program = this.program; const canvas = this.canvas;
                if (!program) return;
                gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
                gl.useProgram(program);
                gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
                gl.uniform2f(program.resolution, canvas.width, canvas.height);
                gl.uniform1f(program.time, now * 1e-3);
                gl.uniform2f(program.move, ...this.mouseMove);
                gl.uniform2f(program.touch, ...this.mouseCoords);
                gl.uniform1i(program.pointerCount, this.nbrOfPointers);
                gl.uniform2fv(program.pointers, this.pointerCoords);
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.cubeMap);
                gl.uniform1i(program.cubeMap, 0);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            }
        }

        class PointerHandler {
            constructor(element, scale) {
                this.scale = scale; this.active = false;
                this.pointers = new Map(); this.lastCoords = [0, 0]; this.moves = [0, 0];
                const map = (el, s, x, y) => [x * s, el.height - y * s];
                
                element.addEventListener('pointerdown', (e) => {
                    this.active = true;
                    this.pointers.set(e.pointerId, map(element, this.scale, e.clientX, e.clientY));
                });
                
                element.addEventListener('pointerup', (e) => {
                    if (this.count === 1) this.lastCoords = this.first;
                    this.pointers.delete(e.pointerId);
                    this.active = this.pointers.size > 0;
                });
                
                element.addEventListener('pointermove', (e) => {
                    if (!this.active) return; // SOLUCIÓN: Solo actualiza posición cuando estás arrastrando (active = true)
                    this.lastCoords = [e.clientX, e.clientY];
                    this.pointers.set(e.pointerId, map(element, this.scale, e.clientX, e.clientY));
                    this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
                });
            }
            get count() { return this.pointers.size; }
            get coords() { return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0]; }
            get first() { return this.pointers.values().next().value || this.lastCoords; }
        }

        const canvas = document.getElementById('contact-canvas');
        if (!canvas) return;
        const container = document.getElementById('contacto');
        const renderer = new Renderer(canvas, window.devicePixelRatio);
        const pointers = new PointerHandler(canvas, window.devicePixelRatio);

        function resizeCanvas() {
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            renderer.updateScale(window.devicePixelRatio);
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        function loop(now) {
            renderer.updateMouse(pointers.first);
            renderer.updatePointerCount(pointers.count);
            renderer.updatePointerCoords(pointers.coords);
            renderer.render(now);
            requestAnimationFrame(loop);
        }
        loop(0);
    })();



/* ═══ bloque ═══ */


/* =========================================
   P14 — MOBILE DRAWER
   ========================================= */
(function() {
    var burger = document.getElementById('rs-nav-burger');
    var drawer = document.getElementById('rs-drawer');
    var overlay = document.getElementById('rs-drawer-overlay');
    var closeBtn = document.getElementById('rs-drawer-close');
    if (!burger || !drawer) return;

    function openDrawer() {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        burger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', function() {
        drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });
    if (overlay) overlay.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    // Close drawer on link click
    drawer.querySelectorAll('a[href]').forEach(function(a) {
        a.addEventListener('click', closeDrawer);
    });
})();

/* =========================================
   P18 — LANGUAGE TOGGLE (ES / EN)
   ========================================= */
(function() {
    var toggleBtn = document.getElementById('rs-lang-toggle');
    if (!toggleBtn) return;
    var currentLang = localStorage.getItem('rs-lang') || 'es';

    var translations = {
        es: {
            'lang-btn': 'ES',
            'page-title': 'Rubik Sota — Agencia Creativa',
            'meta-desc': 'Estrategia, creatividad, branding, vídeo, inteligencia artificial y sistemas digitales para marcas que quieren ser imposibles de ignorar.',
            'hero-tagline': 'Your digital Partner',
            'hero-cta': 'BRANDING, CREATIVIDAD Y ESTRATEGIA',
            'contact-overline': 'Contacto',
            'contact-title': 'Cuéntanos qué quieres construir.',
            'contact-sub': 'Si tienes una marca, una web, una campaña, un producto o una idea que necesita dirección, podemos ayudarte a convertirla en una experiencia que se entienda, se recuerde y venda.',
            'form-name': 'Nombre',
            'form-email': 'Email',
            'form-company': 'Empresa / proyecto',
            'form-type': 'Tipo de proyecto',
            'form-budget': 'Presupuesto aproximado',
            'form-msg': 'Mensaje',
            'cap-overline': 'Capacidades',
            'cap-title': 'Estrategia, creatividad y tecnología en la misma pieza.',
            'proc-overline': 'Cómo trabajamos',
            'proc-title': 'Cinco pasos. Una sola dirección.'
        },
        en: {
            'lang-btn': 'EN',
            'page-title': 'Rubik Sota — Creative Agency',
            'meta-desc': 'Strategy, creativity, branding, video, artificial intelligence and digital systems for brands that want to be impossible to ignore.',
            'hero-tagline': 'Your digital Partner',
            'hero-cta': 'BRANDING, CREATIVITY & STRATEGY',
            'contact-overline': 'Contact',
            'contact-title': 'Tell us what you want to build.',
            'contact-sub': 'If you have a brand, a website, a campaign, a product or an idea that needs direction, we can help you turn it into an experience that\'s understood, remembered, and sells.',
            'form-name': 'Name',
            'form-email': 'Email',
            'form-company': 'Company / project',
            'form-type': 'Project type',
            'form-budget': 'Approximate budget',
            'form-msg': 'Message',
            'cap-overline': 'Capabilities',
            'cap-title': 'Strategy, creativity and technology. All in one place.',
            'proc-overline': 'How we work',
            'proc-title': 'Five steps. One direction.'
        }
    };

    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem('rs-lang', lang);
        var t = translations[lang];

        // Toggle button label
        toggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
        toggleBtn.title = lang === 'es' ? 'Switch to English' : 'Cambiar a Español';

        // Update <html lang>
        document.documentElement.lang = lang;

        // Update all data-lang-XX elements
        document.querySelectorAll('[data-lang-' + lang + ']').forEach(function(el) {
            var txt = el.getAttribute('data-lang-' + lang);
            if (txt) el.innerHTML = txt;
        });

        // Update form labels
        var labelMap = {
            'rs-f-name': t['form-name'],
            'rs-f-email': t['form-email'],
            'rs-f-company': t['form-company'],
            'rs-f-type': t['form-type'],
            'rs-f-budget': t['form-budget'],
            'rs-f-msg': t['form-msg']
        };
        Object.keys(labelMap).forEach(function(id) {
            var lbl = document.querySelector('label[for="' + id + '"]');
            if (lbl) lbl.textContent = labelMap[id];
        });

        // Cap overline + title
        var capOver = document.querySelector('.cap-overline');
        if (capOver) capOver.textContent = t['cap-overline'];
        var capTitle = document.querySelector('.cap-title');
        if (capTitle) capTitle.innerHTML = lang === 'es'
            ? 'Estrategia, creatividad y tecnología <em>en la misma pieza</em>.'
            : 'Strategy, creativity and technology <em>in one place</em>.';

        // Process overline + title
        var procOver = document.querySelector('.proc-overline');
        if (procOver) procOver.textContent = t['proc-overline'];
        var procTitle = document.querySelector('.proc-title');
        if (procTitle) procTitle.textContent = t['proc-title'];

        // Contact section
        var cOver = document.querySelector('.rs-contact-overline');
        if (cOver) cOver.textContent = t['contact-overline'];
        var cSub = document.querySelector('.rs-contact-sub');
        if (cSub) cSub.textContent = t['contact-sub'];

        // Page title
        document.title = t['page-title'];
    }

    // Apply on load
    applyLang(currentLang);

    // Toggle on click
    toggleBtn.addEventListener('click', function() {
        applyLang(currentLang === 'es' ? 'en' : 'es');
    });
})();

/* =========================================
   CTA VIDEO: pre-selecciona "Vídeo / Motion" en el formulario
   ========================================= */
(function() {
    var btn = document.getElementById('cta-video-btn');
    if (!btn) return;
    btn.addEventListener('click', function() {
        var sel = document.getElementById('rs-f-type');
        if (sel) sel.value = 'Vídeo / Motion';
    });
})();

/* =========================================
   EXIT GATE — Interstitial al salir al proyecto
   ========================================= */
(function() {
    var gate = document.getElementById('rs-exit-gate');
    var continueBtn = document.getElementById('rs-exit-continue');
    var skipBtn = document.getElementById('rs-exit-skip');
    var exitTitle = document.getElementById('rs-exit-title');
    var exitPreview = document.getElementById('rs-exit-preview');
    var lbLink = document.getElementById('lightbox-link');

    if (!gate || !lbLink) return;

    function openGate(href, title, previewSrc) {
        if (exitTitle) exitTitle.textContent = title || '';
        if (exitPreview) {
            exitPreview.src = previewSrc || '';
            exitPreview.style.display = previewSrc ? 'block' : 'none';
        }
        if (continueBtn) continueBtn.href = href || '#';
        gate.classList.add('active');
        gate.setAttribute('aria-hidden', 'false');
    }
    function closeGate() {
        gate.classList.remove('active');
        gate.setAttribute('aria-hidden', 'true');
    }

    // Intercept lightbox link click
    lbLink.addEventListener('click', function(e) {
        var href = lbLink.href || lbLink.getAttribute('href');
        if (!href || href === '#' || href === window.location.href) return;
        e.preventDefault();
        var title = (document.getElementById('lightbox-title') || {}).textContent || '';
        var previewSrc = (document.getElementById('lightbox-img') || {}).src || '';
        openGate(href, title, previewSrc);
    });

    if (skipBtn) skipBtn.addEventListener('click', closeGate);
    gate.addEventListener('click', function(e) {
        if (e.target === gate) closeGate();
    });
    // Continue btn opens in new tab naturally (target="_blank")
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            setTimeout(closeGate, 200);
        });
    }
})();

/* =========================================
   WISHLIST — Guardar proyectos favoritos
   ========================================= */
(function() {
    var STORE_KEY = 'rs-wishlist-v1';

    function getList() {
        try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
        catch(e) { return []; }
    }
    function saveList(list) {
        try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); } catch(e) {}
    }
    function isInList(title) {
        return getList().some(function(p) { return p.title === title; });
    }
    function addToList(item) {
        var list = getList();
        if (!list.some(function(p) { return p.title === item.title; })) {
            list.push(item);
            saveList(list);
        }
    }
    function removeFromList(title) {
        var list = getList().filter(function(p) { return p.title !== title; });
        saveList(list);
    }

    function updateBadge() {
        var badge = document.getElementById('rs-wish-badge');
        if (!badge) return;
        var count = getList().length;
        badge.textContent = count;
        badge.classList.toggle('show', count > 0);
    }

    function updateWishlistSummary() {
        var summary = document.getElementById('rs-wishlist-summary');
        var summaryText = document.getElementById('rs-wishlist-summary-text');
        if (!summary || !summaryText) return;
        var list = getList();
        if (list.length === 0) {
            summary.style.display = 'none';
            return;
        }
        summary.style.display = 'block';
        summaryText.textContent = list.map(function(p) { return p.title; }).join(' · ');
        // Pre-fill textarea if empty
        var msg = document.getElementById('rs-f-msg');
        if (msg && !msg.value.trim()) {
            msg.value = 'Me interesan proyectos similares a: ' + list.map(function(p) { return p.title; }).join(', ') + '. ';
        }
    }

    function updateLbWishBtn(title) {
        var btn = document.getElementById('lb-wish-btn');
        if (!btn) return;
        var saved = isInList(title);
        btn.classList.toggle('saved', saved);
        btn.querySelector('span').textContent = saved ? 'Guardado ✓' : 'Guardar proyecto';
    }

    // Lightbox wish button
    var lbWishBtn = document.getElementById('lb-wish-btn');
    if (lbWishBtn) {
        lbWishBtn.addEventListener('click', function() {
            var titleEl = document.getElementById('lightbox-title');
            var sectorEl = document.getElementById('lightbox-sector');
            var title = (titleEl || {}).textContent || '';
            if (!title) return;
            if (isInList(title)) {
                removeFromList(title);
            } else {
                addToList({ title: title, sector: (sectorEl || {}).textContent || '' });
            }
            updateLbWishBtn(title);
            updateBadge();
        });
    }

    // Observer: sync wish button state when lightbox title changes
    var lbTitle = document.getElementById('lightbox-title');
    if (lbTitle) {
        var mo = new MutationObserver(function() {
            updateLbWishBtn(lbTitle.textContent);
        });
        mo.observe(lbTitle, { childList: true, characterData: true, subtree: true });
    }

    // When user scrolls to contact section, show wishlist summary
    var contactSection = document.getElementById('contacto');
    if (contactSection && 'IntersectionObserver' in window) {
        new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) updateWishlistSummary();
        }, { threshold: 0.1 }).observe(contactSection);
    }

    // Init badge on load
    updateBadge();
})();


/* ═════════ FIX/AUDITORIA — añadidos ═════════ */
(function(){
var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
/* GSAP off con movimiento reducido (WCAG 2.3.3) */
if (RM && window.gsap){ try{
  gsap.globalTimeline.timeScale(1000);
  if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(function(t){t.disable(false)});
}catch(e){} }
/* Vídeos: cargar y reproducir solo en viewport */
var vids = document.querySelectorAll('video.rs-lazy-video');
function arm(v){ if(!v.src && v.dataset.src){ v.src=v.dataset.src; } }
if ('IntersectionObserver' in window){
  var io = new IntersectionObserver(function(es){es.forEach(function(e){
    var v=e.target;
    if (e.isIntersecting){ arm(v); if(!RM){ var p=v.play(); if(p&&p.catch)p.catch(function(){}); } }
    else v.pause();
  })},{rootMargin:'200px 0px'});
  vids.forEach(function(v){ io.observe(v); });
} else vids.forEach(arm);
/* aria-expanded sincronizado con el drawer */
var burger=document.getElementById('rs-nav-burger'), drawer=document.getElementById('rs-drawer');
if (burger && drawer && 'MutationObserver' in window){
  var sync=function(){ var open = drawer.classList.contains('open')||drawer.classList.contains('active')||drawer.classList.contains('is-open')||drawer.getAttribute('aria-hidden')==='false';
    burger.setAttribute('aria-expanded', open?'true':'false'); };
  new MutationObserver(sync).observe(drawer,{attributes:true}); sync();
}
/* Sección activa en navegación */
var links=[].slice.call(document.querySelectorAll('nav a[href^="#"], .rs-drawer a[href^="#"]'))
  .filter(function(a){var id=a.getAttribute('href').slice(1);return id&&document.getElementById(id)});
if ('IntersectionObserver' in window && links.length){
  var map={}; links.forEach(function(a){var id=a.getAttribute('href').slice(1);(map[id]=map[id]||[]).push(a)});
  var io2=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){ links.forEach(function(a){a.classList.remove('rs-link-active')});
      (map[e.target.id]||[]).forEach(function(a){a.classList.add('rs-link-active')}); }
  })},{rootMargin:'-45% 0px -45% 0px'});
  Object.keys(map).forEach(function(id){ io2.observe(document.getElementById(id)); });
}
/* Feedback de envío (envuelve fetch: no duplica el submit existente) */
var form=document.getElementById('rs-brief-form');
if (form && window.fetch){
  var btn=form.querySelector('button[type="submit"]')||form.querySelector('button');
  var st=document.createElement('p'); st.className='rs-form-status'; st.setAttribute('role','status'); st.setAttribute('aria-live','polite'); form.appendChild(st);
  var of=window.fetch.bind(window);
  window.fetch=function(u,o){
    var is = typeof u==='string' && u.indexOf('web3forms.com')>-1;
    if (is){ if(btn)btn.disabled=true; st.textContent='Enviando…'; }
    var p = of(u,o);
    if (is){ p.then(function(r){ st.textContent = r.ok ? 'Enviado. Gracias — te respondemos en breve.' : 'Error al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.'; })
              .catch(function(){ st.textContent='Sin conexión. Inténtalo de nuevo.'; })
              .finally(function(){ if(btn)btn.disabled=false; }); }
    return p;
  };
}
})();
