// Update project titles, summaries, tech tags, links, and image paths here.
const projects = [
  {
    title: 'Deenify', category: 'web', categoryLabel: 'Web Design',
    description: 'A mobile-first Islamic website with five focused pages: Home, About, Features, FAQs, and Contact.',
    stack: ['HTML5', 'CSS3', 'Responsive UI'], image: 'assets/projects/deenify.png',
    github: 'https://github.com/Tayyaba-tz', live: 'https://deenify-tk.netlify.app/'
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
    github: 'https://github.com/Tayyaba-tz', live: 'https://pokemon-info-card.netlify.app/'
  },
  {
    title: 'Weather Dashboard', category: 'web', categoryLabel: 'Web Design',
    description: 'Live weather for major Pakistani cities with day/night themes, unit conversion, and hourly forecast refreshes.',
    stack: ['HTML5', 'CSS3', 'JavaScript'], image: 'assets/projects/weather.png',
    github: 'https://github.com/Tayyaba-tz', live: 'https://weather-dash-tz.netlify.app/'
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
    github: 'https://github.com/Tayyaba-tz', live: 'https://tomzora.netlify.app/'
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

  const makeText = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };
  const makeTechs = () => {
    const list = document.createElement('div');
    list.className = 'project-techs';
    project.stack.forEach((tech) => list.append(makeText('span', '', tech)));
    return list;
  };
  const makeLinks = () => {
    const links = document.createElement('div');
    links.className = 'project-links';
    const github = document.createElement('a');
    github.href = project.github || githubProfile;
    github.target = '_blank';
    github.rel = 'noopener noreferrer';
    github.append(document.createTextNode('GitHub'));
    github.append(makeText('span', '', '↗'));
    github.lastElementChild.setAttribute('aria-hidden', 'true');
    links.append(github);
    // Only advertise a live demo when it is actually deployed on Vercel or Netlify.
    let liveHost = '';
    try { liveHost = new URL(project.live).hostname.toLowerCase(); } catch { /* no deployed URL */ }
    const isDeployed = project.category === 'web' && /^https?:\/\//i.test(project.live || '') &&
      (liveHost === 'vercel.app' || liveHost.endsWith('.vercel.app') ||
       liveHost === 'netlify.app' || liveHost.endsWith('.netlify.app'));
    if (isDeployed) {
      const live = document.createElement('a');
      live.href = project.live;
      live.target = '_blank';
      live.rel = 'noopener noreferrer';
      live.append(document.createTextNode('Live'));
      live.append(makeText('span', '', '↗'));
      live.lastElementChild.setAttribute('aria-hidden', 'true');
      links.append(live);
    }
    return links;
  };
  const art = document.createElement('div');
  art.className = 'project-art';
  const image = document.createElement('img');
  image.src = project.image;
  image.alt = `${project.title} project preview`;
  image.loading = 'lazy';
  image.decoding = 'async';
  art.append(image);
  const overlay = document.createElement('div');
  overlay.className = 'project-overlay';
  overlay.append(makeText('span', 'project-category', project.categoryLabel));
  overlay.append(makeText('h3', '', project.title));
  overlay.append(makeText('p', '', project.description));
  overlay.append(makeTechs(), makeLinks());
  art.append(overlay);

  const details = document.createElement('div');
  details.className = 'project-mobile-details';
  details.append(makeText('span', 'project-category', project.categoryLabel));
  details.append(makeText('h3', '', project.title));
  details.append(makeText('p', '', project.description));
  details.append(makeTechs(), makeLinks());
  card.append(art, details);
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
    if (['skills', 'projects', 'contact'].includes(visible.target.id)) showAchievement(visible.target.id);
  }, { rootMargin: '-22% 0px -60% 0px', threshold: [0, .15, .4] });
  sections.forEach((section) => navObserver.observe(section));
} else {
  document.querySelectorAll('.reveal, .skill-group').forEach((element) => element.classList.add('is-visible'));
  document.querySelectorAll('[data-count]').forEach((counter) => { counter.textContent = counter.dataset.count; });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());

const achievementToast = document.querySelector('#achievement-toast');
const achievementTitle = document.querySelector('#achievement-title');
const achievementDismiss = document.querySelector('.achievement-dismiss');
const earnedAchievements = new Set();
let achievementTimeout;

function showAchievement(sectionId) {
  const rewards = {
    skills: 'Ability tree mapped',
    projects: 'Quest log discovered',
    contact: 'Next mission unlocked'
  };
  const reward = rewards[sectionId];
  if (!reward || !achievementToast || !achievementTitle || earnedAchievements.has(sectionId)) return;
  earnedAchievements.add(sectionId);
  achievementTitle.textContent = reward;
  achievementToast.classList.add('is-visible');
  window.clearTimeout(achievementTimeout);
  achievementTimeout = window.setTimeout(() => achievementToast.classList.remove('is-visible'), 3600);
}

if (achievementDismiss && achievementToast) {
  achievementDismiss.addEventListener('click', () => {
    window.clearTimeout(achievementTimeout);
    achievementToast.classList.remove('is-visible');
  });
}

const progressFill = document.querySelector('#arcade-progress-fill');
let progressFramePending = false;
function updateArcadeProgress() {
  if (!progressFill) return;
  const scrollableDistance = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(Math.max(window.scrollY / scrollableDistance, 0), 1);
  progressFill.style.width = `${progress * 100}%`;
}
window.addEventListener('scroll', () => {
  if (progressFramePending) return;
  progressFramePending = true;
  requestAnimationFrame(() => {
    updateArcadeProgress();
    progressFramePending = false;
  });
}, { passive: true });
window.addEventListener('resize', updateArcadeProgress);
updateArcadeProgress();

const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (projectGrid && finePointer && !reducedMotion) {
  projectGrid.querySelectorAll('.project-card').forEach((card) => {
    const resetTilt = () => {
      card.classList.remove('is-tilting');
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
    };
    card.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      const bounds = card.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      card.style.setProperty('--tilt-x', `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(x * 7).toFixed(2)}deg`);
      card.classList.add('is-tilting');
    });
    card.addEventListener('pointerleave', resetTilt);
    card.addEventListener('pointercancel', resetTilt);
  });
}
