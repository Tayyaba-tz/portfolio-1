// Update project titles, summaries, tech tags, links, and image paths here.
const projects = [
  {
    title: 'Deenify', category: 'web', categoryLabel: 'Web Design',
    description: 'A mobile-first Islamic website with five focused pages: Home, About, Features, FAQs, and Contact.',
    stack: ['HTML5', 'CSS3', 'Responsive UI'], image: 'assets/projects/deenify.png',
    github: 'https://github.com/Tayyaba-tz', live: '#contact'
  },
  {
    title: 'FinTrack', category: 'desktop', categoryLabel: 'Desktop App',
    description: 'An investment dashboard with dynamic charts, custom tables, an Observer pattern, and a multi-currency profit/loss calculator.',
    stack: ['Java', 'Java Swing', 'Observer Pattern'], image: 'assets/projects/fintrack.png',
    github: 'https://github.com/Tayyaba-tz', live: '#contact'
  },
  {
    title: 'Pokemon Info Card', category: 'web', categoryLabel: 'Web Design',
    description: 'A Pokémon encyclopedia for 1,000+ entries, powered by PokeAPI, with generation filters, stat visuals, and pagination.',
    stack: ['JavaScript', 'PokeAPI', 'REST API'], image: 'assets/projects/pokemon.png',
    github: 'https://github.com/Tayyaba-tz', live: '#contact'
  },
  {
    title: 'Weather Dashboard', category: 'web', categoryLabel: 'Web Design',
    description: 'Live weather for major Pakistani cities with day/night themes, unit conversion, and hourly forecast refreshes.',
    stack: ['HTML5', 'CSS3', 'JavaScript'], image: 'assets/projects/weather.png',
    github: 'https://github.com/Tayyaba-tz', live: '#contact'
  },
  {
    title: 'Disaster Evacuation Planner', category: 'console', categoryLabel: 'Console-based',
    description: 'A C++ route engine using Dijkstra’s Algorithm, dynamic graphs, and a Segment Tree for hazard updates and fast rerouting.',
    stack: ['C++', 'Dijkstra', 'Segment Tree'], image: 'assets/projects/evacuation.jpeg',
    github: 'https://github.com/Tayyaba-tz', live: '#contact'
  },
  {
    title: 'Tomzora Image Gallery', category: 'web', categoryLabel: 'Web Design',
    description: 'A responsive, multi-theme gallery with live Unsplash search across 1,000+ photos and advanced filtering.',
    stack: ['Vanilla JavaScript', 'Unsplash API', 'CSS'], image: 'assets/projects/tomzora.png',
    github: 'https://github.com/Tayyaba-tz', live: '#contact'
  },
  {
    title: 'Hybrid Sorting Algorithm', category: 'desktop', categoryLabel: 'Desktop App',
    description: 'A Python desktop app visualizing five sorting algorithms, with generator-based animations and headless benchmarking.',
    stack: ['Python', 'CustomTkinter', 'Matplotlib'], image: 'assets/projects/hybrid-sorting.png',
    github: 'https://github.com/Tayyaba-tz', live: '#contact'
  }
];

const projectGrid = document.querySelector('#project-grid');
const projectCount = document.querySelector('.filter-button[data-filter="all"] span');
const githubProfile = 'https://github.com/Tayyaba-tz';

function createProjectCard(project, index) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.dataset.category = project.category;
  card.style.animationDelay = `${index * 35}ms`;
  const stack = project.stack.map((tech) => `<span>${tech}</span>`).join('');
  const safeTitle = project.title.replaceAll('"', '&quot;');
  card.innerHTML = `
    <div class="project-art">
      <img src="${project.image}" alt="${safeTitle} project preview" loading="lazy">
      <div class="project-overlay">
        <span class="project-category">${project.categoryLabel}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-techs">${stack}</div>
        <div class="project-links">
          <a href="${project.github || githubProfile}" target="_blank" rel="noreferrer">GitHub<span aria-hidden="true">↗</span></a>
          <a href="${project.live || '#contact'}" ${project.live && project.live.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>Live<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
    <div class="project-mobile-details">
      <span class="project-category">${project.categoryLabel}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-techs">${stack}</div>
      <div class="project-links">
        <a href="${project.github || githubProfile}" target="_blank" rel="noreferrer">GitHub<span aria-hidden="true">↗</span></a>
        <a href="${project.live || '#contact'}" ${project.live && project.live.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>Live<span aria-hidden="true">↗</span></a>
      </div>
    </div>`;
  return card;
}

if (projectGrid) {
  projects.forEach((project, index) => projectGrid.append(createProjectCard(project, index)));
  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      document.querySelectorAll('.filter-button').forEach((filterButton) => {
        const isSelected = filterButton === button;
        filterButton.classList.toggle('is-selected', isSelected);
        filterButton.setAttribute('aria-pressed', String(isSelected));
      });
      let visibleCount = 0;
      projectGrid.querySelectorAll('.project-card').forEach((card) => {
        const isVisible = selected === 'all' || card.dataset.category === selected;
        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });
      if (projectCount) projectCount.textContent = String(visibleCount).padStart(2, '0');
    });
  });
}

const profileImage = document.querySelector('#profile-image');
if (profileImage) {
  const showProfileFallback = () => {
    if (profileImage.dataset.fallbackLoaded) return;
    profileImage.dataset.fallbackLoaded = 'true';
    profileImage.src = profileImage.dataset.fallback;
  };
  profileImage.addEventListener('error', showProfileFallback);
  if (profileImage.complete && profileImage.naturalWidth === 0) showProfileFallback();
}

const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const navLinks = [...document.querySelectorAll('.nav-link')];
function closeMenu() {
  if (!menuToggle || !primaryNav) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
  primaryNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}
if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(willOpen));
    menuToggle.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
    primaryNav.classList.toggle('is-open', willOpen);
    document.body.classList.toggle('menu-open', willOpen);
  });
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', (event) => {
    if (primaryNav.classList.contains('is-open') && !primaryNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.13, rootMargin: '0px 0px -35px 0px' });
  document.querySelectorAll('.reveal, .skill-group').forEach((element) => revealObserver.observe(element));

  const statsBand = document.querySelector('#stats');
  let countersStarted = false;
  const statsObserver = new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting) || countersStarted) return;
    countersStarted = true;
    document.querySelectorAll('[data-count]').forEach((counter) => {
      const target = Number(counter.dataset.count);
      const duration = 950;
      const start = performance.now();
      const frame = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        counter.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    });
    observer.disconnect();
  }, { threshold: 0.35 });
  if (statsBand) statsObserver.observe(statsBand);

  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const currentSection = visible.target.id === 'stats' ? 'home' : visible.target.id;
      const active = link.hash === `#${currentSection}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-22% 0px -60% 0px', threshold: [0, .15, .4] });
  sections.forEach((section) => navObserver.observe(section));
} else {
  document.querySelectorAll('.reveal, .skill-group').forEach((element) => element.classList.add('is-visible'));
  document.querySelectorAll('[data-count]').forEach((counter) => { counter.textContent = counter.dataset.count; });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());
