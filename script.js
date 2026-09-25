/**
 * Open Publisher V5 - Apple-Standard Interactive Logic
 * Segmented OS Switcher (All Packages as Prominent Buttons), 72 Client Features Catalog Filter, & Ribbon Tour
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. OS Download Panel Data & Dynamic Multi-Button Renderer (Local Icons)
       ========================================================================== */
    const osData = {
        win: {
            title: 'Open Publisher V5 for Windows',
            sub: 'Complete standalone desktop publishing suite for Windows 10 &amp; 11 (64-bit) &bull; Native .opub association &amp; 300 DPI print fidelity',
            badge: 'Official Release',
            arch: '64-bit amd64',
            buttons: [
                {
                    title: 'Download Windows Installer (.exe)',
                    desc: 'Standard setup &bull; Start Menu shortcuts, Explorer .opub associations',
                    url: 'https://github.com/rmellis/open-publisher/releases/download/5.1.4/openpublisher5_amd64-windows.exe',
                    isPrimary: true,
                    icon: '<img src="images/icon_windows_installer.png" alt="Windows Installer" class="btn-pkg-img">'
                },
                {
                    title: 'Download Standalone Portable (.exe)',
                    desc: 'Zero installation &bull; Run from USB or any directory without admin rights',
                    url: 'https://github.com/rmellis/open-publisher/releases/download/5.1.4/openpublisher5_amd64-windows-portable.exe',
                    isPrimary: false,
                    icon: '<img src="images/icon_windows_portable.png" alt="Windows Portable" class="btn-pkg-img">'
                }
            ],
            notesHtml: `
                <div class="note-box">
                    <strong>Windows Integration:</strong> Auto-discovers local Windows fonts from the registry, supports Always-on-Top pushpin, and DWM window shadow styling.
                </div>
            `
        },
        mac: {
            title: 'Open Publisher V5 for macOS',
            sub: 'Complete standalone desktop publishing suite for macOS 10.15+ (Intel &amp; Apple Silicon) &bull; Native menu bar &amp; retina canvas',
            badge: 'Universal Binary',
            arch: 'x86_64 / Rosetta 2',
            buttons: [
                {
                    title: 'Download Disk Image (.dmg)',
                    desc: 'Drag-and-drop installer &bull; Native Top Menu Bar integration',
                    url: 'https://github.com/rmellis/open-publisher/releases/download/5.1.4/openpublisher5_amd64-macos.dmg',
                    isPrimary: true,
                    icon: '<img src="images/icon_macos_dmg.png" alt="macOS DMG" class="btn-pkg-img">'
                }
            ],
            notesHtml: `
                <div class="note-box">
                    <strong>Architecture &amp; Compatibility:</strong> Engineered for backwards compatibility back to macOS 10.15 Catalina and earlier. Runs smoothly on Intel Macs and Apple Silicon (M1/M2/M3/M4) via Rosetta 2 translation.
                </div>
            `
        },
        lin: {
            title: 'Open Publisher V5 for Linux',
            sub: 'Complete standalone desktop publishing suite for all modern Linux distros (GLIBC 2.28+) &bull; Wayland &amp; X11 native integration',
            badge: '5 Package Formats',
            arch: '64-bit amd64',
            buttons: [
                {
                    title: 'Download Portable (.AppImage)',
                    desc: 'Universal portable binary &bull; Runs on all modern Linux distributions',
                    url: 'https://github.com/rmellis/open-publisher/releases/download/5.1.4/openpublisher5_amd64-linux.AppImage',
                    isPrimary: true,
                    icon: '<img src="images/icon_linux_appimage.png" alt="Linux AppImage" class="btn-pkg-img">'
                },
                {
                    title: 'Download Debian / Ubuntu (.deb)',
                    desc: 'For Debian, Ubuntu, Linux Mint, Pop!_OS, Zorin OS',
                    url: 'https://github.com/rmellis/open-publisher/releases/download/5.1.4/openpublisher5_amd64-linux.deb',
                    isPrimary: false,
                    icon: '<img src="images/icon_linux_deb.png" alt="Debian DEB" class="btn-pkg-img">'
                },
                {
                    title: 'Download Red Hat / Fedora (.rpm)',
                    desc: 'For Fedora, RHEL, openSUSE, CentOS, Rocky Linux',
                    url: 'https://github.com/rmellis/open-publisher/releases/download/5.1.4/openpublisher5_amd64-linux.rpm',
                    isPrimary: false,
                    icon: '<img src="images/icon_linux_rpm.png" alt="Red Hat RPM" class="btn-pkg-img">'
                },
                {
                    title: 'Download Flatpak (.flatpak)',
                    desc: 'Sandboxed package &bull; Ideal for SteamOS, Arch, Silverblue',
                    url: 'https://github.com/rmellis/open-publisher/releases/download/5.1.4/openpublisher5_amd64-linux.flatpak',
                    isPrimary: false,
                    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2.06 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/></svg>'
                },
                {
                    title: 'Download Universal .RUN Installer',
                    desc: 'Self-extracting POSIX shell bundle with system desktop registration',
                    url: 'https://github.com/rmellis/open-publisher/releases/download/5.1.4/openpublisher5_amd64-linux.run',
                    isPrimary: false,
                    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 19V7H4V19H20M20 3C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20M13 13.5L8.5 9L9.9 7.6L14.4 12.1L13 13.5M16 17H11V15H16V17Z"/></svg>'
                }
            ],
            notesHtml: `
                <div class="note-box">
                    <strong>Linux Desktop Integration:</strong> Bundled with Noto Color Emoji font (prevents missing-glyph tofu boxes) and registers MIME type <code>application/x-openpublisher</code> in the XDG desktop database.
                </div>
            `
        },
        bsd: {
            title: 'Open Publisher V5 for FreeBSD',
            sub: 'Complete native desktop publishing package for FreeBSD 13, 14 &amp; 15 (amd64) &bull; 60 FPS vector canvas &amp; zero Linuxulator overhead',
            badge: 'Native Port',
            arch: 'amd64 native',
            buttons: [
                {
                    title: 'Download FreeBSD Package (.pkg)',
                    desc: 'Native FreeBSD Electron bridge &bull; 60 FPS vector canvas',
                    url: 'https://github.com/rmellis/open-publisher/releases/download/5.1.4/openpublisher5_amd64-freebsd.pkg',
                    isPrimary: true,
                    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>'
                }
            ],
            notesHtml: `
                <div class="note-box terminal-note">
                    <span class="note-title">Installation via terminal:</span>
                    <code class="cmd-pill">pkg install ./openpublisher5_amd64-freebsd.pkg</code>
                    <p class="sub-note">Tested on FreeBSD 15-CURRENT / 15; backward compatible with FreeBSD 14 and 13. Bypasses Linuxulator for native X11/Wayland vector rendering.</p>
                </div>
            `
        }
    };

    const detectPlatform = () => {
        const ua = navigator.userAgent || navigator.platform || '';
        const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '';

        if (/FreeBSD/i.test(ua) || /FreeBSD/i.test(platform)) {
            return 'bsd';
        }
        if (/Mac|iPhone|iPad|iPod/i.test(ua) || /Mac/i.test(platform)) {
            return 'mac';
        }
        if (/Linux|X11/i.test(ua) || /Linux/i.test(platform)) {
            return 'lin';
        }
        return 'win';
    };

    const panelTitle = document.getElementById('panel-title');
    const panelSub = document.getElementById('panel-sub');
    const panelBadge = document.getElementById('panel-badge');
    const panelArch = document.getElementById('panel-arch');
    const panelButtonsArea = document.getElementById('panel-buttons-area');
    const panelNotesArea = document.getElementById('panel-notes-area');
    const segmentButtons = document.querySelectorAll('.segment-btn');

    const updateHeroDownloadPanel = (osKey) => {
        const data = osData[osKey] || osData.win;

        if (panelTitle) panelTitle.textContent = data.title;
        if (panelSub) panelSub.innerHTML = data.sub;
        if (panelBadge) panelBadge.textContent = data.badge;
        if (panelArch) panelArch.textContent = data.arch;

        // Render all buttons for this OS prominently with local icons
        if (panelButtonsArea) {
            let btnsHtml = '';
            data.buttons.forEach(btn => {
                const btnClass = btn.isPrimary ? 'btn-panel-primary' : 'btn-panel-option';
                btnsHtml += `
                    <a href="${btn.url}" class="${btnClass}">
                        <div class="btn-icon-wrap">${btn.icon}</div>
                        <div class="btn-text-wrap">
                            <span class="btn-main-title">${btn.title}</span>
                            <span class="btn-sub-label">${btn.desc}</span>
                        </div>
                    </a>
                `;
            });
            panelButtonsArea.innerHTML = btnsHtml;
        }

        if (panelNotesArea) {
            panelNotesArea.innerHTML = data.notesHtml || '';
        }

        segmentButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-os') === osKey;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    };

    segmentButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const osKey = btn.getAttribute('data-os');
            updateHeroDownloadPanel(osKey);
        });
    });

    // Auto-detect and set initial platform
    const userOS = detectPlatform();
    updateHeroDownloadPanel(userOS);

    /* ==========================================================================
       2. Showcase Window Viewport Switcher (All 7 Ribbon Tabs + Overview)
       ========================================================================== */
    const showcaseData = {
        overview: {
            title: 'Open Publisher V5 (Desktop_Window.opub)',
            dpi: 'Hardware Accelerated',
            unit: 'Full Workspace',
            img: 'images/hero_window_mockup.png',
            tagIcon: '🖥️',
            tagTitle: 'Open Publisher V5 Desktop Workspace',
            tagDesc: 'Familiar, distraction-free publishing environment with responsive vector canvas, ribbon toolbars, and multi-monitor support.'
        },
        home: {
            title: 'Open Publisher V5 (Home_Ribbon.opub)',
            dpi: 'Vector Text Engine',
            unit: 'Contextual Formatting',
            img: 'images/tab_home_editing_ribbon.png',
            tagIcon: '✏️',
            tagTitle: 'Core Editing & Unified Clipboard',
            tagDesc: 'Full typography controls, font discovery from system registry, marquee multiselect, and 100% clipboard parity.'
        },
        insert: {
            title: 'Open Publisher V5 (Insert_Elements.opub)',
            dpi: 'Vector Shapes',
            unit: 'Smart Connectors',
            img: 'images/tab_insert_elements.png',
            tagIcon: '🧩',
            tagTitle: 'Rich Element Insertion',
            tagDesc: 'Vector shapes, callouts, text frames, tables, QR codes, and dynamic smart connectors.'
        },
        wordart: {
            title: 'Open Publisher V5 (WordArt_Gallery.opub)',
            dpi: '200 Typography Presets',
            unit: 'SVG Bezier Deformation',
            img: 'images/tab_wordart_gallery.png',
            tagIcon: '🎨',
            tagTitle: 'WordArt Headline Gallery',
            tagDesc: 'Instant access to 200 pre-styled headline graphical effects with full arch, wave, slant, and 3D gradient customization.'
        },
        picture: {
            title: 'Open Publisher V5 (Picture_Tools.opub)',
            dpi: 'Lossless Resampling',
            unit: 'Aspect Ratio Lock',
            img: 'images/tab_picture_tools_clipart.png',
            tagIcon: '🖼️',
            tagTitle: 'Contextual Picture Tools',
            tagDesc: 'Non-destructive image cropping, brightness/contrast adjustments, border styling, and drag past edge mirroring.'
        },
        pagedesign: {
            title: 'Open Publisher V5 (Page_Setup.opub)',
            dpi: '300 DPI Zero-Spillage',
            unit: 'Units: Centimeters (cm)',
            img: 'images/tab_page_design_dimensions.png',
            tagIcon: '📐',
            tagTitle: 'Physical Measurement Subsystem & 300 DPI Rulers',
            tagDesc: 'Real-world Centimeters, Millimeters, and Inches with mathematical elimination of multi-sheet slicing and blank trailing pages.'
        },
        templates: {
            title: 'Open Publisher V5 (New_Document_Wizard.opub)',
            dpi: 'Ready-to-Print Layouts',
            unit: 'Multi-Page Grid',
            img: 'images/tab_templates_wizard.png',
            tagIcon: '📄',
            tagTitle: 'Document Wizard & Multi-Page Layouts',
            tagDesc: 'Rapidly launch newsletters, trifold brochures, flyers, business cards, greeting cards, and multi-page booklets.'
        },
        dashboard: {
            title: 'Open Publisher V5 (The_Dashboard.opub)',
            dpi: '250 Premium Templates',
            unit: '95% Draggable Window',
            img: 'images/tab_the_dashboard.png',
            tagIcon: '🚀',
            tagTitle: 'The Startup Dashboard & Template Library',
            tagDesc: 'Instant startup access to 250 premium templates across 9 categories, 12 featured flagship layouts, page size badges (A4, Letter, Square), draggable spatial context, and Skip / Open Editor blank canvas creation.'
        },
        safety: {
            title: 'Open Publisher V5 (AppData_Safety.opub)',
            dpi: '4-Step Atomic Pipeline',
            unit: '50 Shadow Snapshots',
            img: 'images/tab_file_safety_backups.png',
            tagIcon: '🛡️',
            tagTitle: '4-Step Atomic Saves & AppData Recovery Manager',
            tagDesc: 'Writes to temporary storage, verifies byte integrity, atomically replaces destination, and silently archives historical snapshots.'
        }
    };

    const showcaseTabs = document.querySelectorAll('.showcase-tab');
    const showcaseImg = document.getElementById('showcaseImg');
    const showcaseTitle = document.getElementById('showcaseWindowTitle');
    const showcaseDpi = document.getElementById('showcaseDpiBadge');
    const showcaseUnit = document.getElementById('showcaseUnitBadge');
    const showcaseTag = document.getElementById('showcaseTag');
    const showcaseTagTitle = document.getElementById('showcaseTagTitle');
    const showcaseTagDesc = document.getElementById('showcaseTagDesc');

    showcaseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const viewKey = tab.getAttribute('data-view');
            const data = showcaseData[viewKey];
            if (!data) return;

            showcaseTabs.forEach(t => t.classList.toggle('active', t === tab));

            if (showcaseImg) {
                showcaseImg.style.opacity = '0.3';
                setTimeout(() => {
                    showcaseImg.src = data.img;
                    showcaseImg.style.opacity = '1';
                }, 150);
            }

            if (showcaseTitle) showcaseTitle.textContent = data.title;
            if (showcaseDpi) showcaseDpi.textContent = data.dpi;
            if (showcaseUnit) showcaseUnit.textContent = data.unit;
            if (showcaseTagTitle) showcaseTagTitle.textContent = data.tagTitle;
            if (showcaseTagDesc) showcaseTagDesc.textContent = data.tagDesc;
            if (showcaseTag) {
                const iconEl = showcaseTag.querySelector('.tag-icon');
                if (iconEl) iconEl.textContent = data.tagIcon;
            }
        });
    });

    /* ==========================================================================
       3. Real-Time 72 Client Features Catalog, Stream Autoscroll & Category Tabs
       ========================================================================== */
    const featureSearchInput = document.getElementById('featureSearchInput');
    const searchCounter = document.getElementById('searchCounter');
    const catPills = document.querySelectorAll('.cat-pill');
    const featureCards = document.querySelectorAll('.feature-item-card');
    const track = document.getElementById('featuresCatalogTrack');
    const streamPrevBtn = document.getElementById('streamPrevBtn');
    const streamNextBtn = document.getElementById('streamNextBtn');
    const streamPlayPauseBtn = document.getElementById('streamPlayPauseBtn');
    const streamPlayText = document.getElementById('streamPlayText');
    const streamPlayIcon = document.getElementById('streamPlayIcon');
    const carouselModeLabel = document.getElementById('carouselModeLabel');
    const viewModeStream = document.getElementById('viewModeStream');
    const viewModeGrid = document.getElementById('viewModeGrid');

    let currentCategory = 'all';
    let currentQuery = '';
    let isPaused = false;
    let isHovered = false;
    let isTouching = false;
    let isGridMode = false;
    let subpixelAccumulator = 0;
    const scrollSpeed = 0.6; // Subpixel speed per frame for gentle, readable movement

    const pauseSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
    const playSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';

    // Autoscroll Animation Loop
    const stepAutoscroll = () => {
        if (!isPaused && !isHovered && !isTouching && !isGridMode && track) {
            subpixelAccumulator += scrollSpeed;
            if (subpixelAccumulator >= 1) {
                const px = Math.floor(subpixelAccumulator);
                subpixelAccumulator -= px;
                track.scrollLeft += px;

                // When reaching the right edge, smoothly wrap back to start
                const maxScroll = track.scrollWidth - track.clientWidth;
                if (track.scrollLeft >= maxScroll - 2) {
                    track.scrollLeft = 0;
                }
            }
        }
        requestAnimationFrame(stepAutoscroll);
    };
    requestAnimationFrame(stepAutoscroll);

    // Hover & Touch listeners to pause autoscroll during inspection
    if (track) {
        track.addEventListener('mouseenter', () => { isHovered = true; });
        track.addEventListener('mouseleave', () => { isHovered = false; });
        track.addEventListener('touchstart', () => { isTouching = true; }, { passive: true });
        track.addEventListener('touchend', () => { isTouching = false; }, { passive: true });
    }

    // Play/Pause button
    if (streamPlayPauseBtn) {
        streamPlayPauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            if (isPaused) {
                if (streamPlayText) streamPlayText.textContent = 'Auto';
                if (streamPlayIcon) streamPlayIcon.innerHTML = playSvg;
                streamPlayPauseBtn.classList.add('paused');
                if (carouselModeLabel) carouselModeLabel.textContent = 'Stream Paused';
            } else {
                if (streamPlayText) streamPlayText.textContent = 'Pause';
                if (streamPlayIcon) streamPlayIcon.innerHTML = pauseSvg;
                streamPlayPauseBtn.classList.remove('paused');
                if (carouselModeLabel) carouselModeLabel.textContent = 'Auto-Scrolling Stream';
            }
        });
    }

    // Manual navigation buttons (Previous / Next)
    if (streamPrevBtn) {
        streamPrevBtn.addEventListener('click', () => {
            if (track) track.scrollBy({ left: -366, behavior: 'smooth' });
        });
    }
    if (streamNextBtn) {
        streamNextBtn.addEventListener('click', () => {
            if (track) track.scrollBy({ left: 366, behavior: 'smooth' });
        });
    }

    // Stream vs Grid view mode toggles
    if (viewModeStream && viewModeGrid) {
        viewModeStream.addEventListener('click', () => {
            isGridMode = false;
            if (track) track.classList.remove('mode-grid');
            viewModeStream.classList.add('active');
            viewModeGrid.classList.remove('active');
            if (carouselModeLabel) carouselModeLabel.textContent = isPaused ? 'Stream Paused' : 'Auto-Scrolling Stream';
        });

        viewModeGrid.addEventListener('click', () => {
            isGridMode = true;
            if (track) track.classList.add('mode-grid');
            viewModeGrid.classList.add('active');
            viewModeStream.classList.remove('active');
            if (carouselModeLabel) carouselModeLabel.textContent = 'Full Grid View (72 Features)';
        });
    }

    // Filter Features (Category + Query)
    const filterFeatures = () => {
        let visibleCount = 0;
        const total = featureCards.length;

        featureCards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
            const title = (card.querySelector('.feature-item-title')?.textContent || '').toLowerCase();

            const matchesCategory = (currentCategory === 'all' || cardCat === currentCategory);
            const matchesQuery = (currentQuery === '' || keywords.includes(currentQuery) || title.includes(currentQuery));

            if (matchesCategory && matchesQuery) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (searchCounter) {
            searchCounter.textContent = `${visibleCount} of ${total} Client Features`;
        }

        // Reset scroll position on filter so results start from beginning
        if (track) {
            track.scrollLeft = 0;
            subpixelAccumulator = 0;
        }
    };

    if (featureSearchInput) {
        featureSearchInput.addEventListener('input', (e) => {
            currentQuery = e.target.value.trim().toLowerCase();
            filterFeatures();
        });
    }

    catPills.forEach(pill => {
        pill.addEventListener('click', () => {
            catPills.forEach(p => p.classList.toggle('active', p === pill));
            currentCategory = pill.getAttribute('data-cat') || 'all';
            filterFeatures();
        });
    });

    /* ==========================================================================
       4. Keyboard Shortcuts Live Search
       ========================================================================== */
    const shortcutSearchInput = document.getElementById('shortcutSearchInput');
    const shortcutRows = document.querySelectorAll('#shortcutTable tbody tr');

    if (shortcutSearchInput) {
        shortcutSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            shortcutRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(query) ? '' : 'none';
            });
        });
    }

    /* ==========================================================================
       5. Back to Top Button
       ========================================================================== */
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
