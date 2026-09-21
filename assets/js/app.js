/**
 * Ashabul Yeamin Musfir - Portfolio App Controller
 * Handles dynamic content rendering, theme toggling, modal interactions, and scrollspy.
 */

// SVG Icon Helpers for crisp rendering
const SVG_ICONS = {
  github: `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  linkedin: `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/></svg>`,
  facebook: `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>`,
  instagram: `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme
  initTheme();

  // 2. Render All Active Content Sections
  renderSidebar();
  renderHero();
  renderSkills();
  renderEducation();
  renderAwards();
  renderCertifications();
  renderContact();

  // 3. Initialize Interactive Features
  initModals();
  initNavigation();

  // 4. Render Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Theme Management (Dark / Light Mode)
 */
function initTheme() {
  const urlParams = new URLSearchParams(window.location.search);
  const themeParam = urlParams.get("theme");
  const savedTheme = themeParam || localStorage.getItem("monmoy_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("monmoy_theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const container = document.getElementById("theme-icon-container");
  if (!container) return;
  
  if (theme === "light") {
    container.innerHTML = `<i data-lucide="sun" class="w-4 h-4 text-amber-500"></i>`;
  } else {
    container.innerHTML = `<i data-lucide="moon" class="w-4 h-4 text-amber-400"></i>`;
  }
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Render Profile Sidebar
 */
function renderSidebar() {
  const p = portfolioData.personal;
  const container = document.getElementById("sidebar-content");
  if (!container) return;

  container.innerHTML = `
    <!-- Profile Card Header -->
    <div class="flex flex-col items-center text-center">
      <div class="relative w-28 h-28 sm:w-32 sm:h-32 mb-4">
        <img 
          src="${p.avatar}" 
          alt="${p.name}" 
          class="w-full h-full object-cover rounded-2xl border border-[var(--border-card)] shadow-md"
          onerror="this.src='https://ui-avatars.com/api/?name=Ashabul+Yeamin+Musfir&background=1c1e24&color=f5b742&size=128'"
        />
      </div>

      <h1 class="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
        ${p.name}
      </h1>

      <div class="mt-2 inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--border-card)]">
        ${p.role}
      </div>
    </div>

    <!-- Divider -->
    <div class="my-6 border-t border-[var(--border-card)]"></div>

    <!-- Contact Info List -->
    <div class="space-y-4 text-left">
      <!-- Location -->
      <a href="https://maps.google.com/?q=${encodeURIComponent(p.location)}" target="_blank" rel="noopener noreferrer" 
         class="flex items-center gap-3.5 p-2 rounded-xl transition-colors hover:bg-[var(--icon-bg)] group">
        <div class="info-icon-box group-hover:border-[var(--accent-amber)] transition-colors">
          <i data-lucide="map-pin" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="text-[10px] font-bold tracking-wider uppercase text-[var(--text-muted)]">Location</div>
          <div class="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">${p.location}</div>
        </div>
      </a>

      <!-- Email -->
      <a href="mailto:${p.email}" 
         class="flex items-center gap-3.5 p-2 rounded-xl transition-colors hover:bg-[var(--icon-bg)] group">
        <div class="info-icon-box group-hover:border-[var(--accent-amber)] transition-colors">
          <i data-lucide="mail" class="w-4 h-4"></i>
        </div>
        <div class="overflow-hidden">
          <div class="text-[10px] font-bold tracking-wider uppercase text-[var(--text-muted)]">Email</div>
          <div class="text-sm font-medium text-[var(--text-primary)] truncate group-hover:text-[var(--accent-amber)] transition-colors" title="${p.email}">
            ${p.email}
          </div>
        </div>
      </a>

      <!-- Phone -->
      <a href="tel:${p.phone.replace(/\s+/g, '')}" 
         class="flex items-center gap-3.5 p-2 rounded-xl transition-colors hover:bg-[var(--icon-bg)] group">
        <div class="info-icon-box group-hover:border-[var(--accent-amber)] transition-colors">
          <i data-lucide="phone" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="text-[10px] font-bold tracking-wider uppercase text-[var(--text-muted)]">Phone</div>
          <div class="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">${p.phone}</div>
        </div>
      </a>
    </div>

    <!-- Divider -->
    <div class="my-6 border-t border-[var(--border-card)]"></div>

    <!-- Social Links with Crisp SVGs -->
    <div class="flex items-center justify-center gap-3">
      ${p.socials.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-btn text-[var(--text-secondary)] hover:text-[var(--accent-amber)]" title="${s.name}" aria-label="${s.name}">
          ${SVG_ICONS[s.icon] || '<i data-lucide="globe" class="w-4 h-4"></i>'}
        </a>
      `).join('')}
    </div>
  `;
}

/**
 * Render Hero Section
 */
function renderHero() {
  const p = portfolioData.personal;
  const container = document.getElementById("hero-content");
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-6 pt-2 sm:pt-4">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.25]">
        <span class="hero-title-main block">${p.hero.headingPart1}</span>
        <span class="text-highlight block pb-1">${p.hero.headingHighlight}</span>
      </h1>

      <p class="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
        ${p.hero.bio}
      </p>

      <div class="pt-2 flex flex-wrap items-center gap-4">
        <button id="btn-view-cv" class="btn-glass px-6 py-2.5 inline-flex items-center gap-2 text-sm font-medium shadow-sm">
          <span>View CV</span>
          <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
        </button>

        <a href="#contact" class="px-5 py-2.5 rounded-full text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors inline-flex items-center gap-1.5">
          <span>Get in Touch</span>
          <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `;

  document.getElementById("btn-view-cv")?.addEventListener("click", () => {
    openCvModal();
  });
}

/**
 * Render Skills & Technologies
 */
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = portfolioData.skills.map(group => `
    <div class="bento-card p-6">
      <div class="flex items-center gap-2 mb-4">
        <span class="w-2 h-2 rounded-full bg-[var(--accent-amber)]"></span>
        <h3 class="text-base font-bold text-[var(--text-primary)]">
          ${group.category}
        </h3>
      </div>

      <div class="flex flex-wrap gap-2">
        ${group.items.map(skill => `
          <span class="skill-chip">
            ${skill}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Render Education Section
 */
function renderEducation() {
  const edu = portfolioData.education;
  const container = document.getElementById("education-content");
  if (!container) return;

  container.innerHTML = `
    <div class="bento-card p-6 sm:p-7 space-y-4">
      <div>
        <div class="text-xs sm:text-sm font-semibold text-[var(--accent-amber)] tracking-wide mb-1">
          ${edu.period}
        </div>
        <h3 class="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
          ${edu.degree}
        </h3>
        <div class="text-sm italic text-[var(--text-secondary)] mt-1">
          ${edu.institution}
        </div>
      </div>

      <!-- CGPA Pill -->
      <div class="pt-2">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-card)] text-sm font-semibold text-[var(--accent-amber)]">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500"></i>
          CGPA: ${edu.cgpa}
        </span>
      </div>

      <!-- Courses -->
      <div class="space-y-2 pt-3 border-t border-[var(--border-card)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
        <p>
          <strong class="text-[var(--text-primary)] font-medium">&bull; Fundamental Courses:</strong> 
          ${edu.fundamentalCourses.join(", ")}.
        </p>
        <p>
          <strong class="text-[var(--text-primary)] font-medium">&bull; Additional Courses:</strong> 
          ${edu.additionalCourses.join(", ")}.
        </p>
      </div>
    </div>
  `;
}

/**
 * Render Awards & Recognition
 */
function renderAwards() {
  const container = document.getElementById("awards-list");
  if (!container) return;

  container.innerHTML = portfolioData.awards.map(award => `
    <div class="bento-card p-6 sm:p-7">
      <div class="text-xs sm:text-sm font-semibold text-[var(--accent-amber)] tracking-wide mb-1">
        ${award.period}
      </div>
      <h3 class="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
        ${award.title}
      </h3>
      <div class="text-sm italic text-[var(--text-secondary)] mt-1 mb-3">
        ${award.institution}
      </div>
      <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
        ${award.description}
      </p>
    </div>
  `).join('');
}

/**
 * Render Certifications
 */
function renderCertifications() {
  const container = document.getElementById("certifications-list");
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(cert => `
    <div class="bento-card p-6 sm:p-7">
      ${cert.period ? `
        <div class="text-xs sm:text-sm font-semibold text-[var(--accent-amber)] tracking-wide mb-1">
          ${cert.period}
        </div>
      ` : ''}
      <h3 class="text-lg sm:text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
        <span>${cert.title}</span>
      </h3>
      <div class="text-sm italic text-[var(--text-secondary)] mt-1 mb-3">
        <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 hover:text-[var(--accent-amber)] transition-colors">
          <span>${cert.organization}</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
      <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
        ${cert.description.startsWith('•') ? cert.description : `&bull; ${cert.description}`}
      </p>
    </div>
  `).join('');
}

/**
 * Render Contact Section (Inspired by reference mockup)
 */
function renderContact() {
  const c = portfolioData.contact;
  const container = document.getElementById("contact-content");
  if (!container || !c) return;

  container.innerHTML = `
    <div class="bento-card p-7 sm:p-9 relative overflow-hidden">
      <!-- Tag -->
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2 h-2 rounded-full bg-[var(--accent-amber)]"></span>
        <span class="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">${c.tag}</span>
      </div>

      <!-- Headline -->
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 leading-tight">
        ${c.title}
      </h2>

      <!-- Description -->
      <p class="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mb-7 leading-relaxed">
        ${c.description}
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap items-center gap-3.5">
        <a href="mailto:${c.email}" class="btn-contact-white" title="${c.email}">
          <span class="truncate max-w-[260px] sm:max-w-none">${c.email}</span>
          <i data-lucide="arrow-up-right" class="w-4 h-4 flex-shrink-0"></i>
        </a>

        <a href="${c.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn-contact-dark" title="LinkedIn Profile">
          <span>LinkedIn</span>
          <i data-lucide="arrow-up-right" class="w-4 h-4 flex-shrink-0"></i>
        </a>
      </div>
    </div>
  `;
}

/**
 * Modal Handling (CV Viewer)
 */
function initModals() {
  const cvOverlay = document.getElementById("cv-modal");

  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  if (cvOverlay) {
    cvOverlay.addEventListener("click", (e) => {
      if (e.target === cvOverlay) {
        closeAllModals();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  document.body.style.overflow = "";
}

window.openCvModal = function() {
  const modal = document.getElementById("cv-modal");
  const body = document.getElementById("cv-modal-body");
  if (!modal || !body) return;

  const p = portfolioData.personal;
  const edu = portfolioData.education;

  body.innerHTML = `
    <div class="p-6 sm:p-8 space-y-6 text-left">
      <!-- CV Header -->
      <div class="border-b border-[var(--border-card)] pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">${p.name}</h2>
          <p class="text-base text-[var(--accent-amber)] font-medium">${p.role}</p>
          <div class="text-xs text-[var(--text-secondary)] mt-2 space-y-0.5">
            <div>📍 ${p.location} | ✉️ ${p.email} | 📞 ${p.phone}</div>
          </div>
        </div>
        <button onclick="window.print()" class="btn-glass px-5 py-2 inline-flex items-center gap-2 text-xs font-semibold">
          <i data-lucide="printer" class="w-4 h-4"></i>
          <span>Print / Save PDF</span>
        </button>
      </div>

      <!-- Bio / Summary -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--accent-amber)] mb-1.5">Executive Summary</h4>
        <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
          ${p.hero.bio}
        </p>
      </div>

      <!-- Education -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--accent-amber)] mb-2.5">Education</h4>
        <div>
          <div class="flex justify-between items-center text-sm font-bold text-[var(--text-primary)]">
            <span>${edu.degree}</span>
            <span class="text-xs font-semibold text-[var(--accent-amber)]">${edu.period}</span>
          </div>
          <div class="text-xs italic text-[var(--text-secondary)]">${edu.institution} — CGPA: ${edu.cgpa}</div>
          <p class="text-xs text-[var(--text-secondary)] mt-1.5">
            <strong>Key Courses:</strong> ${edu.fundamentalCourses.join(", ")}.
          </p>
        </div>
      </div>

      <!-- Technical Proficiencies -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--accent-amber)] mb-2">Technical Proficiencies</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
          ${portfolioData.skills.map(s => `
            <div class="bg-[var(--pill-bg)] p-2.5 rounded-lg border border-[var(--border-card)]">
              <span class="font-semibold text-[var(--text-primary)]">${s.category}:</span> ${s.items.join(", ")}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Honors -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--accent-amber)] mb-2">Honors & Awards</h4>
        <ul class="text-xs text-[var(--text-secondary)] space-y-1">
          ${portfolioData.awards.map(a => `
            <li>&bull; <strong>${a.title}</strong> (${a.period}) - ${a.institution}</li>
          `).join('')}
        </ul>
      </div>

      <!-- Certifications -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--accent-amber)] mb-2">Certifications</h4>
        <ul class="text-xs text-[var(--text-secondary)] space-y-1">
          ${portfolioData.certifications.map(c => `
            <li>&bull; <strong>${c.title}</strong> — ${c.organization}</li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
};

/**
 * Smooth Scroll & Active Nav Spy
 */
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}