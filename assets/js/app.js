/**
 * Ashabul Yeamin Musfir - Portfolio Application Controller
 * Modeled after and enhanced from monmoy.pages.dev
 * Handles theme toggling, SPA page routing, modals, and dynamic rendering.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme
  initTheme();

  // 2. Render Dynamic Components
  renderSidebar();
  renderHero();
  renderSkills();
  renderEducation();
  renderAwards();
  renderCertifications();
  renderContactBanner();
  renderCvModal();

  // 3. Initialize Interactive Features
  initNavigation();
  initSidebarToggle();
  initModals();
});

/**
 * Theme Management (Matches Monmoy's .lightmode class system)
 */
function initTheme() {
  const savedTheme = localStorage.getItem("musfir_theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("lightmode");
  } else {
    document.body.classList.remove("lightmode");
  }

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("lightmode");
      const isLight = document.body.classList.contains("lightmode");
      localStorage.setItem("musfir_theme", isLight ? "light" : "dark");

      // Trigger subtle rotate icon animation
      toggleBtn.classList.toggle("rotate-icon");
    });
  }
}

/**
 * Render Sidebar Profile & Contacts
 */
function renderSidebar() {
  const p = portfolioData.personal;
  const avatarBox = document.getElementById("avatar-box-trigger");
  if (avatarBox) {
    avatarBox.innerHTML = `<img src="${p.avatar}" alt="${p.name}" width="80" id="avatar-img-el" />`;
  }

  const infoContent = document.getElementById("sidebar-info-content");
  if (infoContent) {
    infoContent.innerHTML = `
      <h1 class="name" title="${p.name}">${p.name}</h1>
      <p class="title">${p.role}</p>
    `;
  }

  const contactsList = document.getElementById("sidebar-contacts-list");
  if (contactsList) {
    contactsList.innerHTML = `
      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="location-outline"></ion-icon>
        </div>
        <div class="contact-info">
          <p class="contact-title">Location</p>
          <address>${p.location}</address>
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
        </div>
        <div class="contact-info">
          <p class="contact-title">Email</p>
          <a href="mailto:${p.email}" class="contact-link hov-yellow">${p.email}</a>
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="phone-portrait-outline"></ion-icon>
        </div>
        <div class="contact-info">
          <p class="contact-title">Phone</p>
          <a href="tel:${p.phone.replace(/\s+/g, '')}" class="contact-link hov-yellow">${p.phone}</a>
        </div>
      </li>
    `;
  }

  const socialList = document.getElementById("sidebar-social-list");
  if (socialList) {
    socialList.innerHTML = p.socials.map(s => `
      <li class="social-item">
        <a href="${s.href}" target="_blank" rel="noreferrer" class="social-link" title="${s.title || s.name}">
          ${s.svg}
        </a>
      </li>
    `).join("");
  }
}

/**
 * Sidebar Mobile Dropdown Toggle
 */
function initSidebarToggle() {
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
}

/**
 * Render Hero Section (Matching Monmoy's Hero Headline with em gradient text and shiny button)
 */
function renderHero() {
  const p = portfolioData.personal;
  const heroCopy = document.getElementById("hero-copy-container");
  if (!heroCopy) return;

  heroCopy.innerHTML = `
    <h1 class="hero-title">
      ${p.hero.headlinePrefix} <em>${p.hero.headlineHighlight}</em>
    </h1>
    <div class="hero-text">
      <p>${p.hero.bio}</p>
    </div>
    <div class="hero-actions">
      <button type="button" class="btn btn-secondary btn-shiny" data-open-cv>
        <span class="shiny-text">
          <span>View CV</span>
          <span class="btn-arrow">&#x2197;</span>
        </span>
      </button>
    </div>
  `;
}

/**
 * Render Skills & Technologies Grid
 */
function renderSkills() {
  const grids = document.querySelectorAll(".skills-grid");
  if (!grids || !grids.length) return;

  const content = portfolioData.skills.map(s => `
    <div class="skill-card">
      <h4 class="skill-card-title">${s.category}</h4>
      <ul class="skill-tag-list">
        ${s.items.map(item => `<li class="skill-tag-pill">${item}</li>`).join("")}
      </ul>
    </div>
  `).join("");

  grids.forEach(grid => {
    grid.innerHTML = content;
  });
}

/**
 * Render Education Timeline
 */
function renderEducation() {
  const list = document.getElementById("education-timeline-list");
  if (!list) return;

  list.innerHTML = portfolioData.education.map(item => `
    <li class="timeline-item">
      <div class="timeline-date">${item.date}</div>
      <h4 class="h4 timeline-item-title">${item.title}</h4>
      <p class="timeline-item-p"><span>${item.org}</span></p>
      ${item.bullets && item.bullets.length ? `
        <ul class="timeline-text">
          ${item.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      ` : ""}
    </li>
  `).join("");
}

/**
 * Render Awards and Recognition Timeline
 */
function renderAwards() {
  const list = document.getElementById("awards-timeline-list");
  if (!list) return;

  list.innerHTML = portfolioData.awards.map(item => `
    <li class="timeline-item">
      <div class="timeline-date">${item.date}</div>
      <h4 class="h4 timeline-item-title">${item.title}</h4>
      <p class="timeline-item-p"><span>${item.org}</span></p>
      ${item.bullets && item.bullets.length ? `
        <ul class="timeline-text">
          ${item.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      ` : ""}
    </li>
  `).join("");
}

/**
 * Render Certifications Timeline (Interactive with arrow)
 */
function renderCertifications() {
  const list = document.getElementById("certifications-timeline-list");
  if (!list) return;

  list.innerHTML = portfolioData.certifications.map(item => `
    <li class="timeline-item timeline-cert-item">
      <a href="${item.credUrl}" target="_blank" rel="noreferrer" class="timeline-cert-link" title="Verify Certificate">
        <div class="timeline-date">${item.date}</div>
        <h4 class="h4 timeline-item-title">${item.title}</h4>
        <p class="timeline-item-p timeline-cert-issuer">
          <span>${item.issuer}</span>
          <svg class="timeline-item-icon" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </p>
        ${item.description ? `
          <div class="timeline-text" style="border-top: 1px solid rgba(255,255,255,0.08); margin-top: 8px; padding-top: 8px;">
            ${item.description}
          </div>
        ` : ""}
      </a>
    </li>
  `).join("");
}

/**
 * Render Contact Banner Card
 */
function renderContactBanner() {
  const container = document.getElementById("contact-banner-container");
  if (!container) return;

  const c = portfolioData.contact;
  container.innerHTML = `
    <div class="contact-banner-card">
      <div class="contact-banner-tag">
        <span class="contact-tag-dot"></span>
        <span>${c.tag || "CONTACT"}</span>
      </div>
      <h3 class="contact-banner-title">${c.title}</h3>
      <p class="contact-banner-text">${c.description}</p>
      <div class="contact-banner-actions">
        <a href="mailto:${c.email}" class="btn contact-btn-email">
          <span>${c.email}</span>
          <span class="btn-arrow">&#x2197;</span>
        </a>
        <a href="${c.linkedinUrl}" target="_blank" rel="noreferrer" class="btn contact-btn-secondary">
          <span>LinkedIn</span>
          <span class="btn-arrow">&#x2197;</span>
        </a>
      </div>
    </div>
  `;
}

/**
 * SPA Tab Navigation (Home, Resume)
 */
function initNavigation() {
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("article[data-page]");

  function switchPage(targetPage) {
    pages.forEach(page => {
      if (page.getAttribute("data-page") === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute("data-nav-link") === targetPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Update URL hash without jumping abruptly
    if (history.pushState) {
      history.pushState(null, null, `#${targetPage}`);
    } else {
      location.hash = `#${targetPage}`;
    }

    // Scroll smoothly to top of main content
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-nav-link");
      switchPage(target);
    });
  });

  // Handle URL hash on initial load
  const hash = window.location.hash.replace("#", "");
  if (hash && ["home", "resume"].includes(hash)) {
    switchPage(hash);
  } else {
    switchPage("home");
  }

  // Handle browser back/forward buttons
  window.addEventListener("popstate", () => {
    const currentHash = window.location.hash.replace("#", "") || "home";
    if (["home", "resume"].includes(currentHash)) {
      switchPage(currentHash);
    }
  });
}

/**
 * Modals (Profile Avatar Zoom Modal & CV Viewer Modal)
 */
function initModals() {
  const avatarModal = document.getElementById("avatar-modal");
  const avatarTrigger = document.getElementById("avatar-box-trigger");
  const cvModal = document.getElementById("cv-modal");

  // Avatar Modal Open
  if (avatarTrigger && avatarModal) {
    avatarTrigger.addEventListener("click", () => {
      avatarModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  // CV Modal Open
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-open-cv]")) {
      e.preventDefault();
      if (cvModal) {
        cvModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    }
  });

  // Close modals when clicking close button or overlay
  const closeButtons = document.querySelectorAll("[data-close-modal]");
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  const overlays = document.querySelectorAll(".overlay");
  overlays.forEach(overlay => {
    overlay.addEventListener("click", () => {
      closeAllModals();
    });
  });

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  function closeAllModals() {
    if (avatarModal) avatarModal.classList.remove("active");
    if (cvModal) cvModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * Populate CV Modal Content
 */
function renderCvModal() {
  const container = document.getElementById("cv-modal-body");
  if (!container) return;

  const p = portfolioData.personal;
  const edu = portfolioData.education[0];
  const award = portfolioData.awards[0];

  container.innerHTML = `
    <div class="cv-header">
      <div>
        <h3 class="cv-header-title">${p.name}</h3>
        <p class="cv-item-sub">${p.role} &bull; ${p.location}</p>
        <p class="cv-item-desc">${p.email} | ${p.phone}</p>
      </div>
      <div class="cv-header-actions">
        <button type="button" onclick="window.print()" class="btn btn-secondary" style="min-height: 38px; padding: 8px 18px; font-size: 13px;">
          Print / PDF
        </button>
      </div>
    </div>

    <div class="cv-body">
      <div class="cv-section">
        <h4 class="cv-section-title">Professional Summary</h4>
        <p class="cv-item-desc">${p.hero.bio}</p>
      </div>

      <div class="cv-section">
        <h4 class="cv-section-title">Education</h4>
        <div class="cv-item">
          <div class="cv-item-title">${edu.title}</div>
          <div class="cv-item-sub">${edu.org} (${edu.date})</div>
          <ul class="timeline-text" style="border: none; padding-top: 4px; margin-top: 4px;">
            ${edu.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="cv-section">
        <h4 class="cv-section-title">Technical Skills</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
          ${portfolioData.skills.map(s => `
            <div>
              <div style="font-weight: 600; color: var(--white-1); margin-bottom: 4px; font-size: 13px;">${s.category}:</div>
              <div class="cv-item-desc">${s.items.join(", ")}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="cv-section">
        <h4 class="cv-section-title">Honors &amp; Awards</h4>
        <div class="cv-item">
          <div class="cv-item-title">${award.title} (${award.date})</div>
          <div class="cv-item-desc">${award.description || award.bullets.join(" ")}</div>
        </div>
      </div>
    </div>
  `;
}