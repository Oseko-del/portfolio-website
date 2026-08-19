// Mobile menu
function openMenu() { document.getElementById('mobileMenu').classList.add('open'); }
function closeMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

// Light/dark theme toggle
function applyThemeIcon() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  btn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}
function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.getAttribute('data-theme') === 'light';
  if (isLight) {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
  applyThemeIcon();
}
document.addEventListener('DOMContentLoaded', applyThemeIcon);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  
  if (menu.classList.contains('open') && 
      !menu.contains(e.target) && 
      !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// Contact form with Formspree
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('.btn-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      form.reset();
      const msg = document.getElementById('formSuccess');
msg.style.display = 'block';
setTimeout(() => { msg.style.display = 'none'; }, 4000);
      btn.textContent = 'Sent!';
    } else {
      btn.textContent = 'Error. Try again.';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = 'Error. Try again.';
    btn.disabled = false;
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--white)' : '';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 900) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });
  }
});