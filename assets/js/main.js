  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .service-row, .stat-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      ring.style.width = '54px';
      ring.style.height = '54px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      ring.style.width = '36px';
      ring.style.height = '36px';
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });

  function showContactPage() {
    document.getElementById('contact-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideContactPage() {
    document.getElementById('contact-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleService(row) {
    const id = row.getAttribute('data-id');
    const dropdown = document.getElementById(id);
    const isOpen = row.classList.contains('open');
    document.querySelectorAll('.service-expandable.open').forEach(r => {
      r.classList.remove('open');
      document.getElementById(r.getAttribute('data-id')).classList.remove('open');
    });
    if (!isOpen) {
      row.classList.add('open');
      dropdown.classList.add('open');
    }
  }

  function showLegal(type) {
    document.getElementById('legal-overlay').classList.add('active');
    document.getElementById('legal-privacy').style.display = type === 'privacy' ? 'block' : 'none';
    document.getElementById('legal-terms').style.display = type === 'terms' ? 'block' : 'none';
    document.getElementById('legal-title').textContent = type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions';
    document.getElementById('legal-overlay').scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function hideLegal() {
    document.getElementById('legal-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  window.addEventListener('load', function() {
    // Bind all close buttons directly via JS
    var contactClose = document.querySelector('#contact-overlay .cp-close-btn');
    if (contactClose) contactClose.addEventListener('click', function(e) { e.preventDefault(); hideContactPage(); });

    var legalClose = document.querySelector('#legal-overlay .legal-close');
    if (legalClose) legalClose.addEventListener('click', function(e) { e.preventDefault(); hideLegal(); });

    // Close overlays on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { hideContactPage(); hideLegal(); }
    });
  });

